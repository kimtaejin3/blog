import { Post } from "contentlayer/generated";
import Link from "next/link";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={post.url}>
      <article className="p-4 rounded-lg border hover:border-primary transition-colors">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <div className="text-sm text-muted-foreground mt-2">
          <span>{new Date(post.date).toLocaleDateString("ko-KR")}</span>
          <span className="mx-2">•</span>
          <span>{post.category}</span>
        </div>
        <p className="mt-2 text-muted-foreground">{post.description}</p>
      </article>
    </Link>
  );
}
