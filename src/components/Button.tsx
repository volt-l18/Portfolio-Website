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

interface ButtonOutlineProps {
  href?: string;
  target?: string;
  label: string;
  icon?: string;
  classes?: string;
}

/*
 * Button Outline
 */
const ButtonOutline = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
}: ButtonOutlineProps) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-outline " + classes}>
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
      <button className={" btn btn-outline " + classes}>
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

export { ButtonPrimary, ButtonOutline };
