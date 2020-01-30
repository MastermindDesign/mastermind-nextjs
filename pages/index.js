import Layout from "../components/Layout/Layout";
import Profile from "../components/Profile/Profile";
import Display from "../components/Display/Display";
import Work from "../components/Work/Work";

import "../styles/_global.scss";

export default function Index() {
    return (
        <Layout title="Mastermind | Home">
            <div id="page">
                <Profile />
                <Display>
                    <Work />
                </Display>
            </div>
        </Layout>
    );
}
