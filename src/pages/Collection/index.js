import React, { useState } from "react";
import Container from "./Container";
import Button from "../../component/Button";

import Haidoc from "../../Assets/HaiDoc (1).png";
import logo from '../../Assets/logo.png'
import HeroSectionImg from "../../Assets/HeroSectionImg.png";
import MainServiceImg1 from "../../Assets/doctor (1) 1.png";
import MainServiceImg2 from "../../Assets/Group 67.png";
import MainServiceImg3 from "../../Assets/Group 68 (1).png";
import group108 from '../../Assets/Group 108.png'
import SpecialServiceImg from '../../Assets/SpecialServiceImg.png'
import SpclIcon1 from '../../Assets/Frame 143.png'
import SpclIcon2 from '../../Assets/SpclIcon2.png'
import SpclIcon3 from '../../Assets/SpclIcon3.png'
import SpclIcon4 from '../../Assets/SpclIcon4.png'
import SpclLine from '../../Assets/Spclline.png'
import QualImg from '../../Assets/QualifiedImg.png'
import QualDoc from '../../Assets/QualdocImg.png'
import Arr from '../../Assets/arr.png'
import circle1 from '../../Assets/circle1.png'
import circle2 from '../../Assets/circle2.png'
import circle3 from '../../Assets/circle3.png'
import circle4 from '../../Assets/circle4.png'
import circle5 from '../../Assets/circle5.png'
import browser from '../../Assets/google.png'
import insta from '../../Assets/Insta.png'
import linkedin from '../../Assets/LinkedIn.png'
import twitter from '../../Assets/Twitter.png'


import "./style.scss";
import HeroCard from "./HeroCard";
import MainServiceCard from "./MainServiceCard";
import SpecialServicesCard from "./SpecialServicesCard";
import QualifiedServiceCard from "./QualifiedServiceCard";
import GetStartedCard from "./GetStartedCard";
import Footer from "./Footer"




const mainServiceCardDetailsList = [
  {
    Image: MainServiceImg1,
    title: "Chat with doctor",
    desc: "You can connect directly, quickly and easily, and there is no need to doubt the quality of the consultation and treatment offered.",
  },
  {
    Image: MainServiceImg2,
    title: "Health Store",
    desc: "Talk about the health complaints you are experiencing and don't hesitate to ask about the proper treatment",
  },
  {
    Image: MainServiceImg3,
    title: "Visit Hospital",
    desc: "Get priority services in hospitals with Haidoc. Which allows you to go to the hospital more practically and save time.",
  },
];

const footerDetails =[
  {
    title:"Tutorify",
    desc:["Learn more than just a language"],
    Image:[browser,twitter,insta,linkedin],
    
  },
  {
    title:"Find Teacher",
    desc: ['English Teachers','Chinese Teacher','French Teacher','Spanish Teachers','Other Teachers'],
  },
  {
    title:"Lessons",
    desc: ['Learn English ','Learn Chinese ','Learn French','Learn Spanish','Learn More Languages'],
  },
  {
    title:"Company",
    desc: ['About','How It Works','Term' ,'Privacy Policy'],
  },
  {
    title:"More",
    desc: ['Documentation','License'],
  },
]


