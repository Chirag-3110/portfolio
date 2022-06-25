import React from 'react';
import {Canvas} from '@react-three/fiber';
import { BoxBufferGeometry } from 'three';
import { MeshLambertMaterial } from 'three';
function Modal(){
    return(
        <mesh>
            <BoxBufferGeometry attach="geometry" />
            <MeshLambertMaterial attach="material" color="blue" />
        </mesh>
    )
}
export default Modal;