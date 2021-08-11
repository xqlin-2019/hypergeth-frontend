import axios from 'axios';
import React, { Component } from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button} from 'react-bootstrap';
import { Dropdown} from 'react-bootstrap';;





export default class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        //added for dropdown title
        this.state = {
          dropDownValue: "File type"
        }
    }

    
    toggle = () => {
        this.setState({ open: !this.state.open });
    }
    onToggle = (isOpen, e, source) => {
        //This closes the menu on toggling the dropdown or hitting esc.
        if (source.source === 'click' || source.source === 'rootClose') {
            this.toggle();
        }
    }
    state = {
 
        // Initially, no file is selected
        selectedFile: null,
      };
      
      //On selecting dropdown option
      changeValue(text) {
        this.setState({dropDownValue: text})
      }

      // On file select (from the pop up)
      onFileChange = event => {
      
        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
      
      };
      
      // On file upload (click the upload button)
      onFileUpload = () => {
      
        // Create an object of formData
        const formData = new FormData();        
      
        // Update the formData object
        //Form validation for when user doesnt choose any file before clicking upload
          if (this.selectedFile ==  null) {
            alert("Please choose a file before clicking Upload!")
          }
          else {
            formData.append(
              "myFile",
              this.state.selectedFile,
              this.state.selectedFile.name
            );
          }
        

      
        // Details of the uploaded file
        console.log(this.state.selectedFile);
      
        // Request made to the backend api
        // Send formData object
        axios.post("api/uploadfile", formData);
      };
      
      // File content to be displayed after
      // file upload is complete
      fileData = () => {
      
        if (this.state.selectedFile) {
           
          return (
            <div>
              <h2>File Details:</h2>
               
              <p>File Name: {this.state.selectedFile.name}</p>
            
                        
              <p>File Type: {this.state.selectedFile.type}</p>
            
                        
              <p>
                Last Modified:{" "}
                {this.state.selectedFile.lastModifiedDate.toDateString()}
              </p>
   
            </div>
          );
        } else {
          return (
            <div>
              <br />
            </div>
            
          );
        }
      };
      
      render() {
      
        return (
          <div>
              <h4>Please choose a file before Pressing the Upload button</h4>
              <DropdownButton id="dropdown-item-button" variant="success" title={this.state.dropDownValue} className="format"> 
              <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>SGX</div></Dropdown.Item>
              <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>PRIMO</div></Dropdown.Item>
              </DropdownButton>
              <p></p>
              <div>
                  <input type="file" onChange={this.onFileChange} />
                  {/* <button class="btn-danger" onClick={this.onFileUpload}>
                    Upload!
                  </button> */}
                  <Button variant="outline-danger" onClick={this.onFileUpload}>Upload!</Button>{' '}
              </div>
            {this.fileData()}
          </div>
        );
      }
    }