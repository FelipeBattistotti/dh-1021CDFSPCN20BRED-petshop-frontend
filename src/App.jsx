import './App.css';
import Router from './router';
import { UserPrefProvider } from './contexts/UserPrefContext';

function App() {
  return (
    <div className="App">
      <UserPrefProvider>
        <Router />
      </UserPrefProvider>
    </div>
  );
}

export default App;
