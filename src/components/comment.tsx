import React, { RefObject } from "react"

type DataProps = {
  commentBox: RefObject<HTMLInputElement>
  className: string
}

const Comment: React.FC<DataProps> = ({commentBox, className}) => (<div ref={commentBox} className={`comments ${className}`}/>)
export default Comment
