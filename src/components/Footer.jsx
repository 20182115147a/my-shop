import React from "react";
import { OutlineButton } from "../components/Button";
import footerList from "../fakedata/footer-data";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-4 col-foo-1">
            <p className="sum">
              “Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ
              hành động của mình” là sứ mệnh, là triết lý, chiến lược.. luôn
              cùng MYSHOP tiến bước”
            </p>
            <h4 className="form-title">ĐĂNG KÝ NHẬN THÔNG TIN</h4>
            <div className="subscribe">
              <input
                type="text"
                className="subscribe__input"
                placeholder="Nhập email đăng ký của bạn"
              />
              <OutlineButton>Đăng ký</OutlineButton>
            </div>
          </div>
          <div className="col-2 col-foo-2">
            <ul className="footer__abouts footer__list">
              {footerList[0].abouts.name}
              {footerList[0].abouts.list.map((item, index) => (
                <li
                  key={index}
                  className="footer__abouts__item footer__list__item"
                >
                  <Link to={`${item.path}`}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-2 col-foo-3">
            <ul className="footer__abouts footer__list">
              {footerList[1].suports.name}
              {footerList[1].suports.list.map((item, index) => (
                <li
                  key={index}
                  className="footer__abouts__item footer__list__item"
                >
                  <Link to={`${item.path}`}>{item.display}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-4 col-foo-4">
              {footerList[2].contacts.list.map((item,index)=> 
              (<div className = 'footer__contacts' key = {index}>
                  <i className = {`${item.icon}`}></i>
                  <div className="footer__contacts__list">
                      {item.text.map((subItem,index)=> 
                         { if (subItem.info ==='' ) {
                             return (<p key = {index}>{`${subItem.display}`}</p>)
                         } 
                         else return (<p key = {index}>{`${subItem.display}:`} <Link to={`${subItem.path}`}>{subItem.info}</Link></p>)
                        }
                      )}
                  </div>
              </div>)
              )}
          </div>
          <div className="clear-fix"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
