export const ProjectsMenu = () => {
  return (
    <li class="nav-item  dropdown d-none d-md-block">
      <a
        class="nav-link dropdown-toggle"
        id="projectDropdown"
        href="#/"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        {" "}
        Projects{" "}
      </a>
      <div
        class="dropdown-menu navbar-dropdown"
        aria-labelledby="projectDropdown"
      >
        <a class="dropdown-item" href="#/">
          <i class="mdi mdi-eye-outline mr-2"></i>View Project{" "}
        </a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#/">
          <i class="mdi mdi-pencil-outline mr-2"></i>Edit Project{" "}
        </a>
      </div>
    </li>
  );
};
