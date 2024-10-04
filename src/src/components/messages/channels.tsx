
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, } from "~/components/ui/tooltip";
import { Title } from "@solidjs/meta";
import { createSignal } from "solid-js";
import { ImageRoot, Image, ImageFallback } from "../ui/image"


export default function Channels(props: any) {
    return (
        <aside class="w-60 flex flex-col h-screen border-r bg-background rounded-br-3xl">
            
            <div class="flex flex-col h-full">
                <nav class="flex flex-col flex-grow px-2 py-5 overflow-y-auto hover:hoverScroll" style={{ direction: "rtl" }}>
                    
                    <div class="px-2 text-left text-white" style={{ direction: "ltr" }}>
                        
                        
                        <div class="pb-5">
                            <h3 class="pb-1 text-xs uppercase font-semibold text-primary">Text Channels</h3>
                            <div class="flex items-center py-2 rounded hover:bg-secondary group">
                                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#e8eaed">
                                    <path d="m240-160 40-160H120l20-80h160l40-160H180l20-80h160l40-160h80l-40 160h160l40-160h80l-40 160h160l-20 80H660l-40 160h160l-20 80H600l-40 160h-80l40-160H360l-40 160h-80Zm140-240h160l40-160H420l-40 160Z"/>
                                </svg>
                                <p>announcements</p>
                            </div>

                            <div class="flex items-center py-2 rounded hover:bg-secondary group">
                                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#e8eaed">
                                    <path d="m240-160 40-160H120l20-80h160l40-160H180l20-80h160l40-160h80l-40 160h160l40-160h80l-40 160h160l-20 80H660l-40 160h160l-20 80H600l-40 160h-80l40-160H360l-40 160h-80Zm140-240h160l40-160H420l-40 160Z"/>
                                </svg>
                                <p>general</p>
                            </div>

                            <div class="flex items-center py-2 rounded hover:bg-secondary group">
                                <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#e8eaed">
                                    <path d="m240-160 40-160H120l20-80h160l40-160H180l20-80h160l40-160h80l-40 160h160l40-160h80l-40 160h160l-20 80H660l-40 160h160l-20 80H600l-40 160h-80l40-160H360l-40 160h-80Zm140-240h160l40-160H420l-40 160Z"/>
                                </svg>
                                <p>introduction</p>
                            </div>
                        </div>

                        {/* Voice Channels */}
                        <div class="pb-5">
                            
                                <div>
                                    <h3 class="pb-1 text-xs uppercase font-semibold text-primary">Voice Channels</h3>
                                    {[...Array(20)].map((_, i) => (
                                        <div class="flex items-center py-2 rounded hover:bg-secondary group">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#e8eaed">
                                                <path d="m240-160 40-160H120l20-80h160l40-160H180l20-80h160l40-160h80l-40 160h160l40-160h80l-40 160h160l-20 80H660l-40 160h160l-20 80H600l-40 160h-80l40-160H360l-40 160h-80Zm140-240h160l40-160H420l-40 160Z"/>
                                            </svg>
                                            <p>general - {i + 1}</p>
                                        </div>
                                    ))}
                                </div>
                            
                        </div>
                    </div>
                </nav>

                {/* User Profile at the Bottom */}
                <div class="flex-none border-t rounded-t-xl p-3">
                    <div class="flex items-center space-x-3">
                        <ImageRoot>
                            <Image src="https://avatars.githubusercontent.com/u/111970903?v=4" />
                            <ImageFallback>HN</ImageFallback>
                        </ImageRoot>
                        <div class="text-foreground">
                            <p>Simeon</p>
                            <p class="text-xs text-primary font-bold">online</p>
                        </div>
                        <div class="flex space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                <path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                                <path d="M480-40v-80h280v-40H600v-320h160v-40q0-116-82-198t-198-82q-116 0-198 82t-82 198v40h160v320H120v-360q0-74 28.5-139.5T226-774q49-49 114.5-77.5T480-880q74 0 139.5 28.5T734-774q49 49 77.5 114.5T840-520v480H480ZM200-240h80v-160h-80v160Zm480 0h80v-160h-80v160ZM200-400h80-80Zm480 0h80-80Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
