import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts();
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="max-w-2xl mx-auto px-6">
      <div className="mb-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Writer, creator, thinker.
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I write about things I'm learning, building, and thinking about.
          Welcome to my corner of the internet.
        </p>
      </div>

      {latestPosts.length > 0 && (
        <div>
          <h2 className="text-sm uppercase tracking-wider text-zinc-400 mb-8">Recent Writing</h2>
          <div className="space-y-12">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group">
                  <h3 className="text-2xl font-semibold mb-3 tracking-tight group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {post.title}
                  </h3>
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

          {posts.length > 3 && (
            <div className="mt-16">
              <Link
                href="/blog"
                className="text-sm hover:opacity-60 transition-opacity underline underline-offset-4"
              >
                View all posts →
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
