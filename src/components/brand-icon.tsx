import { cn } from "@/lib/utils";

// Map of Simple Icons slugs to Devicon slugs
const DEVICON_MAP: Record<string, string> = {
  javascript: "javascript",
  typescript: "typescript",
  c: "c",
  flask: "flask",
  microsoftazure: "azure",
  oracle: "oracle",
  cloudflare: "cloudflare",
  mongodb: "mongodb",
  git: "git",
  pandas: "pandas",
  chartdotjs: "chartjs",
  githubactions: "githubactions",
  angular: "angular",
  springboot: "spring",
};

export function BrandIcon({ slug, className }: { slug: string; className?: string }) {
  const deviconSlug = DEVICON_MAP[slug];
  
  // If it exists in Devicon, we load the colored original SVG
  // Otherwise, we fallback to the monochrome Simple Icons SVG (with dark:invert)
  const src = deviconSlug
    ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${deviconSlug}/${deviconSlug}-original.svg`
    : `https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/${slug}.svg`;
  
  return (
    <img
      src={src}
      alt={slug}
      className={cn(
        "size-4 object-contain",
        !deviconSlug && "dark:invert", // Only invert monochrome fallbacks
        className
      )}
    />
  );
}
