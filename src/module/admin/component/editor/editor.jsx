import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

export default class Editor extends React.Component {
  handleHTMLChange = (htmlContent) => {
    this.props.handleContent(htmlContent)
  }

  render() {
    const editorProps = {
      contentFormat: 'html',
      onHTMLChange: this.handleHTMLChange,
      initialContent: '<p>init html</p>',
      contentId: this.props.id
    }
    return (
      <div className="editor" style={{backgroundColor: '#f6f6f6'}}>
        <BraftEditor {...editorProps} />
      </div>
    )
  }
}