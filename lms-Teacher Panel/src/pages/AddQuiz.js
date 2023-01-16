import React, { useState } from "react";
import Question from "./Question";
import "../quiz.css";

function AddQuiz({ cid }) {
  const [questions, setQuestions] = useState([]);
  const [num, setNum] = useState();
  const [title, setTitle] = useState("");
  const [uploadDate, setUploadDate] = useState();
  const [deadline, setDealine] = useState();
  const [marks, setMarks] = useState();

  const handleAdd = () => {
    const data = [...questions, []];
    setQuestions(data);
  };

  const handleChange = (onChangeValue, i) => {
    const inputdata = [...questions];
    inputdata[i] = onChangeValue.target.value;
    setQuestions(inputdata);
  };

  const handleDelete = (i) => {
    const deletVal = [...questions];
    deletVal.splice(i, 1);
    setQuestions(deletVal);
  };

  const createQuiz = (e) => {
    var quiz = {
      quizNumber: num,
      title: title,
      uploadDate: uploadDate,
      deadlineDate: deadline,
      totalMarks: marks,
      questions: questions,
      attempted: [],
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(quiz),
    };
    console.log(quiz);
    fetch("http://localhost:3000/teacher/addquiz/:" + cid, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="addQuiz">
      <h2>CREATE QUIZ</h2>
      <form onSubmit={(event) => event.preventDefault()}>
        <label>Quiz Number</label>
        <input
          type="number"
          min={1}
          required
          onChange={(e) => setNum(e.target.value)}
        />
        <label>Title</label>
        <input
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Upload Date</label>
        <input
          type="date"
          required
          onChange={(e) => setUploadDate(e.target.value)}
        />
        <label>Deadline</label>
        <input
          type="date"
          required
          onChange={(e) => setDealine(e.target.value)}
        />
        <label>Total Marks</label>
        <input
          type="number"
          min={5}
          required
          onChange={(e) => setMarks(e.target.value)}
        />
        <div>
          <div className="questions">
            <p>Questions</p>
            <button onClick={() => handleAdd()}>+</button>
          </div>
          {questions.map((data, index) => {
            return (
              <Question
                key={index}
                index={index}
                onChange={handleChange}
                onDelete={handleDelete}
              />
            );
          })}
        </div>
        <input
          type="submit"
          className="createBtn"
          value="Create"
          onClick={() => createQuiz()}
        />
      </form>
    </div>
  );
}
export default AddQuiz;
