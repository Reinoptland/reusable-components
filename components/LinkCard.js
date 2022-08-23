import styles from "../styles/LinkCard.module.css";

export default function LinkCard(props) {
  //   console.log("WHAT ARE THE PROPS:", props);

  let className = styles.card;

  //   console.log("WHAT IS CLASSNAME?", className);
  //   if (props.variant === "light") {
  //     className = `${className} ${styles.card__light}`;
  //   } else if (props.variant === "danger") {
  //     className = `${className} ${styles.card__danger}`;
  //   } else if (props.variant === "new") {
  //     className = "" + className + " " + styles.card__new;
  //   }

  if (["light", "danger", "new"].includes(props.variant)) {
    className = `${className} ${styles["card__" + props.variant]}`;
  }

  return (
    <a href="https://nextjs.org/docs" className={className}>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </a>
  );
}
