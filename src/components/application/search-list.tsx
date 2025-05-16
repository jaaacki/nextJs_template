"use client";
/* eslint-disable @next/next/no-img-element */

import CommonFooter from "@/core/common/footer/commonFooter";
import Link from "next/link";
import React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function SearchListComponent(){
    const [open1, setOpen1] = React.useState(false);
    return(
        <div>
        <div className="page-wrapper">
            <div className="content">
                <div className="page-header">
                    <div className="add-item d-flex">
                        <div className="page-title">
                            <h4>Search List</h4>
                            <h6>Manage your search</h6>
                        </div>
                    </div>
                    <div className="d-flex flex-sm-row flex-column align-items-sm-center align-items-start">
                        <ul className="table-top-head">
                            <li>
                                <Link href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="Refresh">
                                    <i data-feather="rotate-ccw" className="feather-rotate-ccw" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                href="#"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Collapse"
                                    id="collapse-header"
                                >
                                    <i data-feather="chevron-up" className="feather-chevron-up" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="d-flex align-items-center">
                                <input
                                    type="text"
                                    className="form-control flex-fill me-3"
                                    defaultValue="DreamsPOS"
                                />
                                <button type="submit" className="btn btn-primary">
                                    Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="mb-3">Search result for {`"DreamsPOS"`}</h5>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card shadow-none">
                                    <div className="card-body">
                                        <Link href="#" className="text-info text-truncate mb-2">
                                            https://themeforest.net/search/dreamspos
                                        </Link>
                                        <p className="text-truncate line-clamb-2 mb-2">
                                            DreamsPOS - Html, Vue 3, Angular 17+, React &amp; Node HR
                                            Project Management &amp; CRM Admin Dashboard Template
                                        </p>
                                        <div className="d-flex align-items-center flex-wrap row-gap-2">
                                            <span className="text-gray-9 me-3 pe-3 border-end">
                                                1.7K Sales
                                            </span>
                                            <div className="text-gray-9 d-flex align-items-center me-3 pe-3 border-end">
                                                <i className="ti ti-star-filled text-warning me-1" />
                                                <i className="ti ti-star-filled text-warning me-1" />
                                                <i className="ti ti-star-filled text-warning me-1" />
                                                <i className="ti ti-star-filled text-warning me-1" />
                                                <i className="ti ti-star-filled text-gray-2 me-1" />
                                                (45)
                                            </div>
                                            <span className="text-gray-9">$35</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h5 className="mb-3">Images</h5>
                        <div className="row g-3">
                            <Lightbox
                                open={open1}
                                close={() => setOpen1(false)}
                                slides={[
                                    { src: "/react/template/assets/img/media/media-15.jpg" },
                                    { src: "/react/template/assets/img/media/media-16.jpg" },
                                    { src: "/react/template/assets/img/media/media-17.jpg" },
                                ]}
                            />
                            <div className="col-xl-2 col-md-4 col-6">
                                <Link
                                    href="#"
                                    data-fancybox="gallery"
                                    className="gallery-item"
                                    onClick={() => setOpen1(true)}
                                >
                                    <img
                                        src="assets/img/media/media-15.jpg"
                                        className="rounded"
                                        alt="img"
                                    />
                                </Link>
                            </div>
                            <div className="col-xl-2 col-md-4 col-6">
                                <Link
                                    href="#"
                                    data-fancybox="gallery"
                                    className="gallery-item"
                                    onClick={() => setOpen1(true)}
                                >
                                    <img
                                        src="assets/img/media/media-16.jpg"
                                        className="rounded"
                                        alt="img"
                                    />
                                </Link>
                            </div>
                            <div className="col-xl-2 col-md-4 col-6">
                                <Link
                                    href="#"
                                    data-fancybox="gallery"
                                    className="gallery-item"
                                    onClick={() => setOpen1(true)}
                                >
                                    <img
                                        src="assets/img/media/media-17.jpg"
                                        className="rounded"
                                        alt="img"
                                    />
                                </Link>
                            </div>
                            <div className="col-xl-2 col-md-4 col-6">
                                <Link
                                    href="#"
                                    data-fancybox="gallery"
                                    className="gallery-item"
                                    onClick={() => setOpen1(true)}
                                >
                                    <img
                                        src="assets/img/media/media-18.jpg"
                                        className="rounded"
                                        alt="img"
                                    />
                                </Link>
                            </div>
                            <div className="col-xl-2 col-md-4 col-6">
                                <Link
                                    href="#"
                                    data-fancybox="gallery"
                                    className="gallery-item"
                                    onClick={() => setOpen1(true)}
                                >
                                    <img
                                        src="assets/img/media/media-19.jpg"
                                        className="rounded"
                                        alt="img"
                                    />
                                </Link>
                            </div>
                            <div className="col-xl-2 col-md-4 col-6">
                                <Link
                                    href="#"
                                    data-fancybox="gallery"
                                    className="gallery-item"
                                    onClick={() => setOpen1(true)}
                                >
                                    <img
                                        src="assets/img/media/media-20.jpg"
                                        className="rounded"
                                        alt="img"
                                    />
                                </Link>
                            </div>
                            <div className="col-xl-2 col-md-4 col-6">
                                <Link
                                    href="#"
                                    data-fancybox="gallery"
                                    className="gallery-item"
                                    onClick={() => setOpen1(true)}
                                >
                                    <img
                                        src="assets/img/media/media-21.jpg"
                                        className="rounded"
                                        alt="img"
                                    />
                                </Link>
                            </div>
                            <div className="col-xl-2 col-md-4 col-6">
                                <Link
                                    href="#"
                                    data-fancybox="gallery"
                                    className="gallery-item"
                                    onClick={() => setOpen1(true)}
                                >
                                    <img
                                        src="assets/img/media/media-22.jpg"
                                        className="rounded"
                                        alt="img"
                                    />
                                </Link>
                            </div>
                            <div className="col-xl-2 col-md-4 col-6">
                                <Link
                                    href="#"
                                    data-fancybox="gallery"
                                    className="gallery-item"
                                    onClick={() => setOpen1(true)}
                                >
                                    <img
                                        src="assets/img/media/media-23.jpg"
                                        className="rounded"
                                        alt="img"
                                    />
                                </Link>
                            </div>
                            <div className="col-xl-2 col-md-4 col-6">
                                <Link
                                    href="#"
                                    data-fancybox="gallery"
                                    className="gallery-item"
                                    onClick={() => setOpen1(true)}
                                >
                                    <img
                                        src="assets/img/media/media-24.jpg"
                                        className="rounded"
                                        alt="img"
                                    />
                                </Link>
                            </div>
                            <div className="col-xl-2 col-md-4 col-6">
                                <Link
                                    href="#"
                                    data-fancybox="gallery"
                                    className="gallery-item"
                                    onClick={() => setOpen1(true)}
                                >
                                    <img
                                        src="assets/img/media/media-25.jpg"
                                        className="rounded"
                                        alt="img"
                                    />
                                </Link>
                            </div>
                            <div className="col-xl-2 col-md-4 col-6">
                                <Link
                                    href="#x"
                                    data-fancybox="gallery"
                                    className="gallery-item"
                                    onClick={() => setOpen1(true)}
                                >
                                    <img
                                        src="assets/img/media/media-26.jpg"
                                        className="rounded"
                                        alt="img"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CommonFooter />
        </div>

    </div>
    )
}