import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-1">
      <h1 className="text-3xl font-semibold tracking-tight">Home Page</h1>
      <Link href="/about" className="bg-black text-white hover:bg-black/80">About {"->"}</Link>
      <Link href="/blog" className="bg-black text-white hover:bg-black/80">Blogs (Vercel) {"->"}</Link>
      <Link href="/merchs" className="bg-black text-white hover:bg-black/80">Merchs {"->"}</Link>
    </div>
  );
}
