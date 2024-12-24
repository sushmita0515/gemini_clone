import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'



const Sidebar = () => {

    const [extended, setExtended] = useState(false)
    const {onSent,prevPrompts,setRecentPrompts,newChat} = useContext(Context)

    const loadPrompt = async (prompt) =>{
        setRecentPrompts(prompt)
        await onSent(prompt)
    }
    return (
        <div className='Sidebar'>
            <div className="top">
                <img onClick={()=>setExtended(prev=>!prev)} className='Menu' src={assets.menu_icon} />
                <div onClick={()=>newChat()}className="newchat">
                    <img src={assets.plus_icon} />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent_tilte">Recent</p>
                        {
                            prevPrompts.map((item, index) => {
                                return(

                                    <div onClick={()=>loadPrompt(item)} className="recent_entry">
                                    <img src={assets.message_icon} alt="" />
                                    <p>{item.slice(0,18)}....</p>
                                   </div>    
                                )
                            })
                        }
                        
                        
                    </div> : null}
            </div>
            <div className="bottom">
                <div className="bottom_item recent_entry">
                    <img src={assets.question_icon} alt="" />
                    {extended?<p>Help</p> :null}

                </div>
                <div className="bottom_item recent_entry">
                    <img src={assets.history_icon} alt="" />
                    {extended?<p>Activities</p>:null}

                </div>
                <div className="bottom_item recent_entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended?<p>Settings</p>:null}

                </div>

            </div>

        </div>
    )
}

export default Sidebar 