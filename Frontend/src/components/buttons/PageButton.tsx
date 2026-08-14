import { NavLink } from "react-router-dom";
import "./PageButton.css";

function PageButton({ title, to }: { title: string; to: string }) {
  return (
    <div className="PageButton">
      <div>
        <NavLink
          to={to}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {title}
        </NavLink>
      </div>
    </div>
  );
}

export default PageButton;
