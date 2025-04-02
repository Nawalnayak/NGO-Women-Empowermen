import Button from '../common/components/buttons/Button'
import "./contact.module.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        Have questions or want to get involved? Reach out to us!
      </p>
      <form className="contact-form">
        <div className="input-group">
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="input-group">
          <label>Message</label>
          <textarea rows="4" placeholder="Your Message"></textarea>
        </div>
        <Button className="button">Send Message</Button>
      </form>
    </div>
  );
}
