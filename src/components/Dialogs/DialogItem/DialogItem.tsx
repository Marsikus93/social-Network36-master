import React from 'react';
import s from "./../dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogType} from "../../redux/state";

type DialogItemType= DialogType

const DialogItem:React.FC<DialogItemType> = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;
