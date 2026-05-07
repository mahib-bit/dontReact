import './App.css';

export default function Bands({ name, genre, members }) {
    return (    
    <div  className="band" >
        <h2 style={{color: 'black'}}>Band: {name}</h2>
        <p>Genre: {genre}</p>
        <p>Members: {members}</p>
    </div>
    )
}
