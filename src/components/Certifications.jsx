import { useState, useEffect, useRef } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import cert1 from '../assets/40.jpg'
import cert2 from '../assets/HTML and CSS_page-0001.jpg'
import cert3 from '../assets/Databases_page-0001.jpg'
import cert4 from '../assets/IMG_7930.jpg'
import cert5 from '../assets/Recognition Certificate - JEFFERSON V. ADLAWAN_page-0001.jpg'

const certs = [
  { img: cert1, label: "On-Job-Training" },
  { img: cert2, label: "HTML & CSS" },
  { img: cert3, label: "Database" },
  { img: cert4, label: "Second Honors" },
  { img: cert5, label: "Third Honors" },
]

function useCertificatesPerSlide() {
  const getPerSlide = () => (window.innerWidth < 768 ? 1 : 2)
  const [perSlide, setPerSlide] = useState(getPerSlide())
  useEffect(() => {
    const handleResize = () => setPerSlide(getPerSlide())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return perSlide
}

export default function Certifications() {
  const perSlide = useCertificatesPerSlide()
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const pauseTimeout = useRef(null)

  const prevCert = () => {
    setCurrent((prev) =>
      prev === 0 ? certs.length - perSlide : prev - perSlide
    )
    pauseAutoSlide()
  }

  const nextCert = () => {
    setCurrent((prev) =>
      prev + perSlide >= certs.length ? 0 : prev + perSlide
    )
    pauseAutoSlide()
  }

  // Pause auto-slide for 6 seconds after manual navigation
  const pauseAutoSlide = () => {
    setIsPaused(true)
    if (pauseTimeout.current) clearTimeout(pauseTimeout.current)
    pauseTimeout.current = setTimeout(() => setIsPaused(false), 6000)
  }

  // Auto-slide every 3 seconds if not paused
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev + perSlide >= certs.length ? 0 : prev + perSlide
      )
    }, 3000)
    return () => clearInterval(timer)
  }, [perSlide, isPaused])

  // Get the certificates to display
  const visibleCerts = []
  for (let i = 0; i < perSlide; i++) {
    visibleCerts.push(certs[(current + i) % certs.length])
  }

  return (
    <section id="certifications" className="certifications">
      <h2><i className="bx bx-award"></i> Certifications</h2>
      <div
        className="certifications-grid"
        style={{
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          minHeight: 320,
        }}
      >
        <button
          aria-label="Previous"
          onClick={prevCert}
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(26,115,232,0.8)',
            border: 'none',
            borderRadius: '50%',
            color: '#fff',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 2,
            boxShadow: '0 2px 8px rgba(26,115,232,0.18)',
          }}
        >
          <FaChevronLeft />
        </button>
        {visibleCerts.map((cert, idx) => (
          <div
            className="cert-card"
            style={{
              width: '90vw',
              maxWidth: 400,
              minWidth: 0,
              margin: '0 10px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              ...(window.innerWidth < 768
                ? { height: 250, width: '70vw' }
                : { height: 'auto', width: '90vw' }),
              background: 'rgba(255,255,255,0.7)',
              borderRadius: 12,
              boxShadow: '0 2px 12px rgba(26,115,232,0.08)',
              transition: 'box-shadow 0.3s',
            }}
            key={cert.label + idx}
          >
            <img
              src={cert.img}
              alt={cert.label}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: 260,
                objectFit: 'contain',
                borderRadius: 10,
                boxShadow: '0 4px 24px rgba(26, 115, 232, 0.10)',
                background: '#fff',
              }}
            />
            <h3>{cert.label}</h3>
          </div>
        ))}
        <button
          aria-label="Next"
          onClick={nextCert}
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(26,115,232,0.8)',
            border: 'none',
            borderRadius: '50%',
            color: '#fff',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 2,
            boxShadow: '0 2px 8px rgba(26,115,232,0.18)',
          }}
        >
          <FaChevronRight />
        </button>
        <style>
          {`
            @media (max-width: 768px) {
              .cert-card {
                width: 70vw !important;
                height: 250px !important;
              }
            }
            @media (min-width: 769px) {
              .cert-card {
                width: 90vw !important;
                height: auto !important;
              }
            }
          `}
        </style>
      </div>
    </section>
  )
}