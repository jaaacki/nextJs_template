"use client";
/* eslint-disable @next/next/no-img-element */

import React from "react";
import { attendenceemployeedata } from "@/core/json/attendence-employeedata";
import TooltipIcons from "@/core/common/tooltip-content/tooltipIcons";
import RefreshIcon from "@/core/common/tooltip-content/refresh";
import CollapesIcon from "@/core/common/tooltip-content/collapes";
import Link from "next/link";
import  Table  from "@/core/common/pagination/datatable";
export default function AttendanceEmployeeComponent () {
  const dataSource = attendenceemployeedata;

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      sorter: (a:any, b:any) => a.date.length - b.date.length,
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (text:any) => (
        <span className={`badge  d-inline-flex align-items-center badge-xs ${text === "Present" ? "badge-success" : text === 'Holiday' ? 'badge-purple' : "badge-danger"}`}>
          <i className="ti ti-point-filled me-1"></i> {text}
        </span>
      ),
      sorter: (a:any, b:any) => a.status.length - b.status.length,
    },
    {
      title: "Clock In",
      dataIndex: "clockin",
      sorter: (a:any, b:any) => a.clockin.length - b.clockin.length,
    },
    {
      title: "Clock Out",
      dataIndex: "clockout",
      sorter: (a:any, b:any) => a.clockout.length - b.clockout.length,
    },
    {
      title: "Production",
      dataIndex: "production",
      sorter: (a:any, b:any) => a.production.length - b.production.length,
    },
    {
      title: "Break",
      dataIndex: "break",
      sorter: (a:any, b:any) => a.break.length - b.break.length,
    },
    {
      title: "OverTime",
      dataIndex: "overtime",
      sorter: (a:any, b:any) => a.overtime.length - b.overtime.length,
    },

    {
      title: "Progress",
      dataIndex: "progress",
      key: "progress",
      render: (progressArray:any) => (
        <div>
          {progressArray && progressArray.length > 0 ? (
            <div className="progress attendance">
              {progressArray.map((value:any, index:any) => (
                <div
                  key={index}
                  className={`progress-bar ${index === 0
                    ? "progress-bar-success"
                    : index === 1
                      ? "progress-bar-warning"
                      : "progress-bar-danger"
                    }`}
                  role="progressbar"
                  style={{ width: `${value}%` }}
                ></div>
              ))}
            </div>
          ) : null}
        </div>
      ),
    },



    {
      title: "TotalHours",
      dataIndex: "totalhours",
      sorter: (a:any, b:any) => a.totalhours.length - b.totalhours.length,
    },
  ];
  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="attendance-header">
            <div className="attendance-content">
              <img
                src="./assets/img/icons/hand01.svg"
                className="hand-img"
                alt="img"
              />
              <h3>
                Good Morning, <span>John Smilga</span>
              </h3>
            </div>
            <div>
              <ul className="table-top-head">
                <TooltipIcons />
                <RefreshIcon />
                <CollapesIcon />
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-12 d-flex">
              <div className="card w-100 border-0">
                <div className="card-body">
                  <h5 className="mb-3 pb-3 border-bottom d-flex justify-content-between align-items-center fs-18">
                    Attendance<span className="text-purple fs-14">22 Aug 2023</span>
                  </h5>
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-2">
                      <img src="./assets/img/icons/time-big.svg" alt="time-img" />
                    </div>
                    <div>
                      <h2>05:45:22</h2>
                      <p>Current Time</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <Link
                      href="#"
                      className="btn btn-primary w-100 me-2"
                    >
                      Clock Out
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-secondary me-2 w-100"
                    >
                      Break
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12 d-flex">
              <div className="card w-100 border-0">
                <div className="card-body">
                  <h5 className="border-bottom pb-3 mb-3">
                    Days Overview This Month
                  </h5>
                  <div className="row gy-3">
                    <div className="col-lg-2 col-md-3 col-sm-4 text-center">
                      <div>
                        <span className="d-flex align-items-center justify-content-center avatar avatar-xl bg-primary-transparent fw-bold fs-20 mb-2 mx-auto">
                          31
                        </span>
                        <p className="fs-14">
                          Total Working <br /> Days
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 text-center">
                      <div>
                        <span className="d-flex align-items-center justify-content-center avatar avatar-xl bg-danger-transparent fw-bold fs-20 mb-2 mx-auto">
                          05
                        </span>
                        <p className="fs-14">
                          Abesent <br />
                          Days
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 text-center">
                      <div>
                        <span className="d-flex align-items-center justify-content-center avatar avatar-xl bg-purple-transparent text-purple fw-bold fs-20 mb-2 mx-auto">
                          28
                        </span>
                        <p className="fs-14">
                          Present <br />
                          Days
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 text-center">
                      <div>
                        <span className="d-flex align-items-center justify-content-center avatar avatar-xl bg-warning-transparent fw-bold fs-20 mb-2 mx-auto">
                          02
                        </span>
                        <p className="fs-14">
                          Half
                          <br /> Days
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 text-center">
                      <div>
                        <span className="d-flex align-items-center justify-content-center avatar avatar-xl bg-cyan-transparent text-cyan fw-bold fs-20 mb-2 mx-auto">
                          01
                        </span>
                        <p className="fs-14">
                          Late <br />
                          Days
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 text-center">
                      <div>
                        <span className="d-flex align-items-center justify-content-center avatar avatar-xl bg-success-transparent text-success fw-bold fs-20 mb-2 mx-auto">
                          02
                        </span>
                        <p className="fs-14">Holidays</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /product list */}
          <div className="card table-list-card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <div className="search-set">
              </div>
              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="dropdown me-2">
                  <Link
                    href="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Select Status
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        href="#"
                        className="dropdown-item rounded-1"
                      >
                        Present
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="dropdown-item rounded-1"
                      >
                        Absent
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="dropdown-item rounded-1"
                      >
                        Holiday
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <Link
                    href="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Sort By : Last 7 Days
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link
                        href="#"
                        className="dropdown-item rounded-1"
                      >
                        Recently Added
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="dropdown-item rounded-1"
                      >
                        Ascending
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="dropdown-item rounded-1"
                      >
                        Desending
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="dropdown-item rounded-1"
                      >
                        Last Month
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="dropdown-item rounded-1"
                      >
                        Last 7 Days
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body pb-0">
              <div className="table-responsive">
                <Table columns={columns} dataSource={dataSource} />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2014-2025 © DreamsPOS. All Right Reserved</p>
          <p>
            Designed &amp; Developed By{" "}
            <Link href="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>

    </div>
  );
};

