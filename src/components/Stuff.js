import React from 'react';

function Stuff(props){
    return (
      <div>
        <ul>
          {props.list.map(item => (
            <li key={item.id}>
              {" "}
              {item.item} <button className= "moveOver" onClick= {() => props.moveList(item.id)}> Add </button>
            </li>
          ))}
        </ul>
      </div>
    );
}



export default Stuff;