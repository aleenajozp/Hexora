import { motion, useReducedMotion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`section-heading section-heading--${align}${light ? " section-heading--light" : ""}`}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}
