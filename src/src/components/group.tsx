

import { Separator } from "@/components/ui/separator"
export default function group() {

  return (
    <div class="flex h-screen text-gray-200 bg-gray-800">
      {/* Server list */}
      <div class="flex flex-col items-center w-16 py-3 space-y-4 bg-gray-900">
        <div class="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold">
          D
        </div>
        <Separator class="w-8 bg-gray-700" />
        <div class="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-indigo-500 transition-colors">
          
        </div>
      </div>

      {/* Channel list */}
      <div class="w-60 bg-gray-800 flex flex-col">
        <div class="px-3 h-12 flex items-center shadow-md">
          Server Name
        </div>
        <div class="flex-grow">
          <div class="px-2 py-3">
            <p class="px-2 text-xs font-semibold text-gray-400 uppercase">Text Channels</p>
            <div class="space-y-1 mt-2">
              {["general", "random", "memes"].map((channel) => (
                <button
                  
                  class="flex items-center w-full px-2 py-1 text-gray-300 hover:bg-gray-700 hover:text-white rounded"
                >
                  
                  {channel}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div class="p-2 bg-gray-850 flex items-center">
          <div class="w-8 h-8 rounded-full bg-indigo-500 mr-2"></div>
          <div class="flex-grow">
            <div class="text-sm font-medium">Username</div>
            <div class="text-xs text-gray-400">#1234</div>
          </div>
          <div class="flex space-x-1">
            <button class="p-1 hover:bg-gray-700 rounded">
             
            </button>
            <button class="p-1 hover:bg-gray-700 rounded">
              
            </button>
            <button class="p-1 hover:bg-gray-700 rounded">
             
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div class="flex-grow flex flex-col">
        <div class="h-12 flex items-center px-4 shadow-md">
          
          <span class="font-bold">general</span>
        </div>
        <div class="flex-grow flex">
          <div class="flex-grow bg-gray-700 p-4">
            {/* Chat messages would go here */}
            <div class="text-center text-gray-500 mt-4">
              Welcome to #general!
            </div>
          </div>
          {/* Member list */}
          <div class="w-60 bg-gray-800 p-3">
            <div class="text-xs font-semibold text-gray-400 uppercase mb-2">Online — 3</div>
            <div class="h-full">
              {["Alice", "Bob", "Charlie"].map((member) => (
                <div class="flex items-center py-2">
                  <div class="w-8 h-8 rounded-full bg-indigo-500 mr-2"></div>
                  <span>{member}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div class="h-16 px-4 bg-gray-700 flex items-center">
          <div class="flex-grow bg-gray-600 rounded-md p-2">
            <input
              type="text"
              placeholder="Message #general"
              class="w-full bg-transparent outline-none text-gray-200"
            />
          </div>
        </div>
      </div>
    </div>

  )
}