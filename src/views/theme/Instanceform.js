import React,{useState,useEffect} from 'react'
import {Button,Grid} from '@material-ui/core'
import './theme.css'
import axios from 'axios'
import YAML from 'yaml';

function Instanceform(props) {

    const {setOpen}=props;

    const [name,setName]=useState('');
    const [ns,setNs]=useState('');
    const [vim,setVim]=useState('');
    const [vimid,setVimid]=useState([]);
    const [nsid,setNsid]=useState([]);

    useEffect(() => {
        axios.get('/osm/admin/v1/vim_accounts')
        .then(res=>(
            // console.log(res.data),
            setVimid(YAML.parse(res.data))
            
        ))

        axios.get('osm/nsd/v1/ns_descriptors_content/')
        .then(res=>(
            // console.log(res.data),
            setNsid(YAML.parse(res.data))
            
        ))
    }, [])
   
    function handlesubmit(e){
        e.preventDefault();
        console.log(name);
        console.log(ns);
        console.log(vim);
        
        axios.post('/osm/nslcm/v1/ns_instances_content/',
        {
            "nsdId"  : ns,
            "nsName" : name,
            "vimAccountId" :vim
        
        }
        )
        .then(response=>{
            console.log(response)
        })
        setOpen(false);
        
    }





    return (
        <div>
           <form onSubmit={handlesubmit}>
              <div class="form-group row">
                  <label for="name" class="col-sm-2 col-form-label">Name<span class="star"> *</span></label>
                  <div class="col-sm-10">
                  <input type="text" required class="form-control"  value={name}
                        onChange={(e)=>setName(e.target.value)}/>
                  </div>
                </div>
            

              <div class="form-group row">
                <label for="nsdid" class="col-sm-2 col-form-label">Nsd Id<span class="star"> *</span></label>
                    <div class="col-sm-10">
                        
                         <select required class="form-control" value={ns}
                        onChange={(e)=>setNs(e.target.value)}>
                             <option  selected>SELECT Nsd</option>
                             {nsid.map((nsid)=>{
                             return <option value={nsid._id} >{nsid.name}</option>
                              } )}
                            
                         </select>
                    </div>
              </div>

              <div class="form-group row">
                <label for="selectvim" class="col-sm-2 col-form-label">Select VIM<span class="star"> *</span></label>
                    <div class="col-sm-10">
                        
                         <select id="selectvim" required class="form-control" value={vim}
                        onChange={(e)=>setVim(e.target.value)}>
                             <option selected>Select VIM</option>
                             {vimid.map((vimid)=>{
                             return <option value={vimid._id}>{vimid.name}</option>
                              } )}
                         </select>
                    </div>
              </div>

              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="baseline"
                >
                      
                <Button type="reset" color="default" variant="contained">
                    Cancel
                </Button>
          
               <Button type="submit"  color="primary" variant="contained" >
                    Create
                 </Button>
              

              </Grid>

            
  
            </form>
        </div>
    )
}

export default Instanceform
