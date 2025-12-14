import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts();
  const latestPost = posts[0];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="mb-16">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Thoughts, stories, and ideas from my journey
        </p>
      </div>

      {latestPost && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Latest Post</h2>
          <Link href={`/blog/${latestPost.slug}`}>
            <article className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2 hover:text-blue-600 transition-colors">
                {latestPost.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                {new Date(latestPost.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-gray-700 dark:text-gray-300">{latestPost.excerpt}</p>
            </article>
          </Link>
        </div>
      )}

      <div className="mt-8">
        <Link
          href="/blog"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View All Posts
        </Link>
      </div>
    </div>
  );
}
