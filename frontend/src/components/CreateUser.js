import React, { Component } from "react";
import axios from "axios";

export default class createUser extends Component {
  state = {
    users: [],
    username: "",
    password:"",
    message: "",
  };

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value, //obtengo el valor del inputs
    });
  };
  onChangePassword = (e) => {
    this.setState({
      password: e.target.value, //obtengo el valor del input
    });
  };

  //guardar en MgDB
  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3050/api/users", {
      username: this.state.username,
      password: this.state.password
    });
    this.setState({ username: "" });
    this.setState({ password: "" });
    this.getUsers();
  };

  async componentDidMount() {
    this.getUsers();
  }

  getUsers = async()=>{
    const res = await axios.get("http://localhost:3050/api/users");
    this.setState({ users: res.data });
  }

  deleteUser = async (id) => {
    await axios.delete("http://localhost:3050/api/users/" + id);
    this.getUsers();
  };
  render() {
    return (
      <div className="row p-4">
        <div className="col-md-4">
          <div className="card card-body">
            <h3>Crear nuevo usuario</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  value={this.state.username}
                  className="form-control"
                  onChange={this.onChangeUsername}
                />
                 <input
                  type="password"
                  value={this.state.password}
                  className="form-control mt-2"
                  onChange={this.onChangePassword}
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2">
                Guardar
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {this.state.users.map((user) => (
              <li
                className="list-group-item list-group-item-action"
                key={user._id}
                onDoubleClick={() => this.deleteUser(user._id)}//para seleccionar alguna fila
              >
                {user.username}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
