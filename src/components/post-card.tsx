import { Post } from "contentlayer/generated";
import Link from "next/link";
import { format } from "date-fns";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <Link href={post.url}>
      <article className="py-3 px-2 rounded hover:bg-accent transition-colors duration-200">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-medium flex-1">{post.title}</h2>
          <div className="flex items-center text-sm text-muted-foreground whitespace-nowrap ml-4">
            <span>{format(new Date(post.date), "yy.MM.dd")}</span>
            <span className="mx-2">•</span>
            <span>{post.category}</span>
          </div>
        </div>
        {post.description && (
          <p className="text-sm text-muted-foreground mt-1">{post.description}</p>
        )}
      </article>
    </Link>
  );
}
