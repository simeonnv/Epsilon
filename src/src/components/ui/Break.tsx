export default function Break(props: any)
{
    return (
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <span class="w-full border-t border-muted" />
          </div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="bg-background px-2 text-muted-foreground">{props.text}</span>
          </div>
        </div>
    )
}