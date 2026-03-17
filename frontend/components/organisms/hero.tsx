import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/atoms/button";
import { Icon } from "@/components/atoms/icon";
import { Typography } from "@/components/atoms/typography";
import { MotionReveal } from "@/components/motion/motion-reveal";

export function Hero() {
  return (
    <section className="hero-sheen relative overflow-hidden border-b border-[var(--clay-border)]">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 md:grid-cols-12 md:px-8 md:py-14">
        <MotionReveal className="md:col-span-5 md:flex md:items-center">
          <div>
            <Typography variant="eyebrow">Handcrafted Home Ceramics</Typography>
            <Typography as="h1" variant="display" className="mt-3">
              Handmade Soul for Modern Homes
            </Typography>
            <Typography className="mt-4 max-w-md">
              Curated pottery that balances artistry and everyday function. Small-batch pieces
              for calm, intentional spaces.
            </Typography>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop">
                <Button>Shop Collection</Button>
              </Link>
              <Link href="/shop">
                <Button variant="link" className="gap-2 px-2">
                  Explore
                  <Icon name="arrow-right" />
                </Button>
              </Link>
            </div>
          </div>
        </MotionReveal>

        <MotionReveal className="md:col-span-7 md:flex md:justify-end" delay={0.1}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[24rem] overflow-hidden rounded-[2rem] border border-[var(--clay-border)] bg-[var(--clay-soft)] md:mx-0 md:max-w-[26rem] lg:max-w-[28rem]">
            <Image
              src="/images/hero/BREAD1.png"
              alt="Handmade toast-themed ceramic tray set"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 38vw, 28rem"
            />
            <div className="absolute right-4 bottom-4 rounded-full bg-white/85 px-3 py-1 font-sans text-[0.7rem] tracking-[0.14em] uppercase text-[var(--clay-muted)]">
              Wheel-thrown collection
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
