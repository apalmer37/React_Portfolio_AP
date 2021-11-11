import React from 'react';
import Covid from '../../assets/covid.png';
import Crypto from '../../assets/crypto.png';
import Hori from '../../assets/hori.png';
import Password from '../../assets/password.png';
import Workday from '../../assets/workday.png';
import "./pagesCss/about.css";

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
                        <img src={Crypto} alt="crypto_tracker_project"/>
                        </a>
                    </div>
                    <div className="card">
                        <header>COVID-19 PPE Charity Store</header>
                        <a href="https://charity-store.herokuapp.com/">
                        <img src={Covid} alt="PPE_Store"/>
                        </a>
                    </div>
                    <div className="card">
                        <header>Code Refactor</header>
                        <a href="https://apalmer37.github.io/HW1-Apalmer/">
                        <img src={Hori} alt="refactor"/>
                        </a>
                    </div>
                    <div className="card">
                        <header>Random Password Generator</header>
                        <a href="https://apalmer37.github.io/Javascript_PasswordGenterator_AlexPalmer/">
                        <img src={Password} alt="password"/>
                        </a>
                    </div>
                    <div className="card">
                        <header>Work Day Scheduler</header>
                        <a href="https://apalmer37.github.io/Work_Day_Scheduler/">
                        <img src={Workday} alt="work_day"/>
                        </a>
                    </div>
                </div>
            
        </div>
  );
}
