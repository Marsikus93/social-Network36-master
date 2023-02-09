import React from 'react';
import s from "./../dialogs.module.css"

type PropsMessageType = {
    message: string
}

const Message = (props: PropsMessageType) => {
    let newMessageElement = React.createRef<any>()
    let addPost = () => {
        let text = newMessageElement.current.value
        alert(text)
    }
    return (<div>
            <div className={s.message}>{props.message}</div>
            <textarea ref={newMessageElement}></textarea>
            <button onClick={addPost}>Add post</button>
        </div>
    )
}
export default Message;