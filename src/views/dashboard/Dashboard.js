import React, { lazy } from 'react'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))


const Dashboard = () => {
  
  
  return (
    <>
      <WidgetsDropdown />

      <br/>

     <hr/>
     <br/>
    <div class="card">
     
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <th>Project Name:</th>
              <th>admin</th>
            </tr></thead>
            <thead>
            <tr>
              <th>Created:</th>
              <th></th>
            </tr></thead>
            <thead>
            <tr>
              <th>Modified:</th>
              <th></th>
            </tr></thead>
        
          </table>
      </div>
    </div>
  
     
    </>
  )
}

export default Dashboard
