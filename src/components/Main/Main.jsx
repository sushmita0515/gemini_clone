import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context';

const Main = () => {

   const {onSent,recentPrompts,showResult,loading,resultData,setInput,input} = useContext(Context)

   return (
        <div className='Main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main_contaner">

              {!showResult
                ?<>

                <div className="Greet">
                    <p><span>Hello, Sush</span></p>
                    <p>How can i help you?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>What are the top 10 cities in india</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Explain planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>How's the weather today?</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>what is react?</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                </>
                :<div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompts}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading
                        ?<div className='loader'>
                            <hr />
                            <hr />
                            <hr />


                        </div>
                        :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                        } 
                    </div>

                </div>      
    
               }


                <div className="main_bottom">
                    <div className="Search_box">
                        <input  onChange={(e)=>setInput(e.target.value)} value={input}  type="text" placeholder='Enter promt here' />
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={() => onSent()} src={assets.send_icon} alt="" />:null}
                    </div>


                    <p className="bottom_info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur aspernatur quibusdam asperiores culpa repudiandae iure expedita magni saepe officiis officia?</p>



                </div>


            </div>

        </div>
    )
}

export default Main