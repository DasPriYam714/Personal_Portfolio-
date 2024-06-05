import { createContext, useContext, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const FadeInStaggerContext = createContext(false);

const viewport = { once: true, margin: '0px 0px -200px' };

interface AnimeProps {
  children: ReactNode;
}

export function Anime({ children, ...props }: AnimeProps) {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 50 },
        visible: { opacity: 1.5, y: 0 },
      }}
      transition={{ duration: 1 }}
      {...(isInStaggerGroup
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport,
          })}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface FadeInStaggerProps {
  faster?: boolean;
  children: ReactNode;
}

export function FadeInStagger({ faster = false, children, ...props }: FadeInStaggerProps) {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      >
        {children}
      </motion.div>
    </FadeInStaggerContext.Provider>
  );
}
