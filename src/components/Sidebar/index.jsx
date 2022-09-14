import { Button } from "react-bootstrap";
import React from "react";
import "./sidebar.scss";
import "boxicons";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
const Sidebar = ({ children }) => {
  const [submodule, setSubmodule] = useState(false);
  const location = useLocation().pathname;
  const finalLocation = location.slice(1, location.length);
  console.log(finalLocation);
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
          name: "Products",
          path: "products",
        },
        {
          name: "Category",
          path: "category",
        },
        {
          name: "Produk SKU",
          path: "produk-sku",
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
          <div className="profile d-flex align-items-center justify-content-start">
            <div className="me-3"></div>
            User dummy
          </div>
          <ul className="">
            <p className="mt-3 ms-1">PAGES</p>
            {listSidebar.map((res, key) =>
              !res.submodule ? (
                <Link key={key} to={res.path}>
                  <li
                    className={
                      finalLocation == res.path ? "location d-flex" : "d-flex"
                    }
                  >
                    <box-icon name={res.icon} color="#cfcfcf"></box-icon>
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
                      <box-icon name={res.icon} color="#cfcfcf"></box-icon>

                      {res.name}
                    </span>
                    <box-icon name="chevron-left" color="white"></box-icon>
                  </li>
                  {res.submodule.map((respon, index) => (
                    <ul
                      className={!submodule ? "submodule-none" : "submodule"}
                      key={index}
                    >
                      <Link to={respon.path}>
                        <li
                          className={
                            finalLocation == respon.path
                              ? "location d-flex align-items-center"
                              : "d-flex align-items-center"
                          }
                        >
                          <box-icon
                            type="solid"
                            name="circle"
                            color="#cfcfcf"
                            size="sm"
                          ></box-icon>
                          {respon.name}
                        </li>
                      </Link>
                    </ul>
                  ))}
                </>
              )
            )}
          </ul>
          <ul>
            <p className="mt-4 ms-1">SETTING</p>

            {listSetting.map((res, key) => (
              <li key={key}>{res.name}</li>
            ))}
          </ul>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
