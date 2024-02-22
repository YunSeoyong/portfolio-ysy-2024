import { motion } from "framer-motion";
import SkillText from "./SkillText";
import styled from "styled-components";

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
            fill: "none"
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
            >
            <motion.path
                d="M125.2 0.199951L0.199951 217.2H250.2L125.2 0.199951Z" fill="none"
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