import React from "react"

type DataProps = {
  className: string
}

const Comment: React.FC<DataProps> = ({ className }) => {
  // Used for https://giscus.app/
  // https://creativcoder.dev/how-to-add-github-utterances-blog
  const commentBox = React.createRef<HTMLInputElement>()

  React.useEffect(() => {
    const scriptEl = document.createElement("script")
    scriptEl.async = true
    scriptEl.src = "https://giscus.app/client.js"
    scriptEl.setAttribute("data-repo", "ceiphr/ceiphr.com-comments")
    scriptEl.setAttribute("data-repo-id", "MDEwOlJlcG9zaXRvcnkzNzg3NDY2Mzg=")
    scriptEl.setAttribute("data-category", "Announcements")
    scriptEl.setAttribute("data-category-id", "MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMzMDQzMTY5")
    scriptEl.setAttribute("data-mapping", "title")
    scriptEl.setAttribute("data-reactions-enabled", "1")
    scriptEl.setAttribute("data-theme", "preferred_color_scheme")
    scriptEl.setAttribute("crossorigin", "anonymous")
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(scriptEl)
    }
  }, [])

  return (<div ref={commentBox} className={`comments ${className}`} />)
}
export default Comment
