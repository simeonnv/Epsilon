import { Title } from "@solidjs/meta";
import { onMount } from "solid-js"

import { For } from "solid-js";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsIndicator,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  TextField,
  TextFieldLabel,
  TextFieldRoot,
  TextFieldErrorMessage,
} from "@/components/ui/textfield";
import {
  Switch,
  SwitchControl,
  SwitchThumb,
} from "@/components/ui/switch";

import Break from "@/components/ui/Break"


export default function login() {
  return (
    <main class="flex h-screen items-center justify-center dark bg-black">
      <Card class="w-[380px] opacity-0" id="login">
			<CardHeader class="login opacity-0">
				<CardTitle class="text-2xl text-center">Login</CardTitle>
				<CardDescription class="text-center">Please enter your credentials</CardDescription>
			</CardHeader>
			<CardContent class="grid gap-4 login opacity-0">
        <TextFieldRoot class="w-full max-w-xs" validationState="valid">
          <TextField type="email" placeholder="Email" />
          <TextFieldErrorMessage>Email is required.</TextFieldErrorMessage>
        </TextFieldRoot>
        <TextFieldRoot class="w-full max-w-xs" validationState="valid">
          <TextField type="password" placeholder="Password" />
          <TextFieldErrorMessage>Password is required</TextFieldErrorMessage>
        </TextFieldRoot>
        <Break text="Or continue with"/>
        <div class="grid grid-cols-2 gap-4">
          <Button>
            <GithubIcon class="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button>
            <ChromeIcon class="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
			</CardContent>
			<CardFooter class="login opacity-0">
				<Button class="w-full">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="mr-2 h-4 w-4"
						viewBox="0 0 24 24"
					>
						<path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m5 12l5 5L20 7"
						/>
					</svg>
					Login
				</Button>
			</CardFooter>
		</Card>
    </main>
  );
}



function ChromeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function GithubIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}