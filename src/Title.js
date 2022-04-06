import React, { useState } from "react";
import Button from "./Button";
// import ReactDOM from 'react-dom';

const Title = () => {
    const [title, setTitle] = useState("Hello World");

    const chengTitle = () => {
        setTitle("successfull!");
    }

    const chengBack = () => {
        setTitle("Hello World");
    }

    return (
        <div>
            {title}
            <button onClick={chengTitle}>Edit</button>
            <Button chengBack={chengBack} />
        </div>
    )
}

export default Title;