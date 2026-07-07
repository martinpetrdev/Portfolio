import { Link } from "@/components/Link";

export function About() {
  return (
    <div
      className="w-screen h-full p-24 flex flex-col gap-5 bg-ctp-crust"
      id="about-me"
      data-scroll-offset="-20"
    >
      <h1 className="text-4xl text-ctp-peach">About me</h1>
      <p className="w-1/2 text-xl opacity-80">
        My name is <span className="text-ctp-peach">Martin Petr</span> and I am
        a young, dedicated and passionate software engineer based in the Czech
        Republic. I have a strong understanding of web, backend and
        infrastructure development, and I am always eager to learn new
        technologies and improve my skills.
        <br />
        <br />
        My primary language is{" "}
        <span className="text-ctp-peach">TypeScript</span>, while I am also
        using <span className="text-ctp-peach">Python</span> and{" "}
        <span className="text-ctp-peach">Go</span>. I have started my journey
        with creating web applications, but I am slowly moving towards backend,
        infrastructure and cyber security.
        <br />
        <br />
        <span className="text-base opacity-70">
          See the colored dots below? Each dot represents exactly one day. The
          more colorful the dot, the more contributions I have made on that day.
          It is a visual representation of my dedication and passion for
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
    </div>
  );
}
