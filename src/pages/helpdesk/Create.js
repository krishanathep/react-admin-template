import React,{useState} from "react";
import { Link } from "react-router-dom";

export default function Blank() {

  const [name, setName]=useState('')
  const [detail, setDetail]=useState('')
  const [country, setCountry]=useState('')
  const [status, setStatus]=useState('Waiting')
  const [email, setEmail]=useState('test@gmail.com')

  function sendMail() {
    fetch('http://127.0.0.1:8000/api/email')
      .then((res)=>res.json())
      .then((res)=>{
        alert(res.message)
      })
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name,detail,country,status,email
    }

    const resuestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    

    await fetch('http://127.0.0.1:8000/api/add-problem',resuestOptions)
    .then((res)=>res.json())
    .then((res)=>{
      if(res.status === 200) {
        sendMail()
        alert(res.message+" ส่งอีเมลเรียบร้อยแล้ว")
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
                <h1>Create</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Create</li>
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
                  <h3 className="card-title">Create Problem</h3>
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
                    <div className="row container">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="name">Problem Name</label>
                          <input
                            type="text"
                            value={name}
                            className="form-control"
                            placeholder="Enter problem name"
                            onChange={(event) => setName(event.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="name">Problem Detail</label>
                          <input
                            type="text"
                            value={detail}
                            className="form-control"
                            placeholder="Enter problem detail"
                            onChange={(event) => setDetail(event.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="name">Country</label>
                          <input
                            type="text"
                            value={country}
                            className="form-control"
                            placeholder="Enter problem country"
                            onChange={(event) => setCountry(event.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            hidden
                            type="text"
                            value={status}
                            className="form-control"
                            placeholder="Enter status"
                            onChange={(event) => setStatus(event.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            hidden
                            type="text"
                            value={email}
                            className="form-control"
                            placeholder="Enter create at"
                            onChange={(event) => setEmail(event.target.value)}
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
                {/* <div className="card-footer">Footer</div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
