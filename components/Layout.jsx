import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({children}) => {

    return ( 
        <>
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Web Hosting Company" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link rel="shortcut icon" href="/header-icon.png" type="image/x-icon" />
        </Head>
        <Header/>
        <main className="h-max w-screen">
            {children}
        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;