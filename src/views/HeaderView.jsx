import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header className="d-flex align-items-center justify-content-between p-3">
      <Link to={"/home"} className="d-flex align-items-center gap-2">
        <img height={45} src="/logo.png" alt="logo" />
        <h3 className="text-white">Coinmania</h3>
      </Link>

      <div className="d-flex gap-3">
        <NavLink className="text-white fs-5" to={"/"}>
          Log in
        </NavLink>
        <NavLink className="text-white fs-5" to={"/home"}>
          Home
        </NavLink>
      </div>
    </header>
  );
};

export default HeaderView;
