// app/contact/page.tsx
export default function Page() {
  return (
    <main className="min-h-[100svh] bg-white">
      <section className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid items-start gap-14 md:grid-cols-2 md:gap-16">
          <div className="max-w-xl">
            <h1 className="text-[clamp(3.2rem,7vw,6rem)] font-semibold tracking-[-0.04em] leading-[0.95] text-black">
              Get in touch.
            </h1>

            <div className="mt-10 max-w-sm text-base leading-relaxed text-black/70 md:mt-12">
              <span className="font-medium text-black">
                Have a payload or mission in mind?
              </span>{" "}
              Reach out to us, and we’ll discuss the best way to move forward and
              get back to you as soon as possible.
            </div>
          </div>

          <div className="relative">
            <form className="mx-auto w-full max-w-md">
              <div className="space-y-10">
                <label className="block">
                  <span className="sr-only">Your name</span>
                  <input
                    required
                    name="name"
                    placeholder="Your name *"
                    className="w-full border-0 border-b border-black/15 bg-transparent py-3 text-[15px] text-black placeholder:text-black/40 focus:outline-none focus:ring-0"
                  />
                </label>

                <label className="block">
                  <span className="sr-only">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email *"
                    className="w-full border-0 border-b border-black/15 bg-transparent py-3 text-[15px] text-black placeholder:text-black/40 focus:outline-none focus:ring-0"
                  />
                </label>

                <label className="block">
                  <span className="sr-only">Your message</span>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Your message"
                    className="w-full resize-none border-0 border-b border-black/15 bg-transparent py-3 text-[15px] text-black placeholder:text-black/40 focus:outline-none focus:ring-0"
                  />
                </label>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 rounded-full bg-black px-5 py-2.5 text-xs font-semibold tracking-wide text-white"
                  >
                    Submit
                    <span className="inline-block h-2 w-2 rounded-full bg-white/60" />
                  </button>

                  <p className="mt-4 text-[11px] leading-relaxed text-black/50">
                    By submitting, you agree to our{" "}
                    <a href="#" className="underline underline-offset-2">
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline underline-offset-2">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
