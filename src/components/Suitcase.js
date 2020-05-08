import React from 'react';

function Suitcase(props){
    return(
        <div>
            <ul>
          {props.toPack.map(item => (
            <li key={item.id}>
              {item.item}
            </li>
          ))}
        </ul>
        </div>
    )
}

export default Suitcase;