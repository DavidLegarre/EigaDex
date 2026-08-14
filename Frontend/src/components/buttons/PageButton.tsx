import { NavLink } from "react-router-dom";
import "./PageButton.css";

function PageButton({ title, to }: { title: string; to: string }) {
  return (
    <div className="page-button">
      <div>
        <NavLink
          to={to}
          className={({ isActive }) => (isActive ? "page-button--active" : "")}
        >
          {title}
        </NavLink>
      </div>
    </div>
  );
}

export default PageButton;
