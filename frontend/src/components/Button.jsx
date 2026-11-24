import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Button({
  to,
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const reduceMotion = useReducedMotion();
  const sharedProps = {
    className: `button button--${variant} ${className}`.trim(),
    ...props,
  };
  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
    </>
  );

  if (to) {
    return (
      <motion.div
        whileHover={reduceMotion ? undefined : { y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      >
        <Link to={to} {...sharedProps}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div
        whileHover={reduceMotion ? undefined : { y: -2 }}
        whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      >
        <a href={href} {...sharedProps}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      {...sharedProps}
    >
      {children}
    </motion.button>
  );
}
