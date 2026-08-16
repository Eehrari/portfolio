import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Gamepad2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { PortfolioScene } from "./components/PortfolioScene";

const experience = [
  {
    period: "2025 - Present",
    role: "Senior Software Engineer",
    company: "Open Pathway Collective",
    place: "Remote",
    color: "orange",
    summary:
      "Designing and maintaining scalable platform features across Java, Spring Boot, Angular, PostgreSQL, and AWS - with a focus on architecture, security, accessibility, performance, and reliable delivery.",
  },
  {
    period: "2024 - 2025",
    role: "Software Development Engineer in Test",
    company: "Talent Beyond Boundaries",
    place: "Remote",
    color: "blue",
    summary:
      "Built Angular unit and Selenium functional test coverage, developed reusable shared libraries, and improved frontend accessibility for people with disabilities.",
  },
  {
    period: "2022 - 2023",
    role: "Software Engineer Consultant",
    company: "Unity Technologies",
    place: "Brighton, UK",
    color: "green",
    summary:
      "Improved software performance and functionality, shipped features with cross-functional teams, and solved complex engineering problems while maintaining high code quality.",
  },
  {
    period: "2015 - Present",
    role: "Game & Web Development Mentor",
    company: "Code to Inspire",
    place: "Herat",
    color: "violet",
    summary:
      "Mentoring the next generation of Afghan women in game development and web programming through hands-on teaching, workshops, project feedback, and personal support.",
  },
  {
    period: "2019 - Present",
    role: "Founder & CEO",
    company: "AFGAMESTAN",
    place: "Herat",
    color: "red",
    summary:
      "Building a pioneering local game-development initiative that creates meaningful experiences, grows Afghan talent, and expands what the region can make.",
  },
  {
    period: "2023 - 2024",
    role: "Programmer",
    company: "Pathway Club",
    place: "Remote",
    color: "yellow",
    summary:
      "Created custom Slack bots with TypeScript and the Slack SDK to automate work, simplify communication, and improve team productivity.",
  },
];

const selectedWork = [
  {
    number: "01",
    title: "Scalable Pathway Platforms",
    tag: "Product engineering",
    summary:
      "Secure, accessible product features across Java, Spring Boot, Angular, PostgreSQL, AWS, and shared platform architecture.",
    accent: "orange",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Quality at System Scale",
    tag: "SDET & accessibility",
    summary:
      "Unit, functional, performance, and accessibility testing that turns complex systems into dependable experiences for every user.",
    accent: "blue",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "AFGAMESTAN",
    tag: "Games & community",
    summary:
      "A long-term effort to grow Afghanistan's game-development ecosystem and create opportunities for local creative technologists.",
    accent: "red",
    icon: Gamepad2,
  },
  {
    number: "04",
    title: "Technology Education",
    tag: "Mentorship",
    summary:
      "A decade of mentoring women in web and game development, combining practical engineering with confidence, teamwork, and career readiness.",
    accent: "violet",
    icon: GraduationCap,
  },
];

