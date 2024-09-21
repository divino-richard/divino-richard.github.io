import { HTMLMotionProps, motion } from "framer-motion"
import type { PropsWithChildren } from "react";

const AnimatedDiv: React.FC<PropsWithChildren<HTMLMotionProps<'div'>>> = ({children, ...props}) => {
	return (
		<motion.div
			animate={{ y: [-20, 0], opacity: [0, 1] }}
			transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
			{...props}
		>
			{children}
		</motion.div>
	)
}

export default AnimatedDiv
