import React, { useState } from "react";

const FileUploader = () => {
  const [files, setFiles] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const handleFileChange = (event) => {
    setFiles(Array.from(event.target.files));
  };

  const sortFiles = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sortedFiles = [...files].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setFiles(sortedFiles);
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="file"
        onChange={handleFileChange}
        multiple
        style={{ margin: "20px" }}
      />
      {files.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  cursor: "pointer",
                }}
                onClick={() => sortFiles("name")}
              >
                Name{" "}
                {sortConfig.key === "name"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  cursor: "pointer",
                }}
                onClick={() => sortFiles("size")}
              >
                Size (Bytes){" "}
                {sortConfig.key === "size"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Type</th>
              <th
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  cursor: "pointer",
                }}
                onClick={() => sortFiles("lastModified")}
              >
                Last Modified{" "}
                {sortConfig.key === "lastModified"
                  ? sortConfig.direction === "ascending"
                    ? "▲"
                    : "▼"
                  : ""}
              </th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {file.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {file.size}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {file.type || "N/A"}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {new Date(file.lastModified).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FileUploader;
