import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Dashboard from '../src/components/Dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>}>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
