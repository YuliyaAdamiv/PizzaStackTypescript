import './App.css';
import { Footer } from './common/componets/footer/Footer';
import { Header } from './common/componets/header/Header';
import { MenuList } from './common/componets/menu/menu-list/MenuList';
import pizzaMenu from './mocks/pizza.json'

function App() {
  return (
    <div>
      <Header/>
      <div className="mx-12 mb-24">
          <MenuList items={pizzaMenu}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
