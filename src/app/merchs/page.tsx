import Link from "next/link";

export default function MerchPage() {
  return (
    <div className="flex flex-col items-start gap-1">
      <h1 className="text-3xl font-semibold tracking-tight">Merch Page</h1>
      <div className="flex gap-2 flex-wrap">
      {
          [
            "Totebag", "Mug", "Notebook", "Sticker", "Tshirt", "Hoodie", "Jacket", "Pants", "Shoes", "Hat"
          ].map((item, i) => {
          return (
            <Link key={i} href={"/merchs/"+item} className="w-32 aspect-square flex items-end font-semibold">
              {item}
            </Link>
          )
        })
        }
      </div>
    </div>
  );
}
