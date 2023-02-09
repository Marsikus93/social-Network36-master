import React from 'react';
import s from "./ProfileInfo.module.css";


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img alt=""
                     src="https://tortodel.com.ua/image/cache/catalog/%20Kartynky/Mylty/Pingvin%201-700x700.jpg"/>
            </div>
            <div className={s.descriptionBlock}>Avatar+description</div>
        </div>
    )
}
export default ProfileInfo;