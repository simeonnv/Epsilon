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
import DeleteGroupReq from "~/routes/lib/group/DeleteGroup";

export default function DeleteGroup({ groupId, getGroups }: { groupId: string, getGroups: () => Promise<void> })
{
    const [isOpened, setIsOpened] = createSignal<boolean>(false);

    const deleteGp = async (id: string) => {
        console.log("real")
        await DeleteGroupReq(groupId)
        await getGroups()
    }


    return (
        <Dialog open={isOpened()} onOpenChange={(open) => {setIsOpened(!isOpened())}}>
            <DialogTrigger
                as={(props: DialogTriggerProps) => (
                    <Button variant="outline" class="h-16 w-16 rounded-full" {...props}>
                        <svg class="fill-primary" xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 -960 960 960" width="36px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                    </Button>
                )}
            />

            <DialogContent class="sm:max-w-[425px]">

                <DialogHeader>
                    <DialogTitle class="align-middle text-center text-red-600">Delete Group</DialogTitle>
                    <DialogDescription class="text-center text-red-600">
                        Are you sure you want to delete this group???
                    </DialogDescription>
                </DialogHeader>

                <div class="flex flex-row justify-center aling-center gap-4 py-4">

                    <Button onClick={() => {deleteGp(groupId); console.log("nz")}} class="hover:bg-red-800 bg-red-600 w-full">
                        sure
                    </Button>

                    <Button onClick={() => setIsOpened(false)} class="hover:bg-green-800 bg-green-600 w-full">
                        nah
                    </Button>

                </div>

            </DialogContent>
        </Dialog>
    )
}