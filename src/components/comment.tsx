import React, { RefObject } from "react"

type DataProps = {
  commentBox: RefObject<HTMLInputElement>
}

const Comment: React.FC<DataProps> = ({commentBox}) => (<div ref={commentBox} className="comments"/>)
export default Comment
