'use client';
import React from 'react'
import './Contact.css'
import Image from 'next/image'
import msg_logo from '../../assets/msg-icon.png'
import mail_logo from '../../assets/mail-icon.png'
import phone_logo from '../../assets/phone-icon.png'
import adress_logo from '../../assets/location-icon.png'
import arrowWhite_logo from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e2bf63ef-09c0-4ad3-8dea-dca59376232e");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h1>
                <span>Send us a message</span>
                <Image src={msg_logo} width={36} alt='email'></Image>
            </h1>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li>
                    <Image src={mail_logo} width={26} alt='email'></Image>
                    <span>Contact@me.cz</span>
                </li>
                <li>
                    <Image src={phone_logo} width={26} alt='phone'></Image>
                    <span>+1 123-456-7890</span>
                </li>
                <li>
                    <Image src={adress_logo} width={26} className='height-fix' alt='address'></Image>
                    <span>77 Massachusetts Ave, Cambridge MA 02139, United States</span>
                </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Your name</label>
                <input id='name' type="text" required placeholder='Enter your name' name='name' autoComplete="off" />
                <label htmlFor="phone">Phone number</label>
                <input id='phone' type="tel" required placeholder='Enter your mobile number' name='phone' autoComplete="off" />
                <label htmlFor="email">Your Email</label>
                <input id='email' type="email" required placeholder='Enter your email id' name='email' autoComplete="off" />
                <label htmlFor='input'>Write your messages here</label>
                <textarea id='input' cols="30" rows="3" required placeholder='Enter your message' name="input" autoComplete="off"></textarea>
                <button className='contact-btn'>
                    <span>Submit now</span>
                    <Image src={arrowWhite_logo} width={18} alt='arrow pointing to the right'></Image>
                </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact