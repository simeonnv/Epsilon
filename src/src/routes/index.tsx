import Sidebar from "~/components/sidebar";
import { createSignal } from "solid-js";
import Messages from "~/components/messages/messages";
import { Show } from "solid-js";

export default function index() {
    const [ui, setUi] = createSignal(1);
  
    
    
  
    return (
      <main class="dark overflow-x-hidden max-h-screen hoverScroll bg-background">
        <div class="flex flex-row align-middle items-center min-h-screen w-full bg-background justify-center">
        
            <div class="flex flex-col align-middle items-center overflow-y-auto hover:hoverScroll">
                
                <div class="hoverScroll gap-4 flex flex-col p-20">
                    <div class="bg-primary">RAAAh</div>

                    <div class="bg-primary">RAAAh</div>
                </div>

                
            </div>
                
           
          
  
        </div>
      </main>
    );
  }