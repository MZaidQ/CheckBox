import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "bootstrap/dist/css/bootstrap.min.css";

const userData = [
    { name: "Bhanu", age: 9829001189, qual: 'B.Tech', fee: '1000000', course: 'MBA', specilization: 'HR', zone: 'East', date: 'Jan 08,2024' },
    { name: "Arijit", age: 9012097821, qual: 'B.Arch', fee: '1000000', course: 'MBA', specilization: 'HR', zone: 'West', date: 'Jan 08,2024' },
    { name: "Sam", age: 8819768922, qual: 'M.Tech', fee: '1000000', course: 'MBA', specilization: 'HR', zone: 'North', date: 'Jan 08,2024' },
    { name: "Rahul", age: 9098768923, qual: 'B.Sc',fee:'1000000',course:'MBA',specilization:'HR',zone:'East',date:'Jan 08,2024' },
    { name: "Priya", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },
    { name: "Vineet", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },
    { name: "Dev", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },
    { name: "Atul", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },
    { name: "Manoj", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },
    { name: "Minu", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },
    { name: "John", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },
    { name: "Hashim", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },
    { name: "Vishva", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },
    { name: "Anurag", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },
    { name: "Sujeet", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },
    { name: "Devya", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },
    { name: "Rohan", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },
    { name: "Ajay", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },
    { name: "Dev", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },
    { name: "Himanshu", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },
    { name: "Manoj", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },
    { name: "AYushi", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },
    { name: "Manish", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },
    { name: "Clark", age: 9089129825, qual: 'M.A',fee:'1000000',course:'MBA',specilization:'HR',zone:'South',date:'Jan 08,2024' },

];

function App() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // const resetUsers = users.map((user) => ({ ...user, isChecked: false }));
    // setUsers(resetUsers);
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => ({ ...user, isChecked: checked }));
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };

  const handleDelete = () => {
    const checkRows = [];
    
    for (let i = 0; i < users.length; i++) {
      if (users[i].isChecked === true) {
        checkRows.push({ name: users[i].name });
      }
    }
    setUsers(users.filter((user) => !user.isChecked));
    setOpen(false);


    // Show Snackbar
    setSnackbarMessage("Data deleted successfully");
    setSnackbarOpen(true);
  };

  const showDeleteIcon = users.some((user) => user.isChecked === true);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div className="container my-4" style={{position:'relative', width: "100%" }}>
    <div className="fixed-header" style={{ background: 'white', padding: '10px', position: 'fixed', top: '110px', width: '48%', zIndex: '1000' }}>
        <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            checked={users.length && !users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
        />
        <label className="form-check-label ms-2"></label>
        {showDeleteIcon && (
            <DeleteIcon  onClick={handleClickOpen} style={{ fontSize: '20px', marginBottom: '5px', cursor: 'pointer' }} />
        )}
              <Dialog  open={open} onClose={handleClose}>

               <DialogTitle id="alert-dialog-title">

                         {"Do you Want To delete Data?"}
                            {/* <CloseIcon fontSize="small" onClick={handleClose} style={{cursor:'pointer',marginLeft:'30px',marginBottom:'50px'}} /> */}

</DialogTitle>
<DialogActions>
  <Button onClick={handleClose}>Disagree</Button>
     <Button onClick={() =>  handleDelete() } autoFocus>
    Delete
  </Button>
</DialogActions>
</Dialog>

    </div>
    <div style={{ marginTop: '50px'}}>
        <table className={`table table-hover custom-table`}>
            <thead style={{ top: `-0.5px` }}>
                <tr>
                    <th style={{ background: "var(--primary)" }}></th>
                    <th style={{ background: "var(--primary)" }}>Student Name</th>
                    <th style={{ background: "var(--primary)" }}>Mobile Number</th>
                    <th style={{ background: "var(--primary)" }}>Fee</th>
                    <th style={{ background: "var(--primary)" }}>Qualification</th>
                    <th style={{ background: "var(--primary)" }}>Interested Course</th>
                    <th style={{ background: "var(--primary)" }}>Specialization</th>
                    <th style={{ background: "var(--primary)" }}>Zone</th>
                    <th style={{ background: "var(--primary)" }}>Date</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={index} style={{ background: user.isChecked ? "var(--primary)"  : 'transparent' }}>
                        <td style={{ paddingLeft: '10px', width: '40px',background: user.isChecked ? "var(--primary)"  : 'transparent' }}>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name={user.name}
                                checked={user?.isChecked || false}
                                onChange={handleChange}
                                
                            />
                        </td>
                        <td className="form-check-label ms-2" style={{ background: user.isChecked ? "var(--primary)"  : 'transparent' }}>{user.name}</td>
                        <td className="form-check-label ms-2" style={{ background: user.isChecked ? "var(--primary)"  : 'transparent' }}>{user.age}</td>
                        <td className="form-check-label ms-2" style={{ background: user.isChecked ? "var(--primary)"  : 'transparent' }}>{user.fee}</td>
                        <td className="form-check-label ms-2" style={{ background: user.isChecked ? "var(--primary)"  : 'transparent' }}>{user.qual}</td>
                        <td className="form-check-label ms-2" style={{ background: user.isChecked ? "var(--primary)"  : 'transparent' }}>{user.course}</td>
                        <td className="form-check-label ms-2" style={{ background: user.isChecked ? "var(--primary)"  : 'transparent' }}>{user.specilization}</td>
                        <td className="form-check-label ms-2" style={{ background: user.isChecked ? "var(--primary)"  : 'transparent' }}>{user.zone}</td>
                        <td className="form-check-label ms-2" style={{ background: user.isChecked ? "var(--primary)"  : 'transparent' }}>{user.date}</td>
                        <td className="form-check-label ms-2" style={{ background: user.isChecked ? "var(--primary)"  : 'transparent '}}>{user.data}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>

    <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleSnackbarClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />


</div>  
);
}

export default App;
