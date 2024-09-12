import React, { useState } from "react";
import Addbtn from "./Button/Addbtn";
import Deletebtn from "./Button/Deletebtn";
import { Button, Input, Switch } from "antd";
import { QuestionGenerator } from "./QuestionGenerator";
import { TablesGenerator } from "./TablesGenerator";

const GenerateTabContent = ({ Data }) => {
  const EmissionSaved = null;
  const QuestionContent = (Data) => {
    const [switchState, setSwitchState] = useState({});

    const handleSwitchChange = (questionId, value) => {
      setSwitchState((prevState) => ({
        ...prevState,
        [questionId]: value,
      }));
    };

    return Data?.questions?.map((question, index) => (
      <div
        key={index}
        className="w-auto  mb-3 mt-3 flex p-4"
      >
        {question?.question ? (
          <div className="question-container   flex-1 ml-5">
            <div className="question-box flex items-center">
              <p className="question-text  font-semibold">
                {index + 1}. {question.question}
              </p>
              <div className="ml-3 pr-5">
                <Switch
                  checkedChildren="Yes"
                  unCheckedChildren="No"
                  onChange={(value) =>
                    handleSwitchChange(question.question_id, value)
                  }
                  defaultChecked={false}
                />
              </div>
            </div>

            {switchState[question.question_id] && (
              <div>
              <div className="mt-[5px]  ml-[15px] border-[1px] p-[10px] border-dashed border-[#014D4E] rounded-[10px] flex justify-between items-start mr-[75px]">
                <div>
                  {QuestionGenerator(
                    question.text,
                    question.inputFields,
                    question.question_id
                  )}
                </div>
                
                <div className="ml-[10px] flex flex-col gap-1 justify-center">
                  <Addbtn />
                  <Deletebtn />
                </div>
              </div>
              {EmissionSaved && (
                    <h1 className="mt-4 ml-[15px] font-semibold">
                      EmissionSaved:   
                      <Input className="w-[75px] ml-1" value="" />
                    </h1>
                  )}
              <div className="mt-2 ml-[15px]"><Button className="bg-[#014D4E] text-white " >Calculate</Button>
              </div>
              </div>
            )}

          </div>
        ) : (
          <div className=" flex-1  ml-5 mr-15 flex justify-between items-start" >
            <div>
              {QuestionGenerator(
                question.text,
                question.inputFields,
                question.question_id
              )}
            </div>
            <div className="ml-[10px] flex flex-col gap-1 justify-center">
              <Addbtn />
              <Deletebtn />
            </div>
          </div>
        )}
      </div>
    ));
  };

  const TableContent = (Data) => {
    return Data?.tables?.map((table, tableIndex) => (
      <div key={tableIndex} className="mt-3 p-[30px]">
        {TablesGenerator({
          labels: table.labels,
          rowInputs: table.rowInputs,
          tableId: table.table_id,
          note: table.note,
        })}
      </div>
    ));
  };

  return (
    <>
      {QuestionContent(Data)}
      {TableContent(Data)}
    </>
  );
};

export default GenerateTabContent;
