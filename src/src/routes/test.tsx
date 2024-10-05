

import { createSignal } from "solid-js";
import { TextField, TextFieldRoot } from "@/components/ui/textfield";


export default function ControlledExample() {
	const [value, setValue] = createSignal("Apple");
	return (
		<>
			{/* <TextField value={value()} onChange={setValue}>
				<TextField.Label>Favorite fruit</TextField.Label>
				<TextField.Input />
			</TextField> */}

      <TextFieldRoot value={value()} onChange={setValue}>
        <TextField type="email" placeholder="Email" />
      </TextFieldRoot>
			<p>Your favorite fruit is: {value()}.</p>
		</>
	);
}