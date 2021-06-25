import * as React from "react"

function VideoTheme(url: string) {
  const videoRef = React.useRef() as any
  const previousUrl = React.useRef(url)

  React.useEffect(() => {
    if (previousUrl.current === url)
      return
    if (typeof videoRef.current !== "undefined")
      videoRef.current.load()

    previousUrl.current = url
  }, [url])

  return (
    <video ref={videoRef} loop autoPlay muted className="object-cover h-full w-full"
           src={url} />
  )
}

export default VideoTheme
