import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "../components/Button.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";
import { ServiceCard } from "../components/ServiceCard.jsx";
import { processSteps, services } from "../data/services.js";

const strengths = [
  [
    "01",
    "Innovation, always",
    "We look beyond the obvious to find thoughtful, future-ready ways forward.",
  ],
  [
    "02",
    "Built around you",
    "Your goals shape every decision, from the first conversation to the final details.",
  ],
  [
    "03",
    "Technology with purpose",
    "We choose modern tools that solve real problems and create lasting value.",
  ],
  [
    "04",
    "Quality you can trust",
    "Careful craft, clear communication and dependable delivery come standard.",
  ],
];

function HexagonArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="hero-art__halo" />
      <div className="hero-art__grid" />
      <div className="hero-art__hex hero-art__hex--back">
        <svg viewBox="0 0 200 230">
          <polygon points="100,8 192,61 192,169 100,222 8,169 8,61" />
        </svg>
      </div>
      <div className="hero-art__hex hero-art__hex--main">
        <svg viewBox="0 0 200 230">
          <polygon points="100,8 192,61 192,169 100,222 8,169 8,61" />
        </svg>
        <span>H</span>
      </div>
      <div className="hero-art__hex hero-art__hex--front">
        <svg viewBox="0 0 200 230">
          <polygon points="100,8 192,61 192,169 100,222 8,169 8,61" />
        </svg>
      </div>
      <span className="hero-art__orbit hero-art__orbit--one" />
      <span className="hero-art__orbit hero-art__orbit--two" />
      <span className="hero-art__spark hero-art__spark--one">✳</span>
      <span className="hero-art__spark hero-art__spark--two">✳</span>
      <span className="hero-art__caption">
        DESIGN
        <br />×<br />
        TECHNOLOGY
      </span>
    </div>
  );
}

export function Home() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Hexora Publication | Digital experiences for tomorrow</title>
        <meta
          name="description"
          content="Hexora Publication combines creativity, technology and innovation to build meaningful digital solutions for growing businesses."
        />
      </Helmet>
      <section className="hero">
        <div className="hero__noise" />
        <div className="container hero__inner">
          <motion.div
            className="hero__copy"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="eyebrow eyebrow--gold">
              <span className="eyebrow__dot" /> IDEAS INTO IMPACT
            </span>
            <h1>
              Building digital experiences that <em>shape tomorrow.</em>
            </h1>
            <p>
              At Hexora Publication, we combine creativity, technology and
              innovation to transform ideas into meaningful digital solutions.
            </p>
            <div className="hero__actions">
              <Button href="#services">Explore our services</Button>
              <Link className="text-link text-link--light" to="/contact">
                Contact us <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="hero__scroll">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown size={14} />
            </div>
          </motion.div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          >
            <HexagonArt />
          </motion.div>
        </div>
        <span className="hero__side-label">
          HEXORA PUBLICATION · DIGITAL STUDIO
        </span>
      </section>

      <section className="intro-section section-pad">
        <div className="container intro-grid">
          <motion.div
            className="intro-visual"
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1100&q=85"
              alt="Light-filled contemporary workspace"
            />
            <div className="intro-visual__badge">
              <span>H</span>
              <small>
                IMAGINE
                <br />
                WHAT&apos;S NEXT
              </small>
            </div>
            <div className="intro-visual__index">
              01 <span>—</span> 03
            </div>
          </motion.div>
          <div className="intro-copy">
            <span className="eyebrow">A THOUGHTFUL TECHNOLOGY PARTNER</span>
            <h2>
              Where innovation meets <em>possibility.</em>
            </h2>
            <p>
              Big ideas deserve a clear path to the real world. We partner with
              businesses to turn bold thinking into useful, human-centered
              digital solutions.
            </p>
            <p>
              From the first sketch to the finished product, we bring strategy,
              design and technology together to help you move forward with
              confidence.
            </p>
            <Link to="/about" className="text-link">
              Get to know Hexora <ArrowUpRight size={16} />
            </Link>
            <div className="intro-copy__line" />
          </div>
        </div>
      </section>

      <section id="services" className="services-section section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title={
              <>
                Digital craft, <em>made for you.</em>
              </>
            }
            description="From a single spark to a complete digital ecosystem, we help turn possibilities into practical solutions."
          />
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.number} service={service} />
            ))}
          </div>
          <div className="services-footnote">
            <span>01 — 06</span>
            <span>Curiosity meets craft in everything we do.</span>
            <ArrowRight size={16} />
          </div>
        </div>
      </section>

      <section className="why-section section-pad">
        <div className="container why-grid">
          <div className="why-intro">
            <span className="eyebrow eyebrow--gold">THE HEXORA DIFFERENCE</span>
            <h2>
              Good work starts with <em>good questions.</em>
            </h2>
            <p>
              We believe the best solutions come from listening first, thinking
              deeply and building with care.
            </p>
            <Button to="/about" variant="outline-light">
              More about us
            </Button>
          </div>
          <div className="strength-list">
            {strengths.map(([number, title, description]) => (
              <motion.div
                className="strength-item"
                key={number}
                initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: Number(number) * 0.07 }}
              >
                <span className="strength-item__number">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <MoveUpRight size={18} aria-hidden="true" />
              </motion.div>
            ))}
          </div>
          <div className="why-watermark" aria-hidden="true">
            H
          </div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="HOW WE WORK"
            title={
              <>
                A clear path from idea <em>to impact.</em>
              </>
            }
            description="Great outcomes are built step by step, with you in the loop at every turn."
          />
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.number}
                className="process-step"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="process-step__marker">
                  <span>{step.number}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-section__inner">
          <div className="cta-section__ornament" aria-hidden="true">
            <div />
            <div />
            <div />
          </div>
          <span className="eyebrow eyebrow--gold">
            YOUR NEXT CHAPTER STARTS HERE
          </span>
          <h2>
            Let&apos;s build something <em>extraordinary.</em>
          </h2>
          <p>
            Have an idea or a project in mind? Let&apos;s turn your vision into
            reality.
          </p>
          <Button to="/contact" variant="gold">
            Start a conversation
          </Button>
        </div>
      </section>
    </>
  );
}
