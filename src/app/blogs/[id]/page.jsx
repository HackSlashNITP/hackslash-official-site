import { connectToDb } from "@/lib/db";
import { Post } from "@/lib/models";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
import moment from "moment";
import { ImageSlider } from "@/components/image-slider";

const BlogPost = async ({ params }) => {
  const { id } = params;

  await connectToDb();
  const post = await Post.findById(id).populate({
    path: "author",
    select: "username",
  });

  if (!post) {
    return <h1>No such blog exists</h1>;
  }

  return (
    <section className="flex flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full md:w-[90%] lg:w-[75%] bg-gray-900 p-4 sm:p-8 rounded-lg">
        {/* Blog Title */}
        <h1 className="text-2xl sm:text-4xl font-bold mb-4">{post.title}</h1>

        {/* Blog Metadata */}
        <p className="text-gray-400 text-xs sm:text-sm mb-2">
          By <span className="text-white">{post.author.username}</span> on{" "}
          {moment(post.createdAt).format("MMMM Do YYYY")}
        </p>

        {/* Image Slider */}
        <div className="max-w-full mb-4 sm:mb-6">
          {post.images && post.images.length > 0 && (
            <ImageSlider images={post.images} />
          )}
        </div>

        {/* Blog Description */}
        <div
          className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.desc) }}
        />

        {/* Footer */}
        <footer className="text-gray-500 text-xs sm:text-sm mt-6">
          <p>Posted on {moment(post.createdAt).format("MMMM Do YYYY")}</p>
        </footer>
      </div>
    </section>
  );
};

export default BlogPost;
