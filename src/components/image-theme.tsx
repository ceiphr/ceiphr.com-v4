import React from "react"
import { useMediaPredicate } from "react-media-hook"
import { StaticImage } from "gatsby-plugin-image"

const ImageTheme = () => {
  if (useMediaPredicate("(prefers-color-scheme: dark)"))
    return (<StaticImage
      className="relative h-full w-full"
      layout="fullWidth"
      // @ts-ignore
      formats={["AUTO", "WEBP", "AVIF"]}
      src="../images/light.jpg"
      quality={95}
      alt="Background Image"
    />)

  return (
      <StaticImage
        className="relative h-full w-full"
        layout="fullWidth"
        // @ts-ignore
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/dark.jpg"
        quality={95}
        alt="Background Image"
      />
  )
}
export default ImageTheme
