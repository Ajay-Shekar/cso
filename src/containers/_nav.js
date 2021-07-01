import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-file" customClasses="c-sidebar-nav-icon"/>,
   
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['PROJECT']
  },
 
  {
    _tag: 'CSidebarNavItem',
    name: 'NS Instances',
    to: '/theme/typography',
    icon: 'cil-pencil',
  },
  
  {
    _tag: 'CSidebarNavItem',
    name: 'NS Packages',
    to: '/theme/nsd',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'VNF Packages',
    to: '/theme/vnfd',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'VIM Accounts',
    to: '/theme/vim',
    icon: 'cil-pencil',
  },

    
  

]

export default _nav
