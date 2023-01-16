import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import axios from 'axios';

export function Table() {

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:4000/head")
        .then(response => {
            console.log(response.data);
            setData(response.data);
        })
        .catch(err => console.error(err));
    }, []);

    const getTeachersName = (rowData) => {
        return <>{rowData.userid.name}</>;
    }

    return (
        <div className='grid mt-4'>
            {data !== null &&
                (
                    <>
                        <div className="card col-4">
                            <DataTable value={data.teachers} responsiveLayout="scroll">
                                <Column header="Sr." body={(rowData, props) => props.rowIndex+1} ></Column>
                                <Column header="Name" body={getTeachersName} ></Column>
                                <Column field="designation" header="Designation"></Column>
                                <Column field="phoneNumber" header="Phone Number"></Column>
                            </DataTable>
                        </div>
                        <div className="card col-3">
                            <DataTable value={data.classes} responsiveLayout="scroll">
                                <Column header="Sr." body={(rowData, props) => props.rowIndex+1} ></Column>
                                <Column field="className" header="Class" ></Column>
                                <Column field="no_of_students" header="Students"></Column>
                            </DataTable>
                        </div>
                        <div className="card col-5">
                            <DataTable value={data.courses} responsiveLayout="scroll">
                                <Column header="Sr." body={(rowData, props) => props.rowIndex+1} ></Column>
                                <Column field="courseID" header="Course" ></Column>
                                <Column field="courseName" header="Course Name" ></Column>
                                <Column field="no_of_students" header="Students"></Column>
                                <Column field="no_of_assignments" header="Assignments"></Column>
                                <Column field="no_of_quizzes" header="Quizzes"></Column>
                            </DataTable>
                        </div>
                    </>
                )
            }
        </div>
    );
}