import React from 'react'
import'../App.css'
export default function Login(props) {
  return (
    <section className='p-login'>
     <div className='login' >
        <div className='cross'><i class="fa-solid fa-xmark" onClick={props.cross}></i></div>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Email'/>
        <input type="password" placeholder='password'/>
        <input type="password" placeholder='same password'/>
        <button type='submit'>Submit</button>
     </div>
    </section>
  )
}
