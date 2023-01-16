import * as React from 'react';
import '../App.css'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { Box } from '@mui/system';



export default function ViewAllCourses() {
  const [rows, setRows] = useState([
    { assignmentNumber: 1, title: 'Javascript Arrays', uploadDate: '01-11-2023', deadline: '01-11-2023', totalMarks: 10 },
  ])

  const [columns, setColumns] = useState([
    // dkho field ka matlab ye ha k jo data rows se aye ga un variables ka name // headerName matlab jo ham ui main show krna chahtay han
    // align ka matlab data pe apply hogi property header wali only header pe jo schema columns ka ha usi base per rows main objects
    //main data dalna ha // u can learn from assignments component \\ width apni marzi se do jitna tumhain acha lagay table upper
    //and lower alignment ok ha table ki 
    { field: 'courseID', headerName: 'Course ID', width: 230, type: 'string', align: 'center', headerAlign: 'center'},
    { field: 'courseName', headerName: 'Course Name', width: 230, type: 'string', align: 'center', headerAlign: 'center'},
  ])

  return (
    <div className='body__container__viewcourses'>
      <div className='screenView__viewcourses'>
        <div className='courses__top'>
          <h2 className='courses__title'>Courses</h2>
        </div>
        <Box
          sx={{
            height: 540,
            width: '100%',
            '& .super-app-theme--header': {
              backgroundColor: 'black',
            },
          }} className="courses__box">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
            getRowId={(row) => row.assignmentNumber}
          />
        </Box>
      </div>
    </div>
  );
}

