import "./Loading.scss";

const Loading = props => {
    return (
        <div className="progress" style={{ height: "2px" }}>
            <div
                className="progress-bar bg-dark"
                role="progressbar"
                style={{ width: `${props.progress}%` }}
                aria-valuenow={props.progress}
                aria-valuemin="0"
                aria-valuemax="100"
            ></div>
        </div>
    );
};

export default Loading;
