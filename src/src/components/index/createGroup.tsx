import type { DialogTriggerProps } from "@kobalte/core/dialog";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	TextField,
	TextFieldLabel,
	TextFieldRoot,
    TextFieldErrorMessage,
} from "@/components/ui/textfield";
import { createEffect, createSignal, onMount } from "solid-js";
import getUsername from "~/routes/lib/auth/getUsername";
import ImageUpload from "../ui/imageUpload";
import createGroup from "~/routes/lib/group/CreateGroup";

export default function CreateGroup() {
    const [username, setUsername] = createSignal<string>("");
    const [name, setName] = createSignal<string>("");
    const [description, setDescription] = createSignal<string>("... silly car :3 ...");
    const [icon, setIcon] = createSignal<File | null>(null);
    const [validName, setValidName] = createSignal<boolean>(true);

    const create = async () => {
        if (validName() === false)
            return;
        const res = await createGroup(name(), description(), icon())
        console.log(res)


    }

    onMount(async () => {
        const resName = await getUsername();
        setUsername(resName);
        if (name() === "")
            setName(username() + "'s Server");
    });

    createEffect(async () => {
        console.log("I ", name())
        console.log("II ", description())
        console.log("III ", icon())

        console.log("icon", await icon()?.arrayBuffer())

        console.log("val", await validName())

        if (!(name().length >= 1 && name().length <= 25))
            setValidName(false);
        else
            setValidName(true);
    })

    return (
        <Dialog>
            <DialogTrigger
                as={(props: DialogTriggerProps) => (
                    <Button {...props}>
                        Create Group
                    </Button>
                )}
            />

            <DialogContent class="sm:max-w-[425px]">

                <DialogHeader>
                    <DialogTitle class="align-middle text-center">Create Group</DialogTitle>
                    <DialogDescription class="text-center">
                        Give your new server a personality with a name and an icon. You can always change it later.
                    </DialogDescription>
                </DialogHeader>

                <div class="grid gap-4 py-4">

                    <ImageUpload icon={icon} setIcon={setIcon}/>

                    <TextFieldRoot value={name()} onChange={setName} name="name" defaultValue={username() + "'s Server" } validationState={validName() ? "valid" : "invalid"}>
                        <TextFieldLabel class="!text-primary">Server Name</TextFieldLabel>
                        <TextField class="text-foreground"/>
                        <TextFieldErrorMessage>Incorrect name length</TextFieldErrorMessage>
                    </TextFieldRoot>

                    <TextFieldRoot value={description()} onChange={setDescription} name="description" defaultValue="... silly car :3 ..." >
                        <TextFieldLabel class="text-primary">Server Description</TextFieldLabel>
                        <TextField class="text-foreground"/>
                    </TextFieldRoot>

                </div>

                <DialogFooter>
                    <Button onClick={create} type="submit">Save changes</Button>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    );
}
