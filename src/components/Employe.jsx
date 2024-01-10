import React from 'react'
import '../App.css'
import Employeecard from './Employeecard'

export default function Employe() {
  return (
    <section className='employee'>
      <div className="ch-emp">
        <div className="div-emp">
         <h2>  Our Teachers </h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus optio deserunt repellat . </p>
        </div>
        <div className="card-emp">
        <Employeecard img={"image/emp/emp (2).jpg"} name={'Santosh Das'} exp={5} background={'m.tech'} />
        <Employeecard img={"image/emp/emp (1).jpg"} name={'rawodi das'} exp={6} background={'m.tech'}/>
        <Employeecard img={"image/emp/emp (3).jpg"} name={'akhil panda'} exp={10} background={'phd'}/>

        </div>
      </div>
    </section>
  )
}
