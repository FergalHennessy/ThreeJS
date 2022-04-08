import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.jsdelivr';

class BasicWorldDemo {
    constructor(){
        this._Initialize();
    }

    _Initialize(){
        this._threejs = new THREE.WebGLRenderer()
    }
}