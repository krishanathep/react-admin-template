import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function StudentEdit() {
  const { id } = useParams();

  const history = useNavigate();

  const [editstudent, setEditStudent] = useState([]);

  const getData = async () => {
    await fetch(
      "https://www.full-stack-app.com/services/public/api/edit-student/" + id
    )
      .then((res) => res.json())
      .then((res) => setEditStudent(res.student));
    console.log(editstudent);
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  function handleInput(event) {
    event.persist();
    setEditStudent({
      ...editstudent,
      [event.target.name]: event.target.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: editstudent.name,
      course: editstudent.course,
      email: editstudent.email,
      phone: editstudent.phone,
    };

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    await fetch(
      "https://www.full-stack-app.com/services/public/api/update-student/" + id,
      requestOptions
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Success",
            text: "Your work has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
          history("/students", { replace: true });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Error",
            text: "Something went wrong!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  }

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Students</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">Students</Link>
                  </li>
                  <li className="breadcrumb-item active">Edit</li>
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
                  <h3 className="card-title">Student Edit</h3>
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
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input
                            name="name"
                            type="text"
                            value={editstudent.name}
                            className="form-control"
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="course">Course</label>
                          <input
                            name="course"
                            type="text"
                            value={editstudent.course}
                            className="form-control"
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input
                            name="email"
                            type="text"
                            value={editstudent.email}
                            className="form-control"
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="phone">Phone</label>
                          <input
                            name="phone"
                            type="text"
                            value={editstudent.phone}
                            className="form-control"
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group float-right">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>{" "}
                          <Link to="/students" className="btn btn-danger">
                            Cancel
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
