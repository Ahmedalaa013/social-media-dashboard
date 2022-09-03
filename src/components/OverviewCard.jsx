const OveriewCard = (props) => {
  const OveriewCard = props.data.map((card, index) => {
    return (
      <div className="col" key={index}>
        <div className="card text-center h-100 card-bg">
          <div className="card-body ">
            <div className="d-flex justify-content-between text-overview-heading text-Dark-Grayish-Blue fw-bold">
              <p>{card.socialDataType}</p>
              <p>
                <i
                  className={`${card.socialIcon}  ${card.socialIconStyle}`}
                ></i>
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <h3 className="fw-bold text-dark-color">{card.dataValue}</h3>
              <p
                className={`${
                  card.percentage.includes("-") ? "bright-red" : "lime-green"
                } fw-bold`}
              >
                <i className={card.caret}></i>{" "}
                {card.percentage.replace("-", "")}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <> {OveriewCard}</>;
};
export default OveriewCard;
