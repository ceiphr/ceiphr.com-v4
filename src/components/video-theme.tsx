import * as React from "react"

import Background from "../../static/videos/dark.webm"
import BackgroundDark from "../../static/videos/light.webm"

function VideoTheme() {
  if (typeof window === "undefined")
    return (<></>)

  const [mQuery, setMQuery] = React.useState<any>({
    matches: window.matchMedia("(prefers-color-scheme: dark)").matches ? BackgroundDark : Background
  })

  const videoRef = React.useRef() as any
  const previousUrl = React.useRef(mQuery)

  React.useEffect(() => {
    let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)") //window.matchMedia &&
    mediaQuery.addEventListener("change", (e) => {
      e.matches ? setMQuery(BackgroundDark) : setMQuery(Background)
    })
    setMQuery(mediaQuery.matches ? BackgroundDark : Background)

    if (previousUrl.current === mQuery)
      return
    if (typeof videoRef.current !== "undefined")
      videoRef.current.load()

    previousUrl.current = mQuery
  }, [mQuery])

  return (
    <video ref={videoRef} loop autoPlay muted className="object-cover h-full w-full"
           src={mQuery} />
  )
}

export default VideoTheme
