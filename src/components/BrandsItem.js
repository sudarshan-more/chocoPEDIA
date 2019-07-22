import React from "react";
import style from "./Chocolates.module.css";

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
            {<img src={props.logo} alt="" fluid />}
          </Link>
          <div className={style.txtstyle}>{props.desc}</div>
        </ol>
      </div>
    </>
  );
}

export default BrandsItem;










// function mapStateToProps(state) {
//   return {
//     state:state
//   };
// }






// import React from "react";
// import { Link } from "react-router-dom";
// import propTypes from "prop-types";

// function BrandsItems(props) {
//   return (
//     <div className="item">
//       <h3>
//         <Link to={`/brands/${props.id}`}>{props.name} </Link>
//       </h3>
//       <p onClick={() => props.onDescribe(props.desc)}>{props.logo}</p>
//     </div>
//   );
// }
// BrandsItems.propTypes = {
//   name: propTypes.string.isRequired,
//   // logo:propTypes.logo.isRequired,
//   onDescribe: propTypes.func.isRequired
// };
// BrandsItems.defaultProps = {
//   onDescribe: () => alert("not implemented"),
//   name: "default name",
//   logo: "default logo"
// };
// export default BrandsItems;
