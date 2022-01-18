//!! START SILENT
import ClassComponentOne from './components/ClassComponentOne';
//!! END
//!!ADD
import FunctionalComponentOne from './components/FunctionalComponentOne'
//!!END_ADD
function App() {
  return (
    <div className='main-container'>
      {/*!!START SILENT */}
      <ClassComponentOne />
      {/*!!END */}
      {/*!!ADD */}
      <FunctionalComponentOne />
      {/*!!END_ADD */}
    </div>
  );
}

export default App;
