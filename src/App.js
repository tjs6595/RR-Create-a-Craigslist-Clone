// Import data
import {postings} from './postings'

// Import components
import './App.css';
import SearchBar from './SearchBar';
import Directory from './Directory';
import Gallery from './Gallery';
import SideBar from './SideBar';


function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        {/* Your content will go here! */}
        <SearchBar />
        <Directory />
        <Gallery postings={postings}/>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
