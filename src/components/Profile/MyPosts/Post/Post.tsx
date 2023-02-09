import React from 'react';
import s from './post.module.css';
export type MessageType={
    message:string
    likeCount:number
}
export const Post = (props:MessageType) => {
    return (
        <div className={s.posts}>
            <img alt=""
                src={"https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?b=1&s=170667a&w=0&k=20&c=Z5bM_O61NdvOVMAV91l_K_xVAsgPxayDrlVxvi19jqE="}/>
            <span> {props.message}</span>
            <div>
                <span>like</span> {props.likeCount}
            </div>
        </div>
    )
}