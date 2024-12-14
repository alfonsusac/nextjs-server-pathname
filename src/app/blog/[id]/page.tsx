import { getBlog, getBlogs } from "../data";

export async function generateStaticParams() {
  const paths: {
    id: string
  }[] = []

  const blogs = await getBlogs()

  blogs.forEach(blog => {
    paths.push({ id: blog.id.toString() })
  })

  return paths
}

export default async function MerchItemPage(props: {
  params: Promise<{ id: string }>
}) {
  const params = await props.params;

  const article = await getBlog(Number(params.id));
  if (!article) {
    return <div>Article not found</div>;
  }
  return (
    <div className="flex flex-col items-start">
      <div className="text-xs">{article.date}</div>
      <h1 className="text-3xl font-semibold tracking-tight leading-none">{article.title}</h1>
      <div>by {article.author}</div>
      <div>{article.content}</div>
    </div>
  );
}
