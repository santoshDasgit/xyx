import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css'
import Login from './Login';


export default function Nav() {
  let [pos,setPos] = useState(false)
  let [disp,setDisp] = useState(false)
  let fn=()=>{
    setPos(!pos)
  }

  let logIn=()=>{
   setDisp(!disp)
   setPos(!pos)
  }

  let cross=()=>{
    setDisp(!disp)

  }
  return (
   <React.Fragment>
        <section className='nav'>
      <div className='left'>
        Logo 
        <i class= {pos?"fa-solid fa-xmark":"fa-solid fa-bars"} id='menu_icon'  onClick={fn}></i>
        
      </div>
      <div className={pos?'right':'right right_disp'} >
        <NavLink className={'link'}  onClick={fn} to={'#home'}>Home</NavLink>
        <a className={'link'} onClick={fn} href='#about'>about</a>
        <a className={'link'} onClick={fn} href='#course'>Course</a>
        <a className={'link'} onClick={fn} href='#contact'>Contact</a>
        <NavLink className={'link'} onClick={logIn} to={''}>Log-in</NavLink>
      </div>
      
    </section>

    {
      (()=>{
        if (disp) {
         return <Login cross={cross}/>
        }
      })()
    }

   </React.Fragment>
        
        
  )
}
