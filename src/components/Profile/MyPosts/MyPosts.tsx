import React from 'react';
import s from "./myPosts.module.css"
import {Post} from "./Post/Post";
import {PostsType} from "../../redux/state";


export type MyPostsPropsType = {
    posts: PostsType,
    newPostText:string,
    addPost: () => void
    updateNewPostText:(text:string)=>void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
            props.addPost()
    }
    let onPostChange=()=>{
        let text=newPostElement.current?.value;
       props.updateNewPostText(text?text:'')
    }
    return (<div className={s.postBlock}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.newPostText}/>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.myPosts}>
                {postsElements}
            </div>
        </div>
    )
}