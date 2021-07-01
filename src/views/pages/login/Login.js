import React, { useState } from 'react'
import axios from 'axios'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import bgs from '../../../assets/bgs.jpeg'
import './logincss.css'



const Login = (props) => {
  const {setIsloggedin}=props;
  
    const [user,setUser]=useState('');
    const [password,setPassword]=useState('');
    const [project,setProject]=useState('admin');

function handlesubmit(e){
    e.preventDefault();
   
    axios.post('/osm/admin/v1/tokens',
    {
      "username" : user,
      "password" : password,
      "project_id" : project
  })
    .then(response=>{
        console.log(response)
    })
    setIsloggedin(true);
}
 
  return (
   <>
    <div className="logodiv">
   <img className="bgslogo" src={bgs} alt="" />

<h1 className="projecttitle">Cloud Service Orchestrator</h1>
   </div>
  
    <div className="c-app c-default-layout flex-row align-items-center">
    
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard className="p-4">
              <CCardBody>
                <CForm>
                  <h1>Login</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput 
                    type="text"
                    placeholder="Username" 
                    autoComplete="username" 
                    value={user}
                      onChange={(e)=>setUser(e.target.value)}/>
                    
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Password" 
                    autoComplete="current-password" 
                    value={password}
                      onChange={(e)=>setPassword(e.target.value)} />
                     
                  </CInputGroup>
                  <CRow>
                    <CCol xs="6">
                      <CButton type="submit" color="primary" onClick={handlesubmit} className="px-4">Login</CButton>
                    </CCol>
                   
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
   </>
  )
}

export default Login
