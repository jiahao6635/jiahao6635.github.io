import Link from "next/link";
import { sortedPosts } from "@/data/posts";

export default function BlogPage() {
  return (
    <div className="container page-section">
      <section className="section-head">
        <h1>博客列表</h1>
        <p>00后程序员日拱一卒：每天一篇，长期积累。这里展示所有文章标题、发布日期和简短描述。</p>
      </section>

      <div className="list-layout">
        {sortedPosts.map((post) => (
          <article key={post.slug} className="list-item">
            <h2>
              <Link href={`/blog/${post.slug}`} className="title-link">
                {post.title}
              </Link>
            </h2>
            <p className="meta">发布日期：{post.date}</p>
            <p>{post.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
