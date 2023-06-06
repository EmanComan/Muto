export const ProjectsMenu = () => {
  return (
    <li className="nav-item  dropdown d-none d-md-block">
      <a
        className="nav-link dropdown-toggle"
        id="projectDropdown"
        href="#/"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        {" "}
        Projects{" "}
      </a>
      <div
        className="dropdown-menu navbar-dropdown"
        aria-labelledby="projectDropdown"
      >
        <a className="dropdown-item" href="#/">
          <i className="mdi mdi-eye-outline mr-2"></i>View Project{" "}
        </a>
        <div className="dropdown-divider"></div>
        <a className="dropdown-item" href="#/">
          <i className="mdi mdi-pencil-outline mr-2"></i>Edit Project{" "}
        </a>
      </div>
    </li>
  );
};
