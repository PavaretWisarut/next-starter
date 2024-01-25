'use client'
import { useState, useEffect } from "react";

const getBlog = async (slug) => {
    const response = await fetch(`https://65b223b29bfb12f6eafcf6dc.mockapi.io/blog/${slug}`)
    if (!response.ok) {
        console.log('Fetch Error !');
    }
    const data = await response.json()
    return data
}


export default function Page({ params }) {
    const [blogState, setBlogState] = useState({
        name: ''
    })
    useEffect(() => {
        initblog()
    }, [])
    const initblog = async () => {
        try {
            const blog = await getBlog(params.slug)
            setBlogState(blog)
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setBlogState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("form submit :" , blogState);
    }

    return (
        <div>
            <div>
                BlogId : {blogState.id}
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    Blogname : <input name="name" value={blogState.name} onChange={handleChange}></input>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}