"use client";
/* eslint-disable @next/next/no-img-element */


import { all_routes } from "@/data/all_routes";
import Link from "next/link";
import { useState } from "react";
import { Chips } from "primereact/chips";
import Scrollbars from "react-custom-scrollbars-2";
import CommonFooter from "@/core/common/footer/commonFooter";


export default function EmailComponent(){
    const routes = all_routes;
  const [value, setValue] = useState(['Angela Thomas']);
  const [show, setShow] = useState(false);

  const [showMenu, setShowMenu] = useState(false)
  const [showMenu2, setShowMenu2] = useState(false)
  const [showMenu3, setShowMenu3] = useState(false)
  const customChip = (item:any) => {
    return (
      <div>
        <span className="tag label label-info">{item}</span>
      </div>
    );
  };
    return(
        <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content p-0">
          <div className="d-md-flex">
            <div className="email-sidebar border-end border-bottom">

              <div className="active slimscroll h-100">
                <div className="slimscroll-active-sidebar">
                  <div className="p-3">
                    <div className="shadow-md bg-white rounded p-2 mb-4">
                      <div className="d-flex align-items-center">
                        <Link
                          href="#"
                          className="avatar avatar-md flex-shrink-0 me-2"
                        >
                          <img
                            src="assets/img/profiles/avatar-02.jpg"
                            className="rounded-circle"
                            alt="Img"
                          />
                        </Link>
                        <div>
                          <h6 className="mb-1">
                            <Link href="#">James Hong</Link>
                          </h6>
                          <p>Jnh343@example.com</p>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="#"
                      className="btn btn-primary w-100"
                      id="compose_mail"
                      onClick={() => setShow(true)}
                    >
                      <i className="ti ti-edit me-2" />
                      Compose
                    </Link>
                    <div className="mt-4">
                      <h5 className="mb-2">Emails</h5>
                      <div className="d-block mb-4 pb-4 border-bottom email-tags" >
                        <Link
                          href="#"
                          className="d-flex align-items-center justify-content-between p-2 rounded active"
                        >
                          <span className="d-flex align-items-center fw-medium">
                            <i className="ti ti-inbox text-gray me-2" />
                            Inbox
                          </span>
                          <span className="badge badge-danger rounded-pill badge-xs">
                            56
                          </span>
                        </Link>
                        <Link
                          href="#"
                          className="d-flex align-items-center justify-content-between p-2 rounded"
                        >
                          <span className="d-flex align-items-center fw-medium">
                            <i className="ti ti-star text-gray me-2" />
                            Starred
                          </span>
                          <span className="fw-semibold fs-12 badge text-gray rounded-pill">
                            46
                          </span>
                        </Link>
                        <Link
                          href="#"
                          className="d-flex align-items-center justify-content-between p-2 rounded"
                        >
                          <span className="d-flex align-items-center fw-medium">
                            <i className="ti ti-rocket text-gray me-2" />
                            Sent
                          </span>
                          <span className="badge text-gray rounded-pill">14</span>
                        </Link>
                        <Link
                          href="#"
                          className="d-flex align-items-center justify-content-between p-2 rounded"
                        >
                          <span className="d-flex align-items-center fw-medium">
                            <i className="ti ti-file text-gray me-2" />
                            Drafts
                          </span>
                          <span className="badge text-gray rounded-pill">12</span>
                        </Link>
                        <Link
                          href="#"
                          className="d-flex align-items-center justify-content-between p-2 rounded"
                        >
                          <span className="d-flex align-items-center fw-medium">
                            <i className="ti ti-trash text-gray me-2" />
                            Deleted
                          </span>
                          <span className="badge text-gray rounded-pill">08</span>
                        </Link>
                        <Link
                          href="#"
                          className="d-flex align-items-center justify-content-between p-2 rounded"
                        >
                          <span className="d-flex align-items-center fw-medium">
                            <i className="ti ti-info-octagon text-gray me-2" />
                            Spam
                          </span>
                          <span className="badge text-gray rounded-pill">0</span>
                        </Link>
                        <div >
                          <div className="more-menu" style={{ display: !showMenu ? 'none' : 'block' }}>
                            <Link
                              href="#"
                              className="d-flex align-items-center justify-content-between p-2 rounded"
                            >
                              <span className="d-flex align-items-center fw-medium">
                                <i className="ti ti-location-up text-gray me-2" />
                                Important
                              </span>
                              <span className="badge text-gray rounded-pill">
                                12
                              </span>
                            </Link>
                            <Link
                              href="#"
                              className="d-flex align-items-center justify-content-between p-2 rounded"
                            >
                              <span className="d-flex align-items-center fw-medium">
                                <i className="ti ti-transition-top text-gray me-2" />
                                All Emails
                              </span>
                              <span className="badge text-gray rounded-pill">
                                34
                              </span>
                            </Link>
                          </div>
                          <div className="view-all mt-2">
                            <Link
                              href="#"
                              className="viewall-button fw-medium" onClick={() => { setShowMenu(!showMenu) }}
                            >
                              {showMenu ? 'Show Less' : 'Show More'}
                              <i className="fa fa-chevron-down fs-10 ms-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom mb-4 pb-4">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h5>Labels</h5>
                        <Link href="#">
                          <i className="ti ti-square-rounded-plus-filled text-primary fs-16" />
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="#"
                          className="fw-medium d-flex align-items-center text-dark py-1"
                        >
                          <i className="ti ti-square-rounded text-success me-2" />
                          Team Events
                        </Link>
                        <Link
                          href="#"
                          className="fw-medium d-flex align-items-center text-dark py-1"
                        >
                          <i className="ti ti-square-rounded text-warning me-2" />
                          Work
                        </Link>
                        <Link
                          href="#"
                          className="fw-medium d-flex align-items-center text-dark py-1"
                        >
                          <i className="ti ti-square-rounded text-danger me-2" />
                          External
                        </Link>
                        <Link
                          href="#"
                          className="fw-medium d-flex align-items-center text-dark py-1"
                        >
                          <i className="ti ti-square-rounded text-skyblue me-2" />
                          Projects
                        </Link>
                        <div>
                          <div className="more-menu-2" style={{ display: !showMenu2 ? 'none' : 'block' }}>
                            <Link
                              href="#"
                              className="fw-medium d-flex align-items-center text-dark py-1"
                            >
                              <i className="ti ti-square-rounded text-purple me-2" />
                              Applications
                            </Link>
                            <Link
                              href="#"
                              className="fw-medium d-flex align-items-center text-dark py-1"
                            >
                              <i className="ti ti-square-rounded text-info me-2" />
                              Desgin
                            </Link>
                          </div>
                          <div className="view-all mt-2">
                            <Link
                              href="#"
                              className="viewall-button-2 fw-medium" onClick={() => { setShowMenu2(!showMenu2) }}
                            >
                              {showMenu2 ? 'Show Less' : 'Show More'}
                              <i className="fa fa-chevron-down fs-10 ms-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom mb-4 pb-4">
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <h5>Folders</h5>
                        <Link href="#">
                          <i className="ti ti-square-rounded-plus-filled text-primary fs-16" />
                        </Link>
                      </div>
                      <div>
                        <Link
                          href="#"
                          className="fw-medium d-flex align-items-center text-dark py-1"
                        >
                          <i className="ti ti-folder-filled text-danger me-2" />
                          Projects
                        </Link>
                        <Link
                          href="#"
                          className="fw-medium d-flex align-items-center text-dark py-1"
                        >
                          <i className="ti ti-folder-filled text-warning me-2" />
                          Personal
                        </Link>
                        <Link
                          href="#"
                          className="fw-medium d-flex align-items-center text-dark py-1"
                        >
                          <i className="ti ti-folder-filled text-success me-2" />
                          Finance
                        </Link>
                        <div>
                          <div className="more-menu-3" style={{ display: !showMenu3 ? 'none' : 'block' }}>
                            <Link
                              href="#"
                              className="fw-medium d-flex align-items-center text-dark py-1"
                            >
                              <i className="ti ti-folder-filled text-info me-2" />
                              Projects
                            </Link>
                            <Link
                              href="#"
                              className="fw-medium d-flex align-items-center text-dark py-1"
                            >
                              <i className="ti ti-folder-filled text-primary me-2" />
                              Personal
                            </Link>
                          </div>
                          <div className="view-all mt-2">
                            <Link
                              href="#"
                              className="viewall-button-3 fw-medium" onClick={() => { setShowMenu3(!showMenu3) }}
                            >
                              {showMenu3 ? 'Show Less' : 'Show More'}
                              <i className="fa fa-chevron-down fs-10 ms-2" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-dark rounded text-center position-relative p-4">
                      <span className="avatar avatar-lg rounded-circle bg-white mb-2">
                        <i className="ti ti-alert-triangle text-dark" />
                      </span>
                      <h6 className="text-white mb-3">
                        Enjoy Unlimited Access on a small price monthly.
                      </h6>
                      <Link href="#" className="btn btn-white">
                        Upgrade Now <i className="ti ti-arrow-right" />
                      </Link>
                      <div className="box-bg">
                        <span className="bg-right">
                          <img src="assets/img/bg/email-bg-01.png" alt="Img" />
                        </span>
                        <span className="bg-left">
                          <img src="assets/img/bg/email-bg-02.png" alt="Img" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div className="bg-white flex-fill border-end border-bottom mail-notifications">
              <Scrollbars>
                <div className="slimscroll-active-sidebar">
                  <div className="p-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                      <div>
                        <h5 className="mb-1">Inbox</h5>
                        <div className="d-flex align-items-center">
                          <span>2345 Emails</span>
                          <i className="ti ti-point-filled text-primary mx-1" />
                          <span>56 Unread</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="position-relative input-icon me-3">
                          <span className="input-icon-addon">
                            <i className="ti ti-search" />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Email"
                          />
                        </div>
                        <div className="d-flex align-items-center">
                          <Link
                            href="#"
                            className="btn btn-icon btn-sm rounded-circle"
                          >
                            <i className="ti ti-filter-edit" />
                          </Link>
                          <Link
                            href="#"
                            className="btn btn-icon btn-sm rounded-circle"
                          >
                            <i className="ti ti-settings" />
                          </Link>
                          <Link
                            href="#"
                            className="btn btn-icon btn-sm rounded-circle"
                          >
                            <i className="ti ti-refresh" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group list-group-flush mails-list">
                    <div className="list-group-item border-bottom p-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                          <Link
                            href={routes.emailreply}
                            className="avatar bg-purple avatar-rounded me-2"
                          >
                            <span className="avatar-title">CD</span>
                          </Link>
                          <div className="flex-fill">
                            <div className="d-flex align-items-start justify-content-between">
                              <div>
                                <h6 className="mb-1">
                                  <Link href={routes.emailreply}>Justin Lapointe</Link>
                                </h6>
                                <span className="fw-semibold">
                                  Client Dashboard
                                </span>
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="dropdown">
                                  <button
                                    className="btn btn-icon btn-sm rounded-circle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href={routes.emailreply}
                                      >
                                        Open Email
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Reply
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Reply All
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Forward
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Forward As Attachment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Mark As Unread
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Move to Junk
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Mute
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Delete
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Archive
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Move To
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <span>
                                  <i className="ti ti-point-filled text-success" />
                                  3:13 PM
                                </span>
                              </div>
                            </div>
                            <p>It seems that recipients are receiving...</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="d-flex align-items-center btn btn-sm bg-transparent-dark me-2">
                            <i className="ti ti-folder-open me-2" />3
                          </span>
                          <span className="d-flex align-items-center btn btn-sm bg-transparent-dark">
                            <i className="ti ti-photo me-2" />
                            +24
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning" />
                          </span>
                          <span className="badge badge-soft-info mx-2 shadow-none">
                            <i className="ti ti-square me-1" />
                            Projects
                          </span>
                          <Link
                            href="#"
                            className="badge badge-dark rounded-pill badge-xs"
                          >
                            +1
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border-bottom p-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                          <Link
                            href={routes.emailreply}
                            className="avatar avatar-md avatar-rounded me-2"
                          >
                            <img
                              src="assets/img/profiles/avatar-01.jpg"
                              alt="Img"
                            />
                          </Link>
                          <div className="flex-fill">
                            <div className="d-flex align-items-start justify-content-between">
                              <div>
                                <h6 className="mb-1">
                                  <Link href={routes.emailreply}>Rufana</Link>
                                </h6>
                                <span className="fw-semibold">UI project</span>
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="dropdown">
                                  <button
                                    className="btn btn-icon btn-sm rounded-circle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href={routes.emailreply}
                                      >
                                        Open Email
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Reply
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Reply All
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Forward
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Forward As Attachment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Mark As Unread
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Move to Junk
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Mute
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Delete
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Archive
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Move To
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <span>
                                  <i className="ti ti-point-filled text-danger" />
                                  3:13 PM
                                </span>
                              </div>
                            </div>
                            <p>Regardless, you can usually expect an increase</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <Link href="#">
                          <img src="assets/img/icons/google-meet.svg" alt="Img" />
                        </Link>
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning" />
                          </span>
                          <span className="badge badge-soft-purple mx-2 shadow-none">
                            <i className="ti ti-square me-1" />
                            Applications
                          </span>
                          <Link
                            href="#"
                            className="badge badge-dark rounded-pill badge-xs shadow-none"
                          >
                            +1
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border-bottom p-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                          <Link
                            href={routes.emailreply}
                            className="avatar avatar-md avatar-rounded me-2"
                          >
                            <img
                              src="assets/img/profiles/avatar-03.jpg"
                              alt="Img"
                            />
                          </Link>
                          <div className="flex-fill">
                            <div className="d-flex align-items-start justify-content-between">
                              <div>
                                <h6 className="mb-1">
                                  <Link href={routes.emailreply}>Cameron Drake</Link>
                                </h6>
                                <span className="fw-semibold">You’re missing</span>
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="dropdown">
                                  <button
                                    className="btn btn-icon btn-sm rounded-circle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href={routes.emailreply}
                                      >
                                        Open Email
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Reply
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Reply All
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Forward
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Forward As Attachment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Mark As Unread
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Move to Junk
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Mute
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Delete
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Archive
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Move To
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <span>
                                  <i className="ti ti-point-filled text-danger" />
                                  3:13 PM
                                </span>
                              </div>
                            </div>
                            <p>
                              Here are a few catchy email subject line
                              examples&nbsp;
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="d-flex align-items-center btn btn-sm bg-transparent-dark fs-14">
                            <i className="ti ti-video me-2" />1
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning" />
                          </span>
                          <span className="badge badge-soft-danger mx-2 shadow-none">
                            <i className="ti ti-square me-1" />
                            External
                          </span>
                          <Link
                            href="#"
                            className="badge badge-dark rounded-pill badge-xs"
                          >
                            +1
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border-bottom p-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                          <Link
                            href={routes.emailreply}
                            className="avatar avatar-md avatar-rounded me-2"
                          >
                            <img
                              src="assets/img/profiles/avatar-04.jpg"
                              alt="Img"
                            />
                          </Link>
                          <div className="flex-fill">
                            <div className="d-flex align-items-start justify-content-between">
                              <div>
                                <h6 className="mb-1">
                                  <Link href={routes.emailreply}>Sean Hill</Link>
                                </h6>
                                <span className="fw-semibold">
                                  How Have You Progressed
                                </span>
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="dropdown">
                                  <button
                                    className="btn btn-icon btn-sm rounded-circle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href={routes.emailreply}
                                      >
                                        Open Email
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Reply
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Reply All
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Forward
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Forward As Attachment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Mark As Unread
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Move to Junk
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Mute
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Delete
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Archive
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Move To
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <span>
                                  <i className="ti ti-point-filled text-danger" />
                                  3:13 PM
                                </span>
                              </div>
                            </div>
                            <p>You can write effective retargeting subject</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="d-flex align-items-center btn btn-sm bg-transparent-dark">
                            <i className="ti ti-photo me-2" />1
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="badge badge-soft-success shadow-none">
                            <i className="ti ti-square me-1" />
                            Team Events
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border-bottom p-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                          <Link
                            href={routes.emailreply}
                            className="avatar avatar-md avatar-rounded me-2"
                          >
                            <img
                              src="assets/img/profiles/avatar-05.jpg"
                              alt="Img"
                            />
                          </Link>
                          <div className="flex-fill">
                            <div className="d-flex align-items-start justify-content-between">
                              <div>
                                <h6 className="mb-1">
                                  <Link href={routes.emailreply}>Kevin Alley</Link>
                                </h6>
                                <span className="fw-semibold">
                                  Flash. Sale. Alert.
                                </span>
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="dropdown">
                                  <button
                                    className="btn btn-icon btn-sm rounded-circle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href={routes.emailreply}
                                      >
                                        Open Email
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Reply
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Reply All
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Forward
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Forward As Attachment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Mark As Unread
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Move to Junk
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Mute
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Delete
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Archive
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Move To
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <span>
                                  <i className="ti ti-point-filled text-danger" />
                                  3:13 PM
                                </span>
                              </div>
                            </div>
                            <p>You can also use casual language,</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="d-flex align-items-center btn btn-sm bg-transparent-dark">
                            <i className="ti ti-link me-2" />1
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="badge badge-soft-danger me-2 shadow-none">
                            <i className="ti ti-square me-1" />
                            External
                          </span>
                          <Link
                            href="#"
                            className="badge badge-dark rounded-pill badge-xs"
                          >
                            +1
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border-bottom p-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                          <Link
                            href={routes.emailreply}
                            className="avatar avatar-md avatar-rounded me-2"
                          >
                            <img
                              src="assets/img/profiles/avatar-08.jpg"
                              alt="Img"
                            />
                          </Link>
                          <div className="flex-fill">
                            <div className="d-flex align-items-start justify-content-between">
                              <div>
                                <h6 className="mb-1">
                                  <Link href={routes.emailreply}>Linda Zimmer</Link>
                                </h6>
                                <span className="fw-semibold">
                                  Products the celebs are
                                </span>
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="dropdown">
                                  <button
                                    className="btn btn-icon btn-sm rounded-circle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href={routes.emailreply}
                                      >
                                        Open Email
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Reply
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Reply All
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Forward
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Forward As Attachment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Mark As Unread
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Move to Junk
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Mute
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Delete
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Archive
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Move To
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <span>
                                  <i className="ti ti-point-filled text-danger" />
                                  3:13 PM
                                </span>
                              </div>
                            </div>
                            <p>It seems that recipients are receiving...</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="d-flex align-items-center btn btn-sm bg-transparent-dark">
                            <i className="ti ti-link me-2" />1
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="badge badge-soft-warning me-2 shadow-none">
                            <i className="ti ti-square me-1" />
                            Work
                          </span>
                          <Link
                            href="#"
                            className="badge badge-dark rounded-pill badge-xs"
                          >
                            +1
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item border-bottom p-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                          <Link
                            href={routes.emailreply}
                            className="avatar bg-success avatar-rounded me-2"
                          >
                            <span className="avatar-title">ER</span>
                          </Link>
                          <div className="flex-fill">
                            <div className="d-flex align-items-start justify-content-between">
                              <div>
                                <h6 className="mb-1">
                                  <Link href={routes.emailreply}>Emly Reachel</Link>
                                </h6>
                                <span className="fw-semibold">No Subject</span>
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="dropdown">
                                  <button
                                    className="btn btn-icon btn-sm rounded-circle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href={routes.emailreply}
                                      >
                                        Open Email
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Reply
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Reply All
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Forward
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Forward As Attachment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Mark As Unread
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Move to Junk
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Mute
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Delete
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Archive
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Move To
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <span>
                                  <i className="ti ti-point-filled text-danger" />
                                  3:13 PM
                                </span>
                              </div>
                            </div>
                            <p>Announcing Fake Name Generator Premium</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="d-flex align-items-center btn btn-sm bg-transparent-dark">
                            <i className="ti ti-folder-open me-2" />3
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="badge badge-soft-info shadow-none">
                            <i className="ti ti-square me-1" />
                            Projects
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="list-group-item p-3">
                      <div className="d-flex align-items-center mb-2">
                        <div className="form-check form-check-md d-flex align-items-center flex-shrink-0 me-2">
                          <input className="form-check-input" type="checkbox" />
                        </div>
                        <div className="d-flex align-items-center flex-wrap row-gap-2 flex-fill">
                          <Link
                            href={routes.emailreply}
                            className="avatar avatar-md avatar-rounded me-2"
                          >
                            <img
                              src="assets/img/profiles/avatar-07.jpg"
                              alt="Img"
                            />
                          </Link>
                          <div className="flex-fill">
                            <div className="d-flex align-items-start justify-content-between">
                              <div>
                                <h6 className="mb-1">
                                  <Link href={routes.emailreply}>Sean Hill</Link>
                                </h6>
                                <span className="fw-semibold">You’re missing</span>
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="dropdown">
                                  <button
                                    className="btn btn-icon btn-sm rounded-circle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots" />
                                  </button>
                                  <ul className="dropdown-menu dropdown-menu-end p-3">
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href={routes.emailreply}
                                      >
                                        Open Email
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Reply
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Reply All
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Forward
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Forward As Attachment
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Mark As Unread
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Move to Junk
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Mute
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Delete
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Archive
                                      </Link>
                                    </li>
                                    <li>
                                      <Link
                                        className="dropdown-item rounded-1"
                                        href="#"
                                      >
                                        Move To
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                                <span>
                                  <i className="ti ti-point-filled text-danger" />
                                  3:13 PM
                                </span>
                              </div>
                            </div>
                            <p>Regardless, you can usually expect an increase</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="d-flex align-items-center btn btn-sm bg-transparent-dark me-2">
                            <i className="ti ti-folder-open me-2" />3
                          </span>
                          <span className="d-flex align-items-center btn btn-sm bg-transparent-dark">
                            <i className="ti ti-photo me-2" />
                            +24
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning" />
                          </span>
                          <span className="badge badge-soft-info mx-2 shadow-none">
                            <i className="ti ti-square me-1" />
                            Applications
                          </span>
                          <Link
                            href="#"
                            className="badge badge-dark rounded-pill badge-xs"
                          >
                            +1
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Scrollbars>
            </div>
          </div>
          <CommonFooter />
        </div>
      </div>
      {/* /Page Wrapper */}
      <div id="compose-view" className={show ? 'show' : ''}>
        <div className="bg-white border-0 rounded compose-view">
          <div className="compose-header d-flex align-items-center justify-content-between bg-dark p-3">
            <h5 className="text-white">Compose New Email</h5>
            <div className="d-flex align-items-center">
              <Link
                href="#"
                className="d-inline-flex me-2 text-white fs-16"
              >
                <i className="ti ti-minus" />
              </Link>
              <Link
                href="#"
                className="d-inline-flex me-2 fs-16 text-white"
              >
                <i className="ti ti-maximize" />
              </Link>
              <button
                type="button"
                className="btn-close custom-btn-close p-0 bg-transparent fs-16 text-white position-static"
                id="compose-close"
                onClick={() => setShow(false)}
              >
                <i className="ti ti-x" />
              </button>
            </div>
          </div>
          <form >
            <div className="p-3 position-relative pb-2 border-bottom chip-with-image">
              <div className="tag-with-img d-flex align-items-center">
                <label className="form-label me-2">To</label>
                {/* <input
            className="input-tags form-control border-0 h-100"
            id="inputBox"
            type="text"
            data-role="tagsinput"
            name="Label"
            defaultValue="Angela Thomas"
          /> */}
                <Chips value={value} className="input-tags form-control border-0 h-100 w-100" onChange={(e:any) => setValue(e.value)} itemTemplate={customChip} />
              </div>
              <div className="d-flex align-items-center email-cc">
                <Link href="#" className="d-inline-flex me-2">
                  Cc
                </Link>
                <Link href="#" className="d-inline-flex">
                  Bcc
                </Link>
              </div>
            </div>
            <div className="p-3 border-bottom">
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="mb-0">
                <textarea
                  rows={7}
                  className="form-control"
                  placeholder="Compose Email"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="p-3 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Link
                  href="#"
                  className="btn btn-icon btn-sm rounded-circle"
                >
                  <i className="ti ti-paperclip" />
                </Link>
                <Link
                  href="#"
                  className="btn btn-icon btn-sm rounded-circle"
                >
                  <i className="ti ti-photo" />
                </Link>
                <Link
                  href="#"
                  className="btn btn-icon btn-sm rounded-circle"
                >
                  <i className="ti ti-link" />
                </Link>
                <Link
                  href="#"
                  className="btn btn-icon btn-sm rounded-circle"
                >
                  <i className="ti ti-pencil" />
                </Link>
                <Link
                  href="#"
                  className="btn btn-icon btn-sm rounded-circle"
                >
                  <i className="ti ti-mood-smile" />
                </Link>
              </div>
              <div className="d-flex align-items-center compose-footer">
                <Link
                  href="#"
                  className="btn btn-icon btn-sm rounded-circle"
                >
                  <i className="ti ti-calendar-repeat" />
                </Link>
                <Link
                  href="#"
                  className="btn btn-icon btn-sm rounded-circle"
                >
                  <i className="ti ti-trash" />
                </Link>
                <button
                  type="button"
                  className="btn btn-primary d-inline-flex align-items-center ms-2"
                >
                  Send <i className="ti ti-arrow-right ms-2" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {show && <div className="modal-backdrop fade show" ></div>}

    </>
    )
}