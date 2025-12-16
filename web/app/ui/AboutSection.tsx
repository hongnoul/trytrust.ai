import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
            About us
          </div>
          <div className="relative aspect-[1/1] w-full overflow-hidden rounded-xl bg-black">
            <Image
              src="/governance.svg"
              alt="Governance"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-8">
          <div className="mb-10">
            <Image
              src="/inline.svg"
              alt="TrustAI"
              width={256}
              height={256}
              className="mb-6"
            />
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-5xl">
              Building a trust layer for AI systems that must operate correctly
              in the real world
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600">
              We design governance-first infrastructure that allows teams to
              define constraints, verify behavior, and deploy AI with confidence
              across critical workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              "Customers define mission and payload requirements.",
              "Systems are validated against policy and risk constraints.",
              "Outputs are auditable, reproducible, and deployable.",
            ].map((text) => (
              <div
                key={text}
                className="rounded-xl border border-neutral-200 bg-white p-6"
              >
                <div className="mb-3 h-8 w-8 rounded-md bg-neutral-100" />
                <p className="text-sm leading-relaxed text-neutral-700">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
