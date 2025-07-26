import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostCard from "./post-card";

interface Props {
  selectedCategory: string;
}

const sortedPosts = allPosts.sort((a, b) =>
  compareDesc(new Date(a.date), new Date(b.date))
);

export default function PostList({ selectedCategory }: Props) {
  if (selectedCategory === "All") {
    return sortedPosts.map((post) => <PostCard key={post._id} post={post} />);
  }

  return (
    <>
      {sortedPosts
        .filter((post) => post.category === selectedCategory)
        .map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
    </>
  );
}
