import { Input, Select } from "antd";

export const TablesGenerator = ({ labels, rowInputs, note, tableId }) => {
  return (
    <>
      <div className="w-auto font-bold pb-[20px]">{note}</div>
      <table
        key={tableId}
        className=" bg-[#EAF5FF]  rounded-[20px] border-collapse border-none"
      >
        <thead>
          <tr>
            {labels.map((label, index) => (
              <th
                key={`${tableId}-label-${index}`}
                className="border-none p-2  text-[#014D4E] text-center"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {rowInputs.map((inputField, index) => {
              const { inputId, inputType, options, unit } = inputField;

              if (inputType === "number") {
                return (
                  <td
                    key={`${tableId}-${inputId}-${index}`}
                    className="border-none p-2"
                  >
                    <Input
                      type="number"
                      className="w-full text-center placeholder-right"
                      placeholder={unit ? `${unit}` : ""}
                    />
                  </td>
                );
              } else if (inputType === "text") {
                return (
                  <td
                    key={`${tableId}-${inputId}-${index}`}
                    className="border-none p-2"
                  >
                    <Input
                      type="text"
                      className="w-full text-center "
                      placeholder={unit ? `${unit}` : ""}
                    />
                  </td>
                );
              } else if (inputType === "dropdown") {
                return (
                  <td
                    key={`${tableId}-${inputId}-${index}`}
                    className="border-none p-2"
                  >
                    <Select className="w-full text-center  border-none">
                      {options.map((option) => (
                        <Select.Option key={option} value={option}>
                          {option}
                        </Select.Option>
                      ))}
                    </Select>
                  </td>
                );
              }
            })}
          </tr>
        </tbody>
      </table>
    </>
  );
};
