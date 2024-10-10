import Sidebar from "~/components/sidebar";
import { createSignal, onMount, Suspense } from "solid-js";
import { ImageRoot, ImageFallback, Image } from "@/components/ui/image";
import Messages from "~/components/messages/messages";
import { Show } from "solid-js";
import { Button } from "~/components/ui/button";
import { TextField, TextFieldRoot } from "~/components/ui/textfield";
import { redirect, useNavigate } from "@solidjs/router";
import CreateGroup from "~/components/index/createGroup";
import { StringRecordId } from "surrealdb";
import DeleteGroup from "~/components/index/deleteGroup";
import Loading from "~/components/ui/loading";
import { Skeleton } from "@/components/ui/skeleton";


export default function LoadingGroup() {
    return (
        <div class="flex align-middle p-10 transition ease-in-out delay-150 rounded-l-[40px] items-center justify-center gap-5">
            
            <Skeleton class="h-20 w-20 rounded-full" />

			<div class="space-y-2">
				<Skeleton class="h-4 w-72" />
				<Skeleton class="h-4 w-60" />
			</div>

            <Skeleton class="h-16 w-16 rounded-full" />
            
            <Skeleton class="h-16 w-16 rounded-full" />
            
        </div>
    )
}