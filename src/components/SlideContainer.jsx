import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProgressIndicator from "./ProgressIndicator";
import React from "react";

export default function SlideContainer({ children }) {
    const slides = React.Children.toArray(children);
    const [index, setIndex] = useState(0);
    const total = slides.length;

    const next = () => setIndex((i) => Math.min(i + 1, total - 1));
    const prev = () => setIndex((i) => Math.max(i - 1, 0));

    const activeSlide = slides[index];

    const gradient =
        activeSlide.props?.gradient ??
        "linear-gradient(135deg, #000000, #111111)";

    return (
        <motion.div
            className="slide-app"
            animate={{ background: gradient }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <ProgressIndicator current={index} total={total} />

            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    className="slide"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, info) => {
                        if (info.offset.x < -100) next();
                        if (info.offset.x > 100) prev();
                    }}
                >
                    {activeSlide}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}
