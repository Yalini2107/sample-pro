import React from "react";
import  './style.scss';

const GetStartedCard =({title,desc}) => {
    return(
        <div className="GetStartedCard">
            <div className="titleContainer">{title}<span>Started With <span1>Hai</span1>Doc</span>
                
            </div>
            <div className="desc">{desc}</div>

        </div>
    )
}
export default GetStartedCard