import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import { h } from "hastscript";
import { visit } from "unist-util-visit";
import { Element } from "hast";
import { Copy } from "lucide-react";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    category: { type: "string", required: true },
    description: { type: "string", required: true },
  },

  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/post/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      [
        rehypePrettyCode as any,
        {
          theme: {
            light: "github-light",
            dark: "github-dark",
          },
          showLineNumbers: true,
        },
      ],

      () => (tree) => {
        visit(tree, "element", (node) => {
          if (node.tagName === "a") {
            node.properties.target = "_blank";
          }
          if (node.tagName === "pre") {
            const codeNode = node.children?.find(
              (child: Element) => child.tagName === "code"
            );
            if (codeNode) {
              const button = h("button", { className: "copy-button" }, [
                h(
                  "svg",
                  {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "#fff",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  },
                  [
                    h("path", {
                      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
                    }),
                    h("rect", {
                      width: "8",
                      height: "4",
                      x: "8",
                      y: "2",
                      rx: "1",
                      ry: "1",
                    }),
                  ]
                ),
              ]);
              node.children.push(button);
            }
          }
        });
      },
    ],
  },
});
