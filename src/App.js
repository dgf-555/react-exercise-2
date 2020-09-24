import React, { Component } from 'react';
import './App.scss';
//import Phone from '.././src/components/phone/Phone';
import Phones from '.././src/components/phone/Phones';
import Store from '.././src/components/head_store/Store';

class App extends Component {
  render() {
    return (
      <main className="app">
        {/* <Phone /> */}
        <Store />
        <Phones />
      </main>
    );
  }
}

export default App;
