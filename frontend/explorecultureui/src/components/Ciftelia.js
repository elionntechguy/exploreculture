import React, { Component } from 'react'
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import cifteli from '../assets/cifteli.gltf';

class Ciftelia extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ar: {}
        };
    }

    componentDidMount() {
        // const { scene } = this.refs;
        // this.setState({ scene });

        let scene = new THREE.Scene();
        scene.background = new THREE.Color(0xdddddd);
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 ); 
        camera.position.z = 25; 
        camera.position.y = 15; 

        var light = new THREE.DirectionalLight("#c1582d", 1);
        var ambient = new THREE.AmbientLight("#85b2cd");
        light.position.set( 0, -70, 100 ).normalize();
        scene.add(light);
        scene.add(ambient);

        let renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.setClearColor(0x00ffff, 1); 
        renderer.gammaOutput = true;
        this.mount.appendChild( renderer.domElement );


        const controls = new OrbitControls(camera, renderer.domElement);

        var animate = function () {
        requestAnimationFrame( animate );
        controls.update();
        renderer.render( scene, camera );
        };

        let loader = new GLTFLoader();
        loader.load(
        'http://127.0.0.1:8000/media/ar/cifteli.gltf',
        ( gltf ) => {
            let mesh = gltf.scene;
            mesh.scale.set( 10, 10, 10 );
            scene.add( mesh );
        });

        animate();


    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            // this.setState({
            //     ar: this.props
            // })
            // let list = [];
            // this.props.ar.forEach(element => {
            //     list.push(element.Arfile);
            // });
            // console.log(list);
        }
    }


    render() {
        return (
            <div ref={ref => (this.mount = ref)} />
        );
    }
}

export default Ciftelia
