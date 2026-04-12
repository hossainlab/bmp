"use client";
import Image from "next/image";
import styles from "./CurrentMentees.module.css";

type CurrentMentee = {
  name: string;
  university: string;
  department: string;
  photo: string | null;
};

const currentMentees: CurrentMentee[] = [
  {
    name: "Ridika Haque Shafin",
    university: "University of Dhaka",
    department: "Department of Botany",
    photo: "/Current_Mentees_Photo/Ridika_Haque_Shafin.jpg",
  },
  {
    name: "Md. Liakot Ali",
    university: "University of Chittagong",
    department: "Department of Pharmacy",
    photo: null,
  },
  {
    name: "Mahim Hassan Chowdhury",
    university: "BRAC University",
    department: "School of Pharmacy",
    photo: "/Current_Mentees_Photo/Mahim Hassan Chowdhury_bmp.jpg",
  },
  {
    name: "Jonaitul Islam",
    university: "Jahangirnagar University",
    department: "Department of Microbiology",
    photo: "/Current_Mentees_Photo/Jonaitul Islam.jpg",
  },
  {
    name: "Enam Ahmed",
    university: "Inha University, South Korea",
    department: "Department of Biomedical Science",
    photo: "/Current_Mentees_Photo/Enam Ahmed.jpg",
  },
];

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function photoSrc(path: string) {
  const encoded = path
    .split("/")
    .map((seg) => encodeURIComponent(seg))
    .join("/");
  return `${BASE}${encoded}`;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function MenteeCard({ m }: { m: CurrentMentee }) {
  return (
    <div className={styles.card}>
      {/* Square photo area */}
      <div className={styles.photoArea}>
        {m.photo ? (
          <Image
            src={photoSrc(m.photo)}
            alt={m.name}
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className={styles.initials}>{getInitials(m.name)}</div>
        )}
        {/* Hover overlay */}
        <div className={styles.photoOverlay} />
      </div>

      {/* Info */}
      <div className={styles.info}>
        <div className={styles.name}>{m.name}</div>
        <div className={styles.university}>{m.university}</div>
        <div className={styles.department}>{m.department}</div>
      </div>
    </div>
  );
}

export default function CurrentMentees() {
  return (
    <section id="current-mentees" className={styles.section}>
      {/* Background glow */}
      <div className={styles.bgGlow} />

      {/* Section header */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>Current Cohort</p>
        <h2 className={styles.heading}>
          Currently{" "}
          <em className={styles.headingEm}>Enrolled Mentees</em>
        </h2>
        <p className={styles.subtext}>
          Meet the researchers currently building their bioinformatics skills
          through our structured 1-on-1 mentorship program.
        </p>
      </div>

      {/* Mentee cards */}
      <div className={styles.gridWrapper}>
        <div className={styles.grid}>
          {currentMentees.map((m) => (
            <MenteeCard key={m.name} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
