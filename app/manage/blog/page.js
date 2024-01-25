import { headers } from "next/headers"
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
    const headerRequest = headers()
    const user = JSON.parse(headerRequest.get('user'))
    const blogs = await getBlogs()
    return (
        <div>
            Manage Blog
            <div>
                {user.email}
            </div>
            Blog Lists:
            {blogs.map((v, k) => (
                <div key={k}>
                    {v.id} {v.name} {v.avatar}
                    <Link href={`/manage/blog/${v.id}`} className="px-4 bg-blue-400 rounded-2xl">
                        Go to Edit blog ...
                    </Link>
                </div>
            ))}
        </div>
    )
}