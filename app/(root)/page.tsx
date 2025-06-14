import Hello from "../components/hello"

export default function Home() {
  console.log('what am i? ')
  console.log('what is Ai? ')
  return (
    <>
    <h1 className=" text-blue-500 text-3xl">Welcome to Next js</h1>
    <Hello/>
    </>
  )
}
