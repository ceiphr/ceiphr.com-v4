import * as React from "react"

import ImageTheme from "./image-theme"
import Background from "../../static/videos/dark.webm"
import BackgroundDark from "../../static/videos/light.webm"

const VideoTheme = () => {
  const [mQuery, setMQuery] = React.useState<string>("")

  const videoRef = React.useRef() as any
  const previousUrl = React.useRef(mQuery)

  React.useEffect(() => {
    async function setVideo() {
      let mediaQuery = await window.matchMedia("(prefers-color-scheme: dark)")
      mediaQuery.addEventListener("change", e => {
        setMQuery(e.matches ? BackgroundDark : Background)
      })
      setMQuery(mediaQuery.matches ? BackgroundDark : Background)

      if (previousUrl.current === mQuery) return
      if (typeof videoRef.current !== "undefined" && videoRef.current)
        videoRef.current.load()

      previousUrl.current = mQuery
    }

    if (typeof window !== "undefined")
      // noinspection JSIgnoredPromiseFromCall
      setVideo()
  }, [mQuery])

  return (
    <>
      <label htmlFor="background" className="sr-only">
        Background Video
      </label>
      <video
        id="background"
        ref={videoRef}
        loop
        disablePictureInPicture
        disableRemotePlayback
        autoPlay
        muted
        className={
          `object-cover h-full w-full fade-in ` + (mQuery === "" && "opacity-0")
        }
        src={mQuery}
      />
    </>
  )
}

export default VideoTheme
