import React from 'react'
import {OutlineButton} from '../components/Button'
 const CollectionsClassified  = () => {
     const colors = [
         {
             hex : '03204C',
             display : 'navy'
         },
         {
            hex : '000000',
            display : 'đen'
        },
        {
            hex : '62BF5E',
            display : 'xanh lá'
        },
        {
            hex : '613B0D',
            display : 'nâu'
        },
        {
            hex : '8cd6c4',
            display : 'xanh mint'
        },
        {
            hex : 'C1C5C0',
            display : 'xám'
        },
        {
            hex : 'F10008',
            display : 'đỏ'
        },
        {
            hex : '6bbbdd',
            display : 'xanh'
        }
     ]
     const sizes = [
         'xs','s','m','l','xl','2xl','3xl','4xl'
     ]
     const prices = [
         {
             price: 100000,
             display: 'nhỏ hơn 100000đ'
         },
         {
            price: 300000,
            display: 'từ 100000đ - 300000đ'
        },
        {
            price: 500000,
            display: 'từ 300000đ - 500000đ'
        },
        {
            price: 700000,
            display: 'từ 500000đ - 700000đ'
        }
     ]
  return (
    <>
        <div className="collections-classified">
            <div className="collections-classified__list">
                <div className="collections-classified__item">
                    <h4 className="collections-classified__item__title">Màu sắc</h4>
                    <ul className="collections-classified__item__container">
                        {
                            colors.map(color => (
                            <li className= 'collections-classified__item__subitem'>
                                    {console.log(color.hex)}
                                   <OutlineButton> <span style ={{backgroundColor: `#${color.hex}`}}></span> {color.display}</OutlineButton>
                            </li>))
                        }
                    </ul>
                </div>
                <div className="collections-classified__item">
                    <h4 className="collections-classified__item__title">Kích thước</h4>
                    <ul className="collections-classified__item__container">
                        {
                            sizes.map(size => (
                            <li className= 'collections-classified__item__subitem'>
                                <OutlineButton>{size}</OutlineButton>
                            </li>))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default CollectionsClassified
