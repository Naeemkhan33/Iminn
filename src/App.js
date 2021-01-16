import { Switch, Route, withRouter } from 'react-router-dom';
import { FooterBar } from './components/FooterBar';
import { NavbarHeader } from './components/NavbarHeader';
import { Sidebar } from './components/Sidebar';
import { CreateGame } from './pages/CreateGame';
import { Dashboard } from './pages/Dashboard';
import { JoinGame } from './pages/JoinGame';
import { Matches } from './pages/Matches';
import { Profile } from './pages/Profile';

function App({ location }) {
  return (
    <>
      <NavbarHeader />
      <div className='d-flex bg-light vh-100'>
        <Sidebar location={location} />
        <div className='flex-grow-1 scroll-box py-5'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/create-game' component={CreateGame} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/join-game' component={JoinGame} />
            <Route exact path='/matches' component={Matches} />
          </Switch>
        </div>
      </div>
      <FooterBar location={location} />
    </>
  );
}

export default withRouter(App);
