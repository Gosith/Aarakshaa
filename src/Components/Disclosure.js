import "./DisclosureStyles.css"
import React from 'react';
import complaintsdoc from '../assets/NDA/Complaints Handling Process.pdf';
import disclosuredoc from '../assets/NDA/Complaints Handling Process.pdf';

const Disclosure= () =>{
    const handleComplaints = () => {
        const downloadUrl = complaintsdoc;
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', true);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const handledisclosure = () => {
        const downloadUrl = disclosuredoc;
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', true);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
   
      return (
        <div className="disclosure-container">
        <h1>Public Disclosure and Privacy policy</h1>
        <p>
           Please download our full public disclosure summary for your reference.
        </p>
        <button className="download-button" onClick={handledisclosure}>Download Disclosure</button>
        <p>
           Please download our complaints handling process documentation
        </p>
        <button className="download-button" onClick={handleComplaints}>Download Complaints Documentation</button>
    </div>
      )
    
}

export default Disclosure;