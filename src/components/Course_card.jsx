import { NavLink ,Navigate,useNavigate } from "react-router-dom"
export default function Course_card(props){
    let nevigate = useNavigate()
    return(
        <section className="course-card">
           
            <img src={props.img} alt="" />
            <h5> {props.text}  </h5>
            <div className="pos">
               {/* <NavLink className='card_link' to={'/image/:imgview'}>Join</NavLink> */}
               <button className='card_link' onClick={()=>{
               nevigate('/image',{state:{state1:props.img,state2:props.text}})
               }}>view</button>
               
            </div>
        </section>
    )
}
Course_card.defaultProps = {
img:'image/course/card (1).jpg',
text:'Course-name'
}