import React from "react";

export const ReportsMenu = () => {
  return (
    <li className="nav-item  dropdown d-none d-md-block">
      <a
        className="nav-link dropdown-toggle"
        id="reportDropdown"
        href="#/"
        data-toggle="dropdown"
        aria-expanded="false"
        onClick={(event) => event.preventDefault()}
      >
        {" "}
        Reports{" "}
      </a>
      <div
        className="dropdown-menu navbar-dropdown"
        aria-labelledby="reportDropdown"
      >
        <a className="dropdown-item" href="#/">
          <i className="mdi mdi-file-pdf mr-2"></i>PDF{" "}
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#/">
          <i className="mdi mdi-file-excel mr-2"></i>Excel{" "}
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#/">
          <i className="mdi mdi-file-word mr-2"></i>doc{" "}
        </a>
      </div>
    </li>
  );
};
