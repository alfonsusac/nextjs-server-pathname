export async function getBlogs() {
  const res = await fetch("https://api.vercel.app/blog")
  const data = await res.json()
  return data as ({
    "id": number,
    "title": string,
    "content": string,
    "author": string,
    "date": string,
    "category": string
  })[]
}


export async function getBlog(id: number) {
  const res = await fetch("https://api.vercel.app/blog/" + id)
  const data = await res.json()
  return data as {
    "id": number,
    "title": string,
    "content": string,
    "author": string,
    "date": string,
    "category": string
  }
}