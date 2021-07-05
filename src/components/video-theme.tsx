import * as React from "react"

import Background from "../../static/videos/dark.webm"
import BackgroundDark from "../../static/videos/light.webm"

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const VideoTheme = () => {
  const [mQuery, setMQuery] = React.useState<string>(Background)

  const videoRef = React.useRef() as any
  const previousUrl = React.useRef(mQuery)

  React.useEffect(() => {
    async function setVideo() {
      if (typeof window !== "undefined") {
        let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        mediaQuery.addEventListener("change", e => {
          setMQuery(e.matches ? BackgroundDark : Background)
        })

        if (!mediaQuery.matches) await sleep(1000)
        setMQuery(mediaQuery.matches ? BackgroundDark : Background)

        if (previousUrl.current === mQuery) return
        if (typeof videoRef.current !== "undefined" && videoRef.current)
          videoRef.current.load()

        previousUrl.current = mQuery
      }
    }

    // noinspection JSIgnoredPromiseFromCall
    setVideo()
  }, [mQuery])

  if (!mQuery) return <></>
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
        className="object-cover h-full w-full fade-in"
        src={mQuery}
      />
    </>
  )
}

export default VideoTheme
