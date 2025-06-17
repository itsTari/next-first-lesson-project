export default async function Page(){
    const res = await fetch('http://localhost:3000/api/books')
    const data = await res.json()

    return (
        <main>
            <div>{JSON.stringify(data, null, 2)}</div>
        </main>
    )

}
