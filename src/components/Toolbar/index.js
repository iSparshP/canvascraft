import React, { useState } from 'react'
import classes from "./index.module.css"
import cx from "classnames";

import {
  FaSlash,
} from "react-icons/fa";

import { LuRectangleHorizontal } from "react-icons/lu";

const Toolbar = () => {
  const [activeToolItem, setActiveToolItem] = useState("A");
  return (
    <div className={classes.container}>
      <div 
        className={
          cx(classes.toolItem, {[classes.active]: activeToolItem==="A"})
        }
        onClick={()=>setActiveToolItem("A")}
      >
        <FaSlash />
      </div>
      <div
        className={
          cx(classes.toolItem, {[classes.active]: activeToolItem==="B"})
        }
        onClick={()=>setActiveToolItem("B")}
      >
        <LuRectangleHorizontal />
      </div>
    </div>
  );
};

export default Toolbar;