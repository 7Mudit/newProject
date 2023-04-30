import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AiOutlineCaretDown, AiOutlineLine } from "react-icons/ai";


const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    function changeToggle() {
        setDropdownVisible((prevVisible) => !prevVisible);
      }
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo_navbar">
          CU Help
        </Link>
        <div className="navbar_section">
          <div className="navbar_section_class_feed"   onClick={() => changeToggle()}>
            Platform
            <div className={`navbar_section_class_feed_dropdown_list ${dropdownVisible ? '' : 'hidden'}`} >
              <li>Class feed</li>
              <li>Live sessions</li>
              <li>Chatrooms</li>
              <li>Lectures</li>
              <li>Gradebook</li>
            </div>
            <div className="navbar_section_class_feed_dropdown">
              <AiOutlineCaretDown />
            </div>
          </div>
          <div>Blog</div>
          <div className="navbar_section_line">
            <AiOutlineLine />
          </div>
          <div>Sign in</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
