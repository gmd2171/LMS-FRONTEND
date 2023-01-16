import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import '../App.css'
import { Box } from '@mui/system';



export default function ViewAllAssignments() {
  const [rows, setRows] = useState([
    { assignmentNumber: 1, title: 'Javascript Arrays', uploadDate: '01-11-2023', deadline: '01-11-2023', totalMarks: 10 },
    { assignmentNumber: 2, title: 'React Hooks', uploadDate: '01-12-2023', deadline: '01-12-2023', totalMarks: 10 },
    { assignmentNumber: 3, title: 'React Class Components', uploadDate: '01-13-2023', deadline: '01-13-2023', totalMarks: 10 },
    { assignmentNumber: 4, title: 'Vue js Form Handling', uploadDate: '01-14-2023', deadline: '01-14-2023', totalMarks: 10 },
    { assignmentNumber: 5, title: 'Vue State Management', uploadDate: '01-15-2023', deadline: '01-15-2023', totalMarks: 10 },
    { assignmentNumber: 6, title: 'Angular Basics', uploadDate: '01-16-2023', deadline: '01-16-2023', totalMarks: 10 },
    { assignmentNumber: 7, title: 'Conditional Rendering', uploadDate: '01-17-2023', deadline: '01-17-2023', totalMarks: 10 },
    { assignmentNumber: 8, title: 'Props in React', uploadDate: '01-18-2023', deadline: '01-18-2023', totalMarks: 10 },
    { assignmentNumber: 9, title: 'Array Methods in Js', uploadDate: '01-19-2023', deadline: '01-19-2023', totalMarks: 10 },
    { assignmentNumber: 10, title: 'Promises and Callbacks', uploadDate: '01-20-2023', deadline: '01-20-2023', totalMarks: 10 },
    { assignmentNumber: 11, title: 'Asynchronous Programming', uploadDate: '01-21-2023', deadline: '01-21-2023', totalMarks: 10 },
    { assignmentNumber: 12, title: 'Introduction to Computing', uploadDate: '01-22-2023', deadline: '01-22-2023', totalMarks: 10}
  ])

  const [columns, setColumns] = useState([
    { field: 'assignmentNumber', headerName: 'Assignment No', width: 230, type: 'number', align: 'center', headerAlign: 'center'},
    { field: 'title', headerName: 'Assignment Title', width: 350, type: 'string'},
    { field: 'uploadDate', headerName: 'Uploaded Date', width: 220, type: 'date', align: 'left' },
    { field: 'deadline', headerName: 'Deadline', type: 'date', width: 170, align: 'left' },
    { field: 'totalMarks', headerName: 'Total Marks', type: 'number', width: 200, align: 'center', headerAlign: 'center'},
  ])

  return (
    <div className='body__container__viewassignments'>
      <div className='screenView__viewassignments'>
        <div className='viewassignments__top'>
          <h2 className='assignments__title'>Assignments</h2>
          <button className='add__assignment'>Add Assignment</button>
        </div>
        <Box
          sx={{
            height: 540,
            width: '100%',
            '& .super-app-theme--header': {
              backgroundColor: 'black',
            },
          }} className="box">
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

