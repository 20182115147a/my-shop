import React from 'react'
import {useParams} from 'react-router'
import HeroSlide from '../components/HeroSlide'
 const Catalog = () => {
     const {category} = useParams();
    
     console.log(category)
  return (
    <div>Catalog</div>
  )
}
export default Catalog