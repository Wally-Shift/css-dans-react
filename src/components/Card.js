
function Card(props) {
    return (
      <div className="Card">
        <div className="container">
            <img src={props.picture} alt="Avatar" className="image"/>
            <h3 className="name">{props.name}</h3>
            <h4 className="profesion">{props.profesion}</h4>
            <p className="email">{props.email}</p>
            <p className="phone">{props.phone}</p>
            <button>Contact</button>
        </div>
      </div>
    );
  }
  
  export default Card;