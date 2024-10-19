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


export default function LoadingRow() {
    return (

        <div class="items-center flex gap-3 flex-row pt-2 transition ease-in-out delay-150">
            
            <Skeleton class=" h-8 w-8 px-4 rounded-full"></Skeleton>
            
            <Skeleton class=" h-6 w-full rounded-lg"></Skeleton>
            
        </div>


    )
}