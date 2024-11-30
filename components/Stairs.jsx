import { motion } from "framer-motion";

const StairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

//Calculate the reverse index for staggered delay
const reverseIndex = (index) => {
    const totalSteps = 6; //nombre de pas
    return totalSteps - index - 1;
};

const Stairs = () => {
    return (
        <>  
        {[...Array(6)].map((_, index) => {
            return (
            <motion.div
                key={index}
                variants={StairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                    delay: reverseIndex(index) * 0.07,
                }}
                className="h-full w-full relative"
                style={{ backgroundColor: '#FFFFFF' }}
                />
            )
        })}
        </>
    )
};

export default Stairs;
