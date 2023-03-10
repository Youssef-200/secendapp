import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from "../../assets/hero_image.png";
import Heart from "../../assets/heart.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import {motion} from 'framer-motion';
import NumberCounter from 'number-counter';
const Hero = () => {
    const transition = {type: 'spring' , duration : 3}
    const mobile = window.innerWidth<= 768 ? true :false
  return (
    <div className="hero" id="home">
        <div className="blur hero-blur">

        </div>
        <div className="left-h">
            <Header/>

            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile? '168px':'238px'}}
                whileInView={{left:'8px'}}
                transition={{...transition, type: 'tween'}}
                ></motion.div>
                <span>the best fitness club in the town</span>
            </div>

            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal body</span>
                </div>
                <div>
                    <span>
                            IN HERE WE WILL HELP YOU TO SHARE AND BUILD YOUR IDEAL BODEY AND LIVE UP YOUR LIFE TO FULLEST
                    </span>
                </div>
            </div> 
            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={140} start={100} delay='4' preFix="+"/>
                    </span>
                    <span>expert coachs</span>
                </div>
                <div>
                    <span>
                        <NumberCounter end={978} start={700} delay='4' preFix="+"/>
                    </span>
                    <span>membres joined</span>
                </div>
                <div>
                    <span>
                        <NumberCounter end={50} start={20} delay='4' preFix="+"/>
                    </span>
                    <span>fitness programs</span>
                </div>
            </div>
            <div className="hero-buttons">
                <button className="btn">Get Started</button>
                <button className="btn">Learn More</button>
            </div>
        </div>
        <div className="right-h">
            <button className='btn'>Join Now</button>


            <motion.div
            initial={{right:"-1rem"}}
            whileInView={{right: "4rem"}}
            transition={transition}
            className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </motion.div>
            <img src={hero_image} alt=""  className='hero-image'/>
            <motion.img
                        initial={{right:"11rem"}}
                        whileInView={{right: "20rem"}}
                        transition={transition}
                        src={hero_image_back} alt="" 
                        className='hero-image-back' />
            <motion.div 
                        initial={{right:"37rem"}}
                        whileInView={{right: "28rem"}}
                        transition={transition}
                        className="calories"
                        >
                <img src={Calories} alt="" />
                <div>
                    <span>Calories Burned</span>
                    <span>220 Kcal</span>
                </div>
            </motion.div>
        </div>
    </div>
  );
};

export default Hero