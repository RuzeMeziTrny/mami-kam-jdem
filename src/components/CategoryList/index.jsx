import React from 'react';
import './styles.css';
import { CategoryItemGeneral } from '../CategoryItemGeneral';

const restauraceKavarny = [
  {
    image: '../../assets/images/restaurants/bb.png',
    name: 'Bageterie Boulevard',
    address: 'Hornoměcholupská 764,Praha 15',
    web: 'http://www.bb.cz',
  },
  {
    image: '../../assets/icons/restaurants.svg',
    name: 'Cyklobar Ve Statku',
    address: 'Ke Štítu 33, Praha 114',
    web: '',
  },
  /* {
     image: "../../assets/images/restaurants/dolce-carosello.png",
     name: 'Dolce Carosello',
     address: 'Turnovského 497/2, 100 00 Praha 10 - Strašnice',
     web: 'https://www.dolce-carosello.cz',
   },
  {
     image: "../../assets/images/restaurants/hostivar.png",
     name: 'Hostivar 1',
     address: 'Lochotínská 656, 109 00 Praha 15 - Horní Měcholupy',
     web: 'https://www.pivovar-hostivar.cz',
   },
   {
     image: "../../assets/images/restaurants/bb.png",
     name: 'Bageterie Boulevard',
     address: 'Hornoměcholupská 764, 10900 Praha 15 - Horní Měcholupy',
     web: 'http://www.bb.cz',
   },
   {
     image: "../../assets/icons/restaurants.svg",
     name: 'Cyklobar Ve Statku',
     address: 'Ke Štítu 33, 104 00 Praha - Křeslice',
     web: "",
   },
   {
     image: "../../assets/images/restaurants/dolce-carosello.png",
     name: 'Dolce Carosello',
     address: 'Turnovského 497/2, 100 00 Praha 10 - Strašnice',
     web: 'https://www.dolce-carosello.cz',
   },
   {
     image: "../../assets/images/restaurants/hostivar.png",
     name: 'Hostivar 1',
     address: 'Lochotínská 656, 109 00 Praha 15 - Horní Měcholupy',
     web: 'https://www.pivovar-hostivar.cz',
   },*/
];

export const CategoryList = () => {
  return (
    <div className="category-list">
      <img
        className="category-arrow category-arrow--left"
        src="../../assets/icons/arrow_left.svg"
        alt="šipka doleva"
      />
      {restauraceKavarny.map((data) => (
        <CategoryItemGeneral
          key={data.name}
          image={data.image}
          name={data.name}
          address={data.address}
          web={data.web}
        />
      ))}
      <img
        className="category-arrow category-arrow--right"
        src="../../assets/icons/arrow_right.svg"
        alt="šipka doprava"
      />
    </div>
  );
};
