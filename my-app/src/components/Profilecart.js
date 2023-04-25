import React from 'react'
import "./profile.css"


 


function Profilecart (props)  {
   const{image,designation,name,jobDescripition }=props
   function handleclick(){
    alert(name)
   };
   return(
    <div className='main-card'>
    <div className="card">
        <img src={image} alt={name}  />
        <div className="cart-body">
            <h4 className="cart-subtitle">{designation}</h4>
            <h3 className="card-title">{name}</h3>
            <p className="cart-text">{jobDescripition}</p>
        </div>
        <button>Click Here</button>
    </div>
    
    </div>
   );
}

export default Profilecart;