import React from "react";
import './style.scss'

const Footer =({title,desc,Image}) => {
    const descriptionArray = Array.isArray(desc) ? desc : [];
    return(
        <div className="footerCard">
            <div className="titleContainer">{title}</div>
            

             <div className="desc"> 
               <ul>
                  {descriptionArray.map((item, index) => (
                   <li key={index}>{item}</li>
                   ))}
                </ul>
             </div> 

             <div className="ImageContainer">
             {Image && Image.map((logo, index) => (
               <img key={index} src={logo} alt=''  />
                ))}
             </div>
            

           

        </div>
    )
}
export default Footer