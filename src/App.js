import { Switch, Route, withRouter } from 'react-router-dom';
import { FooterBar } from './components/FooterBar';
import { NavbarHeader } from './components/NavbarHeader';
import { Sidebar } from './components/Sidebar';
import { CreateGame } from './pages/CreateGame';
import { Dashboard } from './pages/Dashboard';
import { JoinGame } from './pages/JoinGame';
import { Matches } from './pages/Matches';
import { Profile } from './pages/Profile';
import { Ratings } from './pages/Ratings';
import { RoleSelect } from './pages/RoleSelect';
import { Stats } from './pages/Stats';

function App({ location }) {
  return (
    <>
      <NavbarHeader location={location} />
      <div className='d-flex bg-light vh-100'>
        <Sidebar location={location} />
        <div className='flex-grow-1 scroll-box py-5'>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/role-select' component={RoleSelect} />
            <Route exact path='/create-game' component={CreateGame} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/join-game' component={JoinGame} />
            <Route exact path='/matches' component={Matches} />
            <Route exact path='/stats' component={Stats} />
            <Route exact path='/ratings' component={Ratings} />
          </Switch>
        </div>
      </div>
      <FooterBar location={location} />
    </>
  );
}

export default withRouter(App);
