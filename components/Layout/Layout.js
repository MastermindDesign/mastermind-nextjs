import Head from "next/head";

import "./Layout.scss";

const Layout = props => (
    <div>
        <Head>
            <title>{props.title}</title>
            <link rel="icon" type="image/x-icon" href="favicon.ico" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=5"
            />
            <meta name="description" content="Mastermind Design" />
            <meta name="author" content="Fr0nk3nst33n" />
            <script type="text/javascript" src="js/dynamics.js"></script>
            <script type="text/javascript" src="js/tinycolor.js"></script>
            <script type="text/javascript" src="js/mv.js"></script>
        </Head>
        <div>{props.children}</div>
    </div>
);

export default Layout;
