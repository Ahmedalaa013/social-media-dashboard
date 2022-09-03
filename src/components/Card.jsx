const Card = (props) => {
  const cards = props.data.map((card, index) => {
    return (
      <div className="col" key={index}>
        <div
          className={`card text-center h-100 card-bg border-${card.socialIconStyle} `}
        >
          <div className="card-body ">
            <p className="card-title text-Dark-Grayish-Blue fw-bold">
              <i className={`${card.socialIcon}  ${card.socialIconStyle}`}></i>
              &nbsp; {card.name}
            </p>
            <p className="card-text fw-bold text-heading text-dark-color">
              {card.dataValue}
            </p>
            <p className="text-uppercase text-spacing text-Dark-Grayish-Blue ">
              {card.socialType}
            </p>
            <p
              className={`${
                card.num > 0 ? "lime-green" : "bright-red"
              } fw-bold`}
            >
              <i className={card.caret}></i> {card.num.replace("-", "")}
              &nbsp;Today
            </p>
          </div>
        </div>
      </div>
    );
  });
  return <>{cards}</>;
};
export default Card;
