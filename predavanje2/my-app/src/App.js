import React from 'react';
import './App.css';
import { User } from './User';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userInput:'',
      userInfo:{name:'stasa', job:'kasha'},
      allUsers:[],
      loading:true,
      counter:0
    }
    this.setCounter = this.setCounter.bind(this);
  }
  componentDidMount(){
    fetch("https://jsonblob.com/api/16de3326-8d42-11ea-91b5-63d2dfd126db")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      let allUsers = response;
      this.setState({ allUsers, loading:false });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  usersToShow() {
    // let counter = this.state.counter
    // let allUsers = this.state.allUsers.slice(counter,counter+1);
    let userInput = this.state.userInput;
    let allUsers = this.state.allUsers.filter(
      (el) => el.login.indexOf(userInput)>=0);
    return allUsers.map((el, index) => {
      return <User userInfo={el} key={index}></User>;
    });
  }
  setCounter() {
    let counter = this.state.allUsers.length > this.state.counter + 1 ? this.state.counter+1 : 0;
    this.setState({counter})
  }
  handleSearchChange = (e) =>{
    let userInput = e.target.value;
    this.setState({userInput})
  }

  render() {
    if(this.state.loading===true){
      return(
        <div className="ui segment" style={{width:'100%', height:'100vh'}}>
          <div className="ui active dimmer">
            <div className="ui indeterminate text loader">Preparing Files</div>
          </div>
          <p></p>
        </div>
      )
    }
    return (
    <div className='my-wrapper'>
      <button className="ui right labeled icon button" onClick={this.setCounter}>
        <i className="right arrow icon"></i>
        Next
      </button>
      <div className="ui icon input">
        <input type="text" placeholder="Search..." onChange={this.handleSearchChange}></input>
        <i className="circular search link icon"></i>
      </div>
      <div className="ui link cards">{this.usersToShow()}</div>
  </div>)
  };
}

export default App;
