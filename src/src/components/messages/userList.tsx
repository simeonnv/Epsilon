import { createSignal } from "solid-js";
import { Button } from "../ui/button"
import { ImageRoot, Image, ImageFallback } from "../ui/image"

export default function userList(props: any) {
    const toggleSidebar = () => props.setIsOpen(!props.isOpen());
  
    return (
      <div class={`dark p-0 m-0 border-0  transition-all duration-500 delay-0 ease-in-out transform ${
            props.isOpen() ? 'w-full' : 'w-0'
      }`}>
        <aside
          class={`p-0 top-0 right-0 border-l rounded-l-lg text-white h-screen w-64 bg-background `}
        >
          {/* Sidebar content wrapper */}
          <div class="flex flex-col h-full">
  
            {/* Sidebar static top content */}
            <div class="flex items-center justify-between pt-5">
              <div class="flex-1 border-t mx-6"></div>
            </div>
  
            {/* Sidebar user statistics */}
            <div class="flex justify-center items-center">
              <div class="w-3 h-3 rounded-full bg-primary p-1"></div>
              <div class="p-2 flex items-center text-primary">9,999</div>
              <div class="w-3 h-3 rounded-full bg-gray-500 p-1"></div>
              <div class="p-2 flex items-center text-gray-500">9,999</div>
            </div>
  
            <div class="flex items-center justify-between">
              <div class="flex-1 border-t mx-6"></div>
            </div>
  
            {/* Sidebar title */}
            <div class="flex justify-center align-center p-4">
              <div class="text-xl font-semibold">WOG</div>
            </div>
  
            <div class="flex items-center justify-between">
              <div class="flex-1 border-t mx-6"></div>
            </div>
  
            {/* Scrollable image list area */}
            <div class="flex-1 overflow-y-auto overflow-x-hidden hover:hoverScroll bg-background">
              <div class="ml-5">

                <p class="pb-2 pt-2 text-gray-500 text-sm">online - 14</p>
  
                {/* User list */}
                {[...Array(20)].map(() => (
                  <div class="flex flex-row pb-4">
                    <ImageRoot>
                      <Image src="https://avatars.githubusercontent.com/u/111970903?v=4" />
                      <ImageFallback>HN</ImageFallback>
                    </ImageRoot>
                    <div class="pl-3">
                      <p>Simeon</p>
                      <p class="text-xs text-primary font-bold">blehh</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
          </div>
        </aside>

      </div>
    );
  }
  