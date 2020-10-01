import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactFlexyTable from "react-flexy-table";
import "react-flexy-table/dist/index.css";
import data from "./jsonData.js";
import deleteIcon from "./delete-button-svgrepo-com.svg";
import editIcon from "./edit-svgrepo-com.svg";

const App = () => {
  const additionalCols = [
    {
      header: "Actions",
      td: (data) => {
        return (
          <div>
            <img
              src={deleteIcon}
              width="30"
              height="20"
              onClick={() => alert("this is delete for id " + data.id)}
            />{" "}
            // delete icon
            <img
              src={editIcon}
              width="30"
              height="20"
              onClick={() => alert("this is edit for id " + data.id)}
            />{" "}
            // edit icon
          </div>
        );
      },
    },
  ];
  return (
    <ReactFlexyTable
      data={data}
      sortable
      filterable
      additionalCols={additionalCols}
    />
  );
};

export default App;
