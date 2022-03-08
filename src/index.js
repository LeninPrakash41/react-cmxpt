/*  
Components - Aggregation of Components.
1. header 
2. Main body
3. SideMenu (Optional)
4. Footer

Function - Functional Components (Presentational Components/Stateless Components)
Class - Class-Based (Container Components / Statefull Components/ Smart Components)

JSX Element to Components

Components in React are JavaScript functions or classes, then it will return a JSX.
1. Name must start with Uppercase
2. Name should be two words
3. CamelCase

Create Components:
Header
Footer
Body - Multiple Components like User details, Description Section
When we use different colors, each color represents different Components.

Javascript Function

- Regular or an Arrow Function

const getUser = (fName, lName, place, age, skills) => {
  return `${fName} ${lName} ${place} ${age} ${skills.join('.,-,_')}`
}

const skills = ['HTML', 'CSS', 'JS', 'React']
console.log(getUser('Lenin', 'Prakash', 'Chennai', 30, skills ))


      class Parent{
          constructor(fName, lName, place, age){
              this.fName = fName
              this.lName = lName
              this.place = place
              this.age = age
          }

          getUser(){
              return `${this.fName} ${this.lName} ${this.place} ${this.age} `
          }

          parentMethod(){

          }
      }
      
      //Initiate Object Instance using new keyword

      const par_obj = new Parent("Lenin", "Prakash", "Chennai", 30)
      console.log(par_obj)

      class Child extends Parent{
          constructor(fName, lName, place, age, skills){
            super(fName, lName, place, age)
            this.skills = skills
          }

          getSkills() {
              let len = this.skills.length
              return len > 0 ? this.skills.join(',') : 'No Extra Skills ' // Conditional               
          }

          childMethod(){

          }
      }

      //const skills = ["HTML", "CSS", "JS", "React"];

      const child_obj = new Child("Lenin", "Prakash", "Chennai", 30, skills)
      console.log(child_obj)

      // React Component using Javascript Function
const jsx = <tag>paragraph</tag>
const ComponentName = () => {
  return jsx
}

//JSX Header Element

const header = (
  <header style={headerStyles}>
    <h1>Sathyabama</h1>
    <h2>React</h2>
    <h3>JavaScript</h3>
  </header>
);

// React Components

const Header = () => {
  return header 
}

const Header = () => {
  return (
    <header style={headerStyles}>
    <h1>Sathyabama</h1>
    <h2>React</h2>
    <h3>JavaScript</h3>
    </header>
  )
}

*/

import React from 'react';
import ReactDOM from 'react-dom';

// Header Components

const Header = () => {
  return (
    <Header>
      <h1>Sathyabama</h1>
      <h2>React</h2>
      <h3>JavaScript</h3>
    </Header>
  );
};

const logo = 'https://www.macincode.com/assets/img/logo.png';

const User = () => (
  <div className="user">
    <img src={logo} alt="" />
    <h2>Lenin Prakash</h2>
  </div>
);

// Details Components
const Details = () => {
  const tech = ['HTML', 'CSS', 'JS', 'REACT'];
  const techSkills = tech.map((technologies) => (
    <li key={technologies}> {technologies} </li>
  ));
  return techSkills;
};

//Body Components

{
  /* <ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JS</li>
  <li>JQ</li>
  <li>REACT</li>
</ul> */
}

const Body = () => {
  return (
    <Body>
      <div className="body-wrapper">
        <p> </p>
        <ul>
          <Details />
        </ul>
        <User />
      </div>
    </Body>
  );
};

// Footer Components

const Footer = () => {
  return (
    <Footer>
      <div className="footer-wrapper">
        <p> Copyright Algox Fusion</p>
      </div>
    </Footer>
  );
};

const App = () => {
  <div className="app">
    <Header />
    <Body />
    <Footer />
  </div>;
};

const rootElem = document.getElementById('root');

// we need to render the JSX Elements using ReactDOM package

ReactDOM.render(<Header />, rootElem);
