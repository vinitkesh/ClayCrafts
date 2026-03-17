import Link from "next/link";
import { Button } from "@/components/atoms/button";
import { Typography } from "@/components/atoms/typography";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-4xl flex-col items-center justify-center px-4 text-center md:px-8">
      <Typography variant="eyebrow">404</Typography>
      <Typography as="h1" variant="title" className="mt-3">
        This piece is no longer on the shelf
      </Typography>
      <Typography className="mt-3 max-w-md">
        The page you are looking for was moved, renamed, or never existed.
      </Typography>
      <Link href="/shop" className="mt-8">
        <Button>Back to Shop</Button>
      </Link>
    </section>
  );
}
