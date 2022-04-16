import React,{useState,useEffect} from "react";
import { Link,useParams } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();

  const[editproblem, setEditProblem] = useState([])

  const getData = async () => {
    await fetch('http://127.0.0.1:8000/api/edit-problem/'+id)
    .then((res)=>res.json())
    .then((res)=>setEditProblem(res.problem))
  }

  useEffect(()=>{
    getData(id)
  },[id])

  function handleInput(event){
    event.persist();
    setEditProblem({
      ...editproblem,
      [event.target.name]: event.target.value,
    });
  }
  
  async function handleSubmit(event){
    event.preventDefault();

    const data = {
      name: editproblem.name,
      detail: editproblem.detail,
      country: editproblem.country,
      status: editproblem.status,
      email: editproblem.email,
    }

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    await fetch('http://127.0.0.1:8000/api/update-problem/'+id, requestOptions)
    .then((res)=>res.json())
    .then((res)=>{
      if(res.status === 200) {
        alert(res.message)
        window.location.href = "/helpdesk/list"
      }
    })
  }

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Edit</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
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
                  <h3 className="card-title">Edit Problem</h3>
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
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="name">Problem Name</label>
                          <input
                            name="name"
                            type="text"
                            value={editproblem.name}
                            className="form-control"
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="course">Problem Detail</label>
                          <input
                            name="detail"
                            type="text"
                            value={editproblem.detail}
                            className="form-control"
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label htmlFor="email">Country</label>
                          <input
                            name="country"
                            type="text"
                            value={editproblem.country}
                            className="form-control"
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label htmlFor="phone">Status</label>
                          <input
                            name="status"
                            type="text"
                            value={editproblem.status}
                            className="form-control"
                            onChange={handleInput}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label htmlFor="phone">Email</label>
                          <input
                            name="email"
                            type="text"
                            value={editproblem.email}
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
                          <Link to="/helpdesk/list" className="btn btn-danger">
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
