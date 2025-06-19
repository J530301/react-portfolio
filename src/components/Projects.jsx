import { useState, useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import laravelImg from '../assets/laravel.png'
import laravelImg2 from '../assets/laravel2.png'
import laravelImg3 from '../assets/laravel3.png'
import laravelImg6 from '../assets/laravel6.png'
import laravelImg7 from '../assets/laravel7.png'
import laravelImg8 from '../assets/laravel8.png'
import laravelAuth from '../assets/laravelAuth.png'
import laravelAuth1 from '../assets/laravelAuth1.png'

import reactImg from '../assets/react1.png'
import reactImg2 from '../assets/nodereact.png'
import reactImg3 from '../assets/nodereact.png'
import reactImg4 from '../assets/nodereact.png'
import reactImg5 from '../assets/nodereact.png'
import reactImg6 from '../assets/nodereact.png'
import reactImg9 from '../assets/nodereact.png'
import reactAuth from '../assets/nodereactAuth.png'
import reactAuth2 from '../assets/nodereactauth3.png'

const laravelImages = [
  { src: laravelImg, alt: "laravel" },
  { src: laravelImg2, alt: "laravel2" },
  { src: laravelImg3, alt: "laravel3" },
  { src: laravelImg6, alt: "laravel6" },
  { src: laravelImg7, alt: "laravel7" },
  { src: laravelImg8, alt: "laravel8" },
  { src: laravelAuth, alt: "LaravelAuth" },
  { src: laravelAuth1, alt: "LaravelAuth" },
]

const reactImages = [
  { src: reactImg, alt: "Node+React" },
  { src: reactImg2, alt: "Node+React" },
  { src: reactImg3, alt: "Node+React" },
  { src: reactImg4, alt: "Node+React" },
  { src: reactImg5, alt: "Node+React" },
  { src: reactImg6, alt: "Node+React" },
  { src: reactImg9, alt: "Node+React" },
  { src: reactAuth, alt: "Node+React" },
  { src: reactAuth2, alt: "Node+React" },
  
]

function useImageSlider(imagesLength) {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const pauseTimeout = useRef(null)

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? imagesLength - 1 : prev - 1))
    pauseAutoSlide()
  }

  const next = () => {
    setCurrent((prev) => (prev === imagesLength - 1 ? 0 : prev + 1))
    pauseAutoSlide()
  }

  const pauseAutoSlide = () => {
    setIsPaused(true)
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current)
    pauseTimeout.current = setTimeout(() => setIsPaused(false), 6000)
  }

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === imagesLength - 1 ? 0 : prev + 1))
    }, 3000)
    return () => clearInterval(timer)
  }, [imagesLength, isPaused])

  return { current, prev, next }
}

export default function Projects() {
  const laravelSlider = useImageSlider(laravelImages.length)
  const reactSlider = useImageSlider(reactImages.length)

  return (
    <section id="project" className="project">
      <div className="project-flex">
        <div className="project-info">
          <h2><i className="bx bx-rocket"></i> Personal Project</h2>
          <h3>ShopTime Ecommerce Website</h3>
          <p>
            ShopTime is an e-commerce website project built with two connected platforms, one using Laravel and the other using Node.js with React.<br /><br />
            <ul style={{ paddingLeft: '1.2em', margin: 0 }}>
              <li>Both platforms feature secure login authentication and user account management.</li>
              <li>Admin-authenticated users can add new products, update details, delete listings, and manage customer accounts.</li>
              <li>User-authenticated accounts can browse and purchase products, view detailed product information, and check their purchase history.</li>
            </ul>
          </p>
        </div>
        <div className="project-gallery" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Laravel Images Slider */}
          <div className="project-img-card" style={{ position: 'relative', width: '100%', maxWidth: 510, margin: '0 auto'}}>
            <button
              aria-label="Previous"
              onClick={laravelSlider.prev}
              style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                borderRadius: '50%',
                color: 'blue',
                width: 30,
                height: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 2,
                boxShadow: 'none',
              }}
            >
              <FaChevronLeft />
            </button>
            <h3>Laravel </h3>
            <img
              src={laravelImages[laravelSlider.current].src}
              alt={laravelImages[laravelSlider.current].alt}
              style={{
                width: '100%',
                maxWidth: 510,
                height: 240,
                objectFit: 'cover',
                borderRadius: 10,
                boxShadow: '0 4px 24px rgba(26, 115, 232, 0.10)',
                background: '#fff',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
            />
            <button
              aria-label="Next"
              onClick={laravelSlider.next}
              style={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                borderRadius: '50%',
                color: 'blue',
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 2,
                boxShadow: 'none',
              }}
            >
              <FaChevronRight />
            </button>
          </div>
          {/* React Images Slider */}
          <div className="project-img-card" style={{ position: 'relative', width: '100%', maxWidth: 510, margin: '0 auto' }}>
            <button
              aria-label="Previous"
              onClick={reactSlider.prev}
              style={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                borderRadius: '50%',
                color: 'blue',
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 2,
                boxShadow: 'none',
              }}
            >
              <FaChevronLeft />
            </button>
            <h3>Node+React </h3>
            <img
              src={reactImages[reactSlider.current].src}
              alt={reactImages[reactSlider.current].alt}
              style={{
                width: '100%',
                maxWidth: 510,
                height: 240,
                objectFit: 'cover',
                borderRadius: 10,
                boxShadow: '0 4px 24px rgba(26, 115, 232, 0.10)',
                background: '#fff',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
            />
            <button
              aria-label="Next"
              onClick={reactSlider.next}
              style={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                borderRadius: '50%',
                color: 'blue',
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 2,
                boxShadow: 'none',
              }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}