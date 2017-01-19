import React, { PropTypes } from 'react';
import ReactDom from 'react-dom';
import {Navbar,Header,Nav,Brand,NavItem,NavDropdown,MenuItem} from 'react-bootstrap';


const Base = ({ children }) => (
  <div className="nav-md">
   </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;