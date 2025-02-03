

/*
any request that comes to /blog/1
/blog/2     /blog/3
/blog/dynamic parameter will be handeled
*/
/**
 * If instead of [postId] we write [...postId] then all the routes liek blog/as/as/
 * /blog/tgus  etc all will be handled by this
 */
import axios from "axios"

export default async function BlogPage({ params }: any) {
    const postId = (await params).postId
    // it is postId as we have named the folder [postId]

    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = response.data;
    return (
        <div>
            Blog Page {postId}
            <br />
            title-{data.title}
            <br />
            body-{data.body}
        </div>
    )
}