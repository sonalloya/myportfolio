import React, {useState} from 'react'; 
import { sendMessage } from '../api'; 


export default function ContactForm(){ 
    const [status, setStatus] = useState(''); 
    
    const handleSubmit = async (e) => { 
        e.preventDefault(); 
        const form = new FormData(e.target); 
        const payload = { 
            name: form.get('name'), 
            email: form.get('email'), 
            message: form.get('message') 
        }; 
        try{ 
            await sendMessage(payload); 
            setStatus('Message sent — thanks!'); 
            e.target.reset(); 
         }catch(err){ 
            console.error(err); 
            setStatus('Failed to send.'); 
        } 
    } 
    
    return ( 
        <section className="contact">
             <h2>Contact</h2> 
             <form onSubmit={handleSubmit}> 
                <input name="name" placeholder="Your name" required /> <br></br><br></br>
                <input name="email" placeholder="Email" type="email" required /><br></br> <br></br>
                <textarea name="message" placeholder="Message" required /> <br></br>
                <button type="submit">Send</button> 
             </form> 
             <p>{status}</p> 
        </section> 
    ); 
}