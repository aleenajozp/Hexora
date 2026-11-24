import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Mail, MapPin, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { ContactForm } from "../components/ContactForm.jsx";

const contactDetails = [
  {
    icon: Mail,
    title: "Email",
    value: "Add your email address",
    note: "Editable company detail",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "Add your phone number",
    note: "Editable company detail",
  },
  {
    icon: MapPin,
    title: "Office location",
    value: "Location details coming soon",
    note: "No address has been provided",
  },
];

export function Contact() {
  const reduceMotion = useReducedMotion();
  return (
    <>
      <Helmet>
        <title>Contact Us | Hexora Publication</title>
        <meta
          name="description"
          content="Tell Hexora Publication about your next digital project. Get in touch to explore how we can work together."
        />
      </Helmet>
      <section className="page-hero page-hero--contact">
        <div className="container page-hero__inner">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow eyebrow--gold">
              <span className="eyebrow__dot" /> YOUR IDEA, OUR NEXT CONVERSATION
            </span>
            <h1>
              Let&apos;s talk about your <em>next big idea.</em>
            </h1>
            <p>
              We would love to hear about your project, answer your questions
              and explore how we can work together.
            </p>
            <a className="contact-hero__link" href="#contact-form">
              Tell us about it <ArrowDown size={15} />
            </a>
          </motion.div>
          <div className="contact-hero__orbit" aria-hidden="true">
            <span>LET&apos;S</span>
            <span>MAKE</span>
            <span>IT</span>
            <span>MATTER</span>
          </div>
        </div>
        <span className="page-hero__index">
          03 <span>/</span> START A CONVERSATION
        </span>
      </section>

      <section className="contact-content section-pad">
        <div className="container contact-layout">
          <div className="contact-aside">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>
              Good things begin with <em>a hello.</em>
            </h2>
            <p>
              Share what you are working on, what you are wondering about, or
              simply say hello. We&apos;ll take it from there.
            </p>
            <div className="contact-details">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                  <article className="contact-detail" key={detail.title}>
                    <span className="contact-detail__icon">
                      <Icon size={19} strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3>{detail.title}</h3>
                      <p>{detail.value}</p>
                      <small>{detail.note}</small>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="contact-form-wrap" id="contact-form">
            <div className="contact-form-wrap__heading">
              <span className="eyebrow">THE FIRST STEP</span>
              <h2>Tell us what&apos;s on your mind.</h2>
              <p>
                Fields marked <span aria-hidden="true">*</span> are required.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="map-placeholder">
            <div className="map-placeholder__pattern" />
            <div className="map-placeholder__center">
              <span className="map-placeholder__pin">
                <MapPin size={22} />
              </span>
              <strong>Good ideas can start anywhere.</strong>
              <p>Office location details to be added</p>
            </div>
            <span className="map-placeholder__label">
              LOCATION DETAILS COMING SOON
            </span>
            <span className="map-placeholder__coords">
              HEXORA · OPEN TO POSSIBILITIES
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
