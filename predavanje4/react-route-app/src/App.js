import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { Users } from "./components/Users";

class App extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    fetch("https://api.github.com/users").then((res) =>
      res.json().then((res) => {
        console.log(res);
        let users = res.slice(0, 5);
        this.setState({ users });
      })
    );
  }
  generatedLinks = () => {
    let userLinks = this.state.users.map((user) => {
      return <Link to={`/users/${user.login}`}>{user.login}</Link>;
    });
    return userLinks;
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="navigation">{this.generatedLinks()}</div>
          <Link to="/users">Users</Link>
          <Route path="/users/:id" component={Users}></Route>
          {/* <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/(korisnici|users|user)" component={Users}></Route>
            <Route path="*" render={() => <h1>404 Not Found</h1>}></Route>
          </Switch> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
