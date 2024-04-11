
export function Books({books}){
    return <div>
    {books.map(function(books){
        return <div>
            <h1>{books.title}</h1>
            <h2>{books.description}</h2>
            <button>{books.completed == true ? "Completed":"Mark as Completed"}</button>

        </div>
    })}
    </div>
}