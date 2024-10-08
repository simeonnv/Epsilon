

export default function isImage(file: File | null) {

    if (file === null)
        return false

    return file && file.type.startsWith('image/');
}
