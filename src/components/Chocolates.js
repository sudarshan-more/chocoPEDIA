import React from "react";
import { getChocolates } from "../actionCreators/chocolateAC";
import { connect } from "react-redux";
import { useEffect } from "react";
import style from "./Chocolates.module.css";
import { Link , Redirect } from "react-router-dom";

function Chocolates(props) {
  useEffect(() => {
    props.dispatch(getChocolates());
  }, []);

  if(!props.isLoggedIn){
    alert("Please login ");
    return <Redirect to="/login"/>
  }
  return (
    <>
      <div className={style.formbg}>
        <form className={style.form1}>
          <div className={style.chocolates1}>
            <h1 align="center">Chocolates</h1>
            {props.chocolates.map(b => (
              <ol align="center" key={b.id}>
                <Link to={`/chocolates/${b.id}`}>
                  {" "}
                  <p className={style.txtstyle}>{b.name}</p>
                  <img className={style.image} src={b.image} fluid />
                </Link>
              </ol>
            ))}
          </div>
        </form>
      </div>
    </>
  );
}
function mapStateToProps(state) {
  return {
    chocolates: state.chocolates,
    isLoggedIn: state.isLoggedIn
  };
}
export default connect(mapStateToProps)(Chocolates);
