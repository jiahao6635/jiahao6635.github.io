export default function AboutPage() {
  return (
    <div className="container page-section about-layout">
      <section>
        <p className="eyebrow">About Me</p>
        <h1>关于我</h1>
        <p>
          你好，我是嘉豪，一名 00 后程序员。这个博客的核心是“日拱一卒”——每天写一篇，持续输出，持续复盘。
        </p>
        <p>
          我相信写作不一定每次都精彩，但长期记录会积累出真正的成长曲线。这里会持续分享编程、效率和个人成长实践。
        </p>
      </section>

      <section className="contact-box">
        <h2>联系方式</h2>
        <ul>
          <li>邮箱：jiahao@example.com</li>
          <li>GitHub：github.com/jiahao6635</li>
          <li>微信：jiahao-notes</li>
        </ul>
      </section>
    </div>
  );
}
