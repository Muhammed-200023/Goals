// export const QuestionGenerator = (text, inputFields, questionId) => {
//     const textSplit = text.split(/(<[^>]+>)/g);
//     const textParts = textSplit.map((part, index) => {
//       const matchedField = inputFields.find(
//         (field) => `<${field.inputId}>` === part
//       );
//       if (matchedField) {
//         const { inputId, inputType, options } = matchedField;
//         if (inputType === 'number') {
//           return (
//             <input
//             type="number"
//               key={`${questionId}-${inputId}-${index}`}
//               className="font-semibold  text-center mx-1 w-[75px] text-[#014D4E] border-b-[1px] border-dashed border-[#014D4E] mb-[2px] "
//             />
//           );
//         }
//         else if(inputType === "text")
//         {
//           <input
//           type="text"
//             key={`${questionId}-${inputId}-${index}`}
//             className="font-semibold text-center mx-1 w-[75px]  text-[#014D4E] border-b-[1px] border-dashed border-[#014D4E] mb-[2px] "
//           />
//         }
//         else if (inputType === 'dropdown') {
//           return (
//             <select
//               key={`${questionId}-${inputId}-${index}`}
//               className="text-center w-[150px] h-[28px]   text-[#014D4E] border-b-[1px] border-dashed border-[#014D4E] mb-[2px] "
//             >
//               <option value="" disabled selected hidden>
//                </option>
//               {options.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           );
//         }
//       } else {
//         return part;
//       }
//     });
//     return <span>{textParts}</span>;
//   };

// import React from "react";

// export const QuestionGenerator = (text, inputFields, questionId, handleInputChange, pillarName) => {
//   const textSplit = text.split(/(<[^>]+>)/g);
//   const textParts = textSplit.map((part, index) => {
//     const matchedField = inputFields.find(
//       (field) => `<${field.inputId}>` === part
//     );

//     if (matchedField) {
//       const { inputId, inputType, options } = matchedField;
//       const key = `${questionId}-${inputId}-${index}`;
//       if (inputType === 'number') {
//         return (
//           <input
//             type="number"
//             key={key}
//             className="font-semibold text-center mx-1 w-[75px] text-[#014D4E] border-b-[1px] border-dashed border-[#014D4E] mb-[2px]"
//             onChange={(e) => handleInputChange(pillarName, questionId, inputId, e.target.value)}
//           />
//         );
//       } else if (inputType === "text") {
//         return (
//           <input
//             type="text"
//             key={key}
//             className="font-semibold text-center mx-1 w-[75px] text-[#014D4E] border-b-[1px] border-dashed border-[#014D4E] mb-[2px]"
//             onChange={(e) => handleInputChange(pillarName, questionId, inputId, e.target.value)}
//           />
//         );
//       } else if (inputType === 'dropdown') {
//         return (
//           <select
//             key={key}
//             className="text-center w-[150px] h-[28px] text-[#014D4E] border-b-[1px] border-dashed border-[#014D4E] mb-[2px]"
//             onChange={(e) => handleInputChange(pillarName, questionId, inputId, e.target.value)}
//           >
//             <option disabled selected hidden></option>
//             {options.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         );
//       }
//     } else {
//       return part;
//     }
//   });

//   return <span>{textParts}</span>;
// };


export const QuestionGenerator = (text, inputFields, questionId, handleInputChange, pillarName, formData) => {
  const textParts = text.split(/(<[^>]+>)/g).map((part, index) => {
    const matchedField = inputFields.find((field) => `<${field.inputId}>` === part);
    if (matchedField) {
      const { inputId, inputType, options } = matchedField;
      const key = `${questionId}-${inputId}-${index}`;
      // const value = formData?.[pillarName]?.[questionId]?.[inputId] || '';  // Access stored value

      if (inputType === 'number') {
        return (
          <input
            type="number"
            key={key}
            // value={value}  // Set the value from formData
            className="font-semibold text-center mx-1 w-[75px] text-[#014D4E] border-b-[1px] border-dashed border-[#014D4E] mb-[2px]"
            onChange={(e) => handleInputChange(pillarName, questionId, inputId, e.target.value)}
          />
        );
      } else if (inputType === "text") {
        return (
          <input
            type="text"
            key={key}
            // value={value}  // Set the value from formData
            className="font-semibold text-center mx-1 w-[75px] text-[#014D4E] border-b-[1px] border-dashed border-[#014D4E] mb-[2px]"
            onChange={(e) => handleInputChange(pillarName, questionId, inputId, e.target.value)}
          />
        );
      } else if (inputType === 'dropdown') {
        return (
          <select
            key={key}
            // value={value}  // Set the value from formData
            className="text-center w-[150px] h-[28px] text-[#014D4E] border-b-[1px] border-dashed border-[#014D4E] mb-[2px]"
            onChange={(e) => handleInputChange(pillarName, questionId, inputId, e.target.value)}
          >
            <option disabled selected hidden></option>
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

