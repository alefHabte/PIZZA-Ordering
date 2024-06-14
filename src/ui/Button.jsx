import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    " inline-block items-center rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    primary: base + " sm:py-3 px-4 py-3 sm:px-6",
    small: base + " sm:py-3 px-3 py-2 sm:px-4 text-sm",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
