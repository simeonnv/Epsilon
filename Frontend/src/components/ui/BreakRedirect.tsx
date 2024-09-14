export default function BreakRedirect(props: any)
{
    return (
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <span class="w-full border-t border-muted" />
          </div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="transition bg-background px-2 text-muted-foreground text-blue-400 hover:text-blue-700"><a href={props.href}>{props.text}</a></span>
          </div>
        </div>
    )
}