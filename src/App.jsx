import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import ActivityPage from './components/ActivityPage/ActivityPage';
import ProfilePage from './components/ProfilePage/ProfilePage';

function App() {
  return (
    <Router>
     
        <Routes>
          <Route path="/"  element= {<LoginPage/>}/>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/services" element={<ServicesPage/>} />
          <Route path="/activity" element={<ActivityPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
        </Routes>
    </Router>
    
   
  
  );
}

export default App;
