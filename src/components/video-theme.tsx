import * as React from "react"
import { isIOS, isSafari } from "react-device-detect"

import Background from "../../static/videos/dark.webm"
import BackgroundDark from "../../static/videos/light.webm"

function VideoTheme() {
  const [safari, setSafari] = React.useState()

  React.useEffect(() => {
    // @ts-ignore
    setSafari(isSafari)
  }, [setSafari])

  const [IOS, setIOS] = React.useState()

  React.useEffect(() => {
    // @ts-ignore
    setIOS(isIOS)
  }, [setIOS])

  const [mQuery, setMQuery] = React.useState<any>({
    matches: typeof window !== "undefined" ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? BackgroundDark : Background) : Background
  })

  const videoRef = React.useRef() as any
  const previousUrl = React.useRef(mQuery)

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      let mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
      mediaQuery.addEventListener("change", (e) => {
        e.matches ? setMQuery(BackgroundDark) : setMQuery(Background)
      })
      setMQuery(mediaQuery.matches ? BackgroundDark : Background)
    }

    if (previousUrl.current === mQuery)
      return
    if (typeof videoRef.current !== "undefined" && videoRef.current)
      videoRef.current.load()

    previousUrl.current = mQuery
  }, [mQuery])

  if (safari || IOS) return (<></>)

  return (
    <>
      <label htmlFor="background" className="sr-only">
        Background Video
      </label>
      <video id="background" ref={videoRef} loop autoPlay muted className="object-cover h-full w-full"
             src={mQuery} />
    </>
  )
}

export default VideoTheme
