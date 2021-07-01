import React,{useState,useEffect} from 'react'
import axios from 'axios'
import YAML from 'yaml'
import {
  CWidgetDropdown,
  CRow,
  CCol
} from '@coreui/react'

const WidgetsDropdown = () => {
  // render

  const [vnfc,setVnfc]=useState('');
  const [nsdc,setNsdc]=useState('');
  const [nsc,setNsc]=useState('');
  const [vimc,setVimc]=useState('');

  function nsinstances(){
    axios.get('/osm/nslcm/v1/ns_instances_content/')
    .then(res=>(
        setNsc(YAML.parse(res.data))
    ))}

  function vnfpackages(){
    axios.get('/osm/vnfpkgm/v1/vnf_packages_content')
    .then(res=>(
        setVnfc(YAML.parse(res.data))
    ))}

    function nspackages(){
      axios.get('/osm/nsd/v1/ns_descriptors_content')
      .then(res=>(
          setNsdc(YAML.parse(res.data))
      ))}

      function vimaccounts(){
        axios.get('/osm/admin/v1/vim_accounts')
        .then(res=>(
            setVimc(YAML.parse(res.data))
        ))}

  useEffect(() => {
    vnfpackages();
    nsinstances();
    nspackages();
    vimaccounts();
})


  return (

    
    <CRow>
      <CCol sm="6" lg="3" style={{height:'180px'}}>
        <CWidgetDropdown
          color="gradient-primary"
          header={nsc.length}
          text="NS Instances"
          style={{height:'90%'}}

          // footerSlot={
          //   <div
          //   className={'text-center'}
          //   style={{ height: '50px' }}
          // >
          //  1
          // </div>
          // }
        >
          
          
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3" style={{height:'180px'}}>
        <CWidgetDropdown
          color="gradient-info"
          header={vnfc.length}
          text="VNF Pakages"
          style={{height:'90%'}}
          
        >
         
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3" style={{height:'180px'}}>
        <CWidgetDropdown
          color="gradient-warning"
          header={nsdc.length}
          text="NS pakages"
          style={{height:'90%'}}
        >
         
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3" style={{height:'180px'}}>
        <CWidgetDropdown
          color="gradient-danger"
          header={vimc.length}
          text="VIM Accounts"
          style={{height:'90%'}}
        >
         
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
