import React, { Component } from "react";
import "./css/idCard.css";

class IdCard extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.picture} alt="cardImage" />
        <div className="cardText">
          <p>{this.props.lastName}</p>
          <p>{this.props.firstName}</p>
          <p>{this.props.gender}</p>
          <p>{this.props.height}</p>
          <p>{this.props.birth.toISOString()}</p>
        </div>
      </div>
    );
  }
}
export default IdCard;

// const IdCard = props => {
//   console.log(props);
//   return (
//     <div className="card">
//       <img src={props.picture} alt="cardImage" />
//       <div className="">
//         <p>{props.lastName}</p>
//         <p>{props.firstName}</p>
//         <p>{props.gender}</p>
//         <p>{props.height}</p>
//         <p>{props.birth}</p>
//       </div>
//     </div>
//   );
// };
