import React from 'react';
import Resume from '../../assets/resume.docx.pdf';
import "./pagesCss/resume.css"

export default function Blog() {
  return (
    <div className="resumeDiv" id="resumeDiv">
      
      <a href= {Resume}> Resume</a>
      
      <p>
        Front-end Proficiencies
      </p>
      <ul>
        <li>
        HTML
        </li>
        <li>
          CSS
        </li>
        <li>
          JavaScript
        </li>
        <li>
          JQuery
        </li>
        <li>
          responsive design
        </li>
        <li>
          React
        </li>
        <li>
          Bootstrap
        </li>
      </ul>

      <p>
        Back-end Proficiencies
      </p>
      <ul>
        <li>
        APIs
        </li>
        <li>
          Node
        </li>
        <li>
          Express
        </li>
        <li>
          MySQL, Sequalize
        </li>
        <li>
          MongoDB, Mongoose
        </li>
        <li>
          REST
        </li>
        <li>
          GraphQL
        </li>
      </ul>
    </div>
  );
}
