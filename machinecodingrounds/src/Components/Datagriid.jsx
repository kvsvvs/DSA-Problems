import React, { useState, useEffect } from "react";

const DataGrid = () => {
  // Sample data for the grid
  const initialData = [
    { name: "John", age: 25, job: "Developer" },
    { name: "Jane", age: 28, job: "Designer" },
    { name: "Doe", age: 22, job: "Tester" },
  ];

  // State management for data, search term, and sort key
  const [data, setData] = useState(initialData);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("");

  // Handle changes in the search input
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Effect for filtering data based on search input
  useEffect(() => {
    const filteredData = initialData.filter((item) =>
      Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(search.toLowerCase())
      )
    );
    setData(filteredData);
  }, [search]);

  // Handle sorting when a column header is clicked
  const handleSort = (key) => {
    setSortKey(key);
    const sortedData = [...data].sort((a, b) => {
      return a[key].toString().localeCompare(b[key].toString());
    });
    setData(sortedData);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <table>
        <thead>
          <tr>
            {initialData.length > 0 &&
              Object.keys(initialData[0]).map((header, index) => (
                <th key={index} onClick={() => handleSort(header)}>
                  {header}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.keys(initialData[0]).map((field, subIndex) => (
                <td key={subIndex}>{item[field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGrid;
