import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import styles from "../markdownStyles.module.css";
import { useMDXComponent } from "next-contentlayer/hooks";

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="">
      <div className="mb-16 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-time">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>

      <main className={styles.markdown}>
        <MDXContent />
      </main>
    </article>
  );
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}
