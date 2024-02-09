import React ,  {Component} from 'react'
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class createNote extends Component{
      state = {
        users: [],
        userSelected: "",
        title: "",
        content: "",
        date: new Date(),
        editing: false,
        _id: "",
      };
    
      componentDidMount = async () => {
        const res = await axios.get("http://localhost:3050/api/users");
        this.setState({
          users: res.data.map((user) => user.username),
          userSelected: res.data[0].username,
        });
        /**Validacion de parametro Id */
        if (this.props && this.props.params) {
          const idNote = this.props.params.id;
    
          if (idNote) {
            const res = await axios.get(
              "http://localhost:3050/api/notes/" + idNote
            );
            this.setState({
              title: res.data.title,
              content: res.data.content,
              autor: res.data.autor,
              date: new Date(res.data.date),
              editing: true,
              _id: this.props.params.id,
            });
          }
        }
      };
    
      onSubmit = async (e) => {
        e.preventDefault();
        const newNote = {
          title: this.state.title,
          content: this.state.content,
          date: this.state.date,
          author: this.state.userSelected,
        };
    
        if (this.state.editing) {
          await axios.put(
            "http://localhost:3050/api/notes/" + this.state._id,
            newNote
          );
        } else {
          await axios.post("http://localhost:3050/api/notes", newNote);
        }
        window.location.href = "/";
      };
    
      onInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
    
      onChangeDate = (date) => {
        this.setState({ date });
      };
    
      render() {
        return (
          <div className="col-md-6 offset-md-3">
            <div className="card card-body">
              <h4>Crear una nota</h4>
              {/** SELECT USER */}
              <div className="form-group">
                <select
                  className="form-control"
                  name="userSelected"
                  onChange={this.onInputChange}
                  value={this.state.userSelected}
                >
                  {this.state.users.map((user) => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))}
                </select>
              </div>
    
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="content"
                  className="form-control"
                  placeholder="content"
                  value={this.state.content}
                  onChange={this.onInputChange}
                  required
                ></textarea>
              </div>
    
              <div className="form-group">
                <DatePicker
                  className="form-control"
                  selected={this.state.date}
                  name="date"
                  onChange={this.onChangeDate}
                ></DatePicker>
              </div>
              <form onSubmit={this.onSubmit}>
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              </form>
            </div>
          </div>
        );
      }
}