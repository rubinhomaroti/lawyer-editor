import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const LawyerEditor = () => {
  const [content, setContent] = useState('');

  // Basic Quill modules configuration
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      ['clean'],
      ['link']
    ]
  };

  // Basic Quill formats configuration
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'indent',
    'link'
  ];

  return (
    <div className="lawyer-editor-container">
      <h1>Lawyer Editor</h1>
      <ReactQuill 
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        style={{ height: '400px' }}
      />
    </div>
  );
};

export default LawyerEditor;