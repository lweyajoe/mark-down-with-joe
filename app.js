import React, { useState, useEffect } from 'react';
import marked from 'marked';
import './styles.css';

function App() {
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

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked(markdown);
  }, [markdown]);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="container">
      <textarea id="editor" value={markdown} onChange={handleChange}></textarea>
      <div id="preview"></div>
    </div>
  );
}

export default App;
