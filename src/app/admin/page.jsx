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
  const events = await Event.find();
  const users = await User.find().select("-password");

  const token = await verifyToken();
  if (!token.isVerified) {
    redirect("/login");
  }

  const handleEventDelete = async (formData) => {
    "use server";
    try {
      const data = await deleteEvent(formData);
      // console.log(data);
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

  const eventCount = events.length;
  const blogCount = blogs.length;
  const userCount = users.length;

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="relative z-10 px-4 sm:px-8 lg:px-20 py-12">
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 bg-clip-text text-transparent mb-2 leading-tight">
                Admin Hub
              </h1>
              <p className="text-gray-400 text-lg sm:text-xl">Welcome back! Manage your platform with ease</p>
            </div>
            <div className="hidden lg:flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/20 rounded-2xl backdrop-blur-xl">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-green-400 font-semibold">Live</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <div className="group backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 hover:border-cyan-400/60 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Events</p>
                  <p className="text-3xl sm:text-4xl font-bold text-white mt-2">{eventCount}</p>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-cyan-400/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="group backdrop-blur-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-400/30 hover:border-green-400/60 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Blogs</p>
                  <p className="text-3xl sm:text-4xl font-bold text-white mt-2">{blogCount}</p>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-green-400/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17c0 5.5 3.578 10.254 8.391 11.383M12 6.253c5.5 0 10 4.745 10 10.747 0 5.502-3.579 10.257-8.391 11.386" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="group backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 hover:border-purple-400/60 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-medium">Admins</p>
                  <p className="text-3xl sm:text-4xl font-bold text-white mt-2">{userCount}</p>
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-purple-400/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM6 20a9 9 0 0118 0v2H6v-2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="flex flex-col gap-4 group/section">
            <div className="backdrop-blur-xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent border border-cyan-400/30 rounded-2xl p-5 sm:p-6 flex items-center justify-between hover:border-cyan-400/60 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Events</h2>
              </div>
              <Link
                href="/events/create"
                className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-green-400 text-slate-900 font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-sm hover:scale-105 active:scale-95"
              >
                ⊕ New
              </Link>
            </div>
            <div className="h-[550px] sm:h-[650px] backdrop-blur-2xl bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5 border border-white/10 hover:border-cyan-400/20 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 overflow-y-auto shadow-2xl transition-all duration-300 group-hover/section:shadow-cyan-500/10">
              {events.length === 0 ? (
                <div className="flex items-center justify-center h-full flex-col gap-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-center">No events yet<br /><span className="text-sm">Create one to showcase your work</span></p>
                </div>
              ) : (
                events.map((event) => (
                  <div
                    key={event._id}
                    className="group/item flex gap-3 sm:gap-4 bg-gradient-to-r from-white/5 to-white/0 hover:from-cyan-500/10 hover:to-blue-500/10 border border-white/10 hover:border-cyan-400/40 p-3 sm:p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <div className="w-20 h-16 sm:w-28 sm:h-24 relative flex-shrink-0 rounded-lg overflow-hidden border border-white/20 shadow-lg">
                      <Image
                        src={event.images[0]}
                        alt="Event thumbnail"
                        className="rounded-lg object-cover group-hover/item:scale-110 transition-transform duration-300"
                        fill
                      />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <h3 className="font-bold text-white text-sm sm:text-base truncate group-hover/item:text-cyan-300 transition-colors">
                        {event.title}
                      </h3>
                      <div className="flex gap-2 pt-2 flex-wrap">
                        <Link
                          href={"/events/" + event._id}
                          className="px-3 py-1.5 bg-gradient-to-r from-green-500/30 to-emerald-500/30 hover:from-green-500/50 hover:to-emerald-500/50 border border-green-500/50 hover:border-green-400 text-green-300 hover:text-green-100 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                        >
                          👁 View
                        </Link>
                        <form action={handleEventDelete.bind(null, event._id.toString())}>
                          <button className="px-3 py-1.5 bg-gradient-to-r from-red-500/30 to-rose-500/30 hover:from-red-500/50 hover:to-rose-500/50 border border-red-500/50 hover:border-red-400 text-red-300 hover:text-red-100 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 cursor-pointer">
                            🗑 Delete
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="flex flex-col gap-4 group/section">
            <div className="backdrop-blur-xl bg-gradient-to-br from-green-500/10 via-emerald-500/5 to-transparent border border-green-400/30 rounded-2xl p-5 sm:p-6 flex items-center justify-between hover:border-green-400/60 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg shadow-green-500/50">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C6.5 6.253 2 10.998 2 17c0 5.5 3.578 10.254 8.391 11.383m0-13c5.5 0 10 4.745 10 10.747 0 5.502-3.579 10.257-8.391 11.386" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Blogs</h2>
              </div>
              <Link
                href="/blogs/create"
                className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-green-400 text-slate-900 font-bold rounded-xl hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 text-sm hover:scale-105 active:scale-95"
              >
                ⊕ New
              </Link>
            </div>
            <div className="h-[550px] sm:h-[650px] backdrop-blur-2xl bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5 border border-white/10 hover:border-green-400/20 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 overflow-y-auto shadow-2xl transition-all duration-300 group-hover/section:shadow-green-500/10">
              {blogs.length === 0 ? (
                <div className="flex items-center justify-center h-full flex-col gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-center">No blogs yet<br /><span className="text-sm">Start sharing your stories</span></p>
                </div>
              ) : (
                blogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="group/item flex gap-3 sm:gap-4 bg-gradient-to-r from-white/5 to-white/0 hover:from-green-500/10 hover:to-emerald-500/10 border border-white/10 hover:border-green-400/40 p-3 sm:p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
                  >
                    <div className="w-20 h-16 sm:w-28 sm:h-24 relative flex-shrink-0 rounded-lg overflow-hidden border border-white/20 shadow-lg">
                      <Image
                        src={blog.images[0]}
                        alt="Blog thumbnail"
                        className="rounded-lg object-cover group-hover/item:scale-110 transition-transform duration-300"
                        fill
                      />
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-white text-sm sm:text-base truncate group-hover/item:text-green-300 transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-gray-400 text-xs sm:text-sm mt-1">✍️ {blog.author.username}</p>
                      </div>
                      <div className="flex gap-2 pt-2 flex-wrap">
                        <Link
                          href={"/blogs/" + blog._id}
                          className="px-3 py-1.5 bg-gradient-to-r from-green-500/30 to-emerald-500/30 hover:from-green-500/50 hover:to-emerald-500/50 border border-green-500/50 hover:border-green-400 text-green-300 hover:text-green-100 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
                        >
                          👁 View
                        </Link>
                        <form action={handleBlogDelete.bind(null, blog._id.toString())}>
                          <button className="px-3 py-1.5 bg-gradient-to-r from-red-500/30 to-rose-500/30 hover:from-red-500/50 hover:to-rose-500/50 border border-red-500/50 hover:border-red-400 text-red-300 hover:text-red-100 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 cursor-pointer">
                            🗑 Delete
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 group/section">
            <div className="backdrop-blur-xl bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent border border-purple-400/30 rounded-2xl p-5 sm:p-6 flex items-center justify-between hover:border-purple-400/60 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 shadow-lg shadow-purple-500/50">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM6 20a9 9 0 0118 0v2H6v-2z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">Admins</h2>
              </div>
              <Link
                href="/register"
                className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-green-400 text-slate-900 font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm hover:scale-105 active:scale-95"
              >
                ⊕ New
              </Link>
            </div>
            <div className="h-[550px] sm:h-[650px] backdrop-blur-2xl bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-red-500/5 border border-white/10 hover:border-purple-400/20 rounded-2xl p-5 sm:p-6 flex flex-col gap-3 overflow-y-auto shadow-2xl transition-all duration-300 group-hover/section:shadow-purple-500/10">
              {users.length === 0 ? (
                <div className="flex items-center justify-center h-full flex-col gap-4">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-center">No admin accounts<br /><span className="text-sm">Add team members</span></p>
                </div>
              ) : (
                users.map((user) => (
                  <div
                    key={user._id}
                    className="group/user flex items-center gap-3 bg-gradient-to-r from-white/5 to-white/0 hover:from-purple-500/10 hover:to-pink-500/10 border border-white/10 hover:border-purple-400/40 rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-400/30 group-hover/user:border-purple-400/60 flex-shrink-0 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center shadow-lg transition-all">
                      <Image
                        src="/staticAssets/images/user.png"
                        width={48}
                        height={48}
                        className="object-cover w-full h-full"
                        alt="User"
                      />
                    </div>
                    <h3 className="text-white font-bold truncate group-hover/user:text-purple-300 transition-colors text-sm sm:text-base flex-1">
                      👤 {user.username}
                    </h3>
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0"></div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Admin;
