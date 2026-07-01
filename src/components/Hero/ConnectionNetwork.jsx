import { useEffect, useRef } from 'react'
import styles from './ConnectionNetwork.module.css'

export default function ConnectionNetwork() {
  const particles = useRef([])

  useEffect(() => {
    const configs = [
      { id: 'path1', duration: 5000 },
      { id: 'path2', duration: 4000 },
      { id: 'path3', duration: 6000 },
      { id: 'path4', duration: 3500 }
    ]

    particles.current.forEach((particle, index) => {
      animateParticle(
        particle,
        configs[index].id,
        configs[index].duration
      )
    })
  }, [])

  function animateParticle(node, pathId, duration) {
    const path = document.getElementById(pathId)

    if (!path || !node) return

    const length = path.getTotalLength()
    let start = null

    function frame(time) {
      if (!start) start = time

      const progress =
        ((time - start) % duration) / duration

      const point =
        path.getPointAtLength(progress * length)

      node.setAttribute('cx', point.x)
      node.setAttribute('cy', point.y)

      requestAnimationFrame(frame)
    }

    requestAnimationFrame(frame)
  }

  return (
    <svg
      className={styles.svg}
      viewBox="0 0 1200 400"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient
          id="lineGlow"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="transparent" />
          <stop
            offset="20%"
            stopColor="#3b82f6"
            stopOpacity="0.15"
          />
          <stop
            offset="80%"
            stopColor="#3b82f6"
            stopOpacity="0.15"
          />
          <stop
            offset="100%"
            stopColor="transparent"
          />
        </linearGradient>

        <filter id="nodeGlow">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="3"
            floodColor="#3b82f6"
            floodOpacity="0.5"
          />
        </filter>

        <filter id="particleGlow">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="4"
            floodColor="#60a5fa"
            floodOpacity="1"
          />
        </filter>
      </defs>

      {/* Líneas base */}
      <g
        fill="none"
        stroke="url(#lineGlow)"
        strokeWidth="1.5"
      >
        <path
          id="path1"
          d="M200,100 L400,280 L650,120 L900,260"
        />

        <path
          id="path2"
          d="M100,250 L350,80 L600,300 L850,90 L1100,220"
        />

        <path
          id="path3"
          d="M150,180 L500,350 L950,150"
        />

        <path
          id="path4"
          d="M750,50 L1000,200 L1050,320"
        />
      </g>

      {/* Luces que corren */}
      <g
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path
          className={styles.light1}
          strokeDasharray="8 40"
          d="M200,100 L400,280 L650,120 L900,260"
        />

        <path
          className={styles.light2}
          strokeDasharray="6 50"
          d="M100,250 L350,80 L600,300 L850,90 L1100,220"
        />

        <path
          className={styles.light3}
          strokeDasharray="10 60"
          d="M150,180 L500,350 L950,150"
        />

        <path
          className={styles.light4}
          strokeDasharray="5 35"
          d="M750,50 L1000,200 L1050,320"
        />
      </g>

      {/* Partículas */}
      <g filter="url(#particleGlow)">
        <circle
          ref={(el) => (particles.current[0] = el)}
          className={styles.particle}
          r="4"
        />

        <circle
          ref={(el) => (particles.current[1] = el)}
          className={styles.particle}
          r="3"
        />

        <circle
          ref={(el) => (particles.current[2] = el)}
          className={styles.particle}
          r="5"
        />

        <circle
          ref={(el) => (particles.current[3] = el)}
          className={styles.particle}
          r="3.5"
        />
      </g>

      {/* Nodos */}
      <g
        fill="#3b82f6"
        filter="url(#nodeGlow)"
      >
        <circle className={styles.node1} cx="200" cy="100" r="3" />
        <circle className={styles.node2} cx="400" cy="280" r="3.5" />
        <circle className={styles.node3} cx="650" cy="120" r="3" />
        <circle className={styles.node4} cx="900" cy="260" r="4" />
        <circle className={styles.node5} cx="100" cy="250" r="3.5" />
        <circle className={styles.node6} cx="350" cy="80" r="2.5" />
        <circle className={styles.node7} cx="600" cy="300" r="3" />
        <circle className={styles.node8} cx="850" cy="90" r="2.5" />
        <circle className={styles.node9} cx="1100" cy="220" r="3" />
        <circle className={styles.node10} cx="150" cy="180" r="2.5" />
        <circle className={styles.node11} cx="500" cy="350" r="3.5" />
        <circle className={styles.node12} cx="950" cy="150" r="3" />
        <circle className={styles.node13} cx="750" cy="50" r="2.5" />
        <circle className={styles.node14} cx="1000" cy="200" r="3" />
        <circle className={styles.node15} cx="1050" cy="320" r="2.5" />
      </g>
    </svg>
  )
}