const Collection = () => {
  const [mainServiceCardSelected, setMainServiceCardSelected] = useState(1);
  
  return (
    <div className="collectionPage">
      <Container>
        <div className="navSection">
          <div className="imgContainer">
            <img src={Haidoc} alt="Logo" />
            <img className="logo" src={logo} alt=" "/>
          </div>
          <div className="navMenu">
            <div className="navMenuElement">Home</div>
            <div className="navMenuElement">Services</div>
            <div className="navMenuElement">Product</div>
            <div className="navMenuElement">About Us</div>
          </div>
          <Button>Register</Button>
        </div>
      </Container>
      <Container parameter="right">
        <div className="section1">
          <div className="section1-left">
            <div className="titleContainer">
              <div className="title ">We are ready to</div>
              <div className="title coloured">Help your Health</div>
              <div className="title ">Problems</div>
            </div>
            <div className="para">
              In times like today, your health is very important, especially
              since the number of COVID-19 cases is increasing day by day, so we
              are ready to help you with your health consultation
            </div>
            <Button>Try Free Consultation</Button>
            <div className="heroCardContainer">
              <HeroCard subscriberCount="200" text="Active Doctor" />
              <HeroCard subscriberCount="15K" text="Active User" />
              <HeroCard subscriberCount="50" text="Active Pharmacy" />
            </div>
          </div>
          <div className="section1-right">
            <img src={HeroSectionImg} alt="" />
          </div>
          
        </div>
      </Container>
      <Container>
       <div className="section2">
       <div className="group108">
            <img src={group108} alt="" />
          </div>
       </div>

      </Container>

      <Container>
        <div className="section3">
          <div className="titleContainer">
            Our
            <span> Main Services </span>
            Category
          </div>
          <div className="mainServiceCardContainer">
            {mainServiceCardDetailsList.map((el, _index) => {
              return (
                <MainServiceCard
                  Image={el.Image}
                  title={el.title}
                  active={_index === mainServiceCardSelected}
                  onClick={() => {
                    setMainServiceCardSelected(_index);
                  }}
                >
                  {el.desc}
                </MainServiceCard>
              );
            })}
          </div>
        </div>
      </Container>

      <Container>
        <div className="section4">
          <div className="section4-left">
            <img src={SpecialServiceImg} alt="" />
            
          </div>

         
          <div className="section4-right">
            <div className="titleContainer">
              Our <span>Special Services</span>
            </div>
            <div className="para">
            In times like today, your health is very important, 
            especially since the number of COVID-19 cases is
            increasing day by day, so we are ready to help you
            with your health consultation
            </div>
            <div className="spcl-right">
              <SpecialServicesCard
               Image={SpclIcon1}
               title="Covid-19 Test"
               desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Ornare tellus malesuada odio blandit. Sit duis eu nisi 
                     habitant lorem egestas."
              />

              <SpecialServicesCard
               Image={SpclIcon2}
               title="Herbal Suplement"
               desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Ornare tellus malesuada odio blandit. Sit duis eu nisi 
                     habitant lorem egestas."
              />

              <SpecialServicesCard
               Image={SpclIcon3}
               title="Laboratorium Test"
               desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Ornare tellus malesuada odio blandit. Sit duis eu nisi 
                     habitant lorem egestas."
              />
              <SpecialServicesCard
               Image={SpclIcon4}
               title="Menstruation Calendar"
               desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Ornare tellus malesuada odio blandit. Sit duis eu nisi 
                     habitant lorem egestas."
              />
             
            </div>
            <img src={SpclLine} alt=""/>    
          </div>
        </div>
      </Container>
      
      <Container >
        <div className="section5">
          <div className="section5-left">
            <div className="title">Our doctors</div>
            
            <QualifiedServiceCard
              title="Qualified Doctors"
              desc="Handled directly by general doctors and professional
                    and experienced specialists doctors."
              Image={QualImg}
            />
             <Button className="buttonContainer">view All Doctors</Button>

          </div>
          
          <div className="section5-right">
            <img src={QualDoc} alt="" />

            <div className="circles">
            <img src={circle1} alt="" />
            <img src={circle2} alt="" />
            <img src={circle3} alt="" />
            <img src={circle4} alt="" />
            <img src={circle5} alt="" />

            </div>
           
          </div>
        </div>

      </Container>

      <Container>
        <div className="section6">
        

          <GetStartedCard
              title="Get"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales morbi tristique libero urna sem vitae. 
                      Viverra facilisis rhoncus et, nibh nullam vitae laoreet."
          />
          <Button className="buttonContainer">Lets Get started</Button>

          
        </div>
        
      </Container>

      <Container>
        <div className="section7">
       
          
          {footerDetails.map((footerDetails,index) =>{
            return(
            <Footer
            key={index} 
            title={footerDetails.title} 
            desc={footerDetails.desc}
            Image={footerDetails.Image}
           
            ></Footer>
            );
          })} 
        </div>
        <div className="section8">
          <div className="bottom">
          Copyright © 2021. Created with love.
          
          </div>
        </div>
      </Container>




      </div>
    
  );
};

export default Collection;