import React from "react";
import { schedule as content } from "../contents.json";

const ScheduleTable = ({ day }) => (
  <table className="table" style={{ width: "100%" }}>
    <thead>
      <tr>
        <th>시간</th>
        <th>일정</th>
        <th>상세</th>
      </tr>
    </thead>
    <tbody>
      {content[`day${day}`].map(col => {
        return (
          <tr>
            {col.map(row => (
              <td>{row}</td>
            ))}
          </tr>
        );
      })}
    </tbody>
  </table>
);

export default ScheduleTable;
