import { use } from "react"


export default function Friends({ fetchFriends }) {
   const friends = use(fetchFriends);

    return (
        <div className="hook">
            <h3>Friends</h3>
            <ul>
                {friends.map(friends => (
                    <li key={friends.id}>{friends.name}</li>
                ))}
            </ul>
        </div>
    )
}