const skillGroups = [
  {
    title: "Build",
    items: ["Java", "Spring Boot", "Angular", "React", "Node.js", "TypeScript", "PHP"],
  },
  {
    title: "Verify",
    items: ["Jasmine", "Selenium", "Playwright", "Protractor", "Accessibility", "Aikido"],
  },
  {
    title: "Ship",
    items: ["AWS", "PostgreSQL", "MongoDB", "SQL", "Git", "Vanta", "WordPress"],
  },
  {
    title: "Explore",
    items: ["Unity", "Game Development", "Web3", "Solidity", "Slack SDK", "Automation"],
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to portfolio
      </a>

      <PortfolioScene />
      <div className="paper-grain" aria-hidden="true" />
      <div className="scroll-track" aria-hidden="true">
        <span className="scroll-fill" />
      </div>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Ehsan Ehrari - home">
          <span className="wordmark-mark">EE</span>
          <span>
            Ehsan
            <strong>Ehrari</strong>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#experience">Journey</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="mini-cta" href="/assets/ehsan-ehrari-cv.pdf" download>
          CV
          <Download size={16} aria-hidden="true" />
        </a>
      </header>

      <main id="main-content">
        <section className="hero chapter" id="top" aria-labelledby="hero-title">
          <div className="chapter-copy hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              Software engineer · mentor · builder
            </div>

            <p className="chapter-index">Chapter 00 / Hello</p>
            <h1 id="hero-title">
              I build
              <span className="hero-highlight"> pathways</span>
              <br />
              through technology.
            </h1>
            <p className="hero-lede">
              I&apos;m Ehsan Ehrari - a senior software engineer creating reliable
              products, quality systems, learning communities, and games that
              help people move forward.
            </p>

            <div className="hero-actions">
              <a className="primary-button magnetic" href="#work">
                Explore my world
                <ArrowDown size={19} aria-hidden="true" />
              </a>
              <a className="text-link" href="mailto:ehrarie@gmail.com">
                Start a conversation
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="hero-meta" aria-label="Location and availability">
              <span>
                <MapPin size={17} aria-hidden="true" />
                Brighton, UK · Herat, Afghanistan
              </span>
              <span>
                <Sparkles size={17} aria-hidden="true" />
                Open to meaningful collaborations
              </span>
            </div>
          </div>

          <div className="scene-caption" aria-hidden="true">
            <span>Scroll to travel</span>
            <i />
          </div>
        </section>

        <section className="chapter about-chapter" id="about" aria-labelledby="about-title">
          <div className="chapter-copy align-right">
            <p className="chapter-index">Chapter 01 / The person</p>
            <div className="paper-card profile-card">
              <div className="portrait-wrap">
                <Image
                  src="/assets/ehsan-ehrari.png"
                  alt="Ehsan Ehrari"
                  width={605}
                  height={807}
                  unoptimized
                />
                <span className="portrait-tape" aria-hidden="true" />
              </div>
              <div>
                <span className="hand-note">Engineer by craft, mentor by purpose.</span>
                <h2 id="about-title">Making complicated things feel possible.</h2>
                <p>
                  My career has moved between software engineering, quality
                  engineering, game development, automation, and education. The
                  common thread is simple: I like turning hard problems into
                  systems people can trust and use.
                </p>
                <p>
                  I bring the same mindset to teams and classrooms - clear
                  structure, generous collaboration, thoughtful testing, and the
                  belief that technical excellence should create opportunity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="chapter journey-chapter"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="wide-copy">
            <p className="chapter-index">Chapter 02 / The route so far</p>
            <div className="section-heading">
              <div>
                <span className="hand-note">From code to community</span>
                <h2 id="experience-title">A career built across worlds.</h2>
              </div>
              <p>
                Product engineering, quality, games, automation, and teaching -
                each stop adds another tool to the kit.
              </p>
            </div>

            <ol className="experience-list">
              {experience.map((item) => (
                <li className={`experience-item accent-${item.color}`} key={`${item.company}-${item.period}`}>
                  <span className="timeline-pin" aria-hidden="true" />
                  <div className="experience-period">{item.period}</div>
                  <div className="experience-role">
                    <h3>{item.role}</h3>
                    <p>
                      {item.company} <span>· {item.place}</span>
                    </p>
                  </div>
                  <p className="experience-summary">{item.summary}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="chapter work-chapter" id="work" aria-labelledby="work-title">
          <div className="wide-copy">
            <p className="chapter-index">Chapter 03 / Selected work</p>
            <div className="section-heading">
              <div>
                <span className="hand-note">Things I care about building</span>
                <h2 id="work-title">Work with a reason to exist.</h2>
              </div>
              <p>
                A selection of the systems, communities, and technical problems
                that define my practice.
              </p>
            </div>

            <div className="project-grid">
              {selectedWork.map((project) => {
                const Icon = project.icon;
                return (
                  <article
                    className={`project-card project-${project.accent}`}
                    key={project.number}
                  >
                    <div className="project-top">
                      <span>{project.number}</span>
                      <Icon size={26} strokeWidth={1.7} aria-hidden="true" />
                    </div>
                    <p className="project-tag">{project.tag}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <span className="project-edge" aria-hidden="true" />
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="chapter skills-chapter" id="skills" aria-labelledby="skills-title">
          <div className="chapter-copy">
            <p className="chapter-index">Chapter 04 / The toolkit</p>
            <div className="paper-card toolkit-card">
              <span className="hand-note">A practical, evolving stack</span>
              <h2 id="skills-title">Tools change. Engineering judgment stays.</h2>
              <div className="skill-groups">
                {skillGroups.map((group) => (
                  <div className="skill-group" key={group.title}>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="chapter education-chapter" aria-labelledby="education-title">
          <div className="chapter-copy align-right">
            <p className="chapter-index">Chapter 05 / Foundations</p>
            <div className="paper-card education-card">
              <div className="education-icon" aria-hidden="true">
                <GraduationCap size={38} />
              </div>
              <span className="hand-note">Herat Computer Science</span>
              <h2 id="education-title">Bachelor of Software Engineering</h2>
              <p className="education-year">2013 - 2017</p>
              <p>
                Formal foundations in software engineering, strengthened by a
                career of continuous practice across production platforms,
                testing, security, cloud systems, games, and education.
              </p>
              <div className="language-row">
                <span>English</span>
                <span>Farsi / Dari</span>
              </div>
            </div>
          </div>
        </section>

        <section className="chapter contact-chapter" id="contact" aria-labelledby="contact-title">
          <div className="contact-wrap">
            <p className="chapter-index">Final chapter / Let&apos;s build</p>
            <span className="hand-note">Good work starts with a good conversation.</span>
            <h2 id="contact-title">
              Have a complex idea?
              <br />
              Let&apos;s make it real.
            </h2>
            <p className="contact-lede">
              I&apos;m interested in mission-driven software, accessible systems,
              technical leadership, education, and creative technology.
            </p>

            <div className="contact-actions">
              <a className="primary-button contact-button" href="mailto:ehrarie@gmail.com">
                <Mail size={20} aria-hidden="true" />
                Email me
              </a>
              <a className="secondary-button" href="tel:+447732986655">
                <Phone size={19} aria-hidden="true" />
                Call
              </a>
              <a
                className="secondary-button"
                href="/assets/ehsan-ehrari-cv.pdf"
                download
              >
                <Download size={19} aria-hidden="true" />
                Download CV
              </a>
            </div>

            <div className="contact-details">
              <a href="mailto:ehrarie@gmail.com">ehrarie@gmail.com</a>
              <span>Brighton, United Kingdom</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Ehsan Ehrari</span>
        <span className="footer-note">
          Designed as an interactive engineering world
          <Code2 size={15} aria-hidden="true" />
        </span>
        <a href="#top">
          Back to top
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </footer>
    </>
  );
}
