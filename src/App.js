import { Switch, Route, withRouter } from 'react-router-dom';
import { FooterBar } from './components/FooterBar';
import { NavbarHeader } from './components/NavbarHeader';
import { Sidebar } from './components/Sidebar';
import { CreateGame } from './pages/CreateGame';
import { Dashboard } from './pages/Dashboard';

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
          </Switch>
        </div>
      </div>
      <FooterBar location={location} />
    </>
  );
}

export default withRouter(App);
