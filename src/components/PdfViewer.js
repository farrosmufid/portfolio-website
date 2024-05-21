import React from 'react';

const PdfViewer = () => {
    return (
        <div className="iframe-container">
            <iframe src="/files/Group_12_Presentation.pdf" width="100%">
                This browser does not support PDFs. Please download the PDF to view it: <a href="/files/Group_12_Presentation.pdf">Download PDF</a>.
            </iframe>
        </div>
    );
}

export default PdfViewer;
