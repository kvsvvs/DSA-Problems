import React, { useState } from "react";

const FileUploader = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    // Convert the FileList to an array and store it in state
    setFiles(Array.from(event.target.files));
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleFileChange}
        multiple // Allows multiple file selection
        style={{ margin: "20px" }}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size (Bytes)</th>
            <th>Type</th>
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
              <td>{file.size}</td>
              <td>{file.type || "N/A"}</td>
              <td>{new Date(file.lastModified).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileUploader;
