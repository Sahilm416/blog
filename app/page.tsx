import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 justify-center w-full h-screen items-center">
      <h1 className="text-7xl font-sans font-bold">Welcome to test app</h1>
      <div>
        <Link className="px-2 py-1 border rounded-sm hover:underline" href={"/Protected"}>To Protected Page</Link>
      </div>
    </div>
  );
}
