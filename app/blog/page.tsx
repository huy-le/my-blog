import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">All Posts</h1>

      {posts.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-400">No posts yet. Check back soon!</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                  {post.author && ` • ${post.author}`}
                </p>
                <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
