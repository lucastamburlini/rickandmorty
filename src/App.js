import './App.css';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters from './data.js';

function App() {

   function searchHandler() {
      window.alert("El ID que voy a buscar")
   }

   function closeHandler() {
      window.alert('Emulamos que se cierra la card')
   }

   return (
      <div className='App'>
         <SearchBar onSearch={searchHandler} />
         <Cards characters={characters} onClose={closeHandler} />

      </div>
   );
}

export default App;
