
import './App.css';
import { DataProvider } from './context/DataContext';
import RoutesIndex from './routes/Index';

function App() {

  return(
    <>
    <DataProvider>


    <RoutesIndex />
    </DataProvider>
        
     </>
     )
  
 
}

export default App;
