"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BlurProps {
  src: string;
  alt: string;
  classname?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
}

export default function BlurImage({
  src,
  alt,
  classname,
  width,
  height,
  sizes,
  fill,
}: BlurProps) {
  const [blurDataURL, setBlurDataURL] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImage() {
      const response = await fetch(src);
      const arrayBuffer = await response.arrayBuffer();
      const base64 = Buffer.from(arrayBuffer).toString("base64");
      setBlurDataURL(`data:image/png;base64,${base64}`);
    }

    fetchImage();
  }, [src]);

  if (!blurDataURL) return null;

  return (
    <Image
      className={classname}
      width={width}
      height={height}
      fill={fill}
      sizes={sizes}
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL={blurDataURL}
    />
  );
}

// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// interface BlurProps {
//   src: string;
//   alt: string;
//   classname?: string;
//   width?: number;
//   height?: number;
//   fill?: boolean;
// }

// export default function BlurImage({
//   src,
//   alt,
//   classname,
//   width,
//   height,
//   fill,
// }: BlurProps) {
//   const [blurDataURL, setBlurDataURL] = useState<string | null>(null);

//   useEffect(() => {
//     async function generateBlurDataURL(imageSrc: string) {
//       const img: HTMLImageElement = document.createElement("img"); // ✅ Explicitly define the type
//       img.src = imageSrc;
//       img.crossOrigin = "anonymous"; // Avoid CORS issues for external images

//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         const ctx = canvas.getContext("2d");

//         if (!ctx) return;

//         // Resize the image to a small size (e.g., 20x20) for a blur effect
//         canvas.width = 20;
//         canvas.height = 20;
//         ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

//         // Convert canvas to base64
//         const base64Image = canvas.toDataURL("image/png");
//         setBlurDataURL(base64Image);
//       };
//     }

//     generateBlurDataURL(src);
//   }, [src]);

//   return (
//     <Image
//       className={classname}
//       width={width}
//       height={height}
//       fill={fill}
//       src={src}
//       alt={alt}
//       placeholder={blurDataURL ? "blur" : "empty"}
//       blurDataURL={blurDataURL || undefined}
//       priority
//     />
//   );
// }
