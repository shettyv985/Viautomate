import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="contact-form-row">
        <div className="contact-form-row-copy-item">
          <p className="primary sm">Let's create together</p>
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">Viautomate</p>
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">&copy; 2025</p>
        </div>
      </div>

      <div className="contact-form-row">
        <div className="contact-form-col">
          <div className="contact-form-header">
            <h3>Start a Conversation</h3>
            <p>
              Got a process that's eating your time? Let's talk about it.
              We'll figure out exactly what to automate and build it for you.
            </p>
          </div>
          <div className="contact-form-availability">
            <p className="primary sm">Available for new clients</p>
            <p className="primary sm">Remote · Worldwide</p>
          </div>
        </div>

        <div className="contact-form-col">
          <div className="form-item">
            <input type="text" placeholder="Name" />
          </div>
          <div className="form-item">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-item">
            <input type="text" placeholder="Company (optional)" />
          </div>
          <div className="form-item">
            <textarea rows={6} placeholder="Tell us what you need automated..." />
          </div>
          <div className="form-item">
            <button className="btn">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;