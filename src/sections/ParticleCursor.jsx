// import React, { useEffect, useState } from "react";

// const ParticleCursor = () => {
//     const [position, setPosition] = useState({ x: 0, y: 0 });
//     const [rotation, setRotation] = useState(0);
//     const [clicked, setClicked] = useState(false);
//     const [particles, setParticles] = useState([]);

//     useEffect(() => {
//         const moveCursor = (e) => {
//             const { clientX, clientY, movementX, movementY } = e;
//             setPosition({ x: clientX, y: clientY });

//             // Calculate rotation based on movement
//             const angle = Math.atan2(movementY, movementX) * (180 / Math.PI);
//             setRotation(angle);

//             // Add particles
//             setParticles((prevParticles) => [
//                 ...prevParticles,
//                 { id: Date.now(), x: clientX, y: clientY, angle: angle }
//             ]);
//         };

//         const handleClick = () => {
//             setClicked(true);
//             setTimeout(() => setClicked(false), 200);
//         };

//         window.addEventListener("mousemove", moveCursor);
//         window.addEventListener("click", handleClick);

//         return () => {
//             window.removeEventListener("mousemove", moveCursor);
//             window.removeEventListener("click", handleClick);
//         };
//     }, []);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setParticles((prevParticles) =>
//                 prevParticles.filter((particle) => Date.now() - particle.id < 500)
//             );
//         }, 50);

//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <>
//             <div
//                 style={{
//                     position: "fixed",
//                     left: position.x,
//                     top: position.y,
//                     transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${clicked ? 1.5 : 1})`,
//                     pointerEvents: "none",
//                     transition: "transform 0.1s ease-out",
//                     fontSize: "30px",
//                     zIndex: 1000,
//                 }}
//             >
//                 🚀
//             </div>
//             {particles.map((particle) => (
//                 <div
//                     key={particle.id}
//                     style={{
//                         position: "fixed",
//                         left: particle.x,
//                         top: particle.y,
//                         transform: `translate(-50%, -50%) rotate(${particle.angle}deg)`,
//                         pointerEvents: "none",
//                         fontSize: "20px",
//                         opacity: (500 - (Date.now() - particle.id)) / 500,
//                         transition: "opacity 0.1s ease-out",
//                         zIndex: 999,
//                     }}
//                 >
//                     ✨
//                 </div>
//             ))}
//         </>
//     );
// };

// export default ParticleCursor;










import React, { useEffect, useState } from "react";

const ParticleCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
    const [rotation, setRotation] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [particles, setParticles] = useState([]);
    const [color, setColor] = useState("#ff6f61");

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX, clientY, movementX, movementY } = e;
            setPosition({ x: clientX, y: clientY });

            // Calculate rotation based on movement
            const angle = Math.atan2(movementY, movementX) * (180 / Math.PI);
            setRotation(angle);

            // Add particles with random sizes and velocities
            setParticles((prevParticles) => [
                ...prevParticles,
                {
                    id: Date.now(),
                    x: clientX,
                    y: clientY,
                    size: Math.random() * 10 + 5,
                    velocityX: (Math.random() - 0.5) * 10,
                    velocityY: (Math.random() - 0.5) * 10,
                    opacity: 1,
                    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
                },
            ]);
        };

        const handleClick = () => {
            setClicked(true);
            setTimeout(() => setClicked(false), 200);
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("click", handleClick);
        };
    }, []);

    useEffect(() => {
        // Smooth the cursor position using linear interpolation (lerp)
        const smoothCursor = () => {
            setSmoothPosition((prev) => ({
                x: prev.x + (position.x - prev.x) * 0.1,
                y: prev.y + (position.y - prev.y) * 0.1,
            }));
        };

        const animationFrame = requestAnimationFrame(smoothCursor);
        return () => cancelAnimationFrame(animationFrame);
    }, [position]);

    useEffect(() => {
        // Update particles' positions and opacity
        const updateParticles = () => {
            setParticles((prevParticles) =>
                prevParticles
                    .map((particle) => ({
                        ...particle,
                        x: particle.x + particle.velocityX,
                        y: particle.y + particle.velocityY,
                        opacity: particle.opacity - 0.02,
                    }))
                    .filter((particle) => particle.opacity > 0)
            );
        };

        const particleInterval = setInterval(updateParticles, 16);
        return () => clearInterval(particleInterval);
    }, []);

    useEffect(() => {
        // Change cursor color randomly every 2 seconds
        const colorInterval = setInterval(() => {
            setColor(`hsl(${Math.random() * 360}, 100%, 70%)`);
        }, 2000);

        return () => clearInterval(colorInterval);
    }, []);

    return (
        <>
            {/* Main Cursor */}
            <div
                style={{
                    position: "fixed",
                    left: smoothPosition.x,
                    top: smoothPosition.y,
                    transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${clicked ? 1.5 : 1})`,
                    pointerEvents: "none",
                    transition: "transform 0.1s ease-out, background 0.5s ease",
                    fontSize: "30px",
                    zIndex: 1000,
                    color: color,
                    filter: `drop-shadow(0 0 10px ${color})`,
                }}
            >
                🚀
            </div>

            {/* Particles */}
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    style={{
                        position: "fixed",
                        left: particle.x,
                        top: particle.y,
                        transform: `translate(-50%, -50%)`,
                        pointerEvents: "none",
                        fontSize: `${particle.size}px`,
                        opacity: particle.opacity,
                        color: particle.color,
                        filter: `blur(${particle.opacity * 2}px)`,
                        transition: "opacity 0.1s ease-out",
                        zIndex: 999,
                    }}
                >
                    ✨
                </div>
            ))}
        </>
    );
};

export default ParticleCursor;