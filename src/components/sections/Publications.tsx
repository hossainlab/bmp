import Image from "next/image";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const publications = [
  {
    id: "cct5",
    journal: "Scientific Reports",
    title: "Pan-cancer analysis reveals immunological and prognostic significance of CCT5 in human tumors",
    year: "2024",
    slug: "cct5",
    url: "https://www.nature.com/articles/s41598-025-88339-z",
  },
  {
    id: "meta",
    journal: "BMC Genomics",
    title: "Meta-Analysis of Genomic Variants Using Integrative Computational Methods",
    year: "2023",
    slug: "meta",
    url: "https://link.springer.com/article/10.1186/s12864-025-12127-2",
  },
  {
    id: "wnt",
    journal: "Scientific Reports",
    title: "Comprehensive bioinformatics analysis reveals prognostic significance and immunological roles of WNT gene family in breast cancer",
    year: "2023",
    slug: "wnt",
    url: "https://www.nature.com/articles/s41598-025-13315-6",
  },
];

function pageUrl(slug: string) {
  return `${BASE}/publications/${slug}/${slug}_page-0001.jpg`;
}

export default function Publications() {
  return (
    <section className="pub-section" id="publications">
      <div className="pub-inner">
        <h2 className="pub-heading">Selected Publications</h2>
        <p className="pub-subtext">
          Peer-reviewed research at the intersection of bioinformatics,
          computational biology, and public health data science.
        </p>

        <div className="pub-grid">
          {publications.map((pub) => (
            <a
              key={pub.id}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pub-box"
            >
              <div className="pub-pages-wrap">
                <Image src={pageUrl(pub.slug)} alt={pub.title} fill sizes="380px" className="pub-page-img" quality={95} />
              </div>

              <div className="pub-text">
                <h3 className="pub-journal">{pub.journal}</h3>
                <p className="pub-title">{pub.title}</p>
                <p className="pub-year">{pub.year}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="pub-more-wrap">
          <a
            href="https://mdjubayerhossain.com/publications/"
            target="_blank"
            rel="noopener noreferrer"
            className="pub-more-link"
          >
            View More Publications
          </a>
        </div>
      </div>
    </section>
  );
}
