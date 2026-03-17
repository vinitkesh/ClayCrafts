import Image from "next/image";
import { Typography } from "@/components/atoms/typography";
import { MotionReveal } from "@/components/motion/motion-reveal";
import type { ArtisanStory } from "@/types";

type ArtisanFeatureProps = {
  artisan: ArtisanStory;
};

export function ArtisanFeature({ artisan }: ArtisanFeatureProps) {
  return (
    <section id="artisan" className="hero-sheen border-y border-[var(--clay-border)] py-12 md:py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 md:grid-cols-12 md:px-8">
        <MotionReveal className="md:col-span-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] border border-[var(--clay-border)]">
            <Image
              src={artisan.image}
              alt={`${artisan.name} at work`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 56vw"
            />
          </div>
        </MotionReveal>
        <MotionReveal className="md:col-span-5" delay={0.1}>
          <article className="h-full rounded-[1.6rem] border border-[var(--clay-border)] bg-[var(--clay-ink)] p-6 text-[var(--clay-bg)] md:p-8">
            <Typography variant="eyebrow" className="text-white/70">
              Artisan Spotlight
            </Typography>
            <Typography as="h2" variant="title" className="mt-3 text-[var(--clay-bg)]">
              {artisan.name}
            </Typography>
            <Typography className="mt-1 text-white/80">
              {artisan.title} • {artisan.location}
            </Typography>
            <blockquote className="mt-6 border-l border-white/40 pl-4 font-display text-2xl leading-tight text-[var(--clay-bg)]">
              “{artisan.quote}”
            </blockquote>
            <Typography className="mt-6 text-white/80">{artisan.body}</Typography>
          </article>
        </MotionReveal>
      </div>
    </section>
  );
}
