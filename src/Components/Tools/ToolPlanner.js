import React from "react";
import events from "./events";
import {Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const Planner = () => (
  <div style={{ height: 700 }}>
    <Calendar
      localizer={localizer}
      events={events}
      views={["month", 'day', 'agenda']}
      defaultDate={new Date(2019, 8, 1)}
    />
  </div>
);

export default Planner;

