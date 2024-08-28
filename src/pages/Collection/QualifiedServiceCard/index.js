import React from "react";
import './style.scss'
import classNames from "classnames";

const QualifiedServiceCard =({  title ,desc,Image,onClick,active}) => {
    return (
        <div className={classNames("QualifiedServiceCard", {active})}
         onClick={onClick}
        >
            <div className="titleContainer">{title}</div>
            <div className="descContainer">{desc}</div>

            <div className="imgcontainer">
                <img src={Image} alt="" />
            </div>

        </div>
    )
}



export default QualifiedServiceCard