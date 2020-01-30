import Link from "next/link";

import "./FitHub.scss";

const Fithub = props => {
    return (
        <div className="fithub">
            <Link href="/" aria-label="Back 2 Home">
                <i className="material-icons back-arrow">arrow_back_ios</i>
            </Link>
            <h1>FitHub</h1>
            <div className="synopsis">
                <p className="lead">More details to come</p>
            </div>
        </div>
    );
};

export default Fithub;
