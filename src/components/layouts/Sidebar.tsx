import React from "react";
import { Avatar } from "primereact/avatar";
import { Divider } from "primereact/divider";
import { Menu } from "primereact/menu";


const SideBar = ()=> {

  let topItems = [
    { label: 'Yeni Röntgen Yükle', icon: 'pi pi-plus',
      command:()=>{

      } 
  },
    { label: 'Rönten Listesi', icon: 'pi pi-search' }
];

  let botItems = [
    { label: 'Logout', icon: 'pi pi-sign-out' }
  ];

    return (
        <div className="layout-sidebar">
        <div className="sidebar-header flex flex-column">
              <img width={24} height={22} src="https://e7.pngegg.com/pngimages/621/162/png-clipart-gray-and-teal-logo-illustration-logo-dentistry-tooth-surgery-dental-logo-miscellaneous-blue-thumbnail.png" alt="" />
              <span className="ml-2">Çağatay Dentist</span>
              <Divider />

        </div>
        <div className="layout-menu-container">
          <div className="h-full flex flex-column justify-content-between">
          
          <div className="h-full flex flex-column justify-content-between">
          <Menu model={topItems} className="w-full border-none" />
          <Menu model={botItems} className="w-full border-none" />
          </div>

          <div className="flex flex-column">
            <Divider />
            <div className="flex flex-row justify-content-start align-items-center ml-3">
            <Avatar image="https://media.licdn.com/dms/image/v2/C4D03AQGYVPKBTt2MfQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1618665959667?e=2147483647&v=beta&t=pfRaN7Z8U3pAx9YxOna_C59xtChXriGChybwzRxRjO4" size="large" shape="circle" />
            <span className="ml-2"> Çağatay Kölüş</span>

            </div>
      </div>
          </div>

      
        </div>
      </div>
    )
}


export default SideBar;