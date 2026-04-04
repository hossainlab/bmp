"use client";
import Image from "next/image";

type Mentee = {
  name: string;
  university: string;
  department: string;
  photo: string | null;
  quote: string;
};

const mentees: Mentee[] = [
  {
    name: "Kulsuma Bahar Bethi",
    university: "University of Dhaka",
    department: "Nutrition and Food Science",
    photo: "/Mentees_Photo/inbound4866978039411946964 - Kulsuma Bahar Bethi.jpg",
    quote:
      "My research journey was significantly shaped by my experience at CHIRAL Bangladesh. The structured internship helped me understand principles of responsible research and evidence-based scientific inquiry.",
  },
  {
    name: "Mushfika Khanam",
    university: "Noakhali Science and Technology University",
    department: "Microbiology",
    photo: "/Mentees_Photo/images - Mushfika Khanam.jpeg",
    quote:
      "The mentorship helped me understand the fundamentals of scientific research and R programming. I learned how to approach a research problem, analyze data systematically, and interpret results more effectively.",
  },
  {
    name: "Ibtasum Islam",
    university: "Islamic University",
    department: "Pharmacy",
    photo: "/Mentees_Photo/Ibtasum_RA_BigBio_photo - Ibtasum islam Sun.jpg",
    quote:
      "Great teacher and an inspiring mentor. Loving every moment of learning from Jubayer vai.",
  },
  {
    name: "Rahnuma Tabassum",
    university: "Jagannath University",
    department: "Biochemistry and Molecular Biology",
    photo: "/Mentees_Photo/Rahnuma  - Rahnuma Tabassum.jpg",
    quote:
      "I get the full support during my internship programme and also getting any kind of mentorship regularly, which brings my confidence level to finish my work properly.",
  },
  {
    name: "Naznin Akter",
    university: "Gopalganj Science and Technology University",
    department: "Biotechnology and Genetic Engineering",
    photo: "/Mentees_Photo/naz - Naznin Shuktara.jpg",
    quote:
      "Being part of the Big Bioinformatics Lab has been a transformative experience. The mentorship provided me with the technical skills and analytical mindset needed to handle complex datasets effectively.",
  },
  {
    name: "Sabbir Khan",
    university: "Gazipur Agricultural University",
    department: "Faculty of Veterinary Medicine and Animal Science",
    photo: "/Mentees_Photo/IMG20251212191440 (1) - Sabbir Khan.jpg",
    quote:
      "The internship was a turning point as I began my bioinformatics journey. Under his guidance, I strengthened my skills in R programming, transcriptomics, and cancer bioinformatics — and worked on a kidney cancer project now becoming a full paper.",
  },
  {
    name: "Pritom Kundu",
    university: "Rajshahi University",
    department: "Pharmacy",
    photo: "/Mentees_Photo/Gemini_Generated_Image_txrvxutxrvxutxrv - Pritom Kundu.png",
    quote:
      "Our Lead Trainer MD Jubayer vai is really a polite and professional mentor. Working with him is a joy and pleasure — learning from him was very unique and interesting.",
  },
  {
    name: "Ellina Tasneem Bushra",
    university: "University of Rajshahi",
    department: "Pharmacy",
    photo: "/Mentees_Photo/Ellina Tasneem Bushra  - Ellina Bushra.jpg",
    quote:
      "The mentor provided clear direction, shared useful knowledge, and encouraged me to think critically about my work. It built my confidence in conducting research and planning my career path.",
  },
  {
    name: "Sheikh Naem Islam Abhi",
    university: "Islamic University, Kushtia",
    department: "Pharmacy",
    photo: "/Mentees_Photo/Abhi - Naem Islam Abhi.jpg",
    quote:
      "Before joining this platform, I had limited knowledge about how to apply bioinformatics practically. Now I can understand where to start research and I've applied these skills to my undergraduate project.",
  },
  {
    name: "Sharmin Sultana Lincoln",
    university: "Military Institute of Science & Technology",
    department: "Biomedical Engineering",
    photo: "/Mentees_Photo/DSC00399 (1) - Sharmin Sultana Lincoln.JPG",
    quote:
      "My experience with the 1-on-1 Bioinformatics Mentorship Program has been one of the most impactful parts of my academic journey. It fundamentally changed my perspective on research.",
  },
  {
    name: "Musab Shahariar",
    university: "Islamic University, Kushtia",
    department: "Pharmacy",
    photo: null,
    quote:
      "Whatever I know about the fundamentals of conducting research, ethics, academic writing, and how to learn something new on my own — I learned it from you.",
  },
  {
    name: "Mst. Afsana Meme",
    university: "Jahangirnagar University",
    department: "Pharmacy",
    photo: "/Mentees_Photo/Meme - Afsana Meme.png",
    quote:
      "My mentorship experience with Chiral Bangladesh significantly enhanced my research skills and understanding of Drug Design, strengthening my motivation to pursue pharmaceutical research.",
  },
  {
    name: "Mohammad Mahfuzul Islam",
    university: "Concord Stem Cell Limited",
    department: "Product Development & Clinical Trial Studies",
    photo: "/Mentees_Photo/Mohammad Mahfuzul Islam - Mohammad Mahfuzul Islam.jpeg",
    quote:
      "The teaching style and the resources provided were excellent. I highly recommend this lab to anyone who wants to start learning single-cell RNA-seq analysis.",
  },
  {
    name: "Anisha Tashruba Riya",
    university: "Khulna University",
    department: "Biotechnology and Genetic Engineering",
    photo: "/Mentees_Photo/Anisha_Tashruba_Riya - Anisha Tashruba Riya.png",
    quote:
      "I first learned proper research methods, R language, and basic cancer bioinformatics from Md. Jubayer. He explained difficult topics in a simple and clear way. Now I am working in the BigBioinformatics Lab under his supervision.",
  },
  {
    name: "Al-helal Nahid",
    university: "World University of Bangladesh",
    department: "Department of Pharmacy",
    photo: "/Mentees_Photo/Nahid_s Pic - AL HELAL NAHID.png",
    quote:
      "One of the most valuable parts was learning how to read and write a research paper. After Jubayer Bhai's sessions, many of my confusions were cleared. I have personally benefited a lot.",
  },
];

