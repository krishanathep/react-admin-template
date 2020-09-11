import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import firebase from "../../database/firebase";
import Moment from "react-moment";

export default class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: "",
    };
  }

  componentDidMount() {
    const ref = firebase
      .firestore()
      .collection("boards")
      .doc(this.props.match.params.id)
      
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
        });
        console.log(this.state.board);
      } else {
        console.log("No such document!");
      }
    });
  }

  render() {
    const { title, description, author, createdAt } = this.state.board;
    return (
      <div>
        <Navbar />
        <Sidebar />
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>SHOW BOARD</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/boards/list">Boards</Link>
                    </li>
                    <li className="breadcrumb-item active">Show</li>
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
                    <h3 className="card-title">SHOW BOARD</h3>
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
                      <thead>
                        <tr>
                          <th>Title</th>
                          <td>{title}</td>
                        </tr>
                        <tr>
                          <th>Description</th>
                          <td>{description}</td>
                        </tr>
                        <tr>
                          <th>Author</th>
                          <td>{author}</td>
                        </tr>
                        <tr>
                          <th>CreatedAt</th>
                          <td><Moment>{createdAt}</Moment></td>
                        </tr>
                      </thead>
                    </table>
                    <div className="float-right">
                      <Link to="/boards/list" className="btn btn-secondary mt-2">
                        Go Back
                      </Link>
                    </div>
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
