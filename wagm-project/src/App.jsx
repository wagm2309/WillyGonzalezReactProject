import { Header } from "./components/Header/Header";
import "./App.scss";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Header />
      <ItemListContainer productos={"Nuestros productos"} />
    </div>
  );
}

export default App;
