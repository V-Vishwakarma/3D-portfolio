

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const StarClusterMinecraft = (props) => {
    const { nodes, materials } = useGLTF('/models/minecraft-stars.glb')
    const groupRef = useRef()

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.001 // Adjust speed as needed
        }
    })

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_2.geometry}
                material={materials.star}
                rotation={[-Math.PI / 2, 0, 0]}
            />
        </group>
    )
}

useGLTF.preload('/models/minecraft-stars.glb')
export default StarClusterMinecraft;
