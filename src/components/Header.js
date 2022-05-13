import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {


  return (
    <>
      <div>
        <header class="bg-light d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom" >
          <Link to="/" class="mx-5 d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
              <img src={require("../logo.png")} class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"/>
          </Link>
          <ul class="nav col-12 col-md-auto mb-2 fs-5 justify-content-center mb-md-0">
            <li><Link to="/" class="nav-link px-2 link-dark">HOME</Link></li>
            <li><Link to="/journey" class="nav-link px-2 link-dark">THE JOURNEY</Link></li>
            <li><Link to="/team" class="nav-link px-2 link-dark">TEAM</Link></li>
            <li><Link to="/store" class="nav-link px-2 link-dark">STORE</Link></li>
            <li><Link to="/contact" class="nav-link px-2 link-dark">CONTACT</Link></li>
          </ul>
          <div class="col-md-3 text-end mx-5">
            <i class="fa-solid fa-user fa-2x"></i>
          </div>
        </header>
      </div>
    </>
  );
}