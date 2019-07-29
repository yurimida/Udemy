import React, { Component } from 'react';
import axios from 'axios'
import { resolve } from 'dns';
import Loading from './Loading';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: [],
      loading: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getUsers() {
    this.setState({
      loading: true
    })
    axios('https://api.randomuser.me/')
      .then(response => this.setState({
        user: [...this.state.user, ...response.data.results],
        loading: false,
      }));
  }
  handleSubmit(e){
    e.preventDefault();
    this.getUsers();
    console.log('more users loaded')
  }
  componentWillMount() {
    this.getUsers();
  }
  render() {
    const {loading,user} = this.state
    // 이렇게 쓰면 this.state.loading 이렇게 안쓰고 loading이라고 씀
    return (
      <div className="App">
                    <form onSubmit={this.handleSubmit}>
              <input type="submit" value="load users" />
            </form>
            <hr></hr>
        {!this.state.loading ? this.state.user.map(user => (
          <div key = {user.id.value}>
            <h3 style={{color: 'red'}}>{user.name.first}</h3>
            <p>{user.email}</p><hr></hr>

          </div>
        ))
          : <Loading message="Hey hey hey" />}

      </div>
    );
  }
}

export default App;
