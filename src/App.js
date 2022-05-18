import React from 'react';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import './App.css';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';


function App() {
  return (
      <div className='app'>
        <ItemContainer cake/>
        <ItemContainer/>
        <HooksCakeContainer/>
          <CakeContainer/>
          <HooksIceCreamContainer/>
          <IceCreamContainer/>
          <NewCakeContainer/>
          <UserContainer/>
      </div>

  );
}

export default App;
