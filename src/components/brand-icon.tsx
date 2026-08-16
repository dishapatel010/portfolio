import { cn } from "@/lib/utils";

export function BrandIcon({ slug, className }: { slug: string; className?: string }) {
  // We use the v13 jsDelivr CDN of simple-icons
  const src = `https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${slug}.svg`;
  
  return (
    <img
      src={src}
      alt={slug}
      className={cn("size-4 object-contain dark:invert", className)}
    />
  );
}
