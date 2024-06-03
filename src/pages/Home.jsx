import { motion, AnimatePresence } from "framer-motion"
import { useSnapshot } from "valtio"
import state from "../store"
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'
import { CustomButton } from "../components"

const Home = () => {
    const snap = useSnapshot(state)
 
  return (
    <AnimatePresence>
        {
            snap.intro && (
                <motion.section className="home" {...slideAnimation('left')} >
                    <motion.header 
                    {...slideAnimation("down")} 
                    className="flex align-center justify-center gap-3"
                    >
                        <img 
                        src="./shirt-icon.png"
                        alt="logo"
                        className="w-10 h-10 object-contain"
                        />
                        <h2
                        className="font-bold text-[30px] m-0 text-grade "
                        >
                            3d View
                        </h2>
                    </motion.header>

                    <motion.div
                    className="home-content"
                    {...headContainerAnimation}
                    >
                        <motion.div {...headTextAnimation} >
                            <h1 className="head-text" >
                                MAKE <br className="xl:block hidden" /> YOUR'S.
                            </h1>
                        </motion.div>

                        <motion.div
                        {...headContentAnimation}
                        className="flex flex-col gap-8"
                        >
                            <p
                            className="max-w-md font-normal text-black md:text-lg text-[22px]"
                            >
                                Create your own unique and exclusive shirt with our
                                brand-new 3D customization tool. <strong> Unleash your
                                imagination</strong>{" "} and define your own style.
                            </p>

                            <CustomButton 
                                type="filled"
                                title="Customize It"
                                handleClick={() => state.intro = false}
                                // customStyles="w-fit px-4 py-2.5 font-bold text-base"
                                customStyles="w-fit px-4 py-2.5 text-base"
                            />
                        </motion.div>
                        
                    </motion.div>
                </motion.section>
            )
        }
    </AnimatePresence>
  )
}

export default Home