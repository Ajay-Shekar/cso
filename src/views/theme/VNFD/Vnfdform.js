import React,{useState,useEffect} from 'react'
import {Button,Grid} from '@material-ui/core'
import '../theme.css'
import axios from 'axios'
function Vnfdform(props) {
   const {setOpen}=props;


   const [id,setId]=useState('');
   const [name,setName]=useState('');
   const [sname,setSname]=useState('');
  
   function handlesubmit(e){
       e.preventDefault();
       console.log(id);
       console.log(name);
       console.log(sname);
      
       axios.post('/osm/vnfpkgm/v1/vnf_packages_content/',
       {
        "vnfd:vnfd-catalog": {
          "vnfd": [
            {
              "id":id ,
              "name": name,
              "short-name": sname,
              "description": "Simple VNF example with a cirros",
              "vendor": "OSM",
              "version": "1.0",
              "logo": "cirros-64.png",
              "mgmt-interface": {
                "cp": "eth0"
              },
              "connection-point": [
                {
                  "name": "eth0",
                  "type": "VPORT"
                }
              ],
              "vdu": [
                {
                  "id": "cirros_vnfd-vdu",
                  "name": "cirros_vnfd-vdu",
                  "description": "cirros_vnfd-VM",
                  "count": 1,
                  "vm-flavor": {
                    "vcpu-count": 1,
                    "memory-mb": 256,
                    "storage-gb": 2
                  },
                  "image": "cirros-0.3.5-x86_64-disk.img",
                  "interface": [
                    {
                      "name": "eth0",
                      "type": "EXTERNAL",
                      "virtual-interface": {
                        "type": "VIRTIO",
                        "bandwidth": "0",
                        "vpci": "0000:00:0a.0"
                      },
                      "external-connection-point-ref": "eth0"
                    }
                  ]
                }
              ]
            }
          ]
        }
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
              <div>
                  <label for="name" class="col-sm-2 col-form-label">Id<span class="star"> *</span></label>
                  <div class="col-sm-10">
                     <input type="text" required class="form-control"  value={id}
                        onChange={(e)=>setId(e.target.value)}/>
                  </div>
                </div>
                <div>
                  <label for="name" class="col-sm-2 col-form-label">Name<span class="star"> *</span></label>
                  <div class="col-sm-10">
                     <input type="text" required class="form-control"  value={name}
                        onChange={(e)=>setName(e.target.value)}/>
                  </div>
                </div>
                <div>
                  <label for="name" class="col-sm-2 col-form-label">Short Name<span class="star"> *</span></label>
                  <div class="col-sm-10">
                     <input type="text" required class="form-control"  value={sname}
                        onChange={(e)=>setSname(e.target.value)}/>
                  </div>
                </div>
            

              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="baseline"
                >
                      
                <Button type="reset" color="default" variant="contained">
                    Reset
                </Button>
          
               <Button type="submit"  color="primary" variant="contained" >
                    Create
                 </Button>
              

              </Grid>

            
  
            </form>
        </div>
    )
}

export default Vnfdform
