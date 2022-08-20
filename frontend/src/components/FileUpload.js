import React, { useState } from 'react'



const FileUpload = () => {

    let [state, setState] = useState([]);


    state = {
        // Initially, no file is selected
        selectedFile: null
    };
    

    // On file select (from the file finder pop up)
    let onFileChange = (event) => {
        console.log('EVENT:', event);
        console.log('EVENT TARGET:', event.target);
        console.log('EVENT TARGET FILES:', event.target.files[0]);
        // Update the state
        state.selectedFile = event.target.files[0];
        // setState({ ...state, selectedFile: event.target.files[0] });

        console.log('STATE 1:', state);
    };


    // console.log('STATE:', state);

    let createUpload = async (formData) => {
        console.log('In createUpload method ****');
        
        // Print form data to console (this works)
        for (let [key, value] of formData.entries()) {
            console.log(`Key 2: ${key} | Value 2: ${value}`);
        }

        // console.log('JSON Form Data >>', JSON.stringify(formData));
        
        fetch(`/tax/api/upload-file/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }, 
            body: formData
            // body: JSON.stringify(formData)
        })
    };
    

    // On file upload (click the upload button)
    let onFileUpload = () => {
        // Create an object of formData
        let formData = new FormData();

        console.log('STATE 2:', state);

        // Update the formData object
        formData.append("uploadFile", state.selectedFile);
        formData.append("uploadFileName", state.selectedFile.name);

        // Print form data to console (this works)
        for (let [key, value] of formData.entries()) {
            console.log(`Key: ${key} | Value: ${value}`);
        }
        // Key: uploadFile | Value: [object File]
        // Key: uploadFileName | Value: test_1099.xlsx

        // Details of the uploaded file
        console.log("SELECTED FILE: ", state.selectedFile);

        // ******************************** TODO ***********************************
        // Request made to the backend api
        // Send formData object
        // This should be changed to the fetch() method but should it link to a Django REST API ????
        // axios.post("api/uploadfile", formData);
        createUpload(formData);
    };


    // File content to be displayed after file upload is complete
    let fileData = () => {
    
        if (state.selectedFile) {
            return (
                <div>
                    <h2>File Details:</h2>       
                    <p>File Name: {state.selectedFile.name}</p>        
                    <p>File Type: {state.selectedFile.type}</p>

                    <p>
                        Last Modified:{" "}
                        {state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } 
        else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };


    return (
        <div>
            <br />
            <h1>
                1099 File Upload
            </h1>

            <div>
                <input type="file" onChange={onFileChange} />
                <button onClick={onFileUpload}>Upload!</button>
            </div>

            {fileData()}
        </div>
    )
}

export default FileUpload