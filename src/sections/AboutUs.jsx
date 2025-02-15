import { useState } from 'react'
import Globe from 'react-globe.gl'
import { color } from 'three/tsl'
import Button from '../components/Button'
import { FiPhone, FiMail, FiCheck, FiCopy, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';


const AboutUs = () => {

    const [hasCopiedEmail, setHasCopiedEmail] = useState(false);
    const [hasCopiedPhone, setHasCopiedPhone] = useState(false);

    const email = 'vishwajeetwp22@gmail.com';
    const phone = '+91 9876543210'; // Replace with your number

    const handleCopy = (text, type) => {
        navigator.clipboard.writeText(text);
        if (type === 'email') {
            setHasCopiedEmail(true);
            setTimeout(() => setHasCopiedEmail(false), 2000);
        } else if (type === 'phone') {
            setHasCopiedPhone(true);
            setTimeout(() => setHasCopiedPhone(false), 2000);
        }
    };

    return (
        <section className='c-space my-20' id='about'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>

                <div className='cols-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/programmer.gif" alt="grid-1" className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Hi, I am Vishwajeet</p>
                            <p className='grid-subtext'>Not the most experienced, but definitely one of the best you'll find.</p>
                        </div>
                    </div>
                </div>

                {/* <div className='cols-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid2.png" alt="grid2" className='w-full sm:w-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>My Skills</p>
                            <p className='grid-subtext'>I have worked with various technologies like React, Node, Express, MongoDB, etc.</p>
                        </div>
                    </div>
                </div> */}
                <div className='cols-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <div className='grid grid-cols-3 gap-4 justify-center items-center'>
                            <div className='flex flex-col items-center'>
                                <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gray-800'>
                                    <img src="/assets/html-5.png" alt="React" className='w-8 h-8' />
                                </div>
                                <p className='text-center text-sm mt-2 text-white'>HTML 5</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gray-800'>
                                    <img src="/assets/css.png" alt="Node.js" className='w-8 h-8' />
                                </div>
                                <p className='text-center text-sm mt-2 text-white'>CSS</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gray-800'>
                                    <img src="/assets/javascript.png" alt="MongoDB" className='w-8 h-8' />
                                </div>
                                <p className='text-center text-sm mt-2 text-white'>Javascript</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gray-800'>
                                    <img src="/assets/react.svg" alt="MongoDB" className='w-8 h-8' />
                                </div>
                                <p className='text-center text-sm mt-2 text-white'>React</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gray-800'>
                                    <img src="/assets/tailwindcss.png" alt="MongoDB" className='w-8 h-8' />
                                </div>
                                <p className='text-center text-sm mt-2 text-white'>Tailwind</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gray-800'>
                                    <img src="/assets/material-ui.png" alt="MongoDB" className='w-8 h-8' />
                                </div>
                                <p className='text-center text-sm mt-2 text-white'>MUI</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gray-800'>
                                    <img src="/assets/expressjs.png" alt="MongoDB" className='w-8 h-8' />
                                </div>
                                <p className='text-center text-sm mt-2 text-white'>ExpressJS</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gray-800'>
                                    <img src="/assets/nodejs.png" alt="MongoDB" className='w-10 h-10' />
                                </div>
                                <p className='text-center text-sm mt-2 text-white'>NodeJS</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gray-800'>
                                    <img src="/assets/mongodb.png" alt="MongoDB" className='w-8 h-8' />
                                </div>
                                <p className='text-center text-sm mt-2 text-white'>MongoDB</p>
                            </div>
                        </div>
                        <div>
                            <p className='grid-headtext'>My Skills</p>
                            <p className='grid-subtext'>Improving in three.js and Next.js</p>
                        </div>
                    </div>
                </div>


                <div className='cols-span-1 xl:row-span-4'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor='rgba(0,0,0,0)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere={true}
                                showGraticules={true}
                                globeImageUrl={'//unpkg.com/three-globe/example/img/earth-night.jpg'}
                                bumpImageUrl={'//unpkg.com/three-globe/example/img/earth-topology.png'}
                                labelsData={[{ lat: 28.7041, lng: 77.1, color: 'white', size: 20, text: 'Hello' }]}
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>Always Connected</p>
                            <p className='grid-subtext'>No time zone barriers—seamless remote collaboration from India.</p>
                            <a href="#contact" className='w-fit'>
                                <Button name='Contact Me' isBeam containerClass='w-full mt-10' />
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div className=' xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid3.png" alt="grid3" className='w-full sm:h-[266px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>My Additional Skills</p>
                            <p className='grid-subtext'>I have worked on various projects, you can check them out</p>
                        </div>
                    </div>
                </div> */}

                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        {/* additisonal Skills Section */}
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center items-center'>
                            <div className='flex flex-col items-center'>
                                <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gray-800'>
                                    <img src="/assets/java.png" alt="Java" className='w-8 h-8' />
                                </div>
                                <p className='text-center text-sm mt-2 text-white'>Java (DSA)</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gray-800'>
                                    <img src="/assets/communication.png" alt="Communication" className='w-8 h-8' />
                                </div>
                                <p className='text-center text-sm mt-2 text-white'>Communication</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gray-800'>
                                    <img src="/assets/problem-solving.png" alt="Problem Solving" className='w-8 h-8' />
                                </div>
                                <p className='text-center text-sm mt-2 text-white'>Problem Solving</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gray-800'>
                                    <img src="/assets/team-work.png" alt="Teamwork" className='w-8 h-8' />
                                </div>
                                <p className='text-center text-sm mt-2 text-white'>Teamwork</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gray-800'>
                                    <img src="/assets/leadership.png" alt="Leadership" className='w-8 h-8' />
                                </div>
                                <p className='text-center text-sm mt-2 text-white'>Leadership</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-16 h-16 flex items-center justify-center rounded-full bg-gray-800'>
                                    <img src="/assets/critical-thinking.png" alt="Critical Thinking" className='w-8 h-8' />
                                </div>
                                <p className='text-center text-sm mt-2 text-white'>Critical Thinking</p>
                            </div>
                        </div>

                        {/* Additional Skills Info */}
                        <div>
                            <p className='grid-headtext'>My Additional Skills</p>
                            <p className='grid-subtext'>
                                Apart from technical expertise, I excel in problem-solving, teamwork, and leadership.
                                My DSA skills in Java help me approach coding challenges effectively. Communication and
                                critical thinking allow me to collaborate efficiently in diverse environments.
                            </p>
                        </div>

                        {/* Download Button */}
                        <div className='mt-2 flex justify-center'>
                            <Button name='Download Resume📄' isBeam containerClass='sm:w-2/6' onClick={() => window.open('/assets/resume.pdf')} />
                        </div>
                    </div>
                </div>


                {/* <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <div className='space-y-2'>
                            <p className='grid-subtext text-center'>Contact Me</p>
                            <div className='copy-container' onClick={handleCopy}>
                                <img src={hasCopy ? 'assets/tick.svg' : 'assets/copy.svg'} alt="" />
                                <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>vishwajeetwp22@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container space-y-4'>
                        <p className='grid-subtext text-center'>Contact Me</p>

                        {/* Contact Options */}
                        <div className='flex flex-col items-center gap-4'>

                            {/* Email Copy */}
                            <div className='copy-container flex items-center gap-2 cursor-pointer' onClick={() => handleCopy(email, 'email')}>
                                {hasCopiedEmail ? <FiCheck className='text-green-500 text-xl' /> : <FiMail className='text-white text-xl' />}
                                <p className='lg:text-xl md:text-lg font-medium text-gray_gradient text-white'>{email}</p>
                            </div>

                            {/* Phone Copy */}
                            <div className='copy-container flex items-center gap-2 cursor-pointer' onClick={() => handleCopy(phone, 'phone')}>
                                {hasCopiedPhone ? <FiCheck className='text-green-500 text-xl' /> : <FiPhone className='text-white text-xl' />}
                                <p className='lg:text-xl md:text-lg font-medium text-gray_gradient text-white'>{phone}</p>
                            </div>

                            {/* Social Links */}
                            <div className='flex gap-6'>
                                <a href="https://github.com/V-Vishwakarma" target="_blank" rel="noopener noreferrer">
                                    <FiGithub className='text-white text-2xl hover:text-gray-400 transition' />
                                </a>
                                <a href="https://www.linkedin.com/in/v-vishwakarma/" target="_blank" rel="noopener noreferrer">
                                    <FiLinkedin className='text-white text-2xl hover:text-blue-500 transition' />
                                </a>
                                {/* <a href="https://instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
                                    <FiInstagram className='text-white text-2xl hover:text-pink-500 transition' />
                                </a> */}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutUs