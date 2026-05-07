// export default function ToDo({name, isDone}) {
//     return (
//         <li>Task : {name} - Done : {isDone ? 'Yes' : 'No'}</li>
//     )
// }

export default function ToDO({ name, isDone,time = 0 }) {
    if (isDone === true) {
        return <li>Task : {name} - Done : Yes - Duration : {time}min</li>;
    }
    return <li>Task : To be done {name}</li>
}