import { useRoutes } from 'react-router-dom';
import './App.css';
import { routes } from './routes';
import Header from './components/Header';
import ProductList from './components/ProductList';


function App() {
  const appRoute = useRoutes(routes)
  return (
    <div >
      <Header/>
      {appRoute}
    </div>
  );
}

export default App;
