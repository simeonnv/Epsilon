import { Button } from "../ui/button"
import { TextField, TextFieldRoot } from "../ui/textfield";
import { TextArea } from "../ui/textarea";
import { ToggleButton } from "../ui/toggle";
import { Setter, Accessor, Show, createSignal, onMount, createEffect } from 'solid-js';
import { textChannels } from "~/routes/lib/types/textChannels";
import LoadingRow from "../ui/loadingRow";
import { Skeleton } from "@kobalte/core/src/skeleton/skeleton-root.jsx";
import { getSessionJson } from "~/routes/lib/auth/sessionAuth";
import sendMessage from "~/routes/lib/messages/sendMessage";
import getMessages from "~/routes/lib/messages/getMessages";
import { messages } from '../../routes/lib/types/messages';

export default function Chat({ groupId, setIsOpen, isOpen, selectedChannel }:{ 
        groupId: string,
        setIsOpen: Setter<boolean>, 
        isOpen: Accessor<boolean>, 
        selectedChannel: Accessor<textChannels | undefined> 
    })
{

    const toggleSidebar = () => setIsOpen(!isOpen());
    const [text, setText] = createSignal<string>("");
    const [messages, setMessages] = createSignal<messages[] | undefined>(undefined);

    const onSubmit = async (e: SubmitEvent) => {
		e.preventDefault()
        console.log("ZAZAZADASDASDASASD")
        const id = selectedChannel()?.id
        if (id === undefined)
            return
        
        const res = sendMessage(text() , id.id.toString())
        console.log("send message ", res)
        
        const resres = await fetchMessages()
        console.log("REEASDADADA ", resres)
        
	};

    const fetchMessages = async () => {
        const channelId = selectedChannel()?.id.id.toString()
        if (!channelId)
            return
        const res = await getMessages(channelId)
        if (res)
            setMessages(res)
        return res
    }

    onMount(async () => {
        const res = await fetchMessages()
        console.log(res)
    })

    createEffect(async () => {
        if (!selectedChannel())
            return
        const res = await fetchMessages()
        console.log(res)
    })

    return(
        <div class="transition-all duration-300 ease-in-out h-screen max-h-screen justify-between flex flex-col">
                

                <div class="py-3 flex px-4 justify-between w-full text-primary text-md font-bold border-b-2 rounded-b-lg ">
                    <div class="flex flex-row justify-start align-middle">
                        <div class="flex items-center py-2 rounded group">
                            <svg xmlns="http://www.w3.org/2000/svg" class="fill-primary" height="18px" viewBox="0 -960 960 960" width="18px" fill="#e8eaed"><path d="m240-160 40-160H120l20-80h160l40-160H180l20-80h160l40-160h80l-40 160h160l40-160h80l-40 160h160l-20 80H660l-40 160h160l-20 80H600l-40 160h-80l40-160H360l-40 160h-80Zm140-240h160l40-160H420l-40 160Z" /></svg>                           
                            <p class="px-1">{selectedChannel()?.name}</p>
                        </div>
                    </div>
                    
                    <div class=" justify-end align-middle">
                        <div class="flex items-center border rounded-full group">
                            <Button variant="outline" onClick={toggleSidebar}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" height="12px" viewBox="0 -960 960 960" width="12px" fill="#e8eaed"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" /></svg>
                            </Button>
                        </div>                    
                    </div>
                    
                </div>

                <div class="text-white flex-grow justify-center align-middle">
                    
                    <h1 class="text-2xl font-bold">Dynamic Text</h1>
                    <p class=" flex justify-center align-middle flex-col">
                        bleh bleh bleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh blehbleh bleh
                        <img class="h-64 w-64" src="/alien.png"></img>
                    </p>
                    <div class=" flex justify-center align-middle flex-col w-full flex-grow">
                        {messages()?.map(message => (

                            <p>{message.text}</p>

                        ))}
                    </div>
                </div>


                <div class=" w-full py-1 max-h-60 justify-end align-end">
                    <div class="overflow-y-auto overflow-x-hidden">
                        <form onSubmit={onSubmit} class="flex flex-row">
                            <TextFieldRoot class="text-white w-full resize-none" onChange={setText}>
                                <TextArea 
                                    name="favorite-fruit"
                                    data-valid
                                    required
                                    submitOnEnter
                                    autoResize
                                    class="resize-none max-h-20 overflow-y-auto hoverScroll"  // Added max-height and overflow
                                    placeholder="Type your message here."
                                />
                            </TextFieldRoot>
                            
                            <div class=" justify-end align-middle">
                                <div class="flex items-center group h-full justify-center align-middle">
                                    <Button type="submit" variant="outline" class="h-full items-center justify-center align-middle">
                                        <svg class="-rotate-45" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>
                                    </Button>
                                </div>                    
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}