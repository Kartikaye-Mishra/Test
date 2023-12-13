import React,{ useState } from 'react'
import Rating from '../Rating/Rating'
import CompanyNamesobj from '../../Data/Comapnies';
import './company.css'
import Destcards from '../Destcards/Destcards';
import Reviews from '../Reviews/Reviews';

export default function Company({company_name}) {
  const reviews = [
    {
      id: 1,
      text: 'Great product!',
      rating: 5,
    },
    {
      id: 2,
      text: 'I love it!',
      rating: 4,
    },
    {
      id: 3,
      text: 'Not what I expected.',
      rating: 2,
    },
  ];
  
  // const [ratingValue, setRatingValue] = useState(0);
  const [ratings, setRatings] = useState([3, 4, 5]);
  const averageRating = ratings.reduce((a, b) => a + b) / ratings.length;

  const handleRatingChange = (newValue) => {
    setRatings([...ratings, parseInt(newValue)]);
  };
  function getObjectByName(name) {
    return CompanyNamesobj.find(obj => obj.name === name);
  }
  
  // function getNames(arr) {
  //   return arr.map(obj => obj.name);
  // }
  // const CompanyNames = getNames(CompanyNamesobj);
  return (
    <>
    
    <div className='companybox'>
      <div className="boxtop">

      <h3>
        {company_name}
        </h3>
        
      <span>
      <Rating value={averageRating} onChange={handleRatingChange} />
      </span>
      </div>
       
    <div className="cards">
      {/* <p>These are card spaces</p> */}
      {/* <Destcards></Destcards>
      <Destcards></Destcards>
      <Destcards></Destcards> */}
      {
        
        <Destcards Companyobj = {getObjectByName(`${company_name}`)}></Destcards>

      }
    </div>
      <Reviews  reviews={reviews} ></Reviews>
    </div>

    </>
  )
}
