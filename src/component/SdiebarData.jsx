import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as VsIcons from "react-icons/vsc";
import * as IoIcons from "react-icons/io";



export const SideBarData = [
    {
        title: "Articles",
        // icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: "Case law",
        // icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: "Profile",
        // icon: <GiIcons.FaGraduationCap />,
        cName: 'nav-text'
    },
    {
        title: "My profile",
        icon: <GiIcons.FaGraduationCap />,
        cName: 'nav-text'
    },
    {
        title: "My Library",
        icon: <AiIcons.AiFillStar />,
        cName: 'nav-text'
    },
    {
        title: "Alerts",
        icon: <RiIcons.RiMessage2Fill />,
        cName: 'nav-text'
    },
    {
        title: "Metrics",
        icon: <VsIcons.VscGraph />,
        cName: 'nav-text'
    },
    {
        title: "Advance Search",
        icon: <FaIcons.FaSearch />,
        cName: 'nav-text'
    },
    {
        title: "Setting",
        icon: <IoIcons.IoMdSettings />,
        cName: 'nav-text'
    },
]