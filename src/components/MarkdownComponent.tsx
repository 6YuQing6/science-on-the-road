import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
// https://medium.com/@dimterion/react-markdown-examples-372fa1b21c0c
function MarkdownComponent() {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch("/text/recipe.md")
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  return (
    <section>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </section>
  );
}

export default MarkdownComponent;
