import {Link} from 'react-router-dom'
import {headerMainNavs} from '../fakedata/header-data'
import logo from '../assets/logo.jpg'
import Button from '../components/Button'
const Header = props => {
    return (
        <div className="header">
            <div className="container">
               <div className="header__container">
                    <div className="section">
                        <div className="header__store__info">
                            <ul className="header__store__info__list">
                                <Link to='/'>
                                    <li className="header__store__info__item">
                                        <i className="fa-solid fa-location-dot"></i> Tìm <span className='text-second text-highlight'>170+</span> cửa hàng
                                    </li>
                                </Link>
                                <Link to='/'>
                                    <li className="header__store__info__item">
                                        <i className="fa-solid fa-phone"></i>  <span className='text-second text-highlight'>1800 0000</span> <span className='free'>FREE</span>
                                    </li>
                                </Link>
                                <Link to='/'>
                                    <li className="header__store__info__item">
                                    <i className="fa-solid fa-envelope"></i> chamsockhachhang@gmail
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="section">
                        <div className="header__main">
                            <div className="header__main__left">
                                <Link to='/'><img src={logo} alt="" className="header__logo" /></Link>
                                <ul className="header__big__nav">
                                    <li className="header__big__item">
                                        <Link to='/collections/bst-xuan-he' className='text-second text-highlight'>Xuân hè 2022</Link>
                                    </li>
                                    {headerMainNavs.map((headernav,index) => (
                                        <li className = "header__big__item" key={index}>
                                            <Link to={headernav.path}>{headernav.display}</Link>
                                            <div className="header__big__subnav__container" key={index}>
                                            {headernav.products_type.map((subnav,subindex) => (
                                                    <ul className="header__big__subnav" key={subindex}>
                                                    <Link to={`/collections${subnav.path}`}>{subnav.display}</Link>
                                                    {subnav.category.map((subnavItem,index) => 
                                                    (
                                                        <li className='header__big__subnav__item' key={index}>
                                                            <Link to={`/collections${subnavItem.path}`}>{subnavItem.display}</Link>
                                                        </li>
                                                    ))}
                                                    </ul>
                                            ))}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="header__main__right">
                                    <div className="header__search">
                                        <input type="text" className="header__search__input" placeholder='Tìm sản phẩm'/>
                                        <div className="header__search__icon">
                                            <Button className="header__search__btn"><i className="fa-solid fa-magnifying-glass"></i></Button>
                                        </div>
                                    </div>
                                    <div className="header__tool">
                                        <div className="header__tool__user">
                                            <Link to='/'><i className="fa-solid fa-user"></i></Link>
                                            <ul className="header__tool__user__action">
                                                <li className="header__tool__user__signin">
                                                    <Link to='/'>Đăng nhập</Link>
                                                </li>
                                                <li className="header__tool__user__signup">
                                                    <Link to='/'>Đăng ký</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="header__tool__favorite">
                                            <Link to='/'><i className="fa-solid fa-heart"></i></Link>
                                        </div>
                                        <div className="header__tool__cart">
                                            <Link to='/cart'><i className="fa-solid fa-bag-shopping"></i></Link>
                                            <ul className="header__tool__cart__action">
                                                <li className="header__tool__cart__signin">
                                                    <Link to='/'>Đăng nhập</Link>
                                                </li>
                                                <li className="header__tool__cart__signup">
                                                    <Link to='/'>Đăng ký</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                            <div className="clear-fix"></div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}
export default Header 