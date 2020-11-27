import React from 'react';
import './styles.css';



const restauraceKavarny = [
    {
      image: "../../assets/icons/restaurants",
      name: 'Bageterie Boulevard',
      address: 'Hornoměcholupská 764, 10900 Praha 15 - Horní Měcholupy',
      web: 'http://www.bb.cz',
    },
    {
      image: "../../assets/icons/restaurants",
      name: 'Cyklobar Ve Statku',
      address: 'Ke Štítu 33, 104 00 Praha - Křeslice',
      web: null,
    },
    {
      image: "../../assets/icons/restaurants",
      name: 'Dolce Carosello',
      address: 'Turnovského 497/2, 100 00 Praha 10 - Strašnice',
      web: 'https://www.dolce-carosello.cz',
    },
    {
      image: "../../assets/icons/restaurants",
      name: 'Hostivar 1',
      address: 'Lochotínská 656, 109 00 Praha 15 - Horní Měcholupy',
      web: 'https://www.pivovar-hostivar.cz',
    },
  ]
  

export const CategoryList = () => {
    return (
      <div className="category-list">
              { restauraceKavarny.map((data) => (
     <CategoryItemGeneral
     image = {data.image}
     name = {data.name}
     address = {data.address}
     web = {data.web}
     />
     ))}
      </div>
    );
  };
  
 