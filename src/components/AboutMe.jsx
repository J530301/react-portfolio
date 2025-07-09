import avatar from '../assets/jeff4.png'

export default function AboutMe() {
  return (
    <section id="aboutme" className="aboutme glass">
      <div className="aboutme-content">
        <h2>
          <span className="wave">👋</span> Hello, I'm <span>Jefferson Adlawan</span>
        </h2>
        <h3>Web Developer &amp; BS in Computer Science</h3>
        <p>
          I am a Web Developer and graduating BSCS with a strong interest in creating websites that are user-friendly and effective. I am committed to producing quality work and value being part of a team where I can contribute and grow professionally.
        </p>
        <div className="btn-group">
          <a href="/assets/IMG_1764.jpeg" target="_blank" rel="noopener noreferrer" className="btn btn-glow">View Resume</a>
          <a href="#contact" className="btn btn-outline btn-glow">Contact Me</a>
        </div>
      </div>
      <div className="aboutme-img">
        <div className="avatar-glow">
          <img src={avatar} alt="Jefferson Adlawan" />
        </div>
      </div>
    </section>
  )
}
