import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBrandDetails } from "../actionCreators/chocolatebrandAC";
import style from "./Chocolates.module.css";

function BrandDetails(props) {
  console.log("$$$$", props.chocolates);
  useEffect(() => {
    props.dispatch(getBrandDetails(props.match.params.id));
  }, []);

  return (
    <form className={style.form1}>
      <div className={style.chocolates1}>
        {props.chocolates.map(b => (
          <div>
            <li>
              {" "}
              <p className={style.txtstyle}>{b.name}</p>
              <div>
                <img src={b.image} />
              </div>{" "}
              <p className={style.txtstyle}>{b.desc}</p>
            </li>
          </div>
        ))}
      </div>
    </form>
  );
}

function mapStateToProps(state) {
  console.log(state.brandDetails);
  return {
    chocolates: state.brandDetails
  };
}

export default connect(mapStateToProps)(BrandDetails);
