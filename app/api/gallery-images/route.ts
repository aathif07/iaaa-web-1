import { NextResponse } from "next/server"
import { readdir } from "fs/promises"
import path from "path"

type GalleryImage = {
  name: string
  folder: string
  src: string
}

const IMAGE_FOLDERS = ["gallery", "homw page image "]
const IMAGE_EXTENSIONS = /\.(jpg|jpeg|png|webp|avif)$/i

export async function GET() {
  const publicDir = path.join(process.cwd(), "public")
  const images: GalleryImage[] = []

  for (const folder of IMAGE_FOLDERS) {
    const dirPath = path.join(publicDir, folder)

    try {
      const files = await readdir(dirPath)

      for (const file of files) {
        if (!IMAGE_EXTENSIONS.test(file)) continue

        images.push({
          name: file,
          folder,
          src: `/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`,
        })
      }
    } catch {
      // Skip missing/unreadable folders
    }
  }

  images.sort((a, b) => a.name.localeCompare(b.name))

  return NextResponse.json({ images })
}
