"use client";

import { CSSProperties, useState } from "react";
import { Link } from "@/components/Link";
import { Icon } from "@iconify/react";

const technologies: {
  icon: string;
  iconColored: string;
  name: string;
}[] = [
  {
    icon: "devicon-plain:typescript",
    iconColored: "devicon:typescript",
    name: "TypeScript",
  },
  {
    icon: "devicon-plain:nextjs",
    iconColored: "devicon:nextjs",
    name: "Next.js",
  },
  {
    icon: "simple-icons:react",
    iconColored: "devicon:react",
    name: "React",
  },
  {
    icon: "simple-icons:tailwindcss",
    iconColored: "devicon:tailwindcss",
    name: "Tailwind CSS",
  },
  {
    icon: "simple-icons:nestjs",
    iconColored: "devicon:nestjs",
    name: "NestJS",
  },
  {
    icon: "devicon-plain:python",
    iconColored: "selfhst:python",
    name: "Python",
  },
  {
    icon: "simple-icons:go",
    iconColored: "simple-icons:go",
    name: "Go",
  },
  {
    icon: "mdi:docker",
    iconColored: "material-icon-theme:docker",
    name: "Docker",
  },
  {
    icon: "devicon-plain:kubernetes",
    iconColored: "devicon:kubernetes",
    name: "Kubernetes",
  },
  {
    icon: "devicon-plain:azure",
    iconColored: "devicon:azure",
    name: "Azure",
  },
  {
    icon: "simple-icons:prisma",
    iconColored: "devicon:prisma",
    name: "Prisma",
  },
  {
    icon: "devicon-plain:redis",
    iconColored: "devicon:redis",
    name: "Redis",
  },
  {
    icon: "devicon-plain:postgresql",
    iconColored: "devicon:postgresql",
    name: "PostgreSQL",
  },
  {
    icon: "simple-icons:expo",
    iconColored: "simple-icons:expo",
    name: "Expo",
  },
];

export function About() {
  const [isTechHovered, setIsTechHovered] = useState<boolean>(false);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <div
      className="w-screen h-full p-24 flex flex-col gap-5 bg-ctp-crust"
      id="about-me"
      data-scroll-offset="-20"
    >
      <h1 className="text-4xl text-ctp-peach">About me</h1>
      <div className="flex flex-row">
        <p className="w-1/2 text-xl opacity-80">
          My name is <span className="text-ctp-peach">Martin Petr</span> and I
          am a young, dedicated and passionate software engineer based in the
          Czech Republic. I have a strong understanding of web, backend and
          infrastructure development, and I am always eager to learn new
          technologies and improve my skills.
          <br />
          <br />
          My primary language is{" "}
          <span className="text-ctp-peach">TypeScript</span>, while I am also
          using <span className="text-ctp-peach">Python</span> and{" "}
          <span className="text-ctp-peach">Go</span>. I have started my journey
          with creating web applications, but I am slowly moving towards
          backend, infrastructure and cyber security.
          <br />
          <br />
          <span className="text-base opacity-70">
            See the colored dots below? Each dot represents exactly one day. The
            more colorful the dot, the more contributions I have made on that
            day. It is a visual representation of my dedication and passion for
            software development. Pretty colorful, right?
          </span>
          <br />
          <br />
          <span className="opacity-70 text-sm text-ctp-text/60">
            (Source:{" "}
            <Link
              href="https://github.com/martinpetrdev"
              className="text-ctp-peach"
              target="_blank"
            >
              My GitHub
            </Link>{" "}
            contributions graph)
          </span>
        </p>
        <div className="w-1/2 flex items-center justify-center orbit-container">
          <div className="relative w-75 h-75 md:w-95 md:h-95 lg:w-110 lg:h-110 flex items-center justify-center">
            <div className="absolute text-center select-none pointer-events-none z-10 max-w-37.5 md:max-w-50">
              <p className="text-lg font-semibold text-ctp-text opacity-95 transition-all duration-300">
                <span
                  className={
                    "text-2xl font-bold text-ctp-peach block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-300 " +
                    (isTechHovered ? "opacity-100" : "opacity-0")
                  }
                >
                  {hoveredTech}
                </span>
                <span
                  className={
                    "text-lg font-semibold text-ctp-text absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-300 " +
                    (isTechHovered ? "opacity-0" : "opacity-100")
                  }
                >
                  Technologies that I use
                </span>
              </p>
            </div>

            <div className="rounded-full w-[calc(var(--orbit-radius)*2)] h-[calc(var(--orbit-radius)*2)] border-2 border-ctp-surface0/60 border-dashed"></div>
            <div className="absolute w-full h-full animate-orbit flex items-center justify-center">
              {technologies.map((tech, i) => {
                const angle = (360 / technologies.length) * i;

                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      transform: `rotate(${angle}deg) translate(var(--orbit-radius))`,
                    }}
                  >
                    <div
                      className="animate-counter-orbit flex items-center justify-center"
                      style={
                        {
                          "--counter-angle": `${-angle}deg`,
                        } as CSSProperties
                      }
                      onMouseEnter={() => {
                        setHoveredTech(tech.name);
                        setIsTechHovered(true);
                      }}
                      onMouseLeave={() => {
                        setIsTechHovered(false);
                      }}
                    >
                      <div className="group">
                        <Icon
                          icon={tech.icon}
                          className="text-4xl md:text-5xl text-ctp-peach group-hover:text-transparent transition-all duration-300 cursor-pointer absolute"
                        />
                        <Icon
                          icon={tech.iconColored}
                          className={
                            "text-4xl md:text-5xl cursor-pointer duration-300 transition-all group-hover:opacity-100 opacity-0"
                          }
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
