import Link from 'next/link'

const getBlogs = async () => {
  const response = await fetch('https://65b223b29bfb12f6eafcf6dc.mockapi.io/blog')
  if (!response.ok) {
    console.log('Fetch Error !');
  }
  const data = await response.json()
  return data
}

export default async function Page() {
  const blogs = await getBlogs()
  console.log("blogs : ", blogs)
  return (
    <div>
      Blog Lists:
      {blogs.map((v, k) => (
        <div key={k}>
          {v.id} {v.name} {v.avatar}
          <Link href={`/blog/${v.id}`} className="px-4 bg-blue-400 rounded-2xl">
            Go to read blog ...
          </Link>
        </div>
      ))}

    </div>
  )
}