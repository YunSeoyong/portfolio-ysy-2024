import { motion } from "framer-motion";

const HexaIcons = ({name}) => {
    return (
        <motion.p 
            className={name}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
        >
            <img 
                src={`/assets/icon/icon_${name}.png`}
                alt={name}
            />
        </motion.p>
    );
};

export default HexaIcons;