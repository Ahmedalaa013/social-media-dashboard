const Switch = (props) => {
  return (
    <>
      <label className="switch" onChange={props.toggle}>
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default Switch;
