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
import Instanceform from '../Instanceform'
import DeleteIcon from '@material-ui/icons/Delete';


function Typography() {
  const [ns,setNs]=useState([]);

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
      axios.get('/osm/nslcm/v1/ns_instances_content/')
      .then(res=>(
          console.log(res.data),
          setNs(YAML.parse(res.data))
          
      ))
  })
 
    //initialize datatable
    $(document).ready(function () {
        $('#example').DataTable();
    });
    
     const [open, setOpen] = useState(false);


     function deleteitem(id){
      console.log(id)
      axios.delete(`/osm/nslcm/v1/ns_instances_content/${id}`)
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
        New NS
      </Button>
      
        
        </CCardHeader>
        <CCardBody>
        <div className="container">
          
          <table id="example" class="display">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Identifier</th>
                    <th>Nsd name</th>
                    <th>Operational Status</th>
                    <th>Config Status</th>
                    <th>Detailed Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {ns.map((ns)=>
        <tr key={ns.id}>
            <td>{ns.name} </td>
            <td>{ns._id} </td>
            <td>{ns.nsd.name} </td>
            <td>{ns["operational-status"]}</td>       
            <td>{ns["config-status"]}</td>   
            <td>{ns["detailed-status"]}</td>          
            <td> <button onClick={()=>deleteitem(ns.id)}><DeleteIcon/> </button></td>
        </tr>
                )}
                
            </tbody>
        </table>
          
        </div>
        </CCardBody>
      </CCard>


      <Pop
      title="New Instance"
      open={open}
      setOpen={setOpen}
      >
      <Instanceform setOpen={setOpen}/>
      </Pop>
               
    </>
  )
}

export default Typography;