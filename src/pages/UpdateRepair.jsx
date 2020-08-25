import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default class UpdateRepair extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Update</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Update</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
          <section className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="card mb-5">
                  <div className="card-header">
                    <h3 className="card-title">Update Repair</h3>
                    <div className="card-tools">
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                        title="Collapse"
                      >
                        <i className="fas fa-minus" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="remove"
                        title="Remove"
                      >
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Job ID :</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                              <i class="fas fa-list-ol"></i>
                              </span>
                            </div>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Name :</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="fas fa-user"></i>
                              </span>
                            </div>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Mobile :</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="fas fa-phone"></i>
                              </span>
                            </div>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Equip :</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <i class="fas fa-laptop"></i>
                              </span>
                            </div>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Date Start :</label>
                          <input type="date" className='form-control' />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Date Finish :</label>
                          <input type="date" className='form-control' />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Staff Name :</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                              <i class="fas fa-user-cog"></i>
                              </span>
                            </div>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Status :</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                              <i class="fas fa-chart-line"></i>
                              </span>
                            </div>
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <Link to='/repairs' className="btn btn-danger float-right">
                      Cancel
                    </Link>
                    <button className="btn btn-primary mr-1 float-right">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}