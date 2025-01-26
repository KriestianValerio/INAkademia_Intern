import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const navigasi_admin = [
  {
    label: "Request from Peers",
    href: "/admin",
  },
  {
    label: "Portfolio Tutor",
    href: "/admin/portfolio_tutor",
  },
];

export default function NavAdmin() {
  const location = useLocation();

  return (
    <>
      <div className="flex gap-3 w-full bg-gray-100 py-3 px-5 rounded-full mb-10">
        {navigasi_admin.map((el, i) => {
          return (
            <Link
              to={el.href}
              key={i}
              className={`hover:bg-slate-200 ${location.pathname === el.href && "bg-slate-200"} py-2 px-5 rounded-full transition-colors duration-300`}
            >
              {el.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
