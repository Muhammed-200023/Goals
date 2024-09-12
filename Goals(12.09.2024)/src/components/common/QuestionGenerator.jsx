export const QuestionGenerator = (text, inputFields, questionId) => {
    const textSplit = text.split(/(<[^>]+>)/g);
    const textParts = textSplit.map((part, index) => {
      const matchedField = inputFields.find(
        (field) => `<${field.inputId}>` === part
      );
      if (matchedField) {
        const { inputId, inputType, options } = matchedField;
        if (inputType === 'number') {
          return (
            <input
            type="number"
              key={`${questionId}-${inputId}-${index}`}
              className="font-semibold  text-center mx-1 w-[75px] text-[#014D4E] border-b-[1px] border-dashed border-[#014D4E] mb-[2px] "
            />
          );
        }
        else if(inputType === "text")
        {
          <input
          type="text"
            key={`${questionId}-${inputId}-${index}`}
            className="font-semibold text-center mx-1 w-[75px]  text-[#014D4E] border-b-[1px] border-dashed border-[#014D4E] mb-[2px] "
          />
        }
        else if (inputType === 'dropdown') {
          return (
            <select
              key={`${questionId}-${inputId}-${index}`}
              className="text-center w-[150px] h-[28px]   text-[#014D4E] border-b-[1px] border-dashed border-[#014D4E] mb-[2px] "
            >
              <option value="" disabled selected hidden>
               </option>
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          );
        }
      } else {
        return part;
      }
    });
    return <span>{textParts}</span>;
  };
