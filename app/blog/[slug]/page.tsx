import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { marked } from "marked";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await marked(post.content);

  return (
    <article className="max-w-2xl mx-auto px-6 pb-24">
      <Link
        href="/blog"
        className="inline-block mb-12 text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
      >
        ← Back to writing
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
          {post.title}
        </h1>
        <div className="text-sm text-zinc-400">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </header>

      <div
        className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:font-display prose-headings:tracking-tight
          prose-p:text-zinc-700 dark:prose-p:text-zinc-300 prose-p:leading-relaxed
          prose-a:text-zinc-900 dark:prose-a:text-zinc-100 prose-a:underline prose-a:underline-offset-4
          prose-a:decoration-zinc-300 dark:prose-a:decoration-zinc-700
          hover:prose-a:decoration-zinc-600 dark:hover:prose-a:decoration-zinc-400
          prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100
          prose-code:text-zinc-800 dark:prose-code:text-zinc-200
          prose-code:bg-zinc-100 dark:prose-code:bg-zinc-900
          prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-zinc-100 dark:prose-pre:bg-zinc-900
          prose-pre:border prose-pre:border-zinc-200 dark:prose-pre:border-zinc-800
          prose-blockquote:border-l-zinc-300 dark:prose-blockquote:border-l-zinc-700
          prose-blockquote:text-zinc-600 dark:prose-blockquote:text-zinc-400
          prose-hr:border-zinc-200 dark:prose-hr:border-zinc-800"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
