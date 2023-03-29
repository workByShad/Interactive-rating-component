import './Card.css';

const Card = (props) => {
  return <div className={`card ${props.styleView}`}>{props.children}</div>;
};

export default Card;
