import React, {useState,useEffect} from 'react'
import logo_desk from "../images/pattern-divider-desktop.svg"
import mob from "../images/pattern-divider-mobile.svg"
import img_dice from "../images/icon-dice.svg"
export default function Main() {
  let [advice,setAdvice]=useState({id:0,doc:""})
  let [generate,setGenerate]=useState(false)
  function handleClick(){
    setGenerate(prev=>!prev)
  
  }
  useEffect(()=>{
    fetch("https://api.adviceslip.com/advice").then((response)=>{
      return response.json()
    }).then((data)=>{
      setAdvice(()=>{
        return data.slip
      })
    })
  },[generate])
  return (
    
    
    <section >
      <p>ADVICE #{advice.id}</p>
      <h1 dangerouslySetInnerHTML={{__html:`"`+ advice.advice + `'`}} />

      <picture>
        <source media="(max-width: 650px)" srcSet={mob} />
        <img src={logo_desk} alt="zq" />
      </picture>
      <div className='relative'>
        <div onClick={handleClick} className='circle'>
          <img  src={img_dice} alt="dice" />
        </div>
      </div>
    </section>
  )
}
