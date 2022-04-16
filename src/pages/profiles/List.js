import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import "moment-timezone";

export default function Profiles_List() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Profiles</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Profiles</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">My Profile</h3>
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
                  <table className="table table-bordered">
                    <tr>
                      <td>Picture</td>
                      <td>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/dist/img/profile.png"
                          }
                          height='100'
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>{user.name}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{user.email}</td>
                    </tr>
                    <tr>
                      <td>Created</td>
                      <td>
                        <Moment format="DD/MM/YYYY">{user.created_at}</Moment>
                      </td>
                    </tr>
                    <tr>
                      <td>Updated</td>
                      <td>
                        <Moment format="DD/MM/YYYY">{user.updated_at}</Moment>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
