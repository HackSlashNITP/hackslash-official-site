import { deleteBlog, deleteEvent, verifyToken } from "@/lib/actions";
import { connectToDb } from "@/lib/db";
import { Event, Post, User } from "@/lib/models";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const Admin = async () => {
  await connectToDb();
  const blogs = await Post.find().populate({
    path: "author",
    select: "username",
  });
  const events = await Event.find().populate({
    path: "author",
    select: "username",
  });  
  const users = await User.find().select("-password");

  const token = await verifyToken();
  if (!token.isVerified) {
    redirect("/login");
  }

  const handleEventDelete = async (formData) => {
    "use server";
    try {
      const data = await deleteEvent(formData);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBlogDelete = async (formData) => {
    "use server";
    try {
      const data = await deleteBlog(formData);
      if (data.error) {
        alert("hello");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="px-8 lg:px-16">
      <h1 className="text-6xl text-center font-bold text-white">Dashboard</h1>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* For managing the blogs */}
        <div className="flex-1 flex flex-col gap-2 lg:max-w-[33.33%]">
          <div className="flex gap-2 items-center text-white justify-center">
            <h2 className="text-3xl ">Events</h2>
            <Link
              href={"/events/create"}
              className="text-xl px-2 bg-gray-600 rounded-xl"
            >
              Add
            </Link>
          </div>

          <div className="h-[500px] bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-700 rounded-2xl p-4 flex flex-col gap-4 overflow-y-scroll">
            {events.map((event) => (
              <div
                key={event._id}
                className="flex gap-4 text-2xl text-black bg-[rgba(255,255,255,0.3)] p-2 rounded-2xl"
              >
                <div className="w-32 h-28 relative">
                  <Image
                    src={event.images[0]}
                    alt="Blog_thumbnail"
                    className="rounded-2xl object-cover"
                    fill
                  ></Image>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="truncate">{event.title}</h3>
                  <p className="text-lg">Posted by : {event.author.username}</p>
                  <div className="flex gap-2 text-xl">
                    <Link
                      href={"/events/" + event._id}
                      className="cursor-pointer rounded bg-green-700 text-white px-1"
                    >
                      View
                    </Link>
                    <form
                      action={handleEventDelete.bind(
                        null,
                        event._id.toString()
                      )}
                    >
                      <button className="rounded bg-red-500 text-white px-1 cursor-pointer">
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For managing the Blogs */}
        <div className="flex-1 flex flex-col gap-2 lg:max-w-[33.33%]">
          <div className="flex gap-2 items-center text-white justify-center">
            <h2 className="text-3xl">Blogs</h2>
            <Link
              href={"/blogs/create"}
              className="text-xl px-2 bg-gray-600 rounded-xl"
            >
              Add
            </Link>
          </div>
          <div className="h-[500px] bg-gradient-to-r from-[#009245] to-[#FCEE21] rounded-2xl p-4 flex flex-col gap-4 overflow-y-scroll">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="flex gap-4 text-2xl text-black bg-[rgba(255,255,255,0.3)] p-2 rounded-2xl"
              >
                <div className="w-32 h-28 relative">
                  <Image
                    src={blog.images[0]}
                    alt="Blog_thumbnail"
                    className="rounded-2xl object-cover"
                    fill
                  ></Image>
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="truncate">{blog.title}</h3>
                  <p className="text-lg">Author : {blog.author.username}</p>
                  <div className="flex gap-2 text-xl">
                    <Link
                      href={"/blogs/" + blog._id}
                      className="rounded cursor-pointer bg-green-700 text-white px-1"
                    >
                      View
                    </Link>
                    <form
                      action={handleBlogDelete.bind(null, blog._id.toString())}
                    >
                      <button className="rounded bg-red-500 text-white px-1 cursor-pointer">
                        Delete
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* For managing the admin accounts */}
        <div className="flex-1 flex flex-col gap-2 lg:max-w-[33.33%]">
          <div className="flex gap-2 text-white items-center justify-center">
            <h2 className="text-3xl">Accounts</h2>
            <Link
              href={"/register"}
              className="text-xl px-2 bg-gray-600 rounded-xl"
            >
              Add
            </Link>
          </div>
          <div className="h-[500px] bg-gradient-to-r from-[#662D8C] to-[#ED1E79] rounded-2xl overflow-y-scroll">
            <div className="p-4 flex flex-col gap-4">
              {users.map((user) => (
                <div
                  key={user._id}
                  className="flex items-center gap-2 bg-[rgba(255,255,255,0.3)] rounded-3xl p-1"
                >
                  <Image
                    src={"/staticAssets/images/user.png"}
                    width={48}
                    height={48}
                    className="object-cover overflow-hidden"
                    alt="User"
                  ></Image>
                  <h3 className="text-xl">{user.username}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Admin;
