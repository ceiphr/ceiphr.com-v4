import * as React from "react"

import Background from "../../static/videos/dark.webm"
import BackgroundDark from "../../static/videos/light.webm"

const VideoTheme = () => {
  const [mQuery, setMQuery] = React.useState<any>(Background)

  const videoRef = React.useRef() as any
  const previousUrl = React.useRef(mQuery)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      mediaQuery.addEventListener("change", (e) => {
        e.matches ? setMQuery(BackgroundDark) : setMQuery(Background)
      })
      setMQuery(mediaQuery.matches ? BackgroundDark : Background)

      if (previousUrl.current === mQuery)
        return
      if (typeof videoRef.current !== "undefined" && videoRef.current)
        videoRef.current.load()

      previousUrl.current = mQuery
    }
  }, [mQuery])

  return (
    <>
      <label htmlFor="background" className="sr-only">
        Background Video
      </label>
      <video id="background" ref={videoRef} loop autoPlay muted className="object-cover h-full w-full fade-in"
             src={mQuery} />
    </>
  )
}

export default VideoTheme
