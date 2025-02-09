import { CopyButton } from "./copy-button";

interface PreProps extends React.HTMLProps<HTMLPreElement> {
  raw?: string;
  ["data-language"]?: string;
}

export function PreCustom(props: PreProps) {
  const {
    children,
    raw = "",
    ["data-language"]: dataLanguage = "Shell",
  } = props;
  console.log("raw:", raw);
  return (
    <pre
      className="rounded-xl bg-slate-950  relative overflow-hidden p-[0.5rem] shadow-smooth"
      {...props}
    >
      <p className="absolute bottom-0 right-0 capitalize text-xs font-medium bg-slate-700 text-white p-1 rounded-tl-lg">
        {dataLanguage}
      </p>
      <CopyButton text={raw} className="absolute right-1 top-1 shadow-smooth" />

      {children}
    </pre>
  );
}
