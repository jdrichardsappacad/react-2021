import Navbar from './components/Navbar';
import Detail from './components/Detail';
import SideCard from './components/SideCard';

function App() {
  return (
    <>
      <Navbar />
      <SideCard />
      <div className='old'>
        <Detail />
      </div>
    </>
  );
}

export default App;
