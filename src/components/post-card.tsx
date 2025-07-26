import { Post } from "contentlayer/generated";
import Link from "next/link";
import { format } from "date-fns";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  return (
    <Link href={post.url}>
      <article className="p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <div className="text-sm text-muted-foreground mt-2">
          <span>{format(new Date(post.date), "yy년 M월 d일")}</span>
          <span className="mx-2">•</span>
          <span>{post.category}</span>
        </div>
        <p className="mt-2 text-muted-foreground">{post.description}</p>
      </article>
    </Link>
  );
}
