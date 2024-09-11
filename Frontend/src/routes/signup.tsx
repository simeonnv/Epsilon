import { Title } from "@solidjs/meta";
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

import { createAutoAnimate } from '@formkit/auto-animate/solid'

import { onMount, createSignal, createEffect, Show } from "solid-js";
import { x } from "node_modules/@kobalte/core/dist/index-e295f8da";

import { signupAuth } from "./lib/auth/signupAuth"
import { verifyCredentails } from "./lib/auth/verifyCredentials";

export default function signup() {

  const [username, setUsername] = createSignal("")
  const [password, setPassword] = createSignal("")
  const [repeatPassword, setRepeatPassword] = createSignal("")

  const [usernameValidation, setUsernameValidation] = createSignal(true)
  const [passwordValidation, setPasswordValidation] = createSignal(true)
  const [repeatPasswordValidation, setRepeatPasswordValidation] = createSignal(true)

  
  createEffect(() => {
    console.log(username())
    console.log(password())
    console.log(repeatPassword())


    if (password() != repeatPassword())
      if (repeatPassword() != "")
        setRepeatPasswordValidation(false)
      else
        setRepeatPasswordValidation(true)

    const verification: boolean[] = verifyCredentails(username(), password())

    if (verification[0])
      setUsernameValidation(true)
    else
      setUsernameValidation(false)

    if (verification[1])
      setPasswordValidation(true)
    else
      setPasswordValidation(false)



  });

  const [usernameAnimation] = createAutoAnimate({ duration: 700 })
  const [passwordAnimation] = createAutoAnimate({ duration: 700 })
  const [repeatedPasswordAnimation] = createAutoAnimate({ duration: 700 })

  const validate = (val: boolean) => {
    if (val) {
      return "valid"
    }
    else
      return "invalid"
  }

  return (
    <div>
      <main class="flex h-screen items-center justify-center dark bg-black" >
        <Card class="w-[380px] parent" id="signup">

          <CardHeader class="signup">
            <CardTitle class="text-2xl text-center">Signup</CardTitle>
            <CardDescription class="text-center">Please enter your credentials</CardDescription>
          </CardHeader>


          <CardContent class="grid gap-4  signup">
            <TextFieldRoot class="w-full max-w-xs " validationState="invalid" >
              <TextField type="username" placeholder="Username" onChange={(e: any) => { setUsername(e.target.value) }} />
              <TextFieldErrorMessage >Username is required.</TextFieldErrorMessage>
            </TextFieldRoot>
            <TextFieldRoot class="w-full max-w-xs" validationState="invalid">
              <TextField type="password" placeholder="Password" onChange={(e: any) => { setPassword(e.target.value) }} />

              <TextFieldErrorMessage>
                <div ref={passwordAnimation}>
                  <Show when={!passwordValidation()} keyed >
                    Repeated password is
                  </Show>
                </div>
              </TextFieldErrorMessage>
            
            </TextFieldRoot>
            <TextFieldRoot class="w-full max-w-xs" validationState="invalid">
              <TextField type="password" placeholder="Repeat Password" onChange={(e: any) => { setRepeatPassword(e.target.value) }} />

              <TextFieldErrorMessage >
                <div ref={repeatedPasswordAnimation}>
                  <Show when={!repeatPasswordValidation()} keyed >
                    Repeated password is
                  </Show>
                </div>
              </TextFieldErrorMessage>

            </TextFieldRoot>
            <Break text="Or continue with" />
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
          <CardFooter class=" signup">
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
              Signup
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
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