import React, { useState } from 'react';

// material-ui
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { PlusCircleOutlined } from '@ant-design/icons';
import { DataGrid } from '@mui/x-data-grid';

// project import
import MainCard from 'components/MainCard';
import { FormControl } from '@mui/base';
import OutlinedInput from 'themes/overrides/OutlinedInput';
import { TextField } from '@mui/material';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function User() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <MainCard title="Listado de usuarios">
      <div>
        <Grid container spacing={1} >
          <Grid item xs={12} container direction="row"
            justifyContent="flex-end"
            alignItems="center">
            <Button sx={{ marginBottom: '20px' }}
              color="primary" onClick={handleOpen} variant="outlined" startIcon={<PlusCircleOutlined />}>
              Agregar Usuario
            </Button>
          </Grid>
        </Grid>
      </div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <div style={{ height: '100%', width: '100%' }} >

        <DataGrid

          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
      <div>
        <Modal
          id="1"
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Agregar
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                  </Grid>
                </Grid>
                <Grid container spacing={1} >
                  <Grid item xs={12} container direction="row"
                    justifyContent="flex-end"
                    alignItems="center">
                    <Button sx={{ marginTop: '20px' }}
                      color="primary" onClick={handleOpen} variant="outlined">
                      Guardar
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Typography>
          </Box>
        </Modal>
      </div>
    </MainCard >


  );
}
