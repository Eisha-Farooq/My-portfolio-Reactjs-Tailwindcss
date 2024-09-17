import React, { useState } from 'react'
import Title from '../Title'
import Contactleft from './Contactleft'

const Contact = () => {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const emailValidation =()=>{
        return String(email)
        .toLocaleLowerCase()
        .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    }

    const handleSend = (e) => {
        e.preventDefault()
        if (username === "") {
            setErrMsg("Username is required!");
        }
        else if (phoneNumber === "") {
            setErrMsg("Phone Number is required!");
        }
        else if (email === "") {
            setErrMsg("Please give your Email!");
        }
        else if (!emailValidation(email)) {
            setErrMsg("Give a Valid Email!")
        }
        else if (subject === "") {
            setErrMsg("Please give your Subject!");
        }
        else if (message === "") {
            setErrMsg("Please give your Message!");
        }
        else {
            setSuccessMsg(`Thank you dear ${username}, Your Messages has been send successfully!`);
            setErrMsg("")
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
    }
    return (
        <section id="contact" className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center items-center text-center p-10'>
                <Title title="CONTACT" des="Contact With Me" />
            </div>
            <div className='w-full '>
                <div className='w-full h-auto flex flex-col lg:flex-row justify-between'>
                    <Contactleft />
                    <div className='w-full lg:w-[60%] h-full py-10 mt-8 lg:mt-0 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lg:p-9 rounded-lg shadow-lg shadow-white flex flex-col gap-8'>
                        <form className='w-full flex flex-col gap-4 lg:gap-6 py-2 lg:py-3'>
                            {
                                errMsg && <p className=' py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-white shadow-md text-center text-red-500 text-base tracking-wide animate-bounce'>{errMsg}</p>
                            }
                            {
                                successMsg && <p className=' py-3 bg-gradient-to-r from-[#1e
                                2024] to-[#23272b] shadow-white shadow-md text-center text-green-500 text-base
                                tracking-wide animate-bounce'>{successMsg}</p>
                            }
                            <div className='w-full flex flex-col lg:flex-row gap-10'>
                                <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>
                                        YOUR NAME
                                    </p>
                                    <input onChange={(e) => setUsername(e.target.value)} value={username}
                                        className='contactInput' type="text" />
                                </div>
                                <div className='w-full lg:w-1/2 flex flex-col gap-4'>
                                    <p className='text-sm text-gray-400 uppercase tracking-wide'>
                                        phone number
                                    </p>
                                    <input onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} className='contactInput' type="text" />
                                </div>
                            </div >
                            <div className='flex flex-col gap-4'>
                                <p className='text-sm text-gray-400 uppercase tracking-wide'>
                                    email
                                </p>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} className='contactInput' type="email" />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='text-sm text-gray-400 uppercase tracking-wide'>
                                    subject
                                </p>
                                <input onChange={(e) => setSubject(e.target.value)} value={subject} className='contactInput' type="text" />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <p className='text-sm text-gray-400 uppercase tracking-wide'>
                                    message
                                </p>
                                <textarea onChange={(e) => setMessage(e.target.value)} value={message} className='contactTextArea' cols="30" rows="11" ></textarea>
                            </div>
                            <div className='w-full'>
                                <button onClick={handleSend} className='w-full h-12 rounded-lg bg-[#141518] text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-red-800 border-transparent'>Send Message</button>
                            </div>
                            {
                                errMsg && <p className=' py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-white text-center text-red-500 text-base tracking-wide animate-bounce'>{errMsg}</p>
                            }
                             {
                                successMsg && <p className=' py-3 bg-gradient-to-r from-[#1e
                                2024] to-[#23272b] shadow-white shadow-md text-center text-green-500 text-base
                                tracking-wide animate-bounce'>{successMsg}</p>

                            }
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact