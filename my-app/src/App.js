 
import './App.css';
import Profilecart from './components/Profilecart';
import Info from './data.json'


 

function App() {
  return (
    <div className='card-container' >
      
      {
          Info.map((e)=>{
            return(
            <Profilecart  img = {e[" image"]}
            dec = {e.designation}
            name = {e.name}
            jobdec = {e.jobDescripition}
            


            />
            )

          })
      }

      
  
 
      
   
    </div>
  );
}

export default App;
