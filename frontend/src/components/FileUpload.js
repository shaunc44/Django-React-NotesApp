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
		setState({ selectedFile: event.target.files[0] });

		console.log('STATE 1:', state);
    };


    // console.log('STATE:', state);
    

    // On file upload (click the upload button)
    let onFileUpload = () => {
      // Create an object of formData
      const formData = new FormData();

      console.log('STATE 2:', state);
    
      // Update the formData object
      formData.append(
        "myFile",
        state.selectedFile,
        state.selectedFile.name
      );

      console.log("Form Data: ", formData);
    
      // Details of the uploaded file
      console.log("SELECTED FILE: ", state.selectedFile);
    
      // ******************************** TODO ***********************************
      // Request made to the backend api
      // Send formData object
      // This should be changed to the fetch() method but should it link to a Django REST API ????
      // axios.post("api/uploadfile", formData);
    };


    // File content to be displayed after
    // file upload is complete
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

            <h3>
				File Upload using React!
            </h3>

            <div>
                <input type="file" onChange={onFileChange} />
                <button onClick={onFileUpload}>
					Upload!
                </button>
            </div>

			{fileData()}
        </div>
	)
}

export default FileUpload