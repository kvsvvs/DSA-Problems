import React, { useState, useEffect } from "react";

const NestedCheckboxes = () => {
  const [checkboxes, setCheckboxes] = useState([
    { parentChecked: false, childrenChecked: [false, false, false] },
    { parentChecked: false, childrenChecked: [false, false, false, false] },
    { parentChecked: false, childrenChecked: [false, false] },
  ]);

  const handleParentChange = (parentIndex) => {
    const newCheckboxes = [...checkboxes];
    const newCheckedStatus = !newCheckboxes[parentIndex].parentChecked;
    newCheckboxes[parentIndex].parentChecked = newCheckedStatus;
    newCheckboxes[parentIndex].childrenChecked = newCheckboxes[
      parentIndex
    ].childrenChecked.map(() => newCheckedStatus);
    setCheckboxes(newCheckboxes);
  };

  const handleChildChange = (parentIndex, childIndex) => {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[parentIndex].childrenChecked[childIndex] =
      !newCheckboxes[parentIndex].childrenChecked[childIndex];

    const allChecked =
      newCheckboxes[parentIndex].childrenChecked.every(Boolean);
    newCheckboxes[parentIndex].parentChecked = allChecked;
    setCheckboxes(newCheckboxes);
  };

  useEffect(() => {
    checkboxes.forEach((group, parentIndex) => {
      const someChecked = group.childrenChecked.some(Boolean);
      if (!someChecked && group.parentChecked) {
        const newCheckboxes = [...checkboxes];
        newCheckboxes[parentIndex].parentChecked = false;
        setCheckboxes(newCheckboxes);
      }
    });
  }, [checkboxes]);

  return (
    <div>
      {checkboxes.map((group, parentIndex) => (
        <div key={parentIndex}>
          <label>
            <input
              type="checkbox"
              checked={group.parentChecked}
              onChange={() => handleParentChange(parentIndex)}
            />
            Parent Checkbox {parentIndex + 1}
          </label>
          <div style={{ marginLeft: "20px" }}>
            {group.childrenChecked.map((checked, childIndex) => (
              <label key={childIndex}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => handleChildChange(parentIndex, childIndex)}
                />
                Child Checkbox {childIndex + 1} of Parent {parentIndex + 1}
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NestedCheckboxes;
