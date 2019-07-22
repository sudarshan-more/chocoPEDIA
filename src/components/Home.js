import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import style from "./Home.css"
function Home(props) {
  if (!props.isLoggedIn) {
    alert("Please login ");
    return <Redirect to="/login" />;
  }
  return (
    <>
      <div className={style.content}>
        <h1 className={style.contentinside}>Hi !</h1>
        <p>You're logged in to chocopedia!!</p>
        {/* <p>
          <Link to="/login">Logout</Link>
        </p> */}
      </div>
    </>
  );
}
function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn,
    loginemail: state.loginemail
  };
}
export default connect(mapStateToProps)(Home);
