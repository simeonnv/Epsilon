

export default function ImageUpload(props: any)
{

    const handleImageUpload = (event: Event) => {
        const target = event.target as HTMLInputElement;
        if (target.files && target.files.length > 0) {
            props.setIcon(target.files[0]);
        }
    };

    return (
        <div class="flex flex-col items-center">
            <label class={`w-32 h-32 rounded-full ${!props.icon() ? "border-2 border-dashed border-primary" : ""} flex items-center justify-center cursor-pointer`}>
                {props.icon() ? (
                    <img
                        src={URL.createObjectURL(props.icon()!)}
                        alt="Icon Preview"
                        class="w-full h-full object-cover rounded-full"
                    />
                    ) : (
                    <div class="w-full h-full flex items-center justify-center rounded-full bg-background">
                        <span class="text-primary font-bold">No Icon</span>
                    </div>
                    )}
                    <input
                    type="file"
                        accept="image/*"
                    onChange={handleImageUpload}
                    class="hidden"
                />
            </label>
        </div>
    )
}