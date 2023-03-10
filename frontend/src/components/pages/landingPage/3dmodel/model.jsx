import React, { useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"


const Object = () => {
  const canvasRef = useRef(null)
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  const controls = new OrbitControls(camera, renderer.domElement)
  const material = new THREE.MeshBasicMaterial();

  useEffect(() => {
    const canvas = canvasRef.current
    renderer.setSize(window.innerWidth, window.innerHeight)
    canvas.appendChild(renderer.domElement)
    camera.position.z = 1;
    controls.update()
    const light = new THREE.AmbientLight(0xffffff, 1)
    scene.add(light)
    const light2 = new THREE.PointLight(0xffffff, 0.5)
    scene.add(light2)
    material.transparent = true;
    function loadGLTF() {
      let object = new GLTFLoader()
      object.load(
        "./ADN.glb",
        function (gltf) {
          scene.add(gltf.scene)
        },
        function (error) {
          console.log(error)
        }
      )
    }
    loadGLTF()
    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(scene, camera, material)

      // rendered.rotation.y += 0.1;
    }
    animate()
  }, [])

  return (
    <div className="container-canvas">
      <div ref={canvasRef} className="canvas"></div>
    </div>
  )
}

export default Object