import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function ServiceCard({ service }) {
  const reduceMotion = useReducedMotion();
  const Icon = service.icon;

  return (
    <motion.article
      id={service.slug}
      className="service-card"
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={reduceMotion ? undefined : { y: -6 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="service-card__top">
        <span className="service-card__icon">
          <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
        </span>
        <span className="service-card__number">{service.number}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <Link
        to="/contact"
        className="service-card__link"
        aria-label={`Discuss ${service.title}`}
      >
        Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    </motion.article>
  );
}
