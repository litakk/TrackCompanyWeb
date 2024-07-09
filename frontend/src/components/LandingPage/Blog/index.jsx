import Heading from "../../common/Heading"
import "./style.scss"
import BlogJSON from "../../../store/Blogs.json"

import Post1 from "../../../assets/posts/post1.jpg"
import Post2 from "../../../assets/posts/post2.jpg"
import Post3 from "../../../assets/posts/post3.jpg"

import BlogItem from "./BlogItem"

function Blog(props) {
    return (
        <main className="blog-page-wrapper">
            <Heading title="Blog" size={1.5} />

            <div className="blog-page-content">
                <BlogItem />
            </div>

        </main>
    );
}

export default Blog;