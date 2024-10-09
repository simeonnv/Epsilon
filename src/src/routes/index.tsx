import Sidebar from "~/components/sidebar";
import { createSignal, onMount } from "solid-js";
import { ImageRoot, ImageFallback, Image } from "@/components/ui/image";
import Messages from "~/components/messages/messages";
import { Show } from "solid-js";
import { Button } from "~/components/ui/button";
import { TextField, TextFieldRoot } from "~/components/ui/textfield";
import { authToken } from "./lib/auth/sessionAuth";
import { redirect, useNavigate } from "@solidjs/router";
import { groupData, groupExtended } from "./lib/types/group";
import CreateGroup from "~/components/index/createGroup";
import GetGroups from "./lib/group/GetGroups";
import { base64ToFile } from "./lib/encryption/base64File";
import { StringRecordId } from "surrealdb";
import DeleteGroup from "~/components/index/deleteGroup";

// URL.createObjectURL(props.icon()!)

export default function Index() {

    const navigate = useNavigate();

    onMount(async () => {
        const res = await authToken();

        console.log("res: ", res)

        if (res === false)
            navigate("/login", { replace: true });

        await getGroups()
        
            
    });

    const [ui, setUi] = createSignal(1);
    const [searchQuery, setSearchQuery] = createSignal("");  // Create signal for search query
    const [groups, setGroups] = createSignal<groupExtended[] | undefined>(undefined);

    // let groups: groupData[] | undefined =
    // [
    //     { name: "WOG INTERNATIONAL", description: "silly geese bleh bleh bleh bleh" },
    //     { name: "Techies United", description: "Coding and Tech Talk" },
    //     { name: "Gaming Hub", description: "All about games!" },
    // ];

    const getGroups = async () => {
        const res = await GetGroups()
        console.log("GYAAAAAAT", res)
        setGroups(res)
    }

    const enterGroup = (id: string) => {
        navigate(`/dashboard/${id}`, { replace: true });
    }

    const filteredGroups = () => {
        console.log(searchQuery())

        if (groups() === undefined)
            return;

        return (groups() ?? []).filter(group =>
            group.name.toLowerCase().includes(searchQuery() !== undefined ? searchQuery().toLowerCase() : "")
        );
    };

    return (
        <main class="dark overflow-x-hidden max-h-screen hoverScroll bg-background">
            <div class="flex flex-row align-middle items-center min-h-screen w-full bg-background justify-center">
                <div class="flex flex-col align-middle items-center overflow-y-auto hover:hoverScroll">
                    <div class="hoverScroll gap-12 flex flex-col p-20">
                        <Show when={groups() != undefined} fallback={<div class="text-primary font-bold text-xl">You havent joined any groups yet</div>} keyed>
                            <div class="w-full flex justify-center mb-4">
                                <TextFieldRoot class="text-foreground" value={searchQuery()} onChange={setSearchQuery}>
                                    <TextField placeholder="search for group" />
                                </TextFieldRoot>
                            </div>

                            <div class="flex flex-col gap-12">
                                
                                    {filteredGroups()?.map(group => (
                                        <div id={group.id.id.toString()} class="flex align-middle p-10 border transition ease-in-out delay-150 rounded-l-[40px] items-center justify-center gap-5">
                                            <ImageRoot class="h-20 w-20">
                                                <Image src={group.icon == undefined || group.icon.base64 == undefined || group.icon.type == undefined ? "/public/favicon.ico" : URL.createObjectURL(base64ToFile(group.icon.base64, "default", group.icon.type))} />
                                                <ImageFallback>HN</ImageFallback>
                                            </ImageRoot>
                                            <div class="flex flex-col align-middle items-center w-72 text-center justify-center">
                                                <h1 class="text-primary font-black text-2xl">{group?.name}</h1>
                                                <p class="text-primary">{group?.description}</p>
                                            </div>
                                            
                                            <DeleteGroup groupId={group.id.id.toString()} getGroups={getGroups}/>

                                            <Button onClick={() => enterGroup(group.id.id.toString())} id={group.id.id.toString()} variant="outline" class="h-16 w-16 rounded-full">
                                                <svg class="fill-primary" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"/></svg>
                                            </Button>
                                        </div>
                                    ))}
                                

                            </div>
                        </Show>
                        <div class="flex gap-5 align-middle justify-center">
                            
                            <CreateGroup getGroups={getGroups}/>

                            
                            <Button>blehh</Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
