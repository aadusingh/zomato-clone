
import './App.css';
import React from 'react';
import Header from './components/header/header.component';
import { Route } from 'react-router-dom';
import Login from './components/Login/Log-in.component';
import LogOut from './components/Logout/Log-out.component';
import MenuBar from './components/menu-bar/menu-bar.component';
import Filter from './components/filter/filter.component';
import Card from './components/card-container/card-container.component';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MenuBar />
        <Filter />
        <Card />
        <switch>
          <Route exact path='/login' Component={Login} />
          <Route exact path='/logout' Component={LogOut} />
        </switch>

      </div>
    )
  }
}
export default App;