import React from 'react';
import './App.css'
import { useLocation, useNavigate } from 'react-router-dom'
const Imgview = () => {
    let location = useLocation()
    let swipe = useNavigate()

    return (
        <section className='image-inp'>
            <nav>
                <button onClick={() => {
                    swipe('/')
                }}> Back to home</button>
            </nav>
          <section className='ch-imginp'>
          <div className='ch1'>
                <img src={location.state.state1} alt="" />
                <br />
                <button>Subscribe </button>
            </div>
            <div className='ch2'>
                <h3>{location.state.state2}</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quam, consectetur sunt delectus corporis explicabo? Sequi ipsum expedita, harum quasi deserunt voluptates architecto aperiam excepturi eius nostrum tempora, consectetur odio.
                Culpa, reprehenderit soluta sint impedit quisquam similique nihil atque debitis quas at animi nesciunt ipsum! Quod velit odio sequi autem fugit nostrum, omnis distinctio delectus, repellendus nesciunt consequatur unde error!
                Omnis error assumenda soluta harum debitis, cumque, nostrum quos dolore aperiam aspernatur, quia mollitia reiciendis repudiandae enim iste sunt corrupti tempore nihil? Facere labore reprehenderit, officiis eligendi soluta sequi! Perferendis?
                Facilis libero vel autem dolorum beatae maiores hic minus eos quod fugit quo, tempora odio laudantium perspiciatis quae quidem, quas earum corporis dolorem numquam suscipit dolores illum repudiandae accusantium. Incidunt!
                Error esse quas delectus modi saepe? Quia, praesentium id dolore quos tenetur eveniet rerum soluta veritatis? Ullam at officia alias nihil! Eos, omnis architecto! A, reprehenderit voluptatibus. Quibusdam, rerum saepe.
                Animi officiis soluta, perspiciatis, laborum maiores tempore voluptates omnis qui corrupti neque unde quis atque eum praesentium in ducimus sunt porro labore optio laboriosam iure cupiditate alias. Dignissimos, recusandae fugiat!
                Non officia blanditiis fugiat nulla ipsum quisquam cupiditate obcaecati reiciendis suscipit aperiam magnam quis molestiae, dicta excepturi impedit sapiente ut quos eaque. Tempore aut iusto vitae quam numquam laboriosam temporibus.
                Inventore facere optio, possimus pariatur beatae, aliquam architecto, doloribus aliquid officiis sit ut voluptas ipsum accusamus atque exercitationem dolore! Aliquid incidunt cum similique minima magni non accusantium! Aperiam, expedita quam.
               </p>
               <marquee behavior="" direction="" >
                <h2 style={{marginTop:'20px'}}>Thanks.....!</h2>
               </marquee>
            </div>
          </section>
        </section>
    );
}

export default Imgview;
