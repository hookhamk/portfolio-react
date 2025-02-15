// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <header>
        <h1>Kelly Hookham</h1>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Created by Kelly Hookham</p>
      </footer>
    </>
  );
}

export default App;
