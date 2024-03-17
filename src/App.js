import React, { useState, useEffect } from 'react';
import * as marked from 'marked'; // Importing all named exports from 'marked' library
import './App.css';

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
    // Using the parse method from 'marked' library to convert Markdown to HTML
    document.getElementById('preview').innerHTML = marked.parse(markdown);
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

