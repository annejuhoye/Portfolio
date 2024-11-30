"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import Link from "next/link";

const Heartbit = () => {
  const mountRef = useRef(null); // Référence pour le conteneur
  const canvasRef = useRef(null); // Référence pour le canvas

  useEffect(() => {
    const mount = mountRef.current;
    const canvas = canvasRef.current;

    if (!mount || !canvas) {
      console.error("Mount ref or canvas ref is not available.");
      return;
    }

    // Configuration de la scène, caméra et renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      600 /400,
      0.1,
      100000
    );
    camera.position.set(20, 60, 300);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setSize(600, 400);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Contrôles de caméra
    const controls = new OrbitControls(camera, canvas);

    // Lumières
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(50, 50, 50);
    scene.add(directionalLight);

    /*****************MOUVEMENT CAMERA**************************** */

    // Position initiale et cible
    const initialPosition = new THREE.Vector3(20, 60, 300);
    const targetPosition = new THREE.Vector3(0, 40, 150); // Position près du Heartbit et du personnage

    // Fonction pour déplacer la caméra vers une position cible
    function moveCameraToTarget(onComplete) {
        const delay = 100;
        const duration = 2; // Durée de l'animation en secondes
        const steps = 60 * duration; // Nombre d'étapes de l'animation (60 FPS)
        let currentStep = 0;

        const startPos = camera.position.clone();

        setTimeout(() => {
            // Animation de la caméra
            const interval = setInterval(() => {
                currentStep++;
                const t = currentStep / steps; // Proportion de progression (de 0 à 1)

                // Interpolation de la position
                camera.position.lerpVectors(startPos, targetPosition, t);

                // Fin de l'animation
                if (currentStep >= steps) {
                    clearInterval(interval);
                    if (onComplete) onComplete(); // Appelle la fonction de retour après l'animation
                }
            }, 1000 / 60); // Exécuter chaque frame (environ 16 ms pour 60 FPS)
        }, delay);
    }

    // Fonction pour ramener la caméra à sa position initiale
    function moveCameraBackToInitial() {
        const duration = 2; // Durée de l'animation en secondes
        const steps = 60 * duration; // Nombre d'étapes de l'animation (60 FPS)
        let currentStep = 0;

        const startPos = camera.position.clone();

        // Animation de la caméra
        const interval = setInterval(() => {
            currentStep++;
            const t = currentStep / steps; // Proportion de progression (de 0 à 1)

            // Interpolation de la position
            camera.position.lerpVectors(startPos, initialPosition, t);

            // Fin de l'animation
            if (currentStep >= steps) {
                clearInterval(interval);
            }
        }, 1000 / 60); // Exécuter chaque frame (environ 16 ms pour 60 FPS)
    }

    // Événement pour la touche `U` : Aller vers la cible, puis retour automatique
    window.addEventListener('keydown', (event) => {
        if (event.key === 'u' || event.key === 'U') {
            // Aller vers la cible
            moveCameraToTarget(() => {
                // Attendre 5 secondes avant de revenir
                setTimeout(() => {
                    moveCameraBackToInitial();
                }, 5000); // Délai de 5 secondes
            });
        }
    });

    //  Sol
    const textureLoader = new THREE.TextureLoader();
    const parquetTexture = textureLoader.load("/assets/parquet.jpg");
    parquetTexture.encoding = THREE.sRGBEncoding;
    const floorMaterial = new THREE.MeshStandardMaterial({
      map: parquetTexture,
      roughness: 0.8,
      metalness: 0.2,
    });
    const floorGeometry = new THREE.PlaneGeometry(300, 300);
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(-50, -70, 135);
    scene.add(floor);

    /* ---------------MUR---------------------- */
    const wallMaterial = new THREE.MeshStandardMaterial({ color: 0x879F7D }); // Kaki
    const wallGeometry = new THREE.PlaneGeometry(300, 200);
    const wallbehindGeometry = new THREE.PlaneGeometry(300,200);
    // Mur gauche
    const leftWall = new THREE.Mesh(wallGeometry, wallMaterial);
    leftWall.rotation.y = Math.PI / 2; 
    leftWall.position.set(-200, 30, 135); 
    scene.add(leftWall);
    // Mur droit
    const rightWall = new THREE.Mesh(wallGeometry, wallMaterial);
    rightWall.rotation.y = -Math.PI / 2; 
    rightWall.position.set(100, 30, 135); 
    scene.add(rightWall);
    // Mur arrière
    const backWall = new THREE.Mesh(wallbehindGeometry, wallMaterial);
    backWall.rotation.y = 0; // 
    backWall.position.set(-50, 30, -15); 
    scene.add(backWall);

    // Exemple : Chargement d'un objet GLTF
    /*******************OBJET HEARTBIT********************* */
    
    // Création du fil
    const wireGeometry = new THREE.CylinderGeometry(0.05, 0.05, 7.5, 29);
    const wireMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff }); // Gris
    const wire = new THREE.Mesh(wireGeometry, wireMaterial);
    wire.position.set(-30, 6.15, 0);
    scene.add(wire);

    const loader = new GLTFLoader();
    loader.load(
        "/assets/Deco.gltf",
        (gltf) => {
            const heartbit = gltf.scene;
            heartbit.scale.set(0.1, 0.1, 0.1);
            heartbit.position.set(-30, 0, 0);
            scene.add(heartbit);
        },
        undefined,
        (error) => console.error("Error loading Heartbit.gltf:", error)
    )
    loader.load(
      "/assets/Pendant.gltf",
      (gltf) => {
        const pendant = gltf.scene;
        pendant.scale.set(0.1, 0.1, 0.1);
        pendant.position.set(-30.3, -5, 0.9);
        pendant.rotation.x = -Math.PI / 2;
        scene.add(pendant);
      },
      undefined,
      (error) => console.error("Error loading Pendant.gltf:", error)
    );

    // LUMIERE 
    let light = new THREE.PointLight(0x0000ff, 0, 200); //couleur/intensité
    light.position.set(-30, -1.15, 0);
    light.decay = 1; //  effet réaliste
    scene.add(light);

    function Lightbeat(light, duration = 2, cycles = 2) {
        let interval = 0.1; // Mise à jour toutes les 100ms pour un effet fluide
        let maxIntensity = 200; // Intensité maximale
        let stepUp = maxIntensity / ((duration / interval) / 2); // Pas pour l'augmentation (standard)
        let stepDown = stepUp / 2; // Pas pour la descente (plus lent)

        let increasing = true; // Indique si la lumière augmente en intensité
        let beatInterval = setInterval(() => {
            if (increasing) {
                light.intensity += stepUp; // Augmenter l'intensité progressivement
                if (light.intensity >= maxIntensity) increasing = false; // Inverser au sommet
            } else {
                light.intensity -= stepDown; // Réduire l'intensité progressivement (plus lentement)
                if (light.intensity <= 0) {
                    increasing = true; // Recommencer le cycle
                    cycles--; // Diminuer le nombre de cycles restants
                    if (cycles <= 0) {
                        clearInterval(beatInterval); // Arrêter l'animation après 2 cycles
                        light.intensity = 0; // S'assurer que la lumière s'éteint
                    }
                }
            }
        }, interval * 1000); // Intervalle en millisecondes
    }

    // Gestion de l'événement de touche
    window.addEventListener('keydown', (event) => {
        if (event.key === 'u' || event.key === 'U') { // Si la touche U est pressée
            console.log("Activation de la lumière après 3 secondes...");
            setTimeout(() => {
                Lightbeat(light, 1, 3); // Battement de lumière (1 cycle = 1 seconde, 3 cycles)
            }, 3000); // Délai de 3 secondes
        }
    });

    loader.load(
        "/assets/Commode/commode.gltf",
        (gltf) => {
          const commode = gltf.scene;
          commode.scale.set(70, 70, 70);
          commode.position.set(-30.3, -69, 0);
          commode.rotation.Y = -Math.PI;
          scene.add(commode);
        },
        undefined,
        (error) => console.error("Error loading Pendant.gltf:", error)
      );

      loader.load(
        "/assets/lampe.glb",
        (gltf) => {
          const lampe = gltf.scene;
          lampe.scale.set(60, 60, 60);
          lampe.position.set(-60, -12, 0);
          scene.add(lampe);
        },
        undefined,
        (error) => console.error("Error loading Pendant.gltf:", error)
      );
      loader.load(
        "/assets/lampe.glb",
        (gltf) => {
          const lampe1 = gltf.scene;
          lampe1.scale.set(60, 60, 60);
          lampe1.position.set(0, -12, 0);
          scene.add(lampe1);
        },
        undefined,
        (error) => console.error("Error loading Pendant.gltf:", error)
      );

      //LUMIERES
    const lampLight = new THREE.PointLight(0xffff00, 1, 10); 
    lampLight.position.set(-30, 0, 0); 
    scene.add(lampLight);

    const lampLight1 = new THREE.PointLight(0xffffff, 1, 10); 
    lampLight1.position.set(40, 0, 0); 
    scene.add(lampLight1);


      /*****************TABLE BASSE******************* */

        loader.load(
            "/assets/coffetable.glb",
            (gltf) => {
              const table = gltf.scene;
              table.scale.set(60, 60, 60);
              table.position.set(-20, -69, 150);
              scene.add(table);
            },
            undefined,
            (error) => console.error("Error loading Pendant.gltf:", error)
          );

          loader.load(
            "/assets/coffetable.glb",
            (gltf) => {
              const table = gltf.scene;
              table.scale.set(60, 60, 60);
              table.position.set(-20, -69, 170);
              scene.add(table);
            },
            undefined,
            (error) => console.error("Error loading Pendant.gltf:", error)
          );

        loader.load(
            "./assets/cadre/FAIR AP9 GOLD D520.gltf",
            (cadre) => {
                let meshcadre = cadre.scene;
                meshcadre.scale.set(60,60,60);
                meshcadre.position.set(-200, -69, 150);
                meshcadre.rotation.y = Math.PI/2;
                scene.add(meshcadre)
            },
            undefined,
            (error) => console.error("Error loading Pendant.gltf:", error)
        );

        loader.load(
            "./assets/sofa/sofa.gltf",
            (gltf) => {
                let sofa = gltf.scene;
                sofa.scale.set(1.5,1.5,1.5);
                sofa.position.set(-150, -69, 150);
                sofa.rotation.y = Math.PI/2;
                scene.add(sofa)
            },
            undefined,
            (error) => console.error("Error loading Pendant.gltf:", error)
        );
        let loadtexture = new THREE.TextureLoader();
        const tapisGeometry = new THREE.PlaneGeometry(200, 250); // Largeur, Hauteur
        const tapisMaterial = new THREE.MeshBasicMaterial({
            map : loadtexture.load("./assets/textapis.jpg")
        })
        const tapis = new THREE.Mesh(tapisGeometry, tapisMaterial);
        tapis.position.set(-30, -69, 145); 
        tapis.rotation.x = -Math.PI/2;
        scene.add(tapis);

        /**********************PERSONNAGE*********************** */
        let mixer;
        let clips;
        // Charger le personnage 1
        let personnage;
        loader.load(
            "./assets/personnage.glb", 
            (gltf) => {
                personnage = gltf.scene;
                personnage.scale.set(65, 65, 65);
                personnage.position.set(60, -69, 60);
                personnage.rotation.y = -Math.PI/3;
                personnage.visible = false;
                scene.add(personnage);

                // animation
                mixer = new THREE.AnimationMixer(personnage);
                clips = gltf.animations;
                gltf.animations.forEach((clip) => {
                    mixer.clipAction(clip).setLoop(THREE.LoopOnce, 1).play();
                });
            },
            undefined,
            (error) => console.error("Erreur lors du chargement du modèle:", error)
        );

        let personnage2;

        // Charger le personnage 2
        loader.load(
            "./assets/personnage2.glb", 
            (gltf) => {
                personnage2 = gltf.scene; 
                personnage2.scale.set(65, 65, 65);
                personnage2.position.set(60, -69, 60);
                personnage2.rotation.y = -Math.PI/3;
                scene.add(personnage2);
            },
            undefined,
            (error) => console.error("Erreur lors du chargement du modèle:", error)
        );

        window.addEventListener('keydown', (event) => {
            if (event.key === 'u' || event.key === 'U') { // Vérifie si la touche U est pressée
                console.log("A");
                if(personnage2){
                    personnage2.visible = false;
                    setTimeout(() => {
                        personnage2.visible= true;
                    },8000);
                }
            }
        });

        /* ---------------ANIMATION---------------------- */

        // Écouteur d'événements pour la touche U
        window.addEventListener('keydown', (event) => {
            if (event.key === 'u' || event.key === 'U') { 
                console.log("A");
                if (personnage) { 
                    personnage.visible = true; 
                    setTimeout(() => {
                        personnage.visible = false; 
                    }, 8000); 
                }
                // Démarrer l'animation du personnage
                if (mixer && clips) {
                    console.log(mixer);
                    const action = mixer.clipAction(clips[0]);
                    if (!action.isRunning()) { // Vérifie si l'animation n'est pas déjà en cours
                        console.log("C");
                        action.reset().setLoop(THREE.LoopOnce, 1).play(); // Réinitialise et joue l'animation
                    }
                }
            }
        });

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      if (mixer) {
        mixer.update(0.01); 
        }
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={mountRef} className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Canvas pour le renderer */}
      <canvas ref={canvasRef} className="relative w-[600px] h-[400px] border border-[#9ADDF0]-300 shadow-lg"></canvas>
  
      {/* Texte d'instruction */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white font-bold ">
        Press U and HeartBit lights up!
      </div>
  
      {/* Bouton "More details" */}
      <div className="mt-4">
        <Link href="https://ift.devinci.fr/member/anne-julie-hoye">
          <button className="text-white underline font-semibold transition hover:text-blue-700 active:text-blue-900">
            More details
          </button>
        </Link>
      </div>
    </div>
  );
  
};

export default Heartbit;