const stats = [
  { value: "3K+", label: "Mentees" },
  { value: "20+", label: "Universities" },
  { value: "5+", label: "Research Tracks" },
  { value: "100%", label: "Research Output" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function Card({ m }: { m: Mentee }) {
  return (
    <div
      style={{
        width: 340,
        flexShrink: 0,
        background: "linear-gradient(145deg, #111720, #0d1219)",
        border: "1px solid #1e2a38",
        borderRadius: 16,
        padding: "22px 24px 20px",
        marginRight: 16,
        display: "flex",
        flexDirection: "column",
        cursor: "default",
      }}
    >
      {/* Large decorative left curly quote */}
      <div
        style={{
          fontSize: "3.2rem",
          color: "rgba(77,159,255,0.2)",
          lineHeight: 0.85,
          marginBottom: 14,
          fontFamily: "Georgia, 'Times New Roman', serif",
          userSelect: "none",
        }}
      >
        &#8220;
      </div>

      {/* Quote text — full, no clamp */}
      <p
        style={{
          fontSize: "0.875rem",
          color: "#8a9ab0",
          lineHeight: 1.7,
          marginBottom: 20,
          flex: 1,
        }}
      >
        {m.quote}
      </p>

      {/* Divider */}
      <div style={{ height: 1, background: "#1a2535", marginBottom: 16 }} />

      {/* Profile row */}
      <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
        {/* Avatar */}
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            border: "2px solid rgba(77,159,255,0.25)",
          }}
        >
          {m.photo ? (
            <Image
              src={m.photo}
              alt={m.name}
              width={48}
              height={48}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #4d9fff, #b97fff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "#fff",
              }}
            >
              {getInitials(m.name)}
            </div>
          )}
        </div>

        {/* Name / university / dept */}
        <div>
          <div
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#d8e4f0",
              lineHeight: 1.3,
              marginBottom: 3,
            }}
          >
            {m.name}
          </div>
          <div
            style={{
              fontSize: "0.72rem",
              color: "#3a7abf",
              lineHeight: 1.4,
              marginBottom: 2,
            }}
          >
            {m.university}
          </div>
          <div
            style={{
              fontSize: "0.67rem",
              color: "#3a5070",
              lineHeight: 1.4,
            }}
          >
            {m.department}
          </div>
        </div>
      </div>

      {/* Stars */}
      <div style={{ display: "flex", gap: 3, marginTop: 14 }}>
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} style={{ color: "#f0c040", fontSize: "0.75rem" }}>
            ★
          </span>
        ))}
      </div>
    </div>
  );
}

export default function MenteesFeedback() {
  const row1 = mentees;
  const row2 = [...mentees].reverse();

  return (
    <section
      id="testimonials"
      style={{
        padding: "100px 0",
        background: "#0a0e14",
        borderTop: "1px solid #1a2535",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .scroll-left {
          display: flex;
          align-items: stretch;
          width: max-content;
          animation: scrollLeft 60s linear infinite;
        }
        .scroll-right {
          display: flex;
          align-items: stretch;
          width: max-content;
          animation: scrollRight 55s linear infinite;
        }
        .scroll-left:hover,
        .scroll-right:hover {
          animation-play-state: paused;
        }
        .scroll-fade {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%);
        }
      `}</style>

      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(77,159,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Section header */}
      <div
        style={{
          maxWidth: 700,
          margin: "0 auto 52px",
          textAlign: "center",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: "monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#4a6a8a",
            marginBottom: 16,
          }}
        >
          Mentee Testimonials
        </p>
        <h2
          style={{
            fontFamily: "var(--font-dm-serif), serif",
            fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            color: "#e8edf5",
            lineHeight: 1.15,
            marginBottom: 18,
            letterSpacing: "-0.01em",
          }}
        >
          Researchers Who{" "}
          <em
            style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #4d9fff 0%, #7fff9f 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Leveled Up
          </em>
        </h2>
        <p
          style={{
            fontSize: "0.97rem",
            color: "#8a9ab0",
            lineHeight: 1.75,
            maxWidth: 520,
            margin: "0 auto",
          }}
        >
          Hear directly from mentees across 12+ universities who transformed their
          research capabilities through structured bioinformatics mentorship.
        </p>
      </div>

      {/* Stats row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: 64,
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            style={{
              textAlign: "center",
              padding: "20px 44px",
              borderRight:
                i < stats.length - 1 ? "1px solid #1e2a38" : "none",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-dm-serif), serif",
                fontSize: "2.3rem",
                color: "#4d9fff",
                lineHeight: 1,
                marginBottom: 5,
              }}
            >
              {s.value}
            </div>
            <div
              style={{
                fontSize: "0.77rem",
                color: "#4a6a8a",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontFamily: "monospace",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scrolling row 1 — left */}
      <div className="scroll-fade" style={{ marginBottom: 16 }}>
        <div className="scroll-left">
          {[...row1, ...row1].map((m, i) => (
            <Card key={`r1-${i}`} m={m} />
          ))}
        </div>
      </div>

      {/* Scrolling row 2 — right */}
      <div className="scroll-fade">
        <div className="scroll-right">
          {[...row2, ...row2].map((m, i) => (
            <Card key={`r2-${i}`} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
