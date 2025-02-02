import React, { useEffect } from "react";
import NavBar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu } from "primereact/menu";
import SideBar from "./Sidebar";

const MainLayout = () => {

    const navigate = useNavigate();

    useEffect(()=>{

        const haveToken = sessionStorage.getItem('token');

        if(!haveToken){
            navigate('/login')
        }

    },[])


  return (
    <>
      <div className="layout-container layout-light layout-colorscheme-menu layout-static p-ripple-disabled">

        <SideBar></SideBar>

        <div className="layout-content-wrapper">
          {/* <div className="layout-topbar"></div> */}
          <div className="layout-content">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
