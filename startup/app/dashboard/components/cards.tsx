import React, { useRef, useState } from 'react';
import axios from 'axios';
import styles from './card.module.css';

interface MainCardProps {
    onMetricsReceived: (metrics: any) => void;
}

const MainCard: React.FC<MainCardProps> = ({ onMetricsReceived }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            const filePromise = new Promise<File | null>((resolve) => {
                const fileChangeHandler = (event: Event) => {
                    const target = event.target as HTMLInputElement;
                    const file = target.files ? target.files[0] : null;
                    if (fileInputRef.current) {
                        fileInputRef.current.removeEventListener('change', fileChangeHandler);
                    }
                    resolve(file);
                };
                if (fileInputRef.current) {
                    fileInputRef.current.addEventListener('change', fileChangeHandler);
                    fileInputRef.current.click();
                }
            });

            filePromise.then(async (file) => {
                if (file) {
                    console.log('Selected file:', file);
                    setLoading(true);
                    const formData = new FormData();
                    formData.append('file', file);

                    try {
                        const uploadResponse = await axios.post('http://localhost:5000/upload', formData);
                        console.log('Upload response:', uploadResponse);

                        if (uploadResponse.status === 200) {
                            console.log('File uploaded successfully');
                            const metricsData = uploadResponse.data;
                            console.log('Metrics data:', metricsData);
                            onMetricsReceived(metricsData); // Pass the metrics to the parent component
                            setError(null);
                        } else {
                            console.error('Failed to upload file', uploadResponse.statusText);
                            setError('Failed to upload file');
                        }
                    } catch (error) {
                        console.error('Error uploading file:', error);
                        setError('Error uploading file');
                    } finally {
                        setLoading(false);
                    }
                } else {
                    console.log('No file selected');
                }
            });
        }
    };

    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <img src='zebra.svg' alt="Card visual" style={{ overflow: "hidden" }} />
            </div>
            <span>Saas Report</span>
            <p className={styles.info}>
                I’m Walter, a multidisciplinary designer who focuses on telling my clients’ stories visually, through enjoyable and meaningful experiences. I specialize in responsive websites and functional user interfaces.
            </p>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
            />
            <button onClick={handleButtonClick} disabled={loading}>
                {loading ? 'Uploading...' : 'Upload'}
            </button>

            {error && <p>{error}</p>}
        </div>
    );
};

export default MainCard;
