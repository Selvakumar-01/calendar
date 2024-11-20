"use client";
import React from 'react';
import './App.css';
import { Day, Inject, Month, ScheduleComponent, ViewDirective, ViewsDirective, Week } from '@syncfusion/ej2-react-schedule';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense(
  "ORg4AjUWIQA/Gnt2UVhhQlVFfV5dXGpWfFN0QXNfdV9zflFHcC0sT3RfQFljSH5Vd0ZgUHIccH1dTg=="
)

const data = [
  {
    Id: 1,
    Subject: "React Developer",
    StartTime: new Date(2024, 10, 18, 9, 0),
    EndTime: new Date(2024, 10, 18, 9, 30),
    IsAllDay: false,
    Description: "Interviewer - Geetha"
  },
  {
    Id: 2,
    Subject: "React Developer",
    StartTime: new Date(2024, 10, 19, 12, 0),
    EndTime: new Date(2024, 10, 19, 12, 30),
    IsAllDay: false,
    Description: "Interviewer - Geetha"

  },
  {
    Id: 3,
    Subject: "React Developer",
    StartTime: new Date(2024, 10, 20, 11, 0),
    EndTime: new Date(2024, 10, 20, 11, 30),
    IsAllDay: false,
    Description: "Interviewer - Geetha"
  },
  {
    Id: 4,
    Subject: "React Developer",
    StartTime: new Date(2024, 10, 21, 12, 0),
    EndTime: new Date(2024, 10, 21, 12, 30),
    IsAllDay: false,
    Description: "Interviewer - Geetha"
  },
  {
    Id: 5,
    Subject: "React Developer",
    StartTime: new Date(2024, 10, 21, 10, 0),
    EndTime: new Date(2024, 10, 21, 10, 30),
    IsAllDay: false,
    Description: "Interviewer - Geetha"
  },
  {
    Id: 6,
    Subject: "React Developer",
    StartTime: new Date(2024, 10, 22, 9, 0),
    EndTime: new Date(2024, 10, 22, 9, 30),
    IsAllDay: false,
    Description: "Interviewer - Geetha"
  },
]

export default function App() {
  return (
    <main style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', marginTop: 100 }}>
      <ScheduleComponent
        width={800}
        height={500}
        eventSettings={{
          dataSource: data,
        }}
        selectedDate={new Date(2024, 1, 11)}
        currentView='Month'
        popupOpen={(args) => {
          if (args.type === 'EventContainer') {
            args.element.innerHTML = `
              <div>
                <h3>${args.data.Subject}</h3>
                <p>${args.data.Description}</p>
              </div>
            `;
          }
        }}

      >
        <ViewsDirective>
          <ViewDirective option="Day" />
          <ViewDirective option="Week" />
          <ViewDirective option="Month" />
        </ViewsDirective>

        <Inject services={[Day, Week, Month]} />

      </ScheduleComponent>
    </main>
  );
}