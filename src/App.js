import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';
import ActivityPage from './components/ActivityPage';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/activity" component={ActivityPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
