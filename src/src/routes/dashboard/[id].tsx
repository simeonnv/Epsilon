import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger, } from "~/components/ui/tooltip";
import { Title } from "@solidjs/meta";
import { ImageRoot, ImageFallback, Image } from "@/components/ui/image";
import Sidebar from "~/components/sidebar";
import Break from "~/components/ui/Break";
import { TextFieldRoot } from "~/components/ui/textfield";
import { TextArea } from "~/components/ui/textarea";
import { createSignal } from "solid-js";
// import Messages from "~/components/messages/messages";
const Messages = lazy(() => import("~/components/messages/messages"));
import Group from "~/components/group";
import { useParams } from "@solidjs/router";
import { Show, lazy, Suspense } from "solid-js";
import Loading from "~/components/ui/loading";

export default function Dashboard() {
  const params = useParams();
  const [ui, setUi] = createSignal(1);
  console.log(params.id)

  
  

  return (
    <main class="dark overflow-x-hidden overflow-y-hidden">
      <div class="flex min-h-screen w-full bg-background">

        <div class="flex-shrink-0">
          <Sidebar setUi={setUi} ui={ui} />
        </div>

        <Show when={ui() == 2}>
            <Suspense fallback={<Loading/>}>
              <Messages/>
            </Suspense>
        </Show>
        

      </div>
    </main>
  );
}
