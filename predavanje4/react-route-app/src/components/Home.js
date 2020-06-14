import React from "react";
import apiCall from '../service/apiCall'
export const Home = () => {
  function getAllUsers() {
    apiCall('/users').then(res => console.log(res))
  }
  function getTomInfo() {
    apiCall('/users/tomtt').then(res => console.log(res))
  }
  return <div>
    <h1>Home</h1>
    <button onClick={getAllUsers}>Get all users</button>
    <button onClick={getTomInfo}>Get Tom</button>
  </div>;
};
