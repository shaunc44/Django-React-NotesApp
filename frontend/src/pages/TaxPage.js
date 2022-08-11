import React, { useState, useEffect } from 'react';

import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';

import 'handsontable/dist/handsontable.full.css';

/*
TODO
1. Create header => 1099 Upload and Validation Page
2. Create 'upload 1099 file' button
2a. Add upload file logic
3. Display uploaded file with handsontable grid if errors exist
4. Display 'validate' button
5. Submit uploaded data for validation
6. Link data to validation logic in James' code
7. Link validation logic by linking via Git submodules ... ???
*/


// // register Handsontable's modules
// registerAllModules();

// const hotData = [
// 	["", "Tesla", "Volvo", "Toyota", "Honda"],
// 	["2020", 10, 11, 12, 13],
// 	["2021", 20, 11, 14, 13],
// 	["2022", 30, 15, 12, 13]
// ];


const TaxPage = () => {

    // let [notes, setNotes] = useState([]);

    // useEffect(() => {
    //     getTaxPage();
    // }, [])

    // let getTaxPage = async () => {
    // 	fetch('/tax');
    //     // let response = await fetch('/api/notes'); // wait for data to come back; this relative api is possible due to proxy url set in package.json
    //     // let data = await response.json(); // if we don't use await we return a promise
    //     // setNotes(data);
    // }


	// register Handsontable's modules
	registerAllModules();

	let hotData = [
		["", "Tesla", "Volvo", "Toyota", "Honda"],
		["2020", 10, 11, 12, 13],
		["2021", 20, 11, 14, 13],
		["2022", 30, 15, 12, 13]
	];

	return (
		<div className="tax-page">
			<p>1099 Data Validation Page</p>
			<div id="hot-app">
				<HotTable data={hotData} colHeaders={true} rowHeaders={true} width="600" height="300"/>
			</div>
		</div>
	)
}

export default TaxPage