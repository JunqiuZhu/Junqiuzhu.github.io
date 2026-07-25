const publications = [
  {
    year: "2025",
    venue: "Computer Graphics Forum",
    title:
      "A Texture-Free Practical Model for Realistic Surface-Based Rendering of Woven Fabrics",
    authors: "Apoorv Khattar, Junqiu Zhu, Ling-Qi Yan, Zahra Montazeri",
    href: "https://onlinelibrary.wiley.com/doi/epdf/10.1111/cgf.15283",
  },
  {
    year: "2024",
    venue: "ACM SIGGRAPH",
    title: "A Realistic Multi-scale Surface-based Cloth Appearance Model",
    authors:
      "Junqiu Zhu, Lukas Bode, Adrian Jarabo, Carlos Aliaga, Christophe Hery, Ling-Qi Yan, Matt Jen-Yuan Chiang",
    href: "https://sites.cs.ucsb.edu/~lingqi/publications/paper_sig24cloth.pdf",
  },
  {
    year: "2024",
    venue: "Computational Visual Media",
    title: "A Multi-scale Yarn Appearance Model with Fiber Details",
    authors:
      "Apoorv Khattar, Junqiu Zhu, Jean-Marie Aubry, Emiliano Padovani, Marc Droske, Ling-Qi Yan, Zahra Montazeri",
    href: "https://sites.cs.ucsb.edu/~lingqi/publications/paper_cvm24cloth.pdf",
  },
  {
    year: "2023",
    venue: "EGSR · Best Paper & Best Visual Effects",
    title: "A Practical and Hierarchical Yarn-based Shading Model for Cloth",
    authors:
      "Junqiu Zhu, Zahra Montazeri, Jean-Marie Aubry, Ling-Qi Yan, Andrea Weidlich",
    href: "https://sites.cs.ucsb.edu/~lingqi/publications/paper_egsr23cloth.pdf",
  },
];

const news = [
  {
    date: "Jun 2025",
    text: "Three papers I supervised were accepted to EGSR as part of the CGF track.",
  },
  {
    date: "Mar 2025",
    text: "I joined Shandong University as a Full Researcher.",
  },
  {
    date: "Dec 2024",
    text: "We presented the course “Recent Advances in Realistic Cloth Rendering” at SIGGRAPH Asia 2024.",
  },
  {
    date: "Jun 2023",
    text: "Our hierarchical yarn shading model received both the EGSR Best Paper Award and Best Visual Effects Award.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top">
          Junqiu Zhu
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#news">News</a>
          <a href="mailto:zhujunqiu@mail.sdu.edu.cn">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="role">Full Researcher · Shandong University</p>
          <h1>Junqiu Zhu</h1>
          <p className="chinese-name">朱君秋</p>
          <p className="lead">
            I work at the intersection of artificial intelligence and
            photorealistic rendering, with a focus on visual appearance
            modeling.
          </p>
          <div className="links">
            <a className="primary-link" href="#publications">
              Selected publications
            </a>
            <a
              href="https://github.com/junqiuzhu"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a href="mailto:zhujunqiu@mail.sdu.edu.cn">Email ↗</a>
          </div>
        </div>
        <div className="portrait-wrap">
          <img src="/junqiu-zhu.jpg" alt="Junqiu Zhu" />
          <span>Qilu Outstanding Young Scholar</span>
        </div>
      </section>

      <section className="two-column section" id="about">
        <div>
          <p className="section-label">About</p>
          <h2>Understanding why the real world looks the way it does.</h2>
        </div>
        <div className="body-copy">
          <p>
            I am a Full Researcher at Shandong University and a recipient of
            the Qilu Outstanding Young Scholar Award. Before joining Shandong
            University, I was a Postdoctoral Fellow at the University of
            California, Santa Barbara from 2023 to 2025, and an intern at Meta
            Zurich in 2022.
          </p>
          <p>
            I received my Ph.D. from Shandong University in 2022. My long-term
            goal is to combine physically based and data-driven approaches to
            reproduce the subtle visual complexity of real-world materials.
          </p>
        </div>
      </section>

      <section className="section research" id="research">
        <div className="section-intro">
          <p className="section-label">Research</p>
          <h2>Physically grounded. Data informed. Built for real use.</h2>
        </div>
        <div className="research-list">
          <article>
            <span>01</span>
            <div>
              <h3>Appearance Modeling</h3>
              <p>
                High-fidelity models for cloth, hair and fur, skin, feathers,
                and glints—connecting material structure with light transport.
              </p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Real-time Rendering</h3>
              <p>
                Frame extrapolation, global illumination, stereo rendering,
                and appearance aggregation for practical PC and mobile systems.
              </p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Inverse & Simulation Rendering</h3>
              <p>
                Recovering materials and lighting from images, integrating
                physical simulation, and building efficient scene
                representations.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section" id="publications">
        <div className="section-head">
          <div>
            <p className="section-label">Selected publications</p>
            <h2>Recent work</h2>
          </div>
          <a
            className="text-link"
            href="https://junqiuzhu.github.io/publications/"
            target="_blank"
            rel="noreferrer"
          >
            View all publications ↗
          </a>
        </div>
        <div className="publication-list">
          {publications.map((paper) => (
            <a
              href={paper.href}
              target="_blank"
              rel="noreferrer"
              className="publication"
              key={paper.title}
            >
              <div className="paper-meta">
                <span>{paper.year}</span>
                <span>{paper.venue}</span>
              </div>
              <div>
                <h3>{paper.title}</h3>
                <p>{paper.authors}</p>
              </div>
              <span className="paper-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section news" id="news">
        <div>
          <p className="section-label">News</p>
          <h2>Recent updates</h2>
        </div>
        <div className="news-list">
          {news.map((item) => (
            <div className="news-item" key={`${item.date}-${item.text}`}>
              <time>{item.date}</time>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div>
          <p className="footer-heading">Let&apos;s connect.</p>
          <a href="mailto:zhujunqiu@mail.sdu.edu.cn">
            zhujunqiu@mail.sdu.edu.cn ↗
          </a>
        </div>
        <div className="footer-meta">
          <span>Shandong University</span>
          <span>© 2026 Junqiu Zhu</span>
        </div>
      </footer>
    </main>
  );
}
