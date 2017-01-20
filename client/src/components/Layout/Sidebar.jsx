import React from 'react';
import {Link } from 'react-router';

const SideBar = () => (
  <div className="col-md-3 left_col">
    <div className="left_col scroll-view">
      <div className="navbar nav_title">
        <a href="index.html" className="site_title">
          <i className="fa fa-paw"></i>
          <span>Yukoni Admin</span>
        </a>
      </div>

      <div className="clearfix"></div>

      <div className="profile clearfix">
        <div className="profile_pic"></div>
        <div className="profile_info">
          <span>Welcome,</span>
          <h2>John Doe</h2>
        </div>
        <div className="clearfix"></div>
      </div>

      <br/>

      <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
        <div className="menu_section">
          <h3>General</h3>
          <ul className="nav side-menu">
            <li>
              <a>
                <i className="fa fa-home"></i>
                Home
                <span className="fa fa-chevron-down"></span>
              </a>
              <ul className="nav child_menu">
                <li>
                 <Link to='/'>Dashboard</Link>
                </li>
                <li>
                <Link to='/Homepage2'>Dashboard2</Link>
                
                </li>
                <li>
                     <Link to='/Homepage3'>Dashboard2</Link>
                </li>
              </ul>
            </li>
            <li>
              <a>
                <i className="fa fa-edit"></i>
                Forms
                <span className="fa fa-chevron-down"></span>
              </a>
              <ul className="nav child_menu">
                <li>
                  <a href="form.html">General Form</a>
                </li>
                <li>
                  <a href="form_advanced.html">Advanced Components</a>
                </li>
                <li>
                  <a href="form_validation.html">Form Validation</a>
                </li>
                <li>
                  <a href="form_wizards.html">Form Wizard</a>
                </li>
                <li>
                  <a href="form_upload.html">Form Upload</a>
                </li>
                <li>
                  <a href="form_buttons.html">Form Buttons</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                <i className="fa fa-desktop"></i>
                UI Elements
                <span className="fa fa-chevron-down"></span>
              </a>
              <ul className="nav child_menu">
                <li>
                  <a href="general_elements.html">General Elements</a>
                </li>
                <li>
                  <a href="media_gallery.html">Media Gallery</a>
                </li>
                <li>
                  <a href="typography.html">Typography</a>
                </li>
                <li>
                  <a href="icons.html">Icons</a>
                </li>
                <li>
                  <a href="glyphicons.html">Glyphicons</a>
                </li>
                <li>
                  <a href="widgets.html">Widgets</a>
                </li>
                <li>
                  <a href="invoice.html">Invoice</a>
                </li>
                <li>
                  <a href="inbox.html">Inbox</a>
                </li>
                <li>
                  <a href="calendar.html">Calendar</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                <i className="fa fa-table"></i>
                Tables
                <span className="fa fa-chevron-down"></span>
              </a>
              <ul className="nav child_menu">
                <li>
                  <a href="tables.html">Tables</a>
                </li>
                <li>
                  <a href="tables_dynamic.html">Table Dynamic</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                <i className="fa fa-bar-chart-o"></i>
                Data Presentation
                <span className="fa fa-chevron-down"></span>
              </a>
              <ul className="nav child_menu">
                <li>
                  <a href="chartjs.html">Chart JS</a>
                </li>
                <li>
                  <a href="chartjs2.html">Chart JS2</a>
                </li>
                <li>
                  <a href="morisjs.html">Moris JS</a>
                </li>
                <li>
                  <a href="echarts.html">ECharts</a>
                </li>
                <li>
                  <a href="other_charts.html">Other Charts</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                <i className="fa fa-clone"></i>Layouts
                <span className="fa fa-chevron-down"></span>
              </a>
              <ul className="nav child_menu">
                <li>
                  <a href="fixed_sidebar.html">Fixed Sidebar</a>
                </li>
                <li>
                  <a href="fixed_footer.html">Fixed Footer</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="menu_section">
          <h3>Live On</h3>
          <ul className="nav side-menu">
            <li>
              <a>
                <i className="fa fa-bug"></i>
                Additional Pages
                <span className="fa fa-chevron-down"></span>
              </a>
              <ul className="nav child_menu">
                <li>
                  <a href="e_commerce.html">E-commerce</a>
                </li>
                <li>
                  <a href="projects.html">Projects</a>
                </li>
                <li>
                  <a href="project_detail.html">Project Detail</a>
                </li>
                <li>
                  <a href="contacts.html">Contacts</a>
                </li>
                <li>
                  <a href="profile.html">Profile</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                <i className="fa fa-windows"></i>
                Extras
                <span className="fa fa-chevron-down"></span>
              </a>
              <ul className="nav child_menu">
                <li>
                  <a href="page_403.html">403 Error</a>
                </li>
                <li>
                  <a href="page_404.html">404 Error</a>
                </li>
                <li>
                  <a href="page_500.html">500 Error</a>
                </li>
                <li>
                  <a href="plain_page.html">Plain Page</a>
                </li>
                <li>
                  <a href="login.html">Login Page</a>
                </li>
                <li>
                  <a href="pricing_tables.html">Pricing Tables</a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                <i className="fa fa-sitemap"></i>
                Multilevel Menu
                <span className="fa fa-chevron-down"></span>
              </a>
              <ul className="nav child_menu">
                {/*
                         <li><a href="#level1_1">Level One</a>
                        <li><a>Level One<span className="fa fa-chevron-down"></span></a>
                          <ul className="nav child_menu">
                            <li className="sub_menu"><a href="level2.html">Level Two</a>
                            </li>
                            <li><a href="#level2_1">Level Two</a>
                            </li>
                            <li><a href="#level2_2">Level Two</a>
                            </li>
                          </ul>
                        </li>
                        <li><a href="#level1_2">Level One</a>
                        </li>
                        */}
              </ul>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-laptop"></i>
                Landing Page
                <span className="label label-success pull-right">Coming Soon</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="sidebar-footer hidden-small">
        <a data-toggle="tooltip" data-placement="top" title="Settings">
          <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="FullScreen">
          <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="Lock">
          <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="Logout">
          <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
        </a>
      </div>

    </div>
  </div>
);

export default SideBar;