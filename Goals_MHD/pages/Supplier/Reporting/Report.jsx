import { Tabs } from 'antd'
import React from 'react'
import './Report.css'

function Report() {

    // const data={
    //     "id": "pillar_report_id",
    //     "pillar_id": "packaging_pillar",
    //     "pillarName": "Packaging",
    //     "year": "2024",
    //     "questions": [
    //         {
    //             "question_id": "qstn_id_1",
    //             "question": "Have you done any redesigning of your packaging to reduce the amount of material needed?",
    //             "text": "We have reduced <field_id_1> MT of <field_id_2> material from our total Packaging material, of which <field_id_3>% was recycled content.",
    //             "inputFields": [
    //                 {
    //                     "label": "Material Reduced",
    //                     "inputType": "number",
    //                     "isMandatory": true,
    //                     "minValue": 0,
    //                     "maxValue": "",
    //                     "inputId": "field_id_1"
    //                 },
    //                 {
    //                     "label": "Material Type",
    //                     "inputType": "dropdown",
    //                     "options": [
    //                         "PET",
    //                         "Glass",
    //                         "Paper"
    //                     ],
    //                     "isMandatory": true,
    //                     "inputId": "field_id_2"
    //                 },
    //                 {
    //                     "label": "Recycled Content",
    //                     "inputType": "number",
    //                     "isMandatory": true,
    //                     "minValue": 0,
    //                     "maxValue": 100,
    //                     "inputId": "field_id_3"
    //                 }
    //             ],
    //             "validations": [
    //                 {
    //                     "type": "NUMBER_RANGE",
    //                     "inputId": "field_id_1",
    //                     "minValue": 0
    //                 },
    //                 {
    //                     "type": "DROPDOWN_OPTION",
    //                     "inputId": "field_id_2",
    //                     "options": ["PET", "Glass", "Paper"]
    //                 },
    //                 {
    //                     "type": "NUMBER_RANGE",
    //                     "inputId": "field_id_3",
    //                     "minValue": 0,
    //                     "maxValue": 100
    //                 }
    //             ]
    //         },
    //         {
    //             "question_id": "qstn_id_2",
    //             "question": "Have you substituted packaging materials with more sustainable alternatives?",
    //             "text": "",
    //             "inputFields": [],
    //             "validations": []
    //         },
    //         {
    //             "question_id": "qstn_id_3",
    //             "question": "Do you have any other energy saving initiatives to be reported?",
    //             "text": "",
    //             "inputFields": [],
    //             "validations": []
    //         },
    //         {
    //             "question_id": "qstn_id_4",
    //             "question": "Please share details of Packaging materials used:",
    //             "tables": [
    //                 {
    //                     "table_id": "tableId001",
    //                     "labels": [
    //                         "Packaging Use",
    //                         "Format",
    //                         "Material",
    //                         "Total Weight",
    //                         "Recyclable Weight",
    //                         "Details of usage",
    //                         "Details of optimization plans",
    //                         "Tier of material",
    //                         "Total Emissions",
    //                         "Emission Savings"
    //                     ],
    //                     "rowInputs": [
    //                         {
    //                             "row_id": "rowInput001",
    //                             "label": "Packaging Use",
    //                             "inputType": "dropdown",
    //                             "options": [
    //                                 "Food",
    //                                 "Electronics",
    //                                 "Apparels"
    //                             ],
    //                             "isMandatory": true
    //                         },
    //                         {
    //                             "row_id": "rowInput002",
    //                             "label": "Format",
    //                             "inputType": "dropdown",
    //                             "options": [
    //                                 "Box",
    //                                 "Bottle",
    //                                 "Tray",
    //                                 "Hangtags"
    //                             ],
    //                             "isMandatory": true
    //                         },
    //                         {
    //                             "row_id": "rowInput003",
    //                             "label": "Material",
    //                             "inputType": "dropdown",
    //                             "options": [
    //                                 "Paper",
    //                                 "Glass",
    //                                 "Aluminium",
    //                                 "PVC"
    //                             ],
    //                             "isMandatory": true
    //                         },
    //                         {
    //                             "row_id": "rowInput004",
    //                             "label": "Total Weight",
    //                             "inputType": "number",
    //                             "isMandatory": true,
    //                             "minValue": 0
    //                         },
    //                         {
    //                             "row_id": "rowInput005",
    //                             "label": "Recyclable Weight",
    //                             "inputType": "number",
    //                             "isMandatory": true,
    //                             "minValue": 0
    //                         },
    //                         {
    //                             "row_id": "rowInput006",
    //                             "label": "Details of usage",
    //                             "inputType": "text",
    //                             "isMandatory": true
    //                         },
    //                         {
    //                             "row_id": "rowInput007",
    //                             "label": "Details of optimization plans",
    //                             "inputType": "text",
    //                             "isMandatory": false
    //                         },
    //                         {
    //                             "row_id": "rowInput008",
    //                             "label": "Tier of material",
    //                             "inputType": "dropdown",
    //                             "options": [
    //                                 "Good",
    //                                 "Better",
    //                                 "NotRecommended"
    //                             ],
    //                             "isMandatory": true
    //                         },
    //                         {
    //                             "row_id": "rowInput009",
    //                             "label": "Total Emissions",
    //                             "inputType": "number",
    //                             "isMandatory": true,
    //                             "minValue": 0
    //                         },
    //                         {
    //                             "row_id": "rowInput010",
    //                             "label": "Emission Savings",
    //                             "inputType": "number",
    //                             "isMandatory": true,
    //                             "minValue": 0
    //                         }
    //                     ]
    //                 }
    //             ],
    //             "validations": [
    //                 {
    //                     "type": "DROPDOWN_OPTION",
    //                     "row_id": "rowInput001",
    //                     "options": ["Food", "Electronics", "Apparels"]
    //                 },
    //                 {
    //                     "type": "DROPDOWN_OPTION",
    //                     "row_id": "rowInput002",
    //                     "options": ["Box", "Bottle", "Tray", "Hangtags"]
    //                 },
    //                 {
    //                     "type": "DROPDOWN_OPTION",
    //                     "row_id": "rowInput003",
    //                     "options": ["Paper", "Glass", "Aluminium", "PVC"]
    //                 },
    //                 {
    //                     "type": "NUMBER_RANGE",
    //                     "row_id": "rowInput004",
    //                     "minValue": 0
    //                 },
    //                 {
    //                     "type": "NUMBER_RANGE",
    //                     "row_id": "rowInput005",
    //                     "minValue": 0
    //                 },
    //                 {
    //                     "type": "TEXT_REQUIRED",
    //                     "row_id": "rowInput006"
    //                 },
    //                 {
    //                     "type": "TEXT_OPTIONAL",
    //                     "row_id": "rowInput007"
    //                 },
    //                 {
    //                     "type": "DROPDOWN_OPTION",
    //                     "row_id": "rowInput008",
    //                     "options": ["Good", "Better", "NotRecommended"]
    //                 },
    //                 {
    //                     "type": "NUMBER_RANGE",
    //                     "row_id": "rowInput009",
    //                     "minValue": 0
    //                 },
    //                 {
    //                     "type": "NUMBER_RANGE",
    //                     "row_id": "rowInput010",
    //                     "minValue": 0
    //                 }
    //             ]
    //         }
    //     ]
    // }

    const items = [
        {
            key: '1',
            label: 'Energy',
            children: 'Sustainability Reporting',
          },
          {
            key: '2',
            label: 'Packaging',
            children: 'Packaging',
          },
          {
            key: '3',
            label: 'Waste',
            children: "Waste",
          },
      ]

  return (
    <div>
       <Tabs
          items={items}
          tabBarStyle={{
            backgroundColor: 'white',
            height: '45px',
            marginBottom: 0,
            boxShadow:0,
          }}
          className="customizing-tabs bg-white  rounded-t-[20px] rounded-b-[20px] w-[976px] h-auto shadow-md"
        />
    </div>
  )
}

export default Report
