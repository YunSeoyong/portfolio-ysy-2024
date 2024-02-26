import { motion } from "framer-motion";

const Triangle = ({ id, rotate, name, text, mouseoverTri, mouseoutTri, isModal }) => {
    const tri = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "none"
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fill: "none",
            transition: {
                default: { delay: 0.5, duration: 1.5, ease: "easeInOut" },
                fill: { delay: 1.2, duration: 1.5, ease: [1, 0, 0.8, 1] },
            }
        }
    }
    return (
        <motion.svg
            width="250"
            height="217"
            viewBox="0 0 250 217"
            fill={isModal ? '#74BBEF' : 'none'}
            xmlns="http://www.w3.org/2000/svg"
            className="triangle"
            style={{ transform: `translateX(-50%) rotate(${rotate}deg)` }}
            onMouseOver={mouseoverTri}
            onMouseOut={mouseoutTri}
            variants={tri}
        >
            <motion.path
                d="M125.2 0.199951L0.199951 217.2H250.2L125.2 0.199951Z" fill={isModal ? '#74BBEF' : 'none'}
                variants={tri}
                initial="hidden"
                whileInView="visible"
            />
        </motion.svg>
    );
};

export default Triangle