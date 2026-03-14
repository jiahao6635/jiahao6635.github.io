import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/posts";

type BlogDetailProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container page-section article-layout">
      <header className="article-header">
        <p className="meta">发布日期：{post.date}</p>
        <h1>{post.title}</h1>
        <div className="tag-row">
          {post.categories.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <Image
        src={post.coverImage}
        alt={post.title}
        className="article-cover"
        width={1400}
        height={900}
        priority
      />

      <section className="article-content">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
    </article>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}
