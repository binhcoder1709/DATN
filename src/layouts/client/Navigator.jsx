import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

export default function Navigator() {
  // set state
  const [dropdown, setDropdown] = useState(false);

  // handler Dropdown function
  const handleDropdownClick = () => {
    if (dropdown === false) {
      setDropdown(true);
    } else {
      setDropdown(false);
    }
  };
  return (
    <>
      <div className="w-[250px] bg-black h-screen">
        <div>
          <img
            src="https://sackim.com/wp-content/uploads/2019/02/logo-apple-hien-tai.jpg"
            alt=""
          />
        </div>
        <nav>
          <NavLink to="/">
            <FontAwesomeIcon icon={faHome} /> Trang chủ
          </NavLink>
          <div>
            <NavLink to="/" className="text-white" onClick={handleDropdownClick}>
              <FontAwesomeIcon icon={faBuilding} /> Danh mục
            </NavLink>
            {dropdown && (
              <div className="flex flex-col hidden">
                <NavLink>Doanh nghiệp</NavLink>
                <NavLink>Giáo dục</NavLink>
                <NavLink>Game</NavLink>
                <NavLink>Shopping</NavLink>
                <NavLink>Design</NavLink>
              </div>
            )}
          </div>
          {/* <NavLink to="/"><FontAwesomeIcon icon={faHome}/> Trang chủ</NavLink>
          <NavLink to="/"><FontAwesomeIcon icon={faHome}/> Trang chủ</NavLink> */}
        </nav>
      </div>
    </>
  );
}
