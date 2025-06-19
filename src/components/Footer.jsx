import { FaFacebook, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
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
        <ul className="footer-links">
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#aboutme">About Me</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <p className="copyright">&copy; Jefferson Adlawan | All rights reserved.</p>
      </div>
    </footer>
  )
}