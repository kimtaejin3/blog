import { CopyButton } from "./copy-button";

interface Props extends React.HTMLProps<HTMLPreElement> {
  raw?: string;
  ["data-language"]?: string;
}

export function PreCustom(props: Props) {
  const {
    children,
    raw = "",
    ["data-language"]: dataLanguage = "Shell",
  } = props;
  return (
    <pre
      className="rounded-xl bg-slate-950  relative overflow-hidden p-[0.5rem] shadow-smooth"
      {...props}
    >
      <CopyButton text={raw} />

      {children}
    </pre>
  );
}
