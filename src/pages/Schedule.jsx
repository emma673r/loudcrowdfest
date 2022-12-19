import React from "react";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import ScheduleList from "../components/ScheduleList";

function Schedule() {
  const [stagesSchedule, setStagesSchedule] = useState([]);
  useEffect(() => {
    async function getStagesSchedule() {
      const res = await fetch("https://footrypleaseworkanddeletelateron.fly.dev/schedule");
      const theStagesSchedule = await res.json();
      setStagesSchedule(theStagesSchedule);
    }
    getStagesSchedule();
  }, []);
  return (
    <>
      <Layout />
      <div className="scheduleComp">
        <h2>SCHEDULE</h2>
        <ScheduleList stagesSchedule={stagesSchedule} />
      </div>
    </>
  );
}

export default Schedule;
