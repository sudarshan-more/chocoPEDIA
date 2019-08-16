import React from "react";
import style from "../css/Chocolates.module.css";

import { Link } from "react-router-dom";
function BrandsItem(props) {
  return (
    <>
      <div className={style.chocolates1}>
        <ol align="center">
          <Link
            to={`/brands/${props.id}`}
            onClick={() => props.handleClick(props.id)}
          >
            {<img src={props.logo} alt=""  />}
          </Link>
          <div className={style.txtstyle}>{props.desc}</div>
        </ol>
      </div>
    </>
  );
}

export default BrandsItem;
