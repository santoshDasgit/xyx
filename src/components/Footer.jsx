import React from 'react';
import '../App.css'
const Footer = () => {
    return (
        <section className="p-footer" style={{marginTop:'30px'}}>
            <div className="footer">
                <div className='ch11'>
                    <a href="#">Home </a>
                    <a href="#">about </a>
                    <a href="#">Course</a>
                    <a href="#">Contact</a>
                    <a href="#">Log-in</a>
                </div>
                <div className='ch22'>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-solid fa-envelope"></i></a>
                </div>
                <div className='ch33'>
                    <img src="image/logo.jpg" alt=""  />

                    
                </div>
            </div>
        </section>
    );
}

export default Footer;
