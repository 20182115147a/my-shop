import React,{useState} from 'react'
import {OutlineButton} from '../components/Button'

 const CollectionsClassified  = () => {
     const colors = [
         {
             hex : '03204C',
             display : 'Navy'
         },
         {
            hex : '000000',
            display : 'Đen'
        },
        {
            hex : '62BF5E',
            display : 'Xanh lá'
        },
        {
            hex : '613B0D',
            display : 'Nâu'
        },
        {
            hex : '8cd6c4',
            display : 'Xanh mint'
        },
        {
            hex : 'C1C5C0',
            display : 'Xám'
        },
        {
            hex : 'F10008',
            display : 'Đỏ'
        },
        {
            hex : '6bbbdd',
            display : 'Xanh'
        }
     ]
     const sizes = [
         'XS','S','M','L','XL','2XL','3XL','4XL'
     ]
     const prices = [
         {
             price: 100000,
             display: 'Nhỏ hơn 100000đ'
         },
         {
            price: 300000,
            display: 'Từ 100000đ - 300000đ'
        },
        {
            price: 500000,
            display: 'Từ 300000đ - 500000đ'
        },
        {
            price: 700000,
            display: 'Từ 500000đ - 700000đ'
        }
     ]
    const [isActive,setIsActive] = useState(true);
    const toggleActive = () => {
        setIsActive (!isActive);
    }
    const [isActive2,setIsActive2] = useState(true);
    const toggleActive2 = () => {
        setIsActive2 (!isActive2);
    }
    const [isActive3,setIsActive3] = useState(true);
    const toggleActive3 = () => {
        setIsActive3 (!isActive3);
    }
  return (
    <>
        <div className="collections-classified">
            <div className="collections-classified__list">
                <div className={`collections-classified__item ${isActive ? 'active' : ''}`}>
                    <div className="collections-classified__item__title__wrapper" onClick = { () => toggleActive()}>
                        <h4 className="collections-classified__item__title">Màu sắc</h4>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <ul className="collections-classified__item__container">
                        {
                            colors.map((color,index) => (
                            <li className= 'collections-classified__item__subitem'  key={index}>
                                   <OutlineButton > <span style ={{backgroundColor: `#${color.hex}`}}></span> {color.display}</OutlineButton>
                            </li>))
                        }
                    </ul>
                </div>
                <div className={`collections-classified__item ${isActive2 ? 'active' : ''}`}>
                <div className="collections-classified__item__title__wrapper" onClick = { () => toggleActive2()}>
                        <h4 className="collections-classified__item__title">Kích thước</h4>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <ul className="collections-classified__item__container">
                        {
                            sizes.map((size,index) => (
                            <li className= 'collections-classified__item__subitem' key={index}>
                                <OutlineButton >{size}</OutlineButton>
                            </li>))
                        }
                    </ul>
                </div>
                <div className={`collections-classified__item ${isActive3 ? 'active' : ''}`}>
                <div className="collections-classified__item__title__wrapper" onClick = { () => toggleActive3()}>
                        <h4 className="collections-classified__item__title">Khoảng giá (VNĐ)</h4>
                        <i className="fa-solid fa-chevron-down"></i>
                    </div>
                    <ul className="collections-classified__item__container">
                        {
                            prices.map((priceItem,index) => (
                            <li className= 'collections-classified__item__subitem' key={index}>
                                <input id={`c${index}`} type='checkbox' value={priceItem.price}/>
                                <label htmlFor = {`c${index}`}>{priceItem.display}</label>
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
