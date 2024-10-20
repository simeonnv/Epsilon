import { Accessor, createSignal, onMount } from "solid-js";
import Sidebar from "../sidebar";
import { Show } from "solid-js";
import { Button } from "../ui/button"
import Channels from "./channels";
import Chat from "./chat";
import { ImageRoot, Image, ImageFallback } from "../ui/image"
import UserList from "./userList";
import { Transition } from "solid-transition-group";
import getMembers from "~/routes/lib/messages/getMembers";
import { accounts, accountsExtended, accountsShortened } from "~/routes/lib/types/accounts";
import { group } from "~/routes/lib/types/group";
import getGroup from "~/routes/lib/messages/getGroup";

export default function Messages({ groupId, group, user }: { groupId: string, group: Accessor<group | undefined>, user: Accessor<accountsExtended | undefined> })
{

    const [isOpen, setIsOpen] = createSignal(true);
    const [nz, setNz] = createSignal(true);
    const bleh = () => {setNz(!nz())}

    return (

        <div class="flex gap-0 auto-cols-max max-h-screen h-screen">

            <Channels user={user} groupId={groupId}/>
            
            <Chat  isOpen={isOpen} setIsOpen={setIsOpen} groupId={groupId}/>

            <UserList isOpen={isOpen} setIsOpen={setIsOpen} groupId={groupId} group={group}/>
            

            
        </div>

    )
}