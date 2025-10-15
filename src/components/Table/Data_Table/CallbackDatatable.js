import React, {useEffect} from 'react';
import {Table} from "reactstrap";
import {callbackTableData} from "@/Data/Datatable/callbackDatatable";


const CallbackDatatable = () => {


    useEffect(() => {
        setTimeout(() => {
            $('#CallbackDataTable').DataTable();

            return () => {
                $('#CallbackDataTable').DataTable().destroy();
            };
        }, 500)
    }, []);
    return (
        <>
            <div className="app-scroll table-responsive app-datatable-default">
                <Table id="CallbackDataTable" className="w-100 display row-callback-datatable align-middle">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Age</th>
                        <th>Start date</th>
                        <th>Salary</th>
                    </tr>
                    </thead>
                    <tbody>
                    {callbackTableData.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>{employee.location}</td>
                            <td>{employee.age}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.totalSalary}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default CallbackDatatable;