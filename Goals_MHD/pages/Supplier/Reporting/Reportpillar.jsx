import React from "react";
import Report from "./Report";
import Tabs from "antd/es/tabs";
import { Layout } from "antd";
import Nav from "../../../components/layout/navbar/Nav";
import Sidebar from "../../../components/layout/sidebar/Sidebar";

const {Content}=Layout

function Reportpillar() {
  const items = [
    {
        key: '1',
        label: 'Sustainability Reporting',
        children: 'Sustainability Reporting',
      },
      {
        key: '2',
        label: 'CDP Details',
        children: 'CDP Details',
      },
      {
        key: '3',
        label: 'Reporting',
        children: <Report />,
      },
  ]

  return (
    <div>
    <Layout>
      <Nav />
      <Layout>
        <Sidebar />
        <Content className="bg-[#EAF5FF] p-[24]">
        <Tabs
          items={items}
          tabBarStyle={{
            backgroundColor: '#014D4E',
            height: '45px',
            marginBottom: 0,
          }}
          className="custom-tabs ml-[43px] bg-white  rounded-t-[20px] rounded-b-[20px] w-[976px] h-auto shadow-md"
        />
        </Content>
      </Layout>
    </Layout>
    </div>
  );
}
export default Reportpillar;
