import { CONTACT } from "../constants"

import { motion } from "framer-motion"

const Contac = () => {
  return (
    <div className="pb-20 border-b border-neutral-900">
        <motion.h2 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
        className="my-10 text-4xl text-center">Get In Touch</motion.h2>
        <div className="tracking-tighter text-center">
            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className="my-4">{CONTACT.address}</motion.p>

            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:2}}
            className="my-4">{CONTACT.phoneNo}</motion.p>

            <a href="kavinduprabhashana2000@gmail.com" className="border-b">{CONTACT.email}</a> <br />
            <a href="https://www.linkedin.com/in/kavindu-prabhashana-edirisinghe-83852123a/" className="border-b">{CONTACT.linkdein}</a> <br />
            <a href="https://github.com/kavinduEdiri" className="border-b">{CONTACT.github}</a> <br />
            <a href="#" className="border-b">{CONTACT.stackOverFlow}</a> <br />
        </div>
    </div>
  )
}

export default Contac