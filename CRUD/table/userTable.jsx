import  "./table.css"

const UserTable=(props)=>(
    <table>
        <thead>
            <tr>
                <th>name</th>
                <th>username</th>
                <th>phone</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length>0?(
                props.users.map((user)=>(
                    <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.phone}</td>
                    <td>
                        <button className="muted-button1" onClick={()=>props.editRow(user)}>edit</button>
                        <button className="muted-button2" onClick={()=>props.deleteUser(user.id)}>delete</button>
                    </td>
                </tr>
                ))
            ):(
                <tr>
                    <td colSpan={4}>No Users</td>
                </tr>
            )
            }
      
        </tbody>
    </table>
)

export default UserTable;