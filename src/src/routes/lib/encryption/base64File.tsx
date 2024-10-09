import { base64File } from "../types/base64File";


export async function fileToBase64File(file: File): Promise<base64File> {

    let binary = '';

    const bytes = new Uint8Array(await file.arrayBuffer());
    const len = bytes.byteLength;
  
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
  
    const base64File: base64File = {

        name: file.name,
        type: file.type,
        size: file.size,
        base64: window.btoa(binary)

    }

    return base64File
}

export function base64ToFile(base64: string, filename: string, mimeType: string ): File {

  console.log(base64)
  console.log(typeof(base64))

    const byteString = atob(base64);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
  
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new File([ab], filename, { type: mimeType });
}