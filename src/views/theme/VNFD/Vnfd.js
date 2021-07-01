import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import YAML from 'yaml'

import {
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import Pop from '../Popup'
import Vnfdform from '../VNFD/Vnfdform'
import DeleteIcon from '@material-ui/icons/Delete';


export default function Vnfd() {
  const [vnfd,setVnfd]=useState([]);

  useEffect(() => {
    setTimeout(() => {
      $('#example').DataTable().destroy();
    });
  },[]);

  useEffect(() => {
    $('#example').DataTable();
});

  useEffect(() => {
      // This is actually yaml data you need to prase it.
      axios.get('/osm/vnfpkgm/v1/vnf_packages_content')
      .then(res=>(
          // console.log(res.data),
          setVnfd(YAML.parse(res.data))
          
      ))
  })
  
 
    //initialize datatable
    $(document).ready(function () {
        $('#example').DataTable();
    });
     const [open, setOpen] = useState(false);

     
  function deleteitem(id){
    console.log(id)
    axios.delete(`/osm/vnfpkgm/v1/vnf_packages_content/${id}`)
      .then(res=>(
          console.log(res.data)
        
      ));
  }
     
  return (
    <>
   
      <CCard>
        <CCardHeader align="right">
          
         <Button
        variant="contained"
        className="rounded-pill text-blue"
        color="inherit"
        startIcon={<Send/>}
        onClick={()=>setOpen(true) }
      >
        UPLOAD VNFS
      </Button>
      
        
        </CCardHeader>
        <CCardBody>
        <div className="container">
          
          <table id="example" class="display">
            <thead>
                <tr>
                    <th>Short Name</th>
                    <th>Identifier</th>
                    <th>Type</th>
                    <th>Description</th>                  
                    <th>Vendor</th>
                    <th>Version</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {vnfd.map((vnfd)=>
        <tr key={vnfd.id}>
            <td>{vnfd.name} </td>
            <td>{vnfd._id} </td>
            <td>vnfd</td>
            <td>{vnfd.description} </td>
            <td>{vnfd.vendor}</td>       
            <td>{vnfd.version}</td>             
            <td> <button onClick={()=>deleteitem(vnfd._id)}><DeleteIcon/> </button></td>
        </tr>
                )}
                
            </tbody>
        </table>
          
        </div>
        </CCardBody>
      </CCard>


      <Pop
      title="New VIM"
      open={open}
      setOpen={setOpen}
      >
      <Vnfdform setOpen={setOpen}/>
      </Pop>
               
    </>
  )
}

