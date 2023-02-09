import './index.css';
import state, {subscribe} from "./components/redux/state";

import {addPost, RootStateType, updateNewPostText} from './components/redux/state';
import App from "./App";
import ReactDOM from 'react-dom';

 let rerenderEntireTree = (state: RootStateType)=>{
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)
subscribe(rerenderEntireTree)