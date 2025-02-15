import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const CanvasLoader = () => {
    const { progress } = useProgress()      // it will render from 1 to 100

    return (
        <Html as='div'
            center
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}>
            <span className='canvas-loader' />
            <p
                style={{
                    fontSize: '1.5rem',
                    color: '#f1f1f1',
                    fontWeight: '800',
                    marginTop: '1rem',
                }}
            >
                {progress !== 100 ? `${progress.toFixed(2)}%` : 'Loading...'}
            </p>
        </Html>
    )
}

export default CanvasLoader