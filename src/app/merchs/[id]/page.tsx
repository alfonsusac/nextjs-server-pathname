export default async function MerchItemPage(props: {
  params: Promise<{id: string}>
}) {
  const params = await props.params;

  return (
    <div className="flex flex-col items-start gap-1">
      <h1 className="text-3xl font-semibold tracking-tight">{params.id}</h1>
    </div>
  );
}
