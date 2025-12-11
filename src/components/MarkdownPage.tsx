import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
// https://medium.com/@dimterion/react-markdown-examples-372fa1b21c0c
function MarkdownPage() {
  const { filename } = useParams();
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch(`./text/${filename}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, [filename]);

  return <ReactMarkdown>{markdownContent}</ReactMarkdown>;
}

export default MarkdownPage;
