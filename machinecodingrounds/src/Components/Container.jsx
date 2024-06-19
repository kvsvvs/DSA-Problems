import React from "react";
import StarRating from "./StarRating";
import ModalButton from "./ModalWrapper";
import Typeahead from "./Typeahead";
import Clock from "./AnalogClock";
import Form from "./Form";
import FileUploader from "./FileManager";

const Container = ({ activeTab }) => {
  const getComponent = (tab) => {
    switch (tab) {
      case "StarRating":
        return <StarRating />;
      case "Modal":
        return <ModalButton />;
      case "AutoComplete":
        return <Typeahead />;
      case "Clock":
        return <Clock />;
      case "Form":
        return <Form />;
      case "FileManager":
        return <FileUploader />;
      default:
        return <div>Select a tab</div>;
    }
  };

  return <div style={{ width: "100%" }}>{getComponent(activeTab)}</div>;
};

export default Container;
