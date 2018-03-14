import React from 'react'
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

export default class Editor extends React.Component {
  state = {
    htmlContent: ''
  }
  render() {
    const editorProps = {
      height: 500,
      initialContent: this.state.content,
      onHTMLChange: this.handleHTMLChange
    }
    return (
      <div className="editor" style={{backgroundColor: '#f6f6f6'}}>
        <BraftEditor {...editorProps} />
      </div>
    )
  }
  handleHTMLChange = (htmlContent) => {
    this.setState({ htmlContent })
  }
}