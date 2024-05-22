import React from "react";
import "./firstpage.css";
import img1 from "./images/output-onlinepngtools.png";
import img2 from "./images/art.png";
import img3 from "./images/NGO_MANAGE.png";
import img4 from "./images/pngtree-donation-box-vector-png-image_6657731.png";

import { useHistory } from "react-router-dom";

const Firstpage = () => {
  const history = useHistory();

  return (
    <header>
      <section className="mainheaderfg">
        <div className="logo">
          <a href="/"><img src={img1} alt="logo" /></a>
        </div>

        <nav>
          <a href="/">Home</a>
          <a href="/help">Help</a>
          <a href="/contactus">Contact Us</a>
          <a href="/aboutus">About us</a>
        </nav>
      </section>

      <main>
        <section className="left">
          <h4> WE ARE HERE TO HELP YOU AS A VOLUNTEER FOR AN EVENT.</h4>
          <h1> A COMMON PLATFORM FOR ALL TO BE A VOLUNTEER. </h1>
          <h2>HOW DO YOU WANT TO LOG IN ?</h2>

          <button onClick={() => history.push("/loginngo")} style={{ color: '#020049' }}> NGO</button>
          <button onClick={() => history.push("/loginvol")} style={{ color: '#020049' }}> Volunteer</button>
          <button onClick={() => history.push("/payment")} style={{ color: '#020049' }}> Donate</button>

          <h2>Check out the ongoing events</h2>
          <button onClick={() => history.push("/eventlist")} style={{ color: '#020049' }}>Events</button>
        </section>

        <section className="right">
          <figure>
            <img src={img2} alt="ilustration" height="400px" width="650px" />
          </figure>
        </section>
      </main>

      <footer>
        <div className="logo">
          <img src={img3} alt="logo" />
        </div>
        <p>
          Copyright © 2023-2030 Volunteer Manage Company S.L. All rights reserved.
        </p>
      </footer>
    </header>
  );
}

export default Firstpage;
