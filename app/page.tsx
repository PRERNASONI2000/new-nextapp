import Link from "next/link";

export default function Home() {
  return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    
        <h1 className="text-shadow-black font-bold text-2xl text-center">hello i love nextjs</h1>
       <Link href="/about">About</Link>
       <Link href="/contact">Contact</Link>
       <br />
       <Link href="/blog/post">See Post</Link>
       
    </div>
  );
}
