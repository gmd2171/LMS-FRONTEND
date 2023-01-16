import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import "../App.css";
import { Box } from "@mui/system";
import AddQuiz from "../components/AddQuiz";

export default function ViewAllQuiz() {
  const [add, setAdd] = useState(true);
  const [rows, setRows] = useState([
    {
      quizNumber: 1,
      title: "Javascript Arrays",
      uploadDate: "01-11-2023",
      deadline: "01-11-2023",
      totalMarks: 10,
    },
    {
      quizNumber: 2,
      title: "React Hooks",
      uploadDate: "01-12-2023",
      deadline: "01-12-2023",
      totalMarks: 10,
    },
    {
      quizNumber: 3,
      title: "React Class Components",
      uploadDate: "01-13-2023",
      deadline: "01-13-2023",
      totalMarks: 10,
    },
    {
      quizNumber: 4,
      title: "Vue js Form Handling",
      uploadDate: "01-14-2023",
      deadline: "01-14-2023",
      totalMarks: 10,
    },
  ]);

  const [columns, setColumns] = useState([
    {
      field: "quizNumber",
      headerName: "Quiz No",
      width: 230,
      type: "number",
      align: "center",
      headerAlign: "center",
    },
    { field: "title", headerName: "Quiz Title", width: 350, type: "string" },
    {
      field: "uploadDate",
      headerName: "Uploaded Date",
      width: 220,
      type: "date",
      align: "left",
    },
    {
      field: "deadline",
      headerName: "Deadline",
      type: "date",
      width: 170,
      align: "left",
    },
    {
      field: "totalMarks",
      headerName: "Total Marks",
      type: "number",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
  ]);

  const deleteQuiz = (qid, cid) => {
    fetch("http://localhost:3000/teacher/quiz/:" + qid + "/:" + cid, {
      method: "DELETE",
    }).then(() => this.setState({ status: "Delete successful" }));
  };

  const openAddQuiz = () => {
    setAdd(false);
  };

  const closeAddQuiz = () => {
    setAdd(true);
  };

  return (
    <div className="body__container__viewassignments">
      <div className="screenView__viewassignments">
        <div className="viewassignments__top">
          <h2 className="assignments__title">Quizzes</h2>
          <button
            className="add__assignment"
            onClick={() => {
              add ? openAddQuiz() : closeAddQuiz();
            }}
          >
            {add ? "Add Quizzes" : "Cancel"}
          </button>
        </div>
        <Box
          sx={{
            height: 540,
            width: "100%",
            "& .super-app-theme--header": {
              backgroundColor: "black",
            },
          }}
          className="box"
        >
          {add ? (
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={10}
              rowsPerPageOptions={[5]}
              checkboxSelection
              getRowId={(row) => row.quizNumber}
            />
          ) : (
            <AddQuiz cid={1} close={closeAddQuiz} />
          )}
        </Box>
      </div>
    </div>
  );
}
