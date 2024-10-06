'use client';
import { SetStateAction, useState } from "react";
import EntryPage from "./components/entryPage";
import Navbar from "./components/navbar";
import FileUpload from "./components/fileUpload";

export default function Home() {
  const [data, setData] = useState(null);

  const handleFileUpload = (jsonResponse: SetStateAction<null>) => {
    setData(jsonResponse);
  };
  return (
    <div>
      <Navbar />
      <EntryPage />
      {/* <FileUpload onFileUpload={handleFileUpload} /> */}
      {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
    </div>
  );
}
