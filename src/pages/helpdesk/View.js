import React from "react";
import { Link } from "react-router-dom";

export default function View() {

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>View</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Blank</li>
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
                  <h3 className="card-title">Title</h3>
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

                {/* <table className="table table-bordered">
                    <tr>
                      <td>ID</td>
                      <td>{problems.id}</td>
                    </tr>
                    <tr>
                      <td>Image</td>
                      <td><img src={detail.image} class="img-thumbnail" width={150} / ></td>
                    </tr>
                    <tr>
                      <td>Name</td>
                      <td>{detail.name}</td>
                    </tr>
                    <tr>
                      <td>Course</td>
                      <td>{detail.course}</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td>{detail.email}</td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td>{detail.phone}</td>
                    </tr>
                  </table>
                  <div className="form-group mt-2 float-right">
                  <Link to="/students" className="btn btn-danger">
                    Cancel
                  </Link>
                  </div> */}
                  <div className="form-group mt-2 float-right">
                  <Link to="/helpdesk/list" className="btn btn-danger">
                    Cancel
                  </Link>
                  </div>
                </div>
                <div className="card-footer">Footer</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
