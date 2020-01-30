import Layout from "../components/Layout/Layout";
import Profile from "../components/Profile/Profile";
import Display from "../components/Display/Display";
import Fithub from "../components/FitHub/FitHub";

import "../styles/_global.scss";

export default function FitHub() {
    return (
        <Layout title="Mastermind | FitHub">
            <div id="page">
                <Profile />
                <Display>
                    <Fithub />
                </Display>
            </div>
        </Layout>
    );
}
