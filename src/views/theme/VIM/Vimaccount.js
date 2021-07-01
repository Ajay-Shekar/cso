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
import Vimform from '../VIM/Vimform'
import DeleteIcon from '@material-ui/icons/Delete';


export default function Vimaccount() {
  const [vim,setVim]=useState([]);


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
      axios.get('/osm/admin/v1/vim_accounts')
      .then(res=>(
          console.log(res.data),
          setVim(YAML.parse(res.data))
          
      ))
  })

   
    //initialize datatable
    $(document).ready(function () {
      $('#example').DataTable();
  });
  
   
    const [open, setOpen] = useState(false);

     
  function deleteitem(id){
    console.log(id)
    axios.delete(`/osm/admin/v1/vim_accounts/${id}`)
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
        New VIM
      </Button>
      
        
        </CCardHeader>
        <CCardBody>
        <div className="container">
          
          <table id="example" class="display">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Identifier</th>
                    <th>Type</th>
                    <th>Operational Status</th>
                    <th>Description</th>                    
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {vim.map((vim)=>
        <tr key={vim._id}>
            <td>{vim.name} </td>
            <td>{vim._id} </td>
            <td>{vim.vim_type} </td>
            <td>{vim._admin.operationalState} </td>
            <td>{vim._admin["detailed-status"]}</td>                   
            <td> <button onClick={()=>deleteitem(vim._id)}><DeleteIcon/> </button></td>
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
      <Vimform setOpen={setOpen}/>
      </Pop>
               
    </>
  )
}

