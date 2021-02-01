import React, {useState} from "react";
import moment from "moment";

const ENTER_KEY_CODE = 13

export default function AddComment({onPostComment}) {
    const [text, setText] = useState("")

    const onInputChange = event => {
        setText(event.target.value)
    }

    const onKeypress = event => {
        if (event.keyCode === ENTER_KEY_CODE) {
            onPostComment(text, moment().toISOString())
            setText("")
        }
    };

    return <div>
        <input value={text} onChange={onInputChange} onKeyPress={onKeypress}/>
    </div>
}