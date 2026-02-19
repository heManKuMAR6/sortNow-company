import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Section = ({ id, children, className = '', noPadding = false }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <section
            id={id}
            ref={ref}
            className={`section ${className}`}
            style={{
                position: 'relative',
                zIndex: 1,
                scrollMarginTop: '100px',
                padding: noPadding ? '0' : 'var(--spacing-3xl) 0'
            }}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
