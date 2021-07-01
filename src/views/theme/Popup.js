import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {makeStyles,Typography} from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    dialogWrapper:{
    
        minWidth: '90vh',
        position:'absolute',
        top:theme.spacing(2)
       
    }
}))

export default function Popup(props) {
    const {title,children,open,setOpen}=props;
    const handleClose = () => {
        setOpen(false);
      };
      const classes=useStyles();
    return (
        <div>
            <Dialog open={open} classes={{paper: classes.dialogWrapper}} onClose={handleClose}>
                <DialogTitle id="form-dialog-title" >
                    <div >
                        <Typography component="div" variant="h6" >
                        {title}
                        </Typography>
                      
                    </div>
                </DialogTitle>
        <DialogContent dividers>
               {children}
          
        </DialogContent>
      
            </Dialog>
        </div>
    )
}
