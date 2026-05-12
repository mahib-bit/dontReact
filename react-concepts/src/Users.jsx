import { use } from "react";

export default function Users({ fetchUsers }) {
    const users = use(fetchUsers);
    return (
        <div className="hook">
            <h2>Users</h2>
            <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
            </ul>
        </div>
    )
}