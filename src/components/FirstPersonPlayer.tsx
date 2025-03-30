import { useFrame, useThree } from '@react-three/fiber'
import { RigidBody, CapsuleCollider, RapierRigidBody } from '@react-three/rapier'
import { PointerLockControls, useKeyboardControls } from '@react-three/drei'
import { useRef } from 'react'
import { Vector3} from 'three'
import { usePlayerStore } from '../stores/usePlayerStore'

const MOVEMENT_SPEED = 5

export function FirstPersonPlayer() {
  const playerRef = useRef<RapierRigidBody>(null)

  const { camera } = useThree()

  // Control del teclado
  const [, getKeys] = useKeyboardControls()

  // Estado global del jugador
  const setPosition = usePlayerStore(state => state.setPosition)

  useFrame(() => {
    const { forward, backward, left, right } = getKeys()

    const direction = new Vector3()

    // Vector que indica hacia donde mira la cámara en el eje horizontal (Y rotación)
    const cameraDirection = new Vector3()
    camera.getWorldDirection(cameraDirection)
    cameraDirection.y = 0  // ignorar eje Y para movimiento horizontal
    cameraDirection.normalize()

    const cameraRight = new Vector3().crossVectors(cameraDirection, camera.up).normalize()

    // Movimiento relativo a la dirección de la cámara
    if (forward) direction.add(cameraDirection)
    if (backward) direction.sub(cameraDirection)
    if (left) direction.sub(cameraRight)
    if (right) direction.add(cameraRight)

    if (direction.length() > 0) {
      direction.normalize().multiplyScalar(MOVEMENT_SPEED)
    }

    if (playerRef.current) {
      const rb = playerRef.current
      const currentVel = rb.linvel()

      rb.setLinvel({ x: direction.x, y: currentVel.y, z: direction.z }, true)

      const { x, y, z } = rb.translation()
      setPosition([x, y, z])

      // Sincronizar la posición de la cámara con el jugador
      camera.position.set(x, y + 1.7, z)
    }
  })

  return (
    <>
      <RigidBody
        ref={playerRef}
        colliders={false}
        position={[0, 10, 0]}
        lockRotations
      >
        <CapsuleCollider args={[0.35, 0.6]} position={[0, 1, 0]} />
      </RigidBody>
      <PointerLockControls />
    </>
  )
}

