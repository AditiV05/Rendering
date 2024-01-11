// // HigherOrderComponent.jsx

// import React, { Component } from "react";

// class HigherOrderComponent extends Component {
//   constructor() {
//     super();
//     this.state = {
//       userData: [
//         { id: "1 ", name: " Joe ", user_type: "Developer", age: 31, years: 11 },
//         { id: "2 ", name: " Hill ", user_type: "Designer", age: 26, years: 4 },
//         { id: "3 ", name: " John ", user_type: "Teacher", age: 24, years: 2 },
//         {
//           id: "4 ",
//           name: "Sam ",
//           user_type: "Entrepreneur",
//           age: 58,
//           years: 25,
//         },
//         { id: "5 ", name: "Jack ", user_type: "Designer", age: 43, years: 18 },
//       ],
//     };
//   }

//   // display items based on UserType
//   renderItemsByUserType = (userType) => {
//     const data = this.state.userData;
//     const filteredData = data.filter((item) => item.user_type === userType);

//     const mapRows = filteredData.map((item) => (
//       <React.Fragment key={item.id}>
//         <li className="list-elements">
//           <span>Id: {item.id}</span>
//           <span>Name: {item.name}</span>
//           <span>User Type: {item.user_type}</span>
//         </li>
//       </React.Fragment>
//     ));

//     return mapRows;
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <h1>Display all items</h1>
//         <div className="display-box">
//           <ul>{this.renderItemsByUserType("Developer")}</ul>
//           <ul>{this.renderItemsByUserType("Designer")}</ul>
//           <ul>{this.renderItemsByUserType("Teacher")}</ul>
//           <ul>{this.renderItemsByUserType("Entrepreneur")}</ul>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default HigherOrderComponent;

// HigherOrderComponent.jsx

// import React, { Component } from "react";

// class HigherOrderComponent extends Component {
//   constructor() {
//     super();
//     this.state = {
//       userData: [
//         { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
//         { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
//         { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
//         { id: "4", name: "Sam", user_type: "Entrepreneur", age: 58, years: 25 },
//         { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
//       ],
//     };
//   }

//   // display items based on names starting with 'J'
//   renderItemsByStartingLetterJ = () => {
//     const data = this.state.userData;
//     const filteredData = data.filter((item) => item.name.startsWith("J"));

//     const mapRows = filteredData.map((item) => (
//       <React.Fragment key={item.id}>
//         <li className="list-elements">
//           <span>Id: {item.id}</span>
//           <span>Name: {item.name}</span>
//           <span>User Type: {item.user_type}</span>
//         </li>
//       </React.Fragment>
//     ));

//     return mapRows;
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <h1>Display all items</h1>
//         <div className="display-box">
//           <ul>{this.renderItemsByStartingLetterJ()}</ul>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default HigherOrderComponent;

// HigherOrderComponent.jsx

// import React, { Component } from "react";

// class HigherOrderComponent extends Component {
//   constructor() {
//     super();
//     this.state = {
//       userData: [
//         { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
//         { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
//         { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
//         { id: "4", name: "Sam", user_type: "Entrepreneur", age: 58, years: 25 },
//         { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
//       ],
//     };
//   }

//   // display items based on age (greater than 28 and less than or equal to 50)
//   renderItemsByAge = () => {
//     const data = this.state.userData;
//     const filteredData = data.filter((item) => item.age > 28 && item.age <= 50);

//     const mapRows = filteredData.map((item) => (
//       <React.Fragment key={item.id}>
//         <li className="list-elements">
//           <span>Id: {item.id}</span>
//           <span>Name: {item.name}</span>
//           <span>User Type: {item.user_type}</span>
//         </li>
//       </React.Fragment>
//     ));

//     return mapRows;
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <h1>Display all items</h1>
//         <div className="display-box">
//           <ul>{this.renderItemsByAge()}</ul>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

// export default HigherOrderComponent;

// HigherOrderComponent.jsx

import React, { Component } from "react";

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entrepreneur", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  findTotalExperienceOfDesigners = () => {
    const data = this.state.userData;

    const designers = data.filter((item) => item.user_type === "Designer");

    const yearsOfExperience = designers.map((designer) => designer.years);

    const totalExperience = yearsOfExperience.reduce(
      (total, years) => total + years,
      0
    );

    return totalExperience;
  };

  render() {
    const totalExperienceOfDesigners = this.findTotalExperienceOfDesigners();

    return (
      <React.Fragment>
        <h1>Total Experience of Designers</h1>
        <div className="display-box">
          <p>Total Experience: {totalExperienceOfDesigners} years</p>
        </div>
      </React.Fragment>
    );
  }
}

export default HigherOrderComponent;
