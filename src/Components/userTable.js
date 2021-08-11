import React from 'react';


function UserTable(props) {
    return (
        <table className="UsersList" border="1" width="100%" bgcolor="#FFFFFF"
        bordercolor="#000000" cellSpacing="0" cellPadding="2" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default UserTable;