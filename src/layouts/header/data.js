import { FaMapMarkedAlt, FaCheckCircle } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { AiFillHome, AiFillPhone, AiFillProject, AiFillSetting } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/project',
        icon: <AiFillProject />,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contacts',
        icon: <AiFillPhone />,
        cName: 'nav-text'
    }

]
