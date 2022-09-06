
import { AiFillHome, AiFillPhone, AiFillProject } from "react-icons/ai";



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
