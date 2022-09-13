import { Button } from "react-bootstrap";
import React from "react";
import "./sidebar.scss";
import "boxicons";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
const Sidebar = ({ children }) => {
  const [submodule, setSubmodule] = useState(false);
  console.log(children);
  const listSidebar = [
    {
      name: "Dashboard",
      icon: "briefcase-alt-2",
      path: "dashboard",
    },
    {
      name: "Product",
      icon: "briefcase-alt-2",
      path: "product",
      submodule: [
        {
          name: "lorem ipsum",
        },
        {
          name: "lorem ipsum",
        },
        {
          name: "lorem ipsum",
        },
      ],
    },
    {
      icon: "briefcase-alt-2",
      path: "supplier",
      name: "Suppliers",
    },
    {
      icon: "briefcase-alt-2",
      path: "customer",
      name: "Customers",
    },
  ];
  const listSetting = [
    {
      name: "user",
    },
  ];
  return (
    <div className="menu ">
      <div className="nas">
        <Navbar />
      </div>
      <div className="d-flex">
        <div className="sidebar">
          <div className="profile d-flex">
            <div></div>
            Dummy
          </div>
          <p>Main Navigation</p>
          <ul>
            {listSidebar.map((res, key) =>
              !res.submodule ? (
                <Link key={key} to={res.path}>
                  <li className="d-flex">
                    <box-icon name={res.icon} color="white"></box-icon>
                    {res.name}
                  </li>
                </Link>
              ) : (
                <>
                  <li
                    key={key}
                    className="d-flex justify-content-between"
                    onClick={() => setSubmodule(!submodule)}
                  >
                    <span className="d-flex align-items-center">
                      <box-icon name={res.icon} color="white"></box-icon>

                      {res.name}
                    </span>
                    <box-icon name="chevron-left" color="white"></box-icon>
                  </li>
                  {res.submodule.map((respon, index) => (
                    <ul className={!submodule ? "submodule-none" : "submodule"}>
                      <li className="d-flex align-items-center">
                        <box-icon
                          type="solid"
                          name="circle"
                          color="white"
                          size="sm"
                        ></box-icon>
                        {respon.name}
                      </li>
                    </ul>
                  ))}
                </>
              )
            )}
          </ul>
          <p>Setting</p>
          <ul>
            {listSetting.map((res, key) => (
              <li>{res.name}</li>
            ))}
          </ul>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
