import React,{useState,useEffect} from 'react'
import {Button,Grid} from '@material-ui/core'
import '../theme.css'
import axios from 'axios'
function Instanceform(props) {
   const {setOpen}=props;


   const [name,setName]=useState('');
   const [url,setUrl]=useState('');
   const [user,setUser]=useState('');
   const [tenant,setTenant]=useState('');
   const [type,setType]=useState('');
   const [password,setPassword]=useState('');

  
   function handlesubmit(e){
       e.preventDefault();
      
       axios.post('/osm/admin/v1/vim_accounts/',
       {
        "name": name,
        "vim_url": url,
        "vim_user": user,
        "vim_tenant_name": tenant,
        "vim_type": type,
        "vim_password": password
    })
       .then(response=>{
           console.log(response)
       })
       setOpen(false);
   }
   

    return (
        <div>
           <form onSubmit={handlesubmit}>
              <div>
                  <label for="name" class="col-sm-2 col-form-label">Name<span class="star"> *</span></label>
                  <div class="col-sm-10">
                     <input type="text" required class="form-control"  value={name}
                        onChange={(e)=>setName(e.target.value)}/>
                  </div>
                </div>
            
                <div >
                  <label for="name" class="col-sm-2 col-form-label">URL<span class="star"> *</span></label>
                  <div class="col-sm-10">
                     <input type="text" required class="form-control"  value={url}
                        onChange={(e)=>setUrl(e.target.value)}/>
                  </div>
                </div>

              <div >
                  <label for="name" class="col-sm-2 col-form-label">Username<span class="star"> *</span></label>
                  <div class="col-sm-10">
                     <input type="text" required class="form-control"  value={user}
                        onChange={(e)=>setUser(e.target.value)} />
                  </div>
                </div>
                
                <div >
                  <label for="name" class="col-sm-2 col-form-label">Tenant name<span class="star"> *</span></label>
                  <div class="col-sm-10">
                     <input type="text" required class="form-control"  value={tenant}
                        onChange={(e)=>setTenant(e.target.value)} />
                  </div>
                </div>

                <div>
                  <label for="name" class="col-sm-2 col-form-label">Type<span class="star"> *</span></label>
                  <div class="col-sm-10">
                     <input type="text" required class="form-control"  value={type}
                        onChange={(e)=>setType(e.target.value)} />
                  </div>
                </div>

                <div >
                  <label for="name" class="col-sm-2 col-form-label">Password<span class="star"> *</span></label>
                  <div class="col-sm-10">
                     <input type="text" required class="form-control"  value={password}
                        onChange={(e)=>setPassword(e.target.value)} />
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

export default Instanceform
