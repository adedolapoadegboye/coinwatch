import React from "react";

const Tables = (props) => {
  const { tableType, userData, dynamicTextClass, dynamicThemeClass } = props;
  console.log(tableType, userData);
  const tabulateEntries = (entries) => {
    return (
      <div
        className={`overflow-x-auto ${dynamicTextClass} ${dynamicThemeClass}`}
      >
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr className="">
              {Object.keys(entries[0]).map((key, index) => (
                <th key={index} className="px-4 py-2 capitalize border-2">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          {/* <tbody>
            {entries.map((entry, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                {Object.values(entry).map((value, index) => (
                  <td key={index} className="border px-4 py-2">
                    {value || "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    );
  };

  const render = () => {
    if (tableType === "incomes") {
      return tabulateEntries(userData.incomes);
    } else if (tableType === "donations") {
      return tabulateEntries(userData.donations);
    } else if (tableType === "expenses") {
      return tabulateEntries(userData.expenses);
    } else if (tableType === "investments") {
      return tabulateEntries(userData.investments);
    } else if (tableType === "subscriptions") {
      return tabulateEntries(userData.subscriptions);
    } else {
      return <div>No data available for table type: {tableType}</div>;
    }
  };

  return render();
};

export default Tables;
