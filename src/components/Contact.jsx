export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2><i className="bx bx-envelope"></i> Contact Me</h2>
      <form action="https://api.web3forms.com/submit" method="POST" autoComplete="off" className="contact-form">
        <input type="hidden" name="access_key" value="acf96f5c-6da2-4cd1-8d06-b5f0d620b453" />
        <div className="form-row">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-row">
          <input type="text" name="subject" placeholder="Subject" required />
          <input type="tel" name="phone" placeholder="Phone Number" />
        </div>
        <textarea name="message" rows={6} placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  )
}