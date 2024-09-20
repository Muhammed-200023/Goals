import { Spin, Tabs} from 'antd'
import React from 'react'
import { useEffect } from 'react'
import NextButton from '../../../components/common/Button/Nextbutton'
import Resetbtn from '../../../components/common/Button/Resetbtn'
import SaveButton from '../../../components/common/Button/Savebutton'
import GenerateTabContent from '../../../components/common/GenerateTabContent'
import { setreportingData,setactiveTabKey,setLoading,setisSaved } from '../../../redux/slices/reportingSlice'
import { ReportJSON } from './ReportData'
import { useDispatch, useSelector } from 'react-redux'


  const Report = ()=> {

    const dispatch = useDispatch();
    const { activeTabKey, reportingData, loading, isSaved } = useSelector((state) => state.reporting);

    useEffect(() => {
      const fetchPageData = async () => {
        dispatch(setLoading(true));
        try {
          dispatch(setreportingData(ReportJSON));
        } catch (error) {
          console.error('Error fetching page content:', error);
        } finally {
          dispatch(setLoading(false));
        }
      };
      fetchPageData();
    }, [dispatch]);

    const handleReportSave = () => {
      dispatch(setisSaved(true));
    };

    const handleNextClick = () => {
      const currentIndex = reportingData.findIndex(
        (item) => item.pillarName === activeTabKey
      );
      const nextIndex = (currentIndex + 1) % reportingData.length;
      dispatch(setactiveTabKey(reportingData[nextIndex].pillarName));
      dispatch(setisSaved(false));
    };

  const items = reportingData.map((reportData) => ({
    key: reportData.pillarName,
    label: (
      <span className={`pb-1 text-[#014D4E] font-semibold ${activeTabKey === reportData.pillarName? 'border-[#014D4E] border-b-[3px] ' : '' }`}>
        {reportData.pillarName}
      </span>
    ),
    children: <GenerateTabContent Data={reportData} />,
  }));

  return (
    <div>
       {loading ? (
         <Spin tip="Loading" size="large"/>
      ) : (
        <Tabs
          activeKey={activeTabKey}
          items={items}
          tabBarStyle={{
            backgroundColor: 'white',
            color:"#014D4E",
            height: '45px',
            boxShadow:"none",
            margin:0,
            pointerEvents: "none",
          }}

          className="customizing-tabs  bg-white w-auto h-auto "
          tabBarGutter={0}
        />)}
      <br />
      <div className="w-auto flex justify-end mr-[50px] gap-2.5">
        <Resetbtn/>
        <SaveButton onClick={handleReportSave}/>
        <NextButton isSaved={isSaved} onClick={handleNextClick}/>
      </div>
      <br />
    </div>
  )
}

export default Report