import logo from "../assets/kavinduLogo2.png"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
const Navbar = () => {
  return <nav className="flex items-center justify-between py-6 mb-20 ">
    <div className="flex items-center flex-shrink-0">
    <a href="#"><img src={logo} className="w-20 mx-2 rounded-lg" alt="logo"/></a>
        
    </div>
    <div className="flex items-center justify-center gap-4 m-6 text-2xl ">
         <a href="www.linkedin.com/in/kavindu-prabhashana-edirisinghe-83852123a"><FaLinkedin/></a>                             
         <a href="https://github.com/kavinduEdiri"><FaGithub/></a>
         <a href="#"><FaInstagram/></a>
         
    </div>
  </nav>
}

export default Navbar