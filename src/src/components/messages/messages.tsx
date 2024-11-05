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
import { textChannels } from "~/routes/lib/types/textChannels";
import { voiceChannels } from "~/routes/lib/types/voiceChannels";

export default function Messages({ groupId, group, user }: { groupId: string, group: Accessor<group | undefined>, user: Accessor<accountsExtended | undefined> })
{

    const [isOpen, setIsOpen] = createSignal(true);
    const [nz, setNz] = createSignal(true);
    const [channel, setChannel] = createSignal<textChannels | undefined>(undefined);

    const bleh = () => {setNz(!nz())}

    createSignal(() => {
        console.log(channel())
    })

    return (

        <div class="flex gap-0 auto-cols-max max-h-screen h-screen">

            <Channels user={user} groupId={groupId} setSelectedChannel={setChannel} selectedChannel={channel}/>
            
            <Chat  isOpen={isOpen} setIsOpen={setIsOpen} groupId={groupId} selectedChannel={channel}/>

            <UserList isOpen={isOpen} setIsOpen={setIsOpen} groupId={groupId} group={group}/>
            

            
        </div>

    )
}