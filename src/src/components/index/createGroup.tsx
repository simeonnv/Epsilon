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
} from "@/components/ui/textfield";
import { createSignal, onMount } from "solid-js";
import getUsername from "~/routes/lib/auth/getUsername";
import ImageUpload from "../ui/imageUpload";

export default function CreateGroup() {
    const [username, setUsername] = createSignal("");
    const [name, setName] = createSignal("");
    const [description, setDescription] = createSignal("... silly car :3 ...");
    const [icon, setIcon] = createSignal<File | null>(null); // Signal to store the image

    onMount(async () => {
        const resName = await getUsername();
        setUsername(resName);
        if (name() === "")
            setName(username() + "'s Server");
    });


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

                    <TextFieldRoot value={name()} onChange={setName} name="name" defaultValue={username() + "'s Server"}>
                        <TextFieldLabel class="text-primary">Server Name</TextFieldLabel>
                        <TextField class="text-foreground"/>
                    </TextFieldRoot>

                    <TextFieldRoot value={description()} onChange={setDescription} name="description" defaultValue="... silly car :3 ...">
                        <TextFieldLabel class="text-primary">Server Description</TextFieldLabel>
                        <TextField class="text-foreground"/>
                    </TextFieldRoot>

                </div>

                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>

            </DialogContent>
        </Dialog>
    );
}
