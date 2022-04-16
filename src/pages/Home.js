import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Home</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item active">Home</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="row">
            <div class="col-lg-4 col-6">
              <div class="small-box bg-primary">
                <div class="inner">
                  <h3>150</h3>
                  <p>All Problems</p>
                </div>
                <div class="icon">
                  <i class="fas fa-info-circle"></i>
                </div>
                <Link to='/helpdesk/list' class="small-box-footer">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
            <div class="col-lg-4 col-6">
              <div class="small-box bg-success">
                <div class="inner">
                  <h3>100</h3>
                  <p>Finish Problems</p>
                </div>
                <div class="icon">
                  <i class="fas fa-tools"></i>
                </div>
                <Link to='/helpdesk/create' class="small-box-footer">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
            <div class="col-lg-4 col-6">
              <div class="small-box bg-info">
                <div class="inner">
                  <h3>1</h3>
                  <p>Profile</p>
                </div>
                <div class="icon">
                  <i class="fas fa-address-card"></i>
                </div>
                <Link to='/profiles/list' class="small-box-footer">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
