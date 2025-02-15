import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {

    const formRef = useRef();
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }

    // service_kw384dz
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            emailjs.send(
                'service_kw384dz',
                'template_mjd1ba1',
                {
                    from_name: form.name,
                    to_name: "Vishwajeet",
                    from_email: form.email,
                    to_email: 'vishwajeet0573@gmail.com',
                    message: form.message
                },
                'tZ11A_BD1x4Net1B9'
            )
            setLoading(false);
            alert('Your message has been sent!')
            setForm({
                name: '',
                email: '',
                message: '',
            })
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went worng')
        }
    }
    return (
        <section className='c-space my-20' id='contact'>
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                {/* <img src="/assets/terminal.png" alt="terminal" className='absolute inset-0 min-h-screen' /> */}
                <img
                    src="/assets/terminal.png"
                    alt="terminal"
                    className="absolute inset-0 min-w-full h-full xl:h-auto md:h-[55rem] sm:h-[55rem]"
                />
{/* md:h-screen */}
                <div className='contact-container'>
                    <h3 className='head-text'>
                        Let's Talk
                    </h3>
                    <p className='text-lg text-white-600 mt-3'>
                        Whether you're looking to build a new website, improve your existing platorm, or bring a unique project to life, I'm here to help.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3'>
                            <span className='field-label'>
                                Full Name
                            </span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='Your name'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>
                                Email
                            </span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='Your Email'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>
                                Your Message
                            </span>
                            <textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className='field-input'
                                placeholder="Hi, I'm intersted in..."
                            />
                        </label>
                        <button className='field-btn' type='Submit' disabled={loading}>
                            {loading ? "Sending ..." : "Send Message"}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact