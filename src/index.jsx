import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Perf } from 'r3f-perf'
import { KeyboardControls } from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <KeyboardControls
        map={ [
            { name: 'leftward', keys: ['KeyA', 'ArrowLeft'] },
            { name: 'rightward', keys: ['KeyD', 'ArrowRight'] },
            { name: 'forward', keys: ['KeyW', 'ArrowUp'] },
            { name: 'backward', keys: ['KeyS', 'ArrowDown'] },
            { name: 'jump', keys: ['Space'] },
        ] }
    >
        <Canvas
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ 2.5, 4, 6 ]
            } }
        >
            <Perf/>
            <Experience />
        </Canvas>
    </KeyboardControls>
)