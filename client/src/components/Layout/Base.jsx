import React, {PropTypes} from 'react';
import ReactDom from 'react-dom';
import {
  Navbar,
  Header,
  Nav,
  Brand,
  NavItem,
  NavDropdown,
  MenuItem,
  Button
} from 'react-bootstrap';
import TopNav from './TopNav.jsx';
import Sidebar from './Sidebar.jsx';
import Footer from './Footer.jsx';

const Base = ({children}) => (
  <div className="main_container">
    {/* SideBar */}
    <Sidebar/> 
  
{/* Top Nav */}
    <TopNav/>
  
 {/* MainPage */}
    <div className="right_col" role="main">

      <div className="">
        <div className="page-title">
          <div className="title_left">
            <h3>Plain Page</h3>
          </div>

          <div className="title_right">
            <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">

              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..."></input>
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">Go!</button>
                </span>
              </div>

            </div>
          </div>
        </div>

        <div className="clearfix"></div>

        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="x_panel">
              <div className="x_title">
                <h2>Plain Page</h2>
                <ul className="nav navbar-right panel_toolbox">
                  <li>
                    <a className="collapse-link">
                      <i className="fa fa-chevron-up"></i>
                    </a>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-expanded="false">
                      <i className="fa fa-wrench"></i>
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li>
                        <a href="#">Settings 1</a>
                      </li>
                      <li>
                        <a href="#">Settings 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="close-link">
                      <i className="fa fa-close"></i>
                    </a>
                  </li>
                </ul>
                <div className="clearfix"></div>
              </div>
              <div className="x_content">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Footer */}
    <Footer/>

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;