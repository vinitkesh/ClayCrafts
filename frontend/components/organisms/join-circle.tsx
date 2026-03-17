import { Button } from "@/components/atoms/button";
import { Typography } from "@/components/atoms/typography";
import { MotionReveal } from "@/components/motion/motion-reveal";

export function JoinCircle() {
  return (
    <section className="hero-sheen border-b border-[var(--clay-border)] py-14">
      <MotionReveal className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 text-center md:px-8">
        <Typography as="h2" variant="title">
          Join the Circle
        </Typography>
        <Typography className="mt-3 max-w-2xl">
          Monthly notes from our studio, first access to limited drops, and stories from artisans
          shaping each collection.
        </Typography>
        <form className="mt-7 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="Email address"
            className="h-11 flex-1 rounded-full border border-[var(--clay-border)] bg-white px-4 text-sm text-[var(--clay-ink)] placeholder:text-[var(--clay-muted)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--clay-ink)]"
            aria-label="Email address"
          />
          <Button type="submit" className="h-11 px-8">
            Join In
          </Button>
        </form>
      </MotionReveal>
    </section>
  );
}
