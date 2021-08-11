import React, { useEffect } from "react"

const CarbonAd = () => {
  useEffect(() => {
    const ad = document.querySelector("#carbon")
    const script = document.createElement("script")
    script.async = true
    script.type = "text/javascript"
    script.src =
      "//cdn.carbonads.com/carbon.js?serve=CK7I62QM&placement=ceiphrcom"
    script.id = "_carbonads_js"
    ad!.appendChild(script)

    return () => {
      ad!.removeChild(script)
    }
  }, [])

  return <div id="carbon" className="no-print" aria-hidden="true" />
}

export default CarbonAd
