import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">Writing</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Thoughts and stories from my journey.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-zinc-400">No posts yet. Check back soon!</p>
      ) : (
        <div className="space-y-12">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="group">
                <h2 className="text-2xl font-semibold mb-3 tracking-tight group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-zinc-400 mb-3">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {post.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
