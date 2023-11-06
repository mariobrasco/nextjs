import Navbar from "./components/Navbar";
import Head from "next/head"
import Image from "next/image"

const Profil = ({ albums }) => {
    return ( 
    <>
        <Head>
            <title>Profil | Belajar Next JS</title>
            <meta name="description" content="Profil | Belajar Next JS "/>
        </Head>
        <Navbar />
        <Image src="/next.svg" alt="Logo Next JS" width={300} height={200} />
        <h1>Ini Halaman Profil</h1>
        {albums.map((album) => (
        <div key={album.id}>
            <h2>{album.title}</h2>
        </div>
        ))}
    </>
    )
}

export default Profil;   

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await res.json();
  
    return {
        props:{
          albums,
        }
    }
  }