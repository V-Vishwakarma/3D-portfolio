// import { PerspectiveCamera, Ring } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import React, { Suspense } from 'react'
// import CanvasLoader from '../components/CanvasLoader'
// import HackerRoom from '../components/HackerRoom'
// import { Leva, useControls } from 'leva'
// import { useMediaQuery } from 'react-responsive'
// import { calculateSizes } from '../constants'
// import Target from '../components/Target'
// import ReactLogo from '../components/ReactLogo'
// import Cube from '../components/Cube'
// import Rings from '../components/Rings'
// import HeroCamera from '../components/HeroCamera'
// import Button from '../components/Button'

// const Hero = () => {

//     // const controls = useControls('HackerRoom', {
//     //     positionX: { value: 2.5, min: -10, max: 10 },
//     //     positionY: { value: 2.5, min: -10, max: 10 },
//     //     positionZ: { value: 2.5, min: -10, max: 10 },
//     //     rotationX: { value: 0, min: -10, max: 10 },
//     //     rotationY: { value: 0, min: -10, max: 10 },
//     //     rotationZ: { value: 0, min: -10, max: 10 },
//     //     scale: { value: 1, min: 0.1, max: 10 },
//     // })

//     const isSmall = useMediaQuery({ maxWidth: 480 })
//     const isMobile = useMediaQuery({ maxWidth: 768 })
//     const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

//     const sizes = calculateSizes(isSmall, isMobile, isTablet)

//     return (
//         <section className='min-h-screen w-full flex flex-col relative'>
//             <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
//                 <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
//                     Hi, I'm Vishwajeet <span className='waving-hand'>👋</span>
//                 </p>
//                 <p className='hero_tag text-gray_gradient'>
//                     Building things for the web
//                 </p>
//             </div>

//             <div className='w-full h-full absolute inset-0'>
//                 {/* <Leva /> */}
//                 <Canvas className='w-full h-full'>
//                     <Suspense fallback={<CanvasLoader />}>
//                         <PerspectiveCamera makeDefault position={[0, 0, 108]} />

//                         <HeroCamera isMobile={isMobile}>
//                             <HackerRoom
//                                 // scale={0.07} 
//                                 //postion={[0, 0, 0]}
//                                 //rotation={[0, 0, 0]}

//                                 // with leva
//                                 // position={[1.3, -9.9, 5.3]}
//                                 // rotation={[0.4, -9.4, 0.0]}
//                                 // scale={[0.1, 0.1, 0.1]}

//                                 //with math
//                                 // position={isMobile ? [1.1, -5.1, 5.3] : [1.3, -9.9, 5.3]}
//                                 // rotation={[0.19, -Math.PI, 0.0]}
//                                 // scale={isMobile ? [0.07, 0.07, 0.07] : [0.1, 0.1, 0.1]}

//                                 //using from index.js
//                                 position={sizes.deskPosition}
//                                 rotation={[0.0, -Math.PI, 0.0]}
//                                 scale={sizes.deskScale}
//                             />
//                         </HeroCamera>
//                         <group>
//                             <Target position={sizes.targetPosition} scale={1.3} />
//                             <ReactLogo position={sizes.reactLogoPosition} />
//                             <Cube position={sizes.cubePosition} />
//                             <Rings position={sizes.ringPosition} />

//                         </group>

//                         <ambientLight intensity={1} />
//                         <directionalLight intensity={0.5} position={[10, 10, 10]} />
//                     </Suspense>
//                 </Canvas>
//             </div>

//             <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
//                 <a href="#about" className='w-fit'>
//                     <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
//                 </a>
//             </div>
//         </section>
//     )
// }

// export default Hero





// for spaceship
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import CanvasLoader from '../components/CanvasLoader'
import HackerRoom from '../components/HackerRoom'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Rings from '../components/Rings'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'
import StarCluster from '../components/StarCluster'
import StarClusterMinecraft from '../components/StarClusterMinecraft'


const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 480 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })
    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    const [rotation, setRotation] = useState([0.0, -Math.PI, 0.1])
    const [position, setPosition] = useState(sizes.deskPosition)

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event
            const x = (clientX / window.innerWidth - 0.5) * 0.5 // Normalize between -1 and 1
            const y = (clientY / window.innerHeight - 0.5) * 0.5

            // Amplify movement for a more dramatic effect
            const amplificationFactor = 2.5

            setRotation([y * amplificationFactor, -Math.PI + x * amplificationFactor, 0])
            setPosition([
                sizes.deskPosition[0] + x * amplificationFactor,
                sizes.deskPosition[1] + y * amplificationFactor,
                sizes.deskPosition[2],
            ])
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [sizes.deskPosition])

    return (
        <section className='min-h-screen w-full flex flex-col relative' id='home'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>
                    Hi, I'm Vishwajeet <span className='waving-hand'>👋</span>
                </p>
                <p className='hero_tag text-gray_gradient'>
                    {/* Code is poetry, and the browser is my canvas */}
                    Code compiles; imagination doesn’t.
                </p>
            </div>

            <div className='w-full h-full absolute inset-0'>
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 100]} />

                        {/* Extra Lighting */}
                        <ambientLight intensity={1.5} />  {/* Increases general brightness */}

                        <directionalLight
                            intensity={1.2}
                            position={[5, 10, 5]}
                            castShadow
                        />

                        <pointLight
                            position={[2, 2, 2]}
                            intensity={3}
                            color={"#ff007f"}
                        />

                        <spotLight
                            position={[-5, 10, 5]}
                            angle={0.5}
                            penumbra={0.3}
                            intensity={2.5}
                            color={"#00ffff"}
                            castShadow
                        />

                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                position={sizes.deskPosition}
                                rotation={rotation}
                                scale={sizes.deskScale}
                            />
                        </HeroCamera>

                        <group>
                            {/* <Target position={sizes.targetPosition} scale={1.3} /> */}
                            <ReactLogo position={sizes.reactLogoPosition} />
                            {/* <Cube position={sizes.cubePosition} /> */}
                            <Rings position={sizes.ringPosition} />
                            <StarClusterMinecraft position={sizes.StarClusterMinecraft} />
                        </group>

                    </Suspense>

                </Canvas>
            </div>

            <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                <a href="#about" className='w-fit'>
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}

export default Hero






























