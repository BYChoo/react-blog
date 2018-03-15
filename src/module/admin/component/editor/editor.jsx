import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

export default class Editor extends React.Component {
  handleHTMLChange = (htmlContent) => {
    htmlContent = 'asdasdasd';
    this.props.handleContent(htmlContent)
  }

  render() {
    const editorProps = {
      onHTMLChange: this.handleHTMLChange
    }
    return (
      <div className="editor" style={{backgroundColor: '#f6f6f6'}}>
        <BraftEditor {...editorProps} />
      </div>
    )
  }
}