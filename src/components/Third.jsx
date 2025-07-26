import React, {useState} from 'react'
import '../assets/styles/first.css';
import StudentArray from "./StudentArray";
import EmployeeArray from "./EmployeeArray";

function Third() {
    const [data] = useState(EmployeeArray);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email Id</th>
                        <th>Dept</th>
                        <th>Session</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, i) => {
                            return (
                                <tr>
                                    <td>{i += 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.email}</td>
                                    <td>{item.Dept}</td>
                                    <td>{item.session}</td>
                                    <td>
                                        <button>{item.status === 0 ? <span>Active</span> : <span>In-Active</span>}</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </>
    )
}

export default Third