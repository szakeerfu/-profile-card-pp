import React from 'react'
import "./profile.css"


 


function Profilecart (props)  {
 
  
   return(
    <div className='main-card'>
    <div className="card">
        <img src={ props.img} alt={props.name}  />
        <div className="cart-body">
            <h4 className="cart-subtitle">{ props.dec}</h4>
            <h3 className="card-title">{ props.name}</h3>
            <p className="cart-text">{ props.jobdec}</p>
        </div>
        <button>Click Here</button>
    </div>
    
    </div>
   );
}

export default Profilecart;