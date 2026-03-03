interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function User({ params }: PageProps) {
  const { id } = await params;

  return <div>{id}</div>;
}