import "./Profile.scss";

const Profile = () => {
    return (
        <div className="profile">
            <svg
                id="clip-paths"
                width="0"
                height="0"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g></g>
            </svg>
            <div className="profile-image" id="header-logo">
                <svg
                    id="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 800 800"
                    width="201"
                    height="180"
                >
                    <g>
                        <path
                            fill="#FFF"
                            fillRule="evenodd"
                            d="M348.19,400.06l-131.48,224.9l-29.93-78.92c-18.73-3.15-59.15-11.06-82.47-23.79l-61.5,61.5
        c-33.79,33.79-9.86,91.56,37.93,91.56h305.64L348.19,400.06z"
                        />
                        <path
                            fill="#FFF"
                            fillRule="evenodd"
                            d="M485.48,186.02v125.64l185.56,185.56c-36.98,14.28-68.76,19.52-69.11,19.57l-9.09,1.46l-12.66,32.84
        L436.64,303.94l-34.74,250.4L367.2,304.15L222.89,551l-12.83-33.82l-9.35-1.34c-19.58-2.8-52.29-9.52-72.38-17.61l188.19-188.19
        l1.29-123.57c0.05-4.43,3.68-7.97,8.1-7.92l61.02,9.32c30.38,4.64,61.42,2.11,90.64-7.38l0.21-0.07
        C482.02,179.06,485.48,181.58,485.48,186.02z"
                        />
                        <path
                            fill="#FFF"
                            fillRule="evenodd"
                            d="M757.57,583.75l-61.99-61.99c-33.41,14.36-64.49,21.82-79.4,24.89l-30.15,78.22l-130.44-224.6l-38.16,275.04
        h302.22C767.43,675.32,791.36,617.54,757.57,583.75z"
                        />
                        <circle
                            fill="#FFF"
                            fillRule="evenodd"
                            cx="432"
                            cy="136"
                            r="12"
                        />
                        <circle
                            fill="#FFF"
                            fillRule="evenodd"
                            cx="407"
                            cy="166"
                            r="7"
                        />
                        <circle
                            fill="#FFF"
                            fillRule="evenodd"
                            cx="369.5"
                            cy="128.5"
                            r="24.5"
                        />
                    </g>
                </svg>
            </div>
            <div className="username">
                <h4>Josh Brown</h4>
                <h6 className="lead">Colorado</h6>
            </div>
            <div className="userbio"></div>
            <div className="about">
                <div className="socials">
                    <span>
                        <a
                            href="https://blog.masterminddesign.io"
                            target="_blank"
                        >
                            <i className="fas fa-blog"></i>
                        </a>
                    </span>
                    <span>
                        <a
                            href="https://twitter.com/fr0nk3nst33n"
                            target="_blank"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </span>
                    <span>
                        <a
                            href="https://github.com/FR0NK3NST33N"
                            target="_blank"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </span>
                    <span>
                        <a
                            href="https://www.linkedin.com/in/fr0nk3nst33n/"
                            target="_blank"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Profile;
