/* eslint-disable */
import React, {useState} from "react";

export const Select = () => {
    const [selectedValue, setSelectedValue] = useState('');

    const options = [
        {value: 'bitbucket', label: 'watch our repos', url: 'https://bitbucket.org/qualitythinkers/workspace/overview'},
        {value: 'blikk > tasks', label: 'check my tasks', url: 'https://app.blikk.com/Task/Mine'},
        {value: 'confluence', label: 'do a first WP setup', url: 'https://qualitythink.atlassian.net/wiki/spaces/~453084211/pages/2395013125/3.1.+WP+Starter+-+First+setup'},
        {value: 'retro', label: 'join the retro', url: 'https://easyretro.io/publicboard/51eaRmhD5Wc9UA3PGvxhjQfu0sB2/9c6d01c1-b714-4ec5-abb3-ea7a94b6a582'},
        {value: 'sync-DB', label: 'sync my WP database', url: 'https://qualitythink.atlassian.net/wiki/spaces/IH/pages/2192113665/H+lla+databasen+uppdaterad+DEV+lokala'},
        {value: 'blikk > time report', label: 'time report', url: 'https://app.blikk.com/TimeReport/ReportForWeek'},
        {value: 'jump to spot', label: 'jump to spot', url: 'https://spotvirtual.com/@quality-think-digital-office-6eef07eed19302fb/@qt-office-9rU/'},
    ]

    console.log(options);
  
    return (
      <div className="main-content">
        <p className="title">The tool for us who wants to have everything at one place. </p>
        <p className="title">Pick from the list below which task you would like to perform</p>
        <select className="task-select" value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
          <option value="">I want to..</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        
        <div>
        {options.map((option) => (
            selectedValue === option.value && (
                <div key={option.value}>
                <a className='option-url' href={option.url} target="_blank">Link to {option.value}</a>
                </div>
            )
            ))}
        </div>
      </div>
    );
}