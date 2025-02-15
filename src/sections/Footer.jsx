import React from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
    return (
        <section className='c-space pt-4 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <div className='flex gap-3'>
                <div className='social-icon'>
                    <a href="https://github.com/V-Vishwakarma" target="_blank" rel="noopener noreferrer">
                        <FiGithub className='text-white text-2xl hover:text-gray-400 transition' />
                    </a>
                </div>
                <div className='social-icon'>
                    <a href="https://www.linkedin.com/in/v-vishwakarma/" target="_blank" rel="noopener noreferrer">
                        <FiLinkedin className='text-white text-2xl hover:text-blue-500 transition' />
                    </a>
                </div>
                <div>
                    <p className='text-white-500 text-4xl'>|</p>
                </div>
                <div>
                    <p className='text-white-500 pt-3'>+91 6306192582</p>
                </div>
            </div>
            <p className='text-white-500'>© 2025 Vishwajeet. All right reserved</p>
        </section>
    )
}

export default Footer