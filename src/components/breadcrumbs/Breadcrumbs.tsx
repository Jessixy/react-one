import { useLocation, Link } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>
            <span>- </span>
            {crumb}
          </Link>
        </div>
      );
    });

  return <div className="flex flex-row gap-5 w-full mx-7 my-2">{crumbs}</div>;
}
