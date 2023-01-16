import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './IndividualStudentResult.css';

import { api } from "../utils/Axios";

export function IndividualStudentResult() {

    const {sid} = useParams();

    const [studentResultData, setStudentResultData] = useState([])

    useEffect(() => {
        api.get(`/results/student/${sid}`)
        .then(res => {
            console.log(res.data)
            setStudentResultData(res.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [sid]);

    return (
        <>
            <div className="StudentResult">
                <p className="StudentResult_Text">Student Result Card</p>
            </div>
            <div className="StudentResultDetails">
                <p className="StudentResultDetails_StudentID">Student ID: </p><p>{sid}</p>
            </div>
            <div className="StudentResultCourse">
                <table className="table">
                    <tr className="table_tr">
                        <th className="table_th">Course No</th>
                        <th className="table_th">Course Title</th>
                        <th className="table_th">Quiz Marks</th>
                        <th className="table_th">Obtained Marks</th>
                        <th className="table_th">Assignment Marks</th>
                        <th className="table_th">Obtained Marks</th>
                        <th className="table_th">Percentage</th>
                    </tr>
                    {
                        studentResultData.map(course => {
                            return (
                                <tr key={course.id} className="table_tr">
                                    <td key={course.id} className="table_td table_td_course">{course.courseID}</td>
                                    <td key={course.id} className="table_td">{course.courseName}</td>
                                    <td key={course.id} className="table_td table_td_marks">{course.total_quiz_marks}</td>
                                    <td key={course.id} className="table_td table_td_marks">{course.obtained_quiz_marks}</td>
                                    <td key={course.id} className="table_td table_td_marks">{course.total_assignment_marks}</td>
                                    <td key={course.id} className="table_td table_td_marks">{course.obtained_assignment_marks}</td>
                                    <td key={course.id} className="table_td_last table_td_marks">{
                                    ((course.obtained_quiz_marks + course.obtained_assignment_marks) / (course.total_quiz_marks + course.total_assignment_marks)).toFixed(2) * 100}%
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </>
    )
}