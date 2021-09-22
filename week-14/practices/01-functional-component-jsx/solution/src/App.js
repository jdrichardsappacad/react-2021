//!!START SILENT
import Showcase from './components/Showcase';
import './App.css';
//!!END

function App() {
  return (
    <div className='background'>
      <h1>App Component</h1>
      {/*!!START SILENT */}
      <Showcase />
      {/*!!END */}
    </div>
  );
}

export default App;
