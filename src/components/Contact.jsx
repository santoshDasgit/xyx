import React from 'react';
import '../App.css'
const Contact = () => {
    return (
       <div className="p-contact" id='contact'>
       <center>
       <h1>HAVE ANY QUESTION</h1>
       </center>
         <section className='contact' >
            <div className='child1'>
                <img src="/image/contact/img.jpg" alt="" />
            </div>
            <div className='child2'>
              
               
                    <div className='link'>
                        <a href="#">NALANDA</a><a href="#">dsantosg366@gmail.com</a>
                    </div>
            
                <div className="input">
                    <input type="text" name="" id="" placeholder='First name' />
                    <input type="text" name="" id="" placeholder='Last name' />
                    <input type="text" name="" id="" placeholder='Enter Email' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Enter massage'></textarea>
                </div>
                <div className='btn'>
                    <form >
                        <button type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
       </div>
    );
}

export default Contact;
