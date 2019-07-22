import React from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import {} from "./1.PNG";
import {} from "./Search";
import { changeinput } from "../actionCreators/SIgnupAC";
import { connect } from "react-redux";

function NavBar(props) {
  const handleChange = value => e => {
    // console.log(value,e.target.value)
    props.dispatch(changeinput(value, e.target.value));
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          {" "}
          <img
            src="./1.PNG"
            width="100"
            height="60"
            className="d-inline-block align-top"
            alt=""
            fluid
          />
          <NavLink to="/" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <NavLink to="/" exact>
              HOME
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/brands" exact>
              BRANDS
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            {" "}
            <NavLink to="/chocolates" exact>
              CHOCOLATES
            </NavLink>
          </Nav.Link>
        </Nav>
        {props.isLoggedIn && (
          <>
            <Form inline>
              {/* <Nav.Link >
            {" "}
            <NavLink to="/login" exact>
              LOGIN
            </NavLink>
          </Nav.Link> */}

              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                name="searchval"
                onChange={handleChange("searchval")}
              />
              <a
                href={`/search/${props.searchval}`}
                variant="outline-success"
              >
                Search
              </a>
            </Form>
          </>
        )}
      </Navbar>
    </>
  );
}

function mapStateToProps(state) {
  // console.log(state)
  return {
    searchval: state.searchval,
    isLoggedIn: state.isLoggedIn
  };
}

export default connect(mapStateToProps)(NavBar);
