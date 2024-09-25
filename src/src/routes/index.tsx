import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, } from "~/components/ui/tooltip";
import { Title } from "@solidjs/meta";

export default function index() {
  return (
    <main class="dark">
      <Title>Home</Title>
        

      <div class="flex min-h-screen w-full flex-col bg-background">
      <aside class="fixed inset-y-0 left-0 z-10 hidden w-20 flex-col border-r bg-background sm:flex">
        <nav class="flex flex-col items-center gap-6 px-2 sm:py-5">
          <a
            href="#"
            class="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-10 md:w-10 md:text-base"
          >
            <img src="/favicon.ico" class="h-4 w-4 transition-all group-hover:scale-110" />
            <span class="sr-only">Acme Inc</span>
          </a>
          <Tooltip>
            <TooltipTrigger>
              <a
                href="#"
                class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-10 md:w-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-all group-hover:scale-110" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-80v-280h120v-160h200v-80H320v-280h320v280H520v80h200v160h120v280H520v-280h120v-80H320v80h120v280H120Zm280-600h160v-120H400v120ZM200-160h160v-120H200v120Zm400 0h160v-120H600v120ZM480-680ZM360-280Zm240 0Z"/></svg>
                <span class="sr-only">CP</span>
              </a>
            </TooltipTrigger>
            <TooltipContent>Control Panel</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <a
                href="#"
                class="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-10 md:w-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-all group-hover:scale-110" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M80-80v-800h800v640H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Zm80-80h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80Z"/></svg>
                <span class="sr-only">M</span>
              </a>
            </TooltipTrigger>
            <TooltipContent>Messages</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <a
                href="#"
                class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-10 md:w-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>
                <span class="sr-only">GC</span>
              </a>
            </TooltipTrigger>
            <TooltipContent>Group chat</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <a
                href="#"
                class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-10 md:w-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-88h120v88q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
                <span class="sr-only">N</span>
              </a>
            </TooltipTrigger>
            <TooltipContent>Notifications</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <a
                href="#"
                class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-10 md:w-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-158 200-319v-322l280-161 280 161v322L480-158Zm-40-115v-184l-160-93v185l160 92Zm80 0 160-92v-185l-160 93v184ZM80-680v-200h200v80H160v120H80ZM280-80H80v-200h80v120h120v80Zm400 0v-80h120v-120h80v200H680Zm120-600v-120H680v-80h200v200h-80ZM480-526l158-93-158-91-158 91 158 93Zm0 45Zm0-45Zm40 69Zm-80 0Z"/></svg>
                <span class="sr-only">3D</span>
              </a>
            </TooltipTrigger>
            <TooltipContent>3D view</TooltipContent>
          </Tooltip>
        </nav>
        <nav class="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger>
              <a
                href="#"
                class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-10 md:w-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 hover:rotate-45 transform-gpu transition ease-in-out delay-100" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>
                <span class="sr-only">Settings</span>
              </a>
            </TooltipTrigger>
            <TooltipContent>Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      </div>




    </main>
  );
}
