import Link from "next/link";
import { getBlogs } from "./data";
import { Suspense } from "react";

export default function BlogPage() {
  console.log("Hello?")
  return (
    <div className="flex flex-col items-start gap-1">
      <h1 className="text-3xl font-semibold tracking-tight">Blogs</h1>
      <div className="flex gap-2 flex-wrap">
        <Suspense fallback={"Loading..."}>
          <BlogList />
        </Suspense>
      </div>
    </div>
  );
}

async function BlogList() {
  const list = await getBlogs()
  return (
    <>
      {
        list.map((item) => {
          return (
            <Link key={item.id} href={"/blog/" + item.id} className="w-64 aspect-video flex flex-col p-3 justify-end">
              <div className="text-xs">
                {item.date}
              </div>
              <div className="font-semibold">
                {item.title}
              </div>
              <div>
                by {item.author}
              </div>
            </Link>
          )
        })
      }
    </>
  )
}