import React from 'react';
import './styles.css';
import { useParamas} from "react-router-dom"


/*const playgroundsRoute = [
  { path: '/Playgrounds/:playgroundsPage", component: PlaygroundsPage }
]*/



export const CategoryItemPlayground = (props) => {
  return (
    <div className="category-item">
      <img
        className="category-item__image"
        src={props.image}
        alt="obrázek místa"
      />
      <div className="category-item__details">
        <p className="category-item__name">{props.name}</p>
        <p className="category-item__address">{props.address}</p>
        
       {/* <Link to="/hriste" className= "category-item__web" >
            Dětská hřiště */}
        
        <a className="category-item__web" href={props.web}>
          Podrobnosti o hřišti
        </a>
      </div>
    </div>
  );
};
