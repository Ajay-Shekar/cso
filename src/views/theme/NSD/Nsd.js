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
import Nsdform from '../NSD/Nsdform'
import DeleteIcon from '@material-ui/icons/Delete';


 function Nsd() {
  const [nsd,setNsd]=useState([]);

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
      axios.get('/osm/nsd/v1/ns_descriptors_content')
      .then(res=>(
          console.log(res.data),
          setNsd(YAML.parse(res.data))
          
      ))
  })


    //initialize datatable
    $(document).ready(function () {
        $('#example').DataTable();
    });
     const [open, setOpen] = useState(false);

     
  function deleteitem(id){
    console.log(id)
    axios.delete(`/osm/nsd/v1/ns_descriptors_content/${id}`)
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
        UPLOAD NSD
      </Button>
      
        
        </CCardHeader>
        <CCardBody>
        <div className="container">
          
          <table id="example" class="display">
            <thead>
                <tr>
                    <th>Short Name</th>
                    <th>Identifier</th>
                    <th>Description</th>                  
                    <th>Vendor</th>
                    <th>Version</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {nsd.map((nsd)=>
        <tr key={nsd.id}>
            <td>{nsd.name} </td>
            <td>{nsd._id} </td>          
            <td>{nsd.description} </td>
            <td>{nsd.vendor}</td>       
            <td>{nsd.version}</td>             
            <td> <button onClick={()=>deleteitem(nsd._id)}><DeleteIcon/> </button></td>
        </tr>
                )}
                
            </tbody>
        </table>
          
        </div>
        </CCardBody>
      </CCard>


      <Pop
      title="Upload NSD"
      open={open}
      setOpen={setOpen}
      >
      <Nsdform setOpen={setOpen}/>
      </Pop>
               
    </>
  )
}

export default Nsd;