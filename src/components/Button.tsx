/*
 * Node Modules
 */
import PropTypes from "prop-types";

interface ButtonPrimaryProps {
  href?: string;
  target?: string;
  label: string;
  icon?: string;
  classes?: string;
}

/*
 * Primary Button
 */
const ButtonPrimary = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
}: ButtonPrimaryProps) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-primary " + classes}>
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={" btn btn-primary " + classes}>
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary };
