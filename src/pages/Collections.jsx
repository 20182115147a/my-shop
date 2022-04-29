import React from 'react'
import {useParams} from 'react-router-dom'
import CollectionsClassified from '../components/CollectionsClassified ';
export const Collections = () => {
    const {colelctionType} = useParams();
    let display = ''
    switch (colelctionType) {
        case 'ao-nam': {
            display = 'Áo Nam'
            break;
        }

        default : {
            break
        }
    }
  return (
      <section>
          <div className="collections">
              <div className="container">
                  <h2 className="title">{display}</h2>
                  <div className="collections__content">
                      <CollectionsClassified></CollectionsClassified>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Collections
