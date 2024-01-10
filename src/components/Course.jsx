import React from 'react'
import Course_card from './Course_card'
export default function Course() {
  return (
   <div className="p-course" id='course'>
    <h1>Our Popular Course</h1>
     <div className='course'>
     
     <Course_card/>
     <Course_card img={'image/course/card (2).jpg'}/>
     <Course_card img={'image/course/card (3).jpg'}/>
     <Course_card img={'image/course/card (4).jpg'}/>
     <Course_card img={'image/course/card (5).jpg'}/>
     <Course_card img={'image/course/card (6).jpg'}/>
     <Course_card img={'image/course/card (7).jpg'}/>
     <Course_card img={'image/course/card (8).jpg'}/>
     <Course_card img={'image/course/card9.jpg'}/>
     
     </div>
   </div>
  )
}
