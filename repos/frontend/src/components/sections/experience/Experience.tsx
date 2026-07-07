import { Link } from "@/components/Link";

export function Experience() {
  return (
    <div
      className="w-screen p-24 bg-ctp-mantle flex flex-col gap-5"
      id="experience"
      data-scroll-offset="-20"
    >
      <h1 className="text-4xl text-ctp-peach">Experience</h1>
      <h2 className="text-2xl">Work experience</h2>
      <div className="flex flex-col gap-8 mb-8">
        <div className="flex flex-row gap-24 items-center">
          <h3 className="text-3xl font-bold text-ctp-peach/40 text-nowrap whitespace-nowrap min-w-50">
            May 2025 -<br />
            Present
          </h3>
          <div>
            <h4 className="text-3xl text-ctp-peach/70">
              Oscillator Labs s.r.o.
            </h4>
            <p className="text-lg">
              Software Engineer - Full-stack development of AI powered apps,
              Microsoft Azure
            </p>
            <p className="opacity-70">
              I have created the{" "}
              <Link
                href="https://oscillator.cz"
                target="_blank"
                className="text-ctp-peach"
              >
                company website
              </Link>{" "}
              and I am working on internal tooling for our products and on AI
              powered web applications for our clients.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-2xl">Competitions</h2>
      <div className="flex flex-col gap-8 mb-8">
        <div className="flex flex-row gap-24 items-center">
          <h3 className="text-3xl font-bold text-ctp-peach/40 text-nowrap whitespace-nowrap min-w-50">
            2025/2026
          </h3>
          <div>
            <h4 className="text-3xl text-ctp-peach/70">Tour de App</h4>
            <p className="text-lg">
              Web app development for fictional client - 4th place in the
              competition (out of 144 teams)
            </p>
            <p className="opacity-70">
              My team won the 4th place in the final round of the competition.
              My responsibility was almost all of the development and leadership
              of the team during the whole competition.
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-24 items-center">
          <h3 className="text-3xl font-bold text-ctp-peach/40 text-nowrap whitespace-nowrap min-w-50">
            2024/2025
          </h3>
          <div>
            <h4 className="text-3xl text-ctp-peach/70">Tour de App</h4>
            <p className="text-lg">
              Web app development for fictional client - 5th place in the
              competition (out of ~150 teams)
            </p>
            <p className="opacity-70">
              My team won the 5th place in the final round of the competition.
              My responsibility was almost all of the development and leadership
              of the team during the final round of the competition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
