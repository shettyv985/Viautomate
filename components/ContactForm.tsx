"use client";

import { useLanguage } from "@/components/LanguageProvider";
import "./ContactForm.css";

const ContactForm = () => {
  const { t } = useLanguage();

  return (
    <div className="contact-form">
      <div className="contact-form-row">
        <div className="contact-form-row-copy-item">
          <p className="primary sm">{t.contact.topLine}</p>
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">{t.contact.brand}</p>
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">{t.contact.year}</p>
        </div>
      </div>

      <div className="contact-form-row">
        <div className="contact-form-col">
          <div className="contact-form-header">
            <h3>{t.contact.heading}</h3>
            <p>{t.contact.body}</p>
          </div>
          <div className="contact-form-availability">
            <p className="primary sm">{t.contact.available}</p>
            <p className="primary sm">{t.contact.remote}</p>
          </div>
        </div>

        <div className="contact-form-col">
          <div className="form-item">
            <input type="text" placeholder={t.contact.name} />
          </div>
          <div className="form-item">
            <input type="email" placeholder={t.contact.email} />
          </div>
          <div className="form-item">
            <input type="text" placeholder={t.contact.company} />
          </div>
          <div className="form-item">
            <textarea rows={6} placeholder={t.contact.message} />
          </div>
          <div className="form-item">
            <button className="btn">{t.contact.submit}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
