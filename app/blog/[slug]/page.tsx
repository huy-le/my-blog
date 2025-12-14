import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { marked } from "marked";
import { notFound } from "next/navigation";

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
    <article className="max-w-3xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-500 dark:text-gray-400">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          {post.author && <span> • {post.author}</span>}
        </div>
      </header>

      <div
        className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700
          prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900
          prose-code:text-blue-600 dark:prose-code:text-blue-400"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
