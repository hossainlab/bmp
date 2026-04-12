import Image from "next/image";
import styles from "./InstructorBio.module.css";

const stats = [
  { value: "5+", label: "Years of Research Experience" },
  { value: "5+", label: "Years of Mentoring Experience" },
  { value: "3K+", label: "Students trained since 2020" },
  { value: "20+", label: "Publications" }
];

export default function InstructorBio() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>About the Mentor</p>

        <div className={`${styles.grid} stack-on-mobile`}>
          {/* Left: image + stats + name */}
          <div>
            <div className={styles.photoWrap}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/jubayer.jpg`}
                alt="Md. Jubayer Hossain"
                width={200}
                height={200}
                className={styles.photo}
              />
            </div>
            <div className={styles.statsRow}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>

            <h2 className={styles.name}>Md. Jubayer Hossain</h2>
            <p className={styles.title}>Founder & CEO, DeepBio Ltd</p>
          </div>

          {/* Right: bio */}
          <div className={styles.bio}>
            <p>
              Md. Jubayer Hossain is a bioinformatician and computational biologist with five years of experience spanning both active research and teaching. Since 2020, he has trained over 3,000 students — from complete beginners to graduate researchers — in the practical skills required to work with real biological data.
            </p>
            <p>
              As Founder & CEO of DeepBio Ltd, Jubayer combines research rigor with a structured approach to education. His teaching is grounded in what he does daily: designing and running computational analyses on real datasets. Every student in this program works directly with him — not a TA, not a substitute — toward a concrete, submittable research output.
            </p>
            <p className={styles.quote}>
              &quot;My role is to accelerate your journey from question to discovery. You bring the curiosity; I bring the roadmap, the tools, and the accountability to ensure you succeed.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
