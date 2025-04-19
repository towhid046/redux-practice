import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts, fetchSinglePost } from "./fetchPosts"

const PostView = () => {
    const [isDetailsShow, setIsDetailsShow] = useState<boolean>(false)
    const { posts, loading, error, post } = useSelector(state => state.posts)
    const dispatch = useDispatch()

    console.log(post)

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch])

    const handleLoadSinglePost = (id: number) => {
        dispatch(fetchSinglePost(id));
    }

    const viewDetailsButtonHandler = (id: number) => {
        setIsDetailsShow(true)
        handleLoadSinglePost(id)
    }


    return (
        <>
            <div className="border border-gray-300 p-5 rounded-md grid grid-cols-5 gap-5">
                {posts.length && posts?.map(post => (
                    <div key={post.id} className="p-5 border rounded-md border-gray-200 flex flex-col justify-between gap-4">
                        <p>{post.title || ''}</p>
                        <button
                            onClick={() => viewDetailsButtonHandler(post.id)}
                            className="cursor-pointer py-1.5 px-3 text-white bg-blue-400 rounded-md ">View Details</button>
                    </div>
                ))}
            </div>
            {isDetailsShow &&
                <div className={`fixed inset-0 flex justify-center items-center flex-col gap-3 bg-gray-900 text-white w-full opacity-80 min-h-screen z-50 px-12`}>
                    {loading ? <div>Loading...</div> :
                        <>
                            <h1 className="text-2xl font-bold">{post.title || 'Title'}</h1>
                            <p className="text-center">{post.body || 'Post body'}</p>
                            <button onClick={() => setIsDetailsShow(false)} className="cursor-pointer bg-red-700 py-1.5 px-3 rounded-md ">Close</button>
                        </>
                    }
                </div>
            }
        </>
    )
}

export default PostView;