import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <Link to="/" className="brand-link">
            <img
              src="assets/dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">AdminLTE 3</span>
          </Link>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="assets/dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt=""
                />
              </div>
              <div className="info">
                <Link to="#" className="d-block">
                  Alexander Pierce
                </Link>
              </div>
            </div>
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <i className="nav-icon fas fa-home" />
                    <p>Home</p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/students" className="nav-link">
                    <i className="nav-icon fas fa-users" />
                    <p>Students</p>
                  </Link>
                </li>
                <li className="nav-item has-treeview">
                  <Link to="#" className="nav-link">
                    <i className="nav-icon fas fa-tools" />
                    <p>
                      REPAIR
                      <i class="right fas fa-angle-left"></i>
                    </p>
                  </Link>
                  <ul className='nav nav-treeview'>
                    <li className='nav-item'>
                      <Link to='/repairs' className='nav-link'>
                        <i class="far fa-circle nav-icon"></i>
                        SHOW REPAIR
                      </Link>
                    </li>
                  </ul>
                  <ul className='nav nav-treeview'>
                    <li className='nav-item'>
                      <Link to='/create' className='nav-link'>
                        <i class="far fa-circle nav-icon"></i>
                        NEW REPAIR
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/blank" className="nav-link">
                    <i className="nav-icon fas fa-th" />
                    <p>
                      Blank
                      <span className="right badge badge-danger">New</span>
                    </p>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/boards/list" className="nav-link">
                    <i className="nav-icon fas fa-comments"></i>
                    <p>
                      Boards
                    </p>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <aside class="control-sidebar control-sidebar-light"></aside>
      </div>
    );
  }
}
