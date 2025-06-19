import { useState } from 'react'

const navLinks = [
  { href: "#aboutme", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#project", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="mobile-header">
      <a href="#" className="logo">Jefferson <span>Adlawan</span></a>
      <i
        className={`bx ${open ? 'bx-x' : 'bx-menu'}`}
        id="menu-icon"
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
      ></i>
      <nav className={`navbar${open ? ' active' : ''}`}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}