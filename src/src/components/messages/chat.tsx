import { Button } from "../ui/button"

export default function Chat()
{
    return(
        <div class="transition-all duration-300 ease-in-out justify-start grid-flow-row grow">
                

                <div class="py-3 flex px-4 justify-between w-full text-primary text-md font-bold border-b-2 rounded-b-lg ">
                    <div class="flex flex-row justify-start align-middle">
                        <div class="flex items-center py-2 rounded hover:bg-secondary group">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#e8eaed"><path d="m240-160 40-160H120l20-80h160l40-160H180l20-80h160l40-160h80l-40 160h160l40-160h80l-40 160h160l-20 80H660l-40 160h160l-20 80H600l-40 160h-80l40-160H360l-40 160h-80Zm140-240h160l40-160H420l-40 160Z" /></svg>                           
                            <p class="px-1">announcements</p>
                        </div>
                    </div>
                    
                    <div class="zmt-auto justify-end align-middle">
                        <div class="flex items-center py-2 rounded hover:bg-secondary group">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#e8eaed"><path d="m240-160 40-160H120l20-80h160l40-160H180l20-80h160l40-160h80l-40 160h160l40-160h80l-40 160h160l-20 80H660l-40 160h160l-20 80H600l-40 160h-80l40-160H360l-40 160h-80Zm140-240h160l40-160H420l-40 160Z" /></svg>                           
                            <p class="px-1">announcements</p>
                        </div>                    
                    </div>
                    
                </div>

                <div class="text-white">
                    
                    <h1 class="text-2xl font-bold bg-primary">Dynamic Text</h1>
                    <p class="bg-primary">
                        DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS
                        DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS
                        DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS
                        DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS
                        DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS
                        DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS
                        DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS
                        DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS
                        DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS DADSDADSDADSDADSDADS
                    </p>
                    
                </div>
        </div>
    )
}