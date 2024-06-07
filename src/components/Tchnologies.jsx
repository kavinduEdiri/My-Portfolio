import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { DiRedis } from "react-icons/di"
import { BiLogoPostgresql } from "react-icons/bi"
import { SiJenkins } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";

import { motion } from "framer-motion"

const iconVarient =(duration)=>({
  initial:{y:-10}, 
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    }
  }
})

const Tchnologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5 }}
        className="my-20 text-center text-4xl ">Technologies</motion.h2>

        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}} 
        className="flex flex-wrap items-center justify-center gap-4">



        <motion.div 
        variants={iconVarient(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"> 

        <RiReactjsLine className="text-7xl text-cyan-400"/>

        </motion.div>




        <motion.div 
        variants={iconVarient(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"> 

        <SiSpring className="text-7xl text-green-500" />

        </motion.div>





        <motion.div 
        variants={iconVarient(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"> 

        <SiMongodb className="text-7xl text-green-50 0"/>

        </motion.div>





        <motion.div 
        variants={iconVarient(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">

        <DiMysql className="text-7xl text-blue-500" />

        </motion.div>





        <motion.div 
        variants={iconVarient(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"> 

        <FaNodeJs className="text-7xl text-green-500"/>

        </motion.div>





        <motion.div 
        variants={iconVarient(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"> 

      <FaPython className="text-7xl text-blue-500" />

        </motion.div>




        <motion.div 
        variants={iconVarient(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"> 

          <SiJenkins className="text-7xl text-blue-500" />

        </motion.div>


        <motion.div 
        variants={iconVarient(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"> 

        <FaDocker className="text-7xl text-cyan-400" />

        </motion.div>




        <motion.div 
        variants={iconVarient(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"> 

        <FaPhp className="text-7xl text-purple-500" />

        </motion.div>


        <motion.div 
        variants={iconVarient(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"> 

        <SiBootstrap className="text-7xl text-blue-400" />

        </motion.div>



        <motion.div 
        variants={iconVarient(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"> 

        <FaHtml5 className="text-7xl text-orange-600" />

        </motion.div>


        <motion.div 
        variants={iconVarient(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"> 

      <FaCss3Alt className="text-7xl text-blue-500" />

        </motion.div>

        
        </motion.div>
    </div>
  ) 
}

export default Tchnologies
