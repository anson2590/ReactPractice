import React, {Component}  from 'react';
import PDemo from './components/PropsDemo';
import EventHanding from './components/EventHandlingDemo';
import FragmentsDemo from './components/FragmentsDemo';
import RefsDemo from './components/RefsDemo';
import PortalsDemo from './components/PortalsDemo';
import HOCClickCounter from './components/HigherOrderComponentsDemo/ClickCounter';
import HOCHoverCounter from './components/HigherOrderComponentsDemo/HoverCounter';
import RPClickCounter from './components/RenderPropsDemo/ClickCounter';
import RPHoverCounter from './components/RenderPropsDemo/HoverCounter';
import RPUser from './components/RenderPropsDemo/User';
import RPCounter from './components/RenderPropsDemo/Counter';
import ComponentC from './components/Context/ComponentC';
import { UserProvider } from './components/Context/UserContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <PDemo name="Anson" age="20">
            <h1>Welcome to React World</h1>
          </PDemo> */}

          {/* <EventHanding /> */}

          {/* <FragmentsDemo /> */}

          {/* <RefsDemo /> */}

          {/* <PortalsDemo /> */}

          {/* <HOCClickCounter />
          <HOCHoverCounter /> */}

          {/* <RPClickCounter />
          <RPHoverCounter />
          <RPUser name={(isLoggedIn) => isLoggedIn? 'Anson' : 'Guest'} /> */}

          {/* <RPCounter renderCount={(count, incrementCount) => (
            <RPClickCounter count={count} incrementCount={incrementCount} />
          )} />
          <RPCounter renderCount={(count, incrementCount) => (
            <RPHoverCounter count={count} incrementCount={incrementCount} />
          )} /> */}

          {/* providing value to descendants nested inside ComponentC */}
          {/* <UserProvider value='Anson'>
            <ComponentC /> 
          </UserProvider> */}
        </header>
      </div>
    );
  }
}

export default App;
