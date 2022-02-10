import React, { Component } from "react";

import { Link } from "react-router-dom";
import firebase from "../../database/firebase";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("boards");
    this.unsubscribe = null;
    this.state = {
      title: '',
      description: '',
      author: '',
      createAt: ''
    };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault()

    const { title, description, author } = this.state;

    this.ref.add({
        title,
        description,
        author,
        createdAt : Date()
    }).then((docRef)=>{
        this.setState({
            title: '',
            description: '',
            author: '',
            createdAt: ''
        })
        this.props.history.push('/boards/list')
        console.log(docRef)
    })
    .catch((error)=>{
        console.error('Error adding document: ', error )
    })
  }

  render() {
      const { title, description, author } = this.state;
    return (
      <div>
        
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>CREATE BOARD</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/boards/list">Boards</Link>
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
                    <h3 className="card-title">CREATE BOARD</h3>
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
                   <form onSubmit={this.onSubmit}>
                       <div className="form-group">
                           <label htmlFor="">Title :</label>
                           <input type="text" className='form-control' name='title' value={title} onChange={this.onChange} placeholder='Enter your title' />
                       </div>
                       <div className="form-group">
                           <label htmlFor="">Description :</label>
                           <input type="text" className='form-control' name='description' value={description} onChange={this.onChange} placeholder='Enter your description' />
                       </div>
                       <div className="form-group">
                           <label htmlFor="">Author :</label>
                           <input type="text" className='form-control' name='author' value={author} onChange={this.onChange} placeholder='Enter your author' />
                       </div>
                       <div className="form-group float-right">
                           <button type='submit' className='btn btn-primary mr-1'>Submit</button>
                           <Link to='/boards/list' className='btn btn-danger'>Cancel</Link>
                       </div>
                   </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
   
      </div>
    );
  }
}
