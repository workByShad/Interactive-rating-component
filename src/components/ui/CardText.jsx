import './CardText.css';

const CardText = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p className={props.classes}>{props.paragraph}</p>
    </div>
  );
};

export default CardText;
