import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { DarkModeToggleButton } from "@/components/darkmode-toggle-button";

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={post.url}>{post.title}</Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-time">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0 line-clamp-1"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-black">PearlDev 🧋</h1>
        <DarkModeToggleButton />
      </header>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
}
