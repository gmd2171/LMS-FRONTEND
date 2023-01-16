import { useEffect, useState } from "react";

import './Materials.css';

import { api } from "../utils/Axios";

export function Materials() {

    const [materials, setMaterials] = useState([])

    useEffect(() => {
        api.get('/materials')
        .then(res => {
            setMaterials(res.data)
        })
        .catch(error => {
            console.log("AxiosError: " + error)
        })
    }, [])

    return (
        <div className="MaterialContainer">
            <div className="Materials">
                <p className="Materials_Text">Courses & Materials</p>
            </div>
            {
                materials.map((item) => {
                    return (
                        <div className="Material_List">
                            <div className="MaterialClassName">
                                <div className="MaterialCourseID">
                                    <p className="MaterialCourseID_Text">Course ID: </p><p className="courseID">{item._id}</p>
                                </div>
                                <div className="MaterialCourseName">
                                    <p className="MaterialClassName_Text">Course Name</p><p className="courseName">{item.courseName}</p>
                                </div>
                                <div className="MaterialList">
                                    <table className="material_table">
                                        <tr className="material_table_tr">
                                            <th className="material_table_th">Title</th>
                                            <th className="material_table_th">File</th>
                                            <th className="material_table_th">File Name</th>
                                            <th className="material_table_th">File Extension</th>
                                            <th className="material_table_th">Uploaded Date</th>
                                        </tr>
                                        {
                                            item.materialList.length != 0 ?
                                            item.materialList.map((material) => {
                                                return (
                                                    <tr className="material_table_tr">
                                                        <td className="material_table_td">{material.title}</td>
                                                        <td className="material_table_td">{material.file}</td>
                                                        <td className="material_table_td">{material.fileName}</td>
                                                        <td className="material_table_td">{material.fileExtension}</td>
                                                        <td className="material_table_td">{material.uploadedDate}</td>
                                                    </tr>
                                                )
                                            }):
                                            <tr className="material_table_tr_not_avail">
                                                <td className="material_table_not_avail" colSpan={5}>No data available to view.</td>
                                            </tr>
                                        }
                                    </table>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}