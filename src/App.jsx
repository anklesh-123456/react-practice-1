import React, { useState } from 'react'
import './App.css'

const App = () => {
  
  const tabs=[
{lable:'HTML',
content:`HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page.`,
},

{lable:'CSS',
content:`CSS is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.`,
},

{lable:'Javascript',
content:`JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.`,
}


  ]
    
  

const [activeState, SetActiveState] = useState("HTML")

  return (
    <div className='main'>
    <div className='button'>
{tabs.map((tab) =>(
  <button className={activeState === tab.lable && "active"} onClick={() => SetActiveState(tab.lable)}>{tab.lable}</button>
))}

    </div>
    {
      tabs.map((tab) =>(
        activeState === tab.lable &&(
          <p>{tab.content}</p>
        ))
      )
    }



    


  
    </div>
  )
}

export default App

