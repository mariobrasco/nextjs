import Navbar from "./components/Navbar";
import Head from "next/head"
import Image from "next/image"

const Home = () => {
    return ( 
    <>
        <Head>
            <title>Home | Belajar Next JS</title>
            <meta name="description" content="Home | Belajar Next JS "/>
        </Head>
        <Navbar />
        <Image src="/next.svg" alt="Logo Next JS" width={300} height={200} />
        <h1>Ini Halaman Home</h1>
    </>
    )
}

export default Home;   