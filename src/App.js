import logo from './plane.png';
import './App.css';
//import { Component } from 'react';
import React, { useState } from 'react';
import BpkCalendar, {
  CALENDAR_SELECTION_TYPE,
} from '@skyscanner/backpack-web/bpk-component-calendar';
import BpkInput, {
  INPUT_TYPES,
} from '@skyscanner/backpack-web/bpk-component-input';
import format from 'date-fns/format';
import { withButtonAlignment, withRtlSupport } from '@skyscanner/backpack-web/bpk-component-icon';
import ArrowIcon from '@skyscanner/backpack-web/bpk-component-icon/sm/long-arrow-right';
import { BpkButtonV2 } from '@skyscanner/backpack-web/bpk-component-button';

const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');
const daysOfWeek = [
  {
    name: 'Sunday',
    nameAbbr: 'Sun',
    index: 0,
    isWeekend: true,
  },
  // ...
];
const AlignedArrowIcon = withButtonAlignment(withRtlSupport(ArrowIcon));

function App() {
  const [selectionConfiguration, setSelectionConfiguration] = useState({
    type: CALENDAR_SELECTION_TYPE.single,
    date: null,
  });
	const handleDateSelect = (date) => {
		setSelectionConfiguration({
		  type: CALENDAR_SELECTION_TYPE.single,
		  date: date,
    });
  };
  return (
    <div className="App">
      <header className="App-header">
		<div className="header-content">
			<img src={logo} className="App-logo" alt="logo" />
			<div className="header-text">
				 <p>Tay_Airline</p>
			</div>
        </div>
	
      </header>
	  <div className="App-content">
		<div className="App-text">
			<p>Flight Schedule</p>
		</div>
		<div className="calendar-container">
			<BpkInput
				id="dateInput"
				type={INPUT_TYPES.text}
				name="date"
				value={(selectionConfiguration.date || '').toString()}
				placeholder="Departure date"
			/>
			<BpkCalendar
				id="calendar"
				onDateSelect={handleDateSelect}
				formatMonth={formatMonth}
				formatDateFull={formatDateFull}
				daysOfWeek={daysOfWeek}
				weekStartsOn={1}
				changeMonthLabel="Change month"
				nextMonthLabel="Next month"
				previousMonthLabel="Previous month"
				selectionConfiguration={selectionConfiguration}
			/>
			
        </div>
		<div className="button-container">
			<BpkButtonV2 fullWidth className="button1">
			  <span className="buttontext">Continue </span>
			   <AlignedArrowIcon className="button-icon" />
			</BpkButtonV2>
		</div>
	  </div>
    </div>
  );
}




export default App;
