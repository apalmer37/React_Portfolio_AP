import React from 'react';
import "./pagesCss/about.css"

export default function About() {
  return (
    <div className="work" id="work">
      <h1>Portfolio</h1>
                <div className="worktitle" id="worktitle">
                </div>

                <div className="container-work">
                    <div className="card">
                        <header>Crypto Tracker</header>
                        <a href="https://apalmer37.github.io/Crypto_Tracker_Project/">
                        <img src="./assets/crypto_tracker_SS.png" alt="crypto_tracker_project"/>
                        </a>
                    </div>
                    <div className="card">
                        <header>COVID-19 PPE Charity Store</header>
                        <a href="https://charity-store.herokuapp.com/">
                        <img src="./assets/COVID-19 PPE Charity Store.png" alt="PPE_Store"/>
                        </a>
                    </div>
                    <div className="card">
                        <header>Code Refactor</header>
                        <a href="https://apalmer37.github.io/HW1-Apalmer/">
                        <img src="./assets/hori_new_SS.png" alt="refactor"/>
                        </a>
                    </div>
                    <div className="card">
                        <header>Random Password Generator</header>
                        <a href="https://apalmer37.github.io/Javascript_PasswordGenterator_AlexPalmer/">
                        <img src="./assets/Password_Gen_SS.png" alt="password"/>
                        </a>
                    </div>
                    <div className="card">
                        <header>Work Day Scheduler</header>
                        <a href="https://apalmer37.github.io/Work_Day_Scheduler/">
                        <img src="./assets/work_day.png" alt="work_day"/>
                        </a>
                    </div>
                </div>
            
        </div>
  );
}
