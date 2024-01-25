
const getBlog = async (slug) => {
    const response = await fetch(`https://65b223b29bfb12f6eafcf6dc.mockapi.io/blog/${slug}`)
    if (!response.ok) {
        console.log('Fetch Error !');
    }
    const data = await response.json()
    return data
}


export default async function Page({ params }) {
    const blog = await getBlog(params.slug)
    return (
        <div>
            <div>
                BlogId : {blog.id}
            </div>
            <div>
                BlogName : {blog.name}
            </div>
        </div>
    )
}