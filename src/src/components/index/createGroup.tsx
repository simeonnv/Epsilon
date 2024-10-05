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

export default function CreateGroup()
{
    return (
        <Dialog>
            <DialogTrigger
                as={(props: DialogTriggerProps) => (
                    <Button {...props}>
                        Edit Profile
                    </Button>
                )}
            />
            <DialogContent class="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle class="aling-middle text-center">Create Group</DialogTitle>
                    <DialogDescription class="text-center">
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div class="grid gap-4 py-4">
                    <TextFieldRoot class="grid grid-cols-3 items-center gap-4 md:grid-cols-4">
                        <TextFieldLabel class="text-right">Name</TextFieldLabel>
                        <TextField class="col-span-2 md:col-span-3" />
                    </TextFieldRoot>
                    <TextFieldRoot class="grid grid-cols-3 items-center gap-4 md:grid-cols-4">
                        <TextFieldLabel class="text-right">Username</TextFieldLabel>
                        <TextField class="col-span-2 md:col-span-3" />
                    </TextFieldRoot>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}