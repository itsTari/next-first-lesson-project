import Hello from "../components/hello"

export default async function Home() { 
  //   const [albums, setAlbum]= useState([])
  // useEffect(()=>{
  //  const fetchAlbum  = async ()=>{
  //   try{
  //     const res = await fetch('https://jsonplaceholder.typicode.com/albums')
  //     const data = await res.json()
  //     setAlbum(data)
  //   }
  //   catch(error){
  //       console.log('Error fetching data:', error)
  //   }
  //  };
  //  fetchAlbum();
  // },[])

  const res = await fetch('https://jsonplaceholder.typicode.com/albums')
  const albums = await res.json()
  
  console.log('what am i? ')
  console.log('what is Ai? ')
  return (
    <>
    <h1 className=" text-blue-500 text-3xl">Welcome to Next js</h1>
    <Hello/>
    <div>
            {albums.map((album: {id:number, title:string})=>(
                <div key={album.id}>
                    <h1 className='text-2xl'>{album.title}</h1>
                    <p className='text-2xl'>{album.id}</p>
                </div>
            ))}
        </div>
    </>
  )
}
