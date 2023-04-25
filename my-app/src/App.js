 
import './App.css';
import Profilecart from './components/Profilecart';


 

function App() {
  return (
    <div className='card-container' >
  
     <Profilecart
     image = "https://randomuser.me/api/portraits/thumb/men/75.jpg"
     designation = "wedeveloper"
     name = "rahuhl"
     jobDescripition = "softre Devloper , frontEnd  Devops ad socialmedia infuluncer"
  
     />
     <Profilecart
     image = "https://randomuser.me/api/portraits/thumb/men/75.jpg"
     designation = "Hacking skills"
     name = "Baba"
     jobDescripition = "softre Devloper , frontEnd  Devops ad socialmedia infuluncer"
  
     />
     <Profilecart
     image = "https://randomuser.me/api/portraits/thumb/men/75.jpg"
     designation= "javascript Drveloper"
     name = "Ravi"
     jobDescripition = "softre Devloper , frontEnd  Devops ad socialmedia infuluncer"
  
     />
   
    </div>
  );
}

export default App;
