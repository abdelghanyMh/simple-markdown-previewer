import React from 'react'
import marked from 'marked'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      markdownText: placeholder,
      markedText: {
        __html: " # Markdown Preview! <p> Hi! I&#39; m your first Markdown file.If you   want to learn about StackEdit, you can read me.If you want to play with Markdown, you can edit me. </p>      <ul><li><h2 id=\"headings\"><a href=\"https://www.markdownguide.org/basic-syntax/#headings\">Headings</a></h2> <h1 id=\"heading-level-1\">Heading level 1</h1>    < h2 id =\"heading-level-2\">Heading level 2</h2></li > <li><h2 id=\"links\"><a href=\"https://www.markdownguide.org/basic-syntax/#links\">Links</a></h2 > <ul> <li> My favorite search engine is <a href=\"https://duckduckgo.com\">Duck Duck Go</a>.</li> </ul > </li > <li><h2 id=\"inline-code\"><a href=\"https://www.markdownguide.org/basic-syntax/#code\">inline Code</a></h2 > <ul> <li> At the command prompt, type <code>nano</code>.</li> </ul> </li > <li><h3 id=\"code-blocks\"><a href=\"https://www.markdownguide.org/basic-syntax/#code-blocks\">Code Blocks</a></h3 > <pre><code>  &lt;html&gt; &lt;head&gt; &lt;/head&gt; &lt;/html&gt; </code></pre> </li > <li><h4 id=\"lists\"><a href=\"https://www.markdownguide.org/basic-syntax/#lists\">Lists</a></h4 > <ol> <li>First item</li> <li> Second item</li> <li>Third item<ul> <li>Indented item</li> <li>Indented item</li> </ul> </li> <li>Fourth item</li> </ol> </li > <li><h4 id=\"blockquotes\"><a href=\"https://www.markdownguide.org/basic-syntax/#blockquotes-1\">Blockquotes</a></h4 > <pre><code> &gt; Dorothy followed her through many of the beautiful rooms in her castle. </code></pre> </li > <li><h4 id=\"images\"><a href=\"https://www.markdownguide.org/basic-syntax/#images\">Images</a></h4 > <p> <img src=\"https://d33wubrfki0l68.cloudfront.net/e7ed9fe4bafe46e275c807d63591f85f9ab246ba/e2d28/assets/images/tux.png\" alt=\"Tux, the Linux mascot\"></p></li > <li><h3 id=\"bold\"><a href=\"https://www.markdownguide.org/basic-syntax/#bold\">Bold</a></h3 > <ul> <li>   I just love <strong>bold text</strong></li> </ul> </li > </ul >"

      }
    }
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange(event) {

    let rawMakeup = marked(event.target.value)
    console.log(rawMakeup);
    this.setState({
      markdownText: event.target.value,
      markedText: { __html: rawMakeup }

    })

  }
  render() {
    return (
      <section id="wrapper">
        <div className="editor-container">
          <textarea id="editor" name="editor" onChange={this.handleTextChange} value={this.state.markdownText}>         </textarea>
        </div>
        <div id="preview" dangerouslySetInnerHTML={this.state.markedText}></div>
      </section>

    );
  }
}
const placeholder = `# Markdown Preview!

Hi! I'm your first Markdown file. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me.

- ## [Headings](https://www.markdownguide.org/basic-syntax/#headings)
   # Heading level 1
   ## Heading level 2
- ## [Links](https://www.markdownguide.org/basic-syntax/#links)
	 -  My favorite search engine is [Duck Duck Go](https://duckduckgo.com).
- ## [inline Code](https://www.markdownguide.org/basic-syntax/#code)
	 -  At the command prompt, type \`nano\`.

- ### [Code Blocks](https://www.markdownguide.org/basic-syntax/#code-blocks)
\`\`\`
    <html>
      <head>
      </head>
    </html>
    \`\`\`
- #### [Lists](https://www.markdownguide.org/basic-syntax/#lists)
	 1. First item
	 2.  Second item
	3. Third item
	    - Indented item
	    - Indented item
	4. Fourth item

- #### [Blockquotes](https://www.markdownguide.org/basic-syntax/#blockquotes-1)
	   > Dorothy followed her through many of the beautiful rooms in her castle.


- #### [Images](https://www.markdownguide.org/basic-syntax/#images)
   ![Tux, the Linux mascot](https://d33wubrfki0l68.cloudfront.net/e7ed9fe4bafe46e275c807d63591f85f9ab246ba/e2d28/assets/images/tux.png)

- ### [Bold](https://www.markdownguide.org/basic-syntax/#bold)
	-	I just love **bold text**


`;

export default App;
