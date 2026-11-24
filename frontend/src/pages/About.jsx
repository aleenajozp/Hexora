import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Compass,
  Gem,
  Handshake,
  Lightbulb,
  RefreshCw,
  Sparkles,
  Target,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "../components/Button.jsx";
import { SectionHeading } from "../components/SectionHeading.jsx";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We stay curious and challenge assumptions to find more meaningful ways forward.",
  },
  {
    icon: Gem,
    title: "Integrity",
    text: "We work with honesty, transparency and respect in every relationship.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    text: "We care about the details and take pride in work that stands the test of time.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    text: "The best ideas grow when different perspectives work together.",
  },
  {
    icon: Target,
    title: "Customer success",
    text: "Your goals are our compass, shaping the work from start to finish.",
  },
  {
    icon: RefreshCw,
    title: "Continuous learning",
    text: "We learn, adapt and keep improving as technology and needs evolve.",
  },
];

const expertise = [
  "Modern web technologies",
  "Application development",
  "User experience & interface design",
  "Digital transformation",
  "Custom software solutions",
];

export function About() {
  const reduceMotion = useReducedMotion();
  return (
    <>
      <Helmet>
        <title>About Us | Hexora Publication</title>
        <meta
          name="description"
          content="Learn about Hexora Publication's approach, mission and values. We bring creativity and technology together to help businesses move forward."
        />
      </Helmet>
      <section className="page-hero page-hero--about">
        <div className="container page-hero__inner">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow eyebrow--gold">
              <span className="eyebrow__dot" /> OUR STORY, STILL UNFOLDING
            </span>
            <h1>
              About Hexora <em>Publication.</em>
            </h1>
            <p>Innovation, creativity and technology working together.</p>
          </motion.div>
          <div className="page-hero__shape" aria-hidden="true">
            <span>H</span>
            <div />
            <div />
          </div>
        </div>
        <span className="page-hero__index">
          02 <span>/</span> THE HEXORA WAY
        </span>
      </section>

      <section className="story-section section-pad">
        <div className="container story-grid">
          <div className="story-copy">
            <span className="eyebrow">OUR STORY</span>
            <h2>
              Technology should open doors, <em>not add barriers.</em>
            </h2>
            <p>
              Hexora Publication is a technology-focused company committed to
              developing innovative digital solutions. We bring clear thinking
              and considered craft to the challenges businesses face as they
              grow.
            </p>
            <p>
              Every organization has its own ambitions. Our approach begins by
              understanding yours, then combining design and technology to
              create solutions with purpose, clarity and room to evolve.
            </p>
          </div>
          <motion.div
            className="story-visual"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1100&q=85"
              alt="Colleagues sharing ideas around a table"
            />
            <div className="story-visual__caption">
              <Compass size={18} />
              <span>Curiosity is our starting point.</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mission-section section-pad">
        <div className="container mission-grid">
          <article className="mission-card mission-card--gold">
            <span className="mission-card__icon">
              <Target size={23} />
            </span>
            <span className="eyebrow">OUR MISSION</span>
            <h2>
              Empower businesses through meaningful, reliable and innovative
              technology solutions.
            </h2>
            <span className="mission-card__index">01 / PURPOSE</span>
          </article>
          <article className="mission-card mission-card--navy">
            <span className="mission-card__icon">
              <Compass size={23} />
            </span>
            <span className="eyebrow">OUR VISION</span>
            <h2>
              Create a future where technology makes possibilities limitless.
            </h2>
            <span className="mission-card__index">02 / POSSIBILITY</span>
          </article>
        </div>
      </section>

      <section className="values-section section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT GUIDES US"
            title={
              <>
                Our values in <em>practice.</em>
              </>
            }
            description="The principles behind the way we think, work and build with our clients."
          />
          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.article
                  className="value-card"
                  key={value.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                >
                  <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                  <span className="value-card__index">0{index + 1}</span>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="expertise-section section-pad">
        <div className="container expertise-grid">
          <div>
            <span className="eyebrow eyebrow--gold">OUR EXPERTISE</span>
            <h2>
              Curiosity backed by <em>capability.</em>
            </h2>
            <p>
              We bring the right mix of skills to help transform your digital
              ambitions into practical progress.
            </p>
          </div>
          <ul className="expertise-list">
            {expertise.map((item, index) => (
              <li key={item}>
                <span>0{index + 1}</span>
                {item}
                <ArrowUpRight size={17} aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="closing-cta section-pad">
        <div className="container closing-cta__inner">
          <div>
            <span className="eyebrow">A GOOD PLACE TO BEGIN</span>
            <h2>
              Ready to innovate <em>with us?</em>
            </h2>
          </div>
          <Button to="/contact">Let&apos;s talk</Button>
        </div>
      </section>
    </>
  );
}
