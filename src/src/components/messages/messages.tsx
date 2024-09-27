import { createSignal } from "solid-js";
import Sidebar from "../sidebar";
import { Show } from "solid-js";
import { Button } from "../ui/button"
import Channels from "./channels";
import Chat from "./chat";
import { ImageRoot, Image, ImageFallback } from "../ui/image"
import UserList from "./userList";
import { Transition } from "solid-transition-group";

export default function Messages(props: any)
{

    
    const toggleSidebar = () => props.setIsOpen(!props.isOpen());
    const [isOpen, setIsOpen] = createSignal(true);
    const [nz, setNz] = createSignal(true);
    const bleh = () => {setNz(!nz())}
    const [ui, setUi] = createSignal(1);


    return (

        <div class="flex gap-0 auto-cols-max">

            <Channels/>
            
            <Chat/>

            <UserList isOpen={isOpen} setIsOpen={setIsOpen}/>
            

            
        </div>

    )
}