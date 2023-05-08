import './assets/styles/css/style.css'
import './assets/mdi/css/materialdesignicons.min.css'
import { Sidebar } from './components/sidebar/Sidebar';
import { Navbar } from './components/navbar/Navbar';
function App() {
  return (
    <>
  <Navbar/>
  <Sidebar/>
    </>
  );
}

export default App;
