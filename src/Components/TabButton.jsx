
import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { motion } from "framer-motion";

import "./About.css";
const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
  };
const TabButton = ({active, selectTab,children}) =>{

    const buttonClasses = active ? "text-primary" : "text-[#ADB7BE]";
    return (
        //  <button className='skills' style={{hover: 'text-white'}}> {children}</button>
        <button onClick={selectTab} className="bg-white border-0">
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                // style={{height:"1px", marginTop:'2px' ,marginRight:'3px'}}
                className="h-1 bg-primary-500 mt-2 mr-3"
            ></motion.div>
        </button>
    )
}
export default TabButton