import React from 'react'
import {
  CButton,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,

} from '@coreui/react'
import {Avatar} from '@material-ui/core'
import Login from 'src/views/pages/login/Login'


const TheHeaderDropdown = (props) => {

 
 
  function handleLogout(){
    sessionStorage.clear();
    <Login/>
  }
 
  
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <Avatar></Avatar>
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
       
        <CDropdownItem>
        <CButton className="mfe-2"  onClick={handleLogout} color="primary">Logout</CButton>
        </CDropdownItem>
       
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
