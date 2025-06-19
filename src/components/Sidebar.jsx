import { FaFacebook, FaGithub, FaEnvelope } from 'react-icons/fa'
import avatar from '../assets/jeff4.png'

const links = [
  { href: "#aboutme", label: "About", icon: "bx bx-user" },
  { href: "#skills", label: "Skills", icon: "bx bx-code-alt" },
  { href: "#certifications", label: "Certifications", icon: "bx bx-certification" },
  { href: "#project", label: "Projects", icon: "bx bx-briefcase" },
  { href: "#contact", label: "Contact", icon: "bx bx-envelope" },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src={avatar} alt="Jefferson Adlawan" className="sidebar-avatar" />
        <h1>Jefferson <span>Adlawan</span></h1>
        <p>Web Developer</p>
      </div>
      <nav className="sidebar-nav">
        {links.map(link => (
          <a key={link.href} href={link.href}>
            <i className={link.icon}></i> {link.label}
          </a>
        ))}
      </nav>
      <div className="sidebar-social">
        <a href="https://www.facebook.com/jefferson.adlawan.3" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={22} />
        </a>
        <a href="https://github.com/J530301" target="_blank" rel="noopener noreferrer">
          <FaGithub size={22} />
        </a>
        <a href="mailto:jefferson.adlawan@gmail.com">
          <FaEnvelope size={22} />
        </a>
      </div>
    </aside>
  )
}