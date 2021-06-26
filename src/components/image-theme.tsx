import React from "react"
import { useMediaPredicate } from "react-media-hook"
import { StaticImage } from "gatsby-plugin-image"

const imageTheme = () => {
  if (useMediaPredicate("(prefers-color-scheme: dark)"))
    return (<><StaticImage
      className="relative h-full w-full"
      layout="fullWidth"
      // @ts-ignore
      formats={["AUTO", "WEBP", "AVIF"]}
      src="../images/light.jpg"
      width={720}
      height={405}
      quality={95}
      alt="Background Image"
    /></>)

  return (
    <>
      <StaticImage
        className="relative h-full w-full"
        layout="fullWidth"
        // @ts-ignore
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/dark.jpg"
        width={720}
        height={405}
        quality={95}
        alt="Background Image"
      />
    </>
  )
}
export default imageTheme
