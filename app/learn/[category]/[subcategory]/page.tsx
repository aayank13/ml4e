import { contentData, ContentItem } from "@/data/content";

export default async function LearnPage({ params }: { params: { category: string; subcategory: string } }) {
  // Wait for params to be available
  const { category, subcategory } = await Promise.resolve(params); // Ensures params are handled asynchronously
  
  // Safely access content based on params
  const content: ContentItem | undefined = contentData[category]?.items?.[subcategory];

  if (!content) {
    return <div>Content not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{content.title}</h1>
      <p>{content.content}</p>
    </div>
  );
}
