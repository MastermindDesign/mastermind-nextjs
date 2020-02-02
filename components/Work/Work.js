import React, { Component } from "react";
import Link from "next/link";
import Loading from "../Loading/Loading";
import { API_IP, DEFAULT_DATA } from "../../utils/api";

import "./Work.scss";

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            work: [],
            seconds: 0
        };
    }

    tick = () => {
        if (this.state.seconds < 100)
            this.setState(state => ({
                seconds: state.seconds + 1
            }));
    };

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 100);
        setTimeout(() => {
            fetch(`http://${API_IP}/api/projects`)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    this.setState({
                        loading: false,
                        seconds: 100,
                        work: [...data]
                    });
                })
                .catch(e => {
                    console.error("Request for Projects Failed!", e);
                    this.setState({
                        loading: false,
                        seconds: 100,
                        work: [...DEFAULT_DATA]
                    });
                });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { loading, seconds, work } = this.state;
        return (
            <div className="work">
                <h1>Work</h1>
                {!loading ? (
                    <div className="projects">
                        {work.map((project, index) => {
                            return (
                                <div className="row" key={project._id}>
                                    <div className="col-md-12">
                                        <Link href={project.link}>
                                            <a
                                                href={project.link}
                                                target={
                                                    index != work.length - 1
                                                        ? "_blank"
                                                        : ""
                                                }
                                                aria-label={project.name}
                                            >
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="card-title">
                                                            <h4>
                                                                {project.name}
                                                            </h4>
                                                        </div>
                                                        <div className="card-text">
                                                            <span>
                                                                <i className="fas fa-code"></i>
                                                                {project.stack}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card card-small">
                                    <div className="card-body">
                                        <div className="card-text">
                                            <h4>More to come...</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Loading progress={seconds} />
                )}
            </div>
        );
    }
}

export default Work;
