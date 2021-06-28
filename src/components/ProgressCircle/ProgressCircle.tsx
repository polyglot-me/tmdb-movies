import "./ProgressCircleStyle.scss";
const ProgressCircle = (props: any) => {
  return (
    <div className="progress-container">
      <div className="progress" data-percentage={props.percentage}>
        <span className="progress-left">
          <span className="progress-bar"></span>
        </span>
        <span className="progress-right">
          <span className="progress-bar"></span>
        </span>
        <div className="progress-value">
          <div>{props.percentage}%</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCircle;
