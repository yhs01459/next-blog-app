'use client';
import classes from "./ContactForm.module.css"
import { useRef } from "react";

const ContactForm = () => {
    const getEmail = useRef();
    const getName = useRef();
    const getMessage = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();
    
        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                email:getEmail.current.value,
                name:getName.current.value,
                message:getMessage.current.value
            }),
            headers: {
                'Content-type':'appication/json',
            }
            
        })
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
        })
    }

    return (
        <section className={classes.contact}>
            <h1>무엇을 도와드릴까요?</h1>
            <form className={classes.form} onSubmit={onSubmitHandler}>
                <div className={classes.control}>
                    <div className={classes.control}>
                        <label htmlFor="email">이메일을 입력하세요</label>
                        <input type='email' id="email" ref={getEmail}></input>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">이름을 입력하세요</label>
                        <input type='text' id='name' ref={getName}></input>
                    </div>
                </div>
                <div className={classes.control}>
                    <label htmlFor="message">문의내용을 입력하세요</label>
                    <textarea id='message' rows='5' ref={getMessage}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>전송</button>
                </div>
                    
            </form>
        </section>
  
    );
}

export default ContactForm;