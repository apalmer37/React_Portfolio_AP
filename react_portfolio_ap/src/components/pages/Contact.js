import React from 'react';
import "./pagesCss/contact.css"


export default function Contact() {
  const handleFormSubmit = (e)=>{
    e.preventDefault();
}
return(
    <div className="contact" id="contact">
        <h1>Contact</h1>
            <div className="contact">
                
                <form onSubmit={handleFormSubmit}>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>

                
            
        </div>

    </div>
  );
}
