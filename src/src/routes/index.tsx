import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, } from "~/components/ui/tooltip";
import { Title } from "@solidjs/meta";
import { ImageRoot, ImageFallback, Image } from "@/components/ui/image";
import Sidebar from "~/components/sidebar";
import Break from "~/components/ui/Break";
import { TextFieldRoot } from "~/components/ui/textfield";
import { TextArea } from "~/components/ui/textarea";
import { createSignal } from "solid-js";
import Group from "~/components/group";

export default function index() {
  const [ui, setUi] = createSignal(1);
  const [isOpen, setIsOpen] = createSignal(true);
  const toggleSidebar = () => setIsOpen(!isOpen());

  return (
    <main class="dark">
      <div class="flex min-h-screen w-full bg-background">

        <div class="flex-shrink-0">
          <Sidebar setUi={setUi} ui={ui} />
        </div>

        <div class={`transition-all duration-300 ease-in-out ${isOpen() ? 'w-[calc(100%-16rem)]' : 'w-full'} `}>
          <div class="px-4 py-2 text-white">
            <h1 class="text-2xl font-bold">Dynamic Text</h1>
            <p>
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

        <div class="h-screen overflow-hidden">
          <aside
            class={`fixed top-0 right-0 border-l rounded-l-lg text-white h-full w-64 bg-background transition-all duration-300 ease-in-out transform ${isOpen() ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <div class="flex items-center justify-between mt-5">
              <div class="flex-1 border-t mx-6"></div> 
            </div>

            <div class="flex justify-center items-center">
              <div class="w-3 h-3 rounded-full bg-primary p-1"></div>
              <div class="p-2 flex items-center text-primary">9,999</div>
              <div class="w-3 h-3 rounded-full bg-gray-500 p-1"></div>
              <div class="p-2 flex items-center text-gray-500">9,999</div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex-1 border-t mx-6"></div> 
            </div>
            
            <div class="flex justify-center aling-center p-4">
              <div class="text-xl font-semibold">WOG</div>
            </div>
            
            <div class="flex items-center justify-between">
              <div class="flex-1 border-t mx-6"></div> 
            </div>
            
            <div class="m-5 flex flex-col justify-center">
              
              
              

              
              
              <div class="flex justify-start items-start flex-col text-left">


                <p class="pb-4 text-gray-500 text-sm">admin - 1</p>

                <div class="flex flex-row">
                  <ImageRoot>
                    <Image src="https://github.com/hngngn.png" />
                    <ImageFallback>HN</ImageFallback>
                  </ImageRoot>
                  <div class="pl-3">
                      <p>Simeon</p>
                      <p class="text-xs text-primary font-bold">blehh</p>
                  </div>
                </div>
                
              </div>
            </div>
            

          </aside>

          <Button
            onClick={toggleSidebar}
            class={`fixed top-4 transition-all duration-300 ease-in-out ${isOpen() ? 'right-64' : 'right-4'}`}
            variant="outline"
            size="icon"
          >
            {isOpen() ? <p class="h-4 w-4">BLEHH</p> : <p class="h-4 w-4" />}
            pluh
          </Button>
        </div>

      </div>
    </main>
  );
}
