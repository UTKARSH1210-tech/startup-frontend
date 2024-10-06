'use client';
import React from 'react'
import Link from 'next/link';
import "./home-style.css"
const EntryPage = () => {

    return (
        <div className="main-container flex flex-col md:flex-row mt-10 mr-10S">
            <div className="image-container">
                <img
                    src="zebra.svg"
                    alt="Placeholder"
                    className="zerba-img"
                />
            </div>
            <div className="text-container">
                <div>
                    <h2 className=""></h2>
                    <p className="top-text">
                        Saas Bussiness Reports <br />
                    </p>
                    <p className="bottom-text">
                        On smaller screens, the image and text stack vertically. <br /> On larger screens, they are displayed side by side.
                    </p>
                    <Link href="/dashboard" className="get-start_btn px-2">
                        Get started
                    </Link>

                </div>

            </div>



        </div>
    )
}

export default EntryPage