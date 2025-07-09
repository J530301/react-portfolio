import { useState, useEffect, useRef } from 'react'
import laravel from '../assets/laravel.svg'
import node from '../assets/node-js.svg'
import react from '../assets/react.svg'
import html from '../assets/html.png'
import css from '../assets/css-3.png'
import php from '../assets/php-programming-language.png'
import sql from '../assets/sql-server.png'
import java from '../assets/file.png'
import next from '../assets/icons8-nextjs.svg'
import angular from '../assets/icons8-angular.svg' 

const skills = [
  { img: laravel, label: "Laravel" },
  { img: node, label: "Node" },
  { img: react, label: "React" },
  { img: next, label: "Next.js" },
  { img: angular, label: "Angular" },
  { img: html, label: "HTML" },
  { img: css, label: "CSS" },
  { img: php, label: "PHP" },
  { img: sql, label: "SQL" },
  { img: java, label: "Java" },
]

function useSkillsPerSlide() {
  return 4
}

export default function Skills() {
  const perSlide = useSkillsPerSlide()
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1) // 1 for next, -1 for prev
  const [animating, setAnimating] = useState(false)
  const timeoutRef = useRef(null)

  // Auto-slide every 3 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setDirection(1)
      setAnimating(true)
      setTimeout(() => {
        setCurrent((prev) =>
          prev + perSlide >= skills.length ? 0 : prev + perSlide
        )
        setAnimating(false)
      }, 400)
    }, 3000)
    return () => clearTimeout(timeoutRef.current)
  }, [current, perSlide])

  // Get the skills to display
  const visibleSkills = []
  for (let i = 0; i < perSlide; i++) {
    visibleSkills.push(skills[(current + i) % skills.length])
  }

  // Responsive grid: 1 row 4 columns on desktop, 2x2 on mobile
  return (
    <section id="skills" className="skills">
      <h2><i className="bx bx-bolt"></i> Skills</h2>
      <div
        className={`skills-grid slide-anim${animating ? (direction === 1 ? ' slide-left' : ' slide-right') : ''}`}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 16,
          width: '100%',
          maxWidth: 800,
          margin: '0 auto',
          overflow: 'hidden',
          minHeight: 160,
        }}
      >
        {visibleSkills.map((skill, idx) => (
          <div
            key={skill.label + idx}
            className="skill-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: 0,
              maxWidth: 140,
              margin: '0 auto',
              background: 'rgba(255,255,255,0.7)',
              borderRadius: 12,
              boxShadow: '0 2px 12px rgba(26,115,232,0.08)',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
          >
            <img
              src={skill.img}
              alt={skill.label}
              style={{
                width: 48,
                height: 48,
                objectFit: 'contain',
                marginBottom: 8,
                filter: 'drop-shadow(0 2px 8px #1a73e822)',
                transition: 'transform 0.3s',
              }}
            />
            <span style={{ fontWeight: 600 }}>{skill.label}</span>
          </div>
        ))}
      </div>
      <style>
        {`
          @media (max-width: 768px) {
            .skills-grid {
              grid-template-columns: repeat(2, 1fr) !important;
              grid-template-rows: repeat(2, 1fr);
              max-width: 340px !important;
            }
          }
          .slide-anim {
            transition: transform 0.4s cubic-bezier(.4,2,.6,1), opacity 0.4s;
          }
          .slide-anim.slide-left {
            transform: translateX(-60px);
            opacity: 0.2;
          }
          .slide-anim.slide-right {
            transform: translateX(60px);
            opacity: 0.2;
          }
        `}
      </style>
    </section>
  )
}