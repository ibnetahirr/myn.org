import React, {useEffect} from 'react';
import {Table} from "reactstrap";


const ChildRowsDatatable = () => {
    useEffect(() => {
        $('#ChildRowsDataTable').DataTable();
    }, []);

    return (
        <>
            <div className="app-scroll table-responsive app-datatable-default">
                <Table id="ChildRowsDataTable" className="w-100 display">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Salary</th>
                    </tr>
                    </thead>
                </Table>
            </div>
        </>
    );
};

export default ChildRowsDatatable;