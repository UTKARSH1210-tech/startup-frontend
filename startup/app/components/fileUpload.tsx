import React, { useState } from 'react';

interface FileUploadProps {
    onFileUpload: (jsonResponse: any) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.files);
        setFile(event.target.files?.[0] || null);
    };

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData,
            });

            // Uncomment these lines if the response is in JSON format and you want to pass it to the parent component
            // const jsonResponse = await response.json();
            // onFileUpload(jsonResponse);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div className="px-11 py-5 flex justify-center items-center">
            <input type="file" onChange={handleFileChange} />
            <button className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium btn" onClick={handleUpload}>Upload</button>
            <div className='mb-10'></div>
        </div>
    );
};

export default FileUpload;
