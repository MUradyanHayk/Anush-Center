import React from "react";
import "./BackDrop.scss";

const BackDrop = (props) => {
    return <div className='back-drop' onClick={props.onBackDropClick}/>;
};

export default BackDrop;
