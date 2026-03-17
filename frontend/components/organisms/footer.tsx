import Link from "next/link";
import { Typography } from "@/components/atoms/typography";

export function Footer() {
  return (
    <footer className="bg-[#0d1c2d] text-[#d7e1ea]">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-10 md:grid-cols-4 md:px-8">
        <div>
          <Typography as="h3" variant="eyebrow" className="text-[#8ea0b0]">
            ClayCraft
          </Typography>
          <Typography className="mt-3 text-[#d7e1ea]/85">
            Handcrafted ceramic forms for thoughtful living. Designed in India and finished in
            small studio runs.
          </Typography>
        </div>
        <div>
          <Typography as="h3" variant="eyebrow" className="text-[#8ea0b0]">
            Explore
          </Typography>
          <ul className="mt-3 space-y-2 font-sans text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-white">
                Shop
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Typography as="h3" variant="eyebrow" className="text-[#8ea0b0]">
            Company
          </Typography>
          <ul className="mt-3 space-y-2 font-sans text-sm">
            <li>Studio Journal</li>
            <li>Sustainability</li>
            <li>Care Guide</li>
          </ul>
        </div>
        <div>
          <Typography as="h3" variant="eyebrow" className="text-[#8ea0b0]">
            Follow
          </Typography>
          <p className="mt-3 font-sans text-sm">Instagram • Pinterest</p>
        </div>
      </div>
      <div className="border-t border-white/12 py-4">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-2 px-4 font-sans text-xs tracking-[0.08em] text-[#8ea0b0] uppercase md:px-8">
          <p>© 2026 ClayCraft Studio</p>
          <p>Privacy • Terms</p>
        </div>
      </div>
    </footer>
  );
}
