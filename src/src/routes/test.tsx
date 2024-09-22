import { createSignal, For, Show } from 'solid-js'
import { createAutoAnimate } from '@formkit/auto-animate/solid'

const test = function () {
  const [parent, setEnabled] = createAutoAnimate(/* optional config */)

  const menuItems = ["Home", "Settings", "Logout"]
  const [isExpanded, setIsExpanded] = createSignal(true)

  return <div ref={parent}>
    <Show when={isExpanded()} keyed>
      <ul class="drawer">
        <For each={menuItems}>
          {item => <li class="item">{item}</li>}
        </For>
      </ul>
    </Show>
    <div class="content">
      <button
        class="button button--alt"
        type="button"
        onClick={() => setIsExpanded(isExpanded => !isExpanded)}
      >
        Toggle Drawer
      </button>
    </div>
  </div>
}

export default test