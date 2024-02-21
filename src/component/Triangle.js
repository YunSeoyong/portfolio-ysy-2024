import { motion } from "framer-motion";

const Triangle = ({ rotate }) => {
    const tri = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)"
        }
    }
    return (
        <motion.svg
            width="250"
            height="217"
            viewBox="0 0 250 217"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="triangle"
            style={{ transform: `translateX(-50%) rotate(${rotate}deg)` }}
        >
            <motion.path
                d="M125.2 0.199951L0.199951 217.2H250.2L125.2 0.199951Z" fill="white"
                variants={tri}
                initial="hidden"
                animate="visible"
                transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                }}
            />
        </motion.svg>
    );
};

export default Triangle