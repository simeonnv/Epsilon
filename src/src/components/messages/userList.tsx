import { Accessor, createSignal, onMount, Setter, Show } from "solid-js";
import { Button } from "../ui/button"
import { ImageRoot, Image, ImageFallback } from "../ui/image"
import { accountsShortened } from "~/routes/lib/types/accounts";
import getMembers from "~/routes/lib/messages/getMembers";
import { base64ToFile } from "~/routes/lib/encryption/base64File";
import getGroup from "~/routes/lib/messages/getGroup";
import { group } from "~/routes/lib/types/group";
import LoadingRow from "../ui/loadingRow";
import Loading from "../ui/loading";

export default function userList({ groupId, setIsOpen, isOpen, group }: 
  { groupId: string, 
    setIsOpen: Setter<boolean>, 
    isOpen: Accessor<boolean>, 
    group: Accessor<group | undefined> 
  }) {


    const toggleSidebar = () => setIsOpen(!isOpen());

    const [members, setMembers] = createSignal<undefined | accountsShortened[]>(undefined);
    const [membersLoading, setMembersLoading] = createSignal<boolean>(true);
    
    onMount(async () => {
        console.log("NZ", await groupId)
        const res = await getMembers(groupId)
        setMembers(res)
        setMembersLoading(false);

    })

  
    return (
      <div class={`dark p-0 m-0 border-0  transition-all duration-500 delay-0 ease-in-out transform ${
            isOpen() ? 'w-full' : 'w-0'
      }`}>
        
        <aside
          class={`p-0 top-0 right-0 border-l rounded-l-lg text-white h-screen w-64 bg-background `}
        >
          <Show when={members() != undefined} fallback={<Loading/>}>
          <div class="flex flex-col h-full">
  
            <div class="flex items-center justify-between pt-5">
              <div class="flex-1 border-t mx-6"></div>
            </div>
  
            <div class="flex justify-center items-center">
              <div class="w-3 h-3 rounded-full bg-primary p-1"></div>
              <div class="p-2 flex items-center text-primary">{members()?.length != undefined ? members()?.length : 0}</div>
              <div class="w-3 h-3 rounded-full bg-gray-500 p-1"></div>
              <div class="p-2 flex items-center text-gray-500">{members()?.length != undefined ? members()?.length : 0}</div>
            </div>
  
            <div class="flex items-center justify-between">
              <div class="flex-1 border-t mx-6"></div>
            </div>
  
            <div class="flex justify-center align-center p-4">
              <div class="text-xl font-semibold text-primary">{group()?.name}</div>
            </div>
  
            <div class="flex items-center justify-between">
              <div class="flex-1 border-t mx-6"></div>
            </div>
  
            <div class="flex-1 overflow-y-auto overflow-x-hidden hover:hoverScroll bg-background">
              <div class="ml-5">

                <p class="pb-2 pt-2 text-gray-500 text-sm">online - {members()?.length}</p>
                  <Show when={!membersLoading()} fallback={<LoadingRow/>}>
                  {members()?.map(member => (

                    <div class="flex flex-row pb-4">
                      
                      <ImageRoot>
                        <Image src={member.pfp == undefined 
                          || member.pfp.base64 == undefined 
                          || member.pfp.type == undefined 
                          ? "/public/favicon.ico" 
                          : URL.createObjectURL(base64ToFile(member.pfp.base64, "default", member.pfp.type))} />
                        <ImageFallback>HN</ImageFallback>
                      </ImageRoot>
                      
                      <div class="pl-3 align-middle justify-center items-center content-center">
                        <p>{member.username}</p>
                        <Show when={member.status != undefined}><p class="text-xs text-primary">{member.status}</p></Show>
                      </div>
                    
                    </div>
                  
                  ))}
                </Show>
              </div>
            </div>
  
          </div>
          </Show>
        </aside>
        
      </div>
    );
  }
  