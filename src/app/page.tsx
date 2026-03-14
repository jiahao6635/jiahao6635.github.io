import Image from "next/image";
import Link from "next/link";
import { sortedPosts } from "@/data/posts";

const latestPosts = sortedPosts.slice(0, 3);

export default function Home() {
  return (
    <div className="container page-section">
      <section className="hero">
        <p className="eyebrow">博客核心：00后程序员日拱一卒</p>
        <h1>每天都会写一篇博客，即便写的不一定精彩，但相信日积月累的力量。</h1>
        <p>
          这里记录编程实践、成长复盘与真实思考。首页展示最新文章摘要，点击文章卡片即可跳转完整内容。
        </p>
      </section>

      <section>
        <div className="section-head">
          <h2>最新文章</h2>
          <Link href="/blog" className="text-link">
            查看全部文章
          </Link>
        </div>
        <div className="post-grid">
          {latestPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="post-card-link">
              <article className="post-card">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  className="post-cover"
                  width={1200}
                  height={700}
                />
                <div className="post-body">
                  <p className="meta">{post.date}</p>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <span className="text-link">阅读全文</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
