import './Card.css';

const Card = (props) => {
  return (
    <div className={`card card__${props.styleView}`}>{props.children}</div>
  );
};

export default Card;
