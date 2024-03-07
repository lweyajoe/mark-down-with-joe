import React, { useState, useEffect } from 'react';
import marked from 'marked'; // Importing the marked library for Markdown rendering
import './styles.css'; // Importing the CSS file for styling

function App() {
  // Default Markdown content
  const defaultMarkdown = `# Heading 1
## Sub Heading 1
[Link](https://www.example.com)
\`inline code\`
\`\`\`
code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/150)
**Bolded text**
`;

  // State to manage Markdown content
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  // Effect to update the preview when Markdown content changes
  useEffect(() => {
    document.getElementById('preview').innerHTML = marked(markdown);
  }, [markdown]);

  // Function to handle textarea changes
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="container">
      {/* Textarea for Markdown input */}
      <textarea id="editor" value={markdown} onChange={handleChange}></textarea>
      {/* Preview area for rendered HTML */}
      <div id="preview"></div>
    </div>
  );
}

export default App;
