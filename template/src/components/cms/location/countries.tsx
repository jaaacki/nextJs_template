"use client";
/* eslint-disable @next/next/no-img-element */

import React from 'react'
import  Table  from "@/core/common/pagination/datatable";
import Link from 'next/link';
import CollapesIcon from '@/core/common/tooltip-content/collapes';
import RefreshIcon from '@/core/common/tooltip-content/refresh';
import TooltipIcons from '@/core/common/tooltip-content/tooltipIcons';
import { PlusCircle } from 'feather-icons-react';
export default function  CountriesComponent() {
    const data = [
        {
          CountryName: "United States",
          CountryCode: "US",
        },
        {
          CountryName: "Canada",
          CountryCode: "CA",
        },
        {
          CountryName: "United Kingdom",
          CountryCode: "UK",
        },
        {
          CountryName: "Germany",
          CountryCode: "DE",
        },
        {
          CountryName: "France",
          CountryCode: "FR",
        },
        {
          CountryName: "Argentina",
          CountryCode: "AR",
        },
        {
          CountryName: "India",
          CountryCode: "IN",
        },
        {
          CountryName: "Italy",
          CountryCode: "IT",
        },
        {
          CountryName: "New Zealand",
          CountryCode: "NZ",
        },
        {
          CountryName: "Australia",
          CountryCode: "AU",
        },
      ];
      const columns = [
               
            
        {
            title: "CountryName",
            dataIndex: "CountryName",
            sorter: (a:any, b:any) => a.CountryName.length - b.CountryName.length,
        },
        {
            title: "CountryCode",
            dataIndex: "CountryCode",
            sorter: (a:any, b:any) => a.CountryCode.length - b.CountryCode.length,
        },

        
        {
            title: "Status",
            dataIndex: "Status",
            render: () => (
            <>
                <span className={` badge badge-success d-inline-flex align-items-center badge-xs`}>
                <i className="ti ti-point-filled me-1" />
                Active
                </span>

            </>
            ),
            sorter: (a:any, b:any) => a.Status.length - b.Status.length,
        },

        {
            title: "",
            dataIndex: "action",
            className:"action-table-data",
            render: () => (
                <div className="edit-delete-action">
                <Link
                className="me-2 p-2"
                data-bs-toggle="modal"
                data-bs-target="#edit-country"
                href="#"
                >
                <i data-feather="edit" className="feather-edit" />
                </Link>
                <Link
                data-bs-toggle="modal"
                data-bs-target="#delete-modal"
                className="p-2"
                href="#"
                >
                <i data-feather="trash-2" className="feather-trash-2" />
                </Link>
            </div>


            ),
            sorter: (a:any, b:any) => a.action.length - b.action.length,
        },
        ];
  return (
    <>
  <div className="page-wrapper">
    <div className="content">
      <div className="page-header">
        <div className="add-item d-flex">
          <div className="page-title">
            <h4>Countries</h4>
            <h6>Manage Your Countries</h6>
          </div>
        </div>
        <ul className="table-top-head">
          <TooltipIcons/>
          <RefreshIcon/>
          <CollapesIcon/>
        </ul>
        <div className="page-btn">
          <Link
            href="#"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#add-country"
          >
            <PlusCircle data-feather="plus-circle" className="me-1" />
            Add Country
          </Link>
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
                Status
              </Link>
              <ul className="dropdown-menu  dropdown-menu-end p-3">
                <li>
                  <Link
                    href="#"
                    className="dropdown-item rounded-1"
                  >
                    Active
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="dropdown-item rounded-1"
                  >
                    Inactive
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="dropdown-item rounded-1"
                  >
                    New Joiners
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
          <div className=" table-responsive">
          <Table columns={columns} dataSource={data} />
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
  {/* Add Country */}
  <div className="modal fade" id="add-country">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <div className="page-title">
            <h4>Add Country</h4>
          </div>
          <button
            type="button"
            className="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <form >
          <div className="modal-body">
            <div className="row">
              <div className="mb-3">
                <label className="form-label">
                  Country Name <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Country Code <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                <span className="status-label">Status</span>
                <input
                  type="checkbox"
                  id="users6"
                  className="check"
                  defaultChecked
                />
                <label htmlFor="users6" className="checktoggle mb-0" />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button" data-bs-dismiss="modal"
              className="btn btn-primary fs-13 fw-medium p-2 px-3"
            >
              Add Country
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add Country */}
  {/* Edit Country */}
  <div className="modal fade" id="edit-country">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <div className="page-title">
            <h4>Edit Country</h4>
          </div>
          <button
            type="button"
            className="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <form >
          <div className="modal-body">
            <div className="row">
              <div className="mb-3">
                <label className="form-label">
                  Country Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="United States"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Country Code <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" defaultValue="US" />
              </div>
              <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
                <span className="status-label">Status</span>
                <input
                  type="checkbox"
                  id="users5"
                  className="check"
                  defaultChecked
                />
                <label htmlFor="users5" className="checktoggle mb-0" />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button" data-bs-dismiss="modal"
              className="btn btn-primary fs-13 fw-medium p-2 px-3"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Edit Country */}
  {/* Delete Modal */}
  <div className="modal fade" id="delete-modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content p-5">
        <div className="modal-body text-center p-0">
          <span className="rounded-circle d-inline-flex p-2 bg-danger-transparent mb-2">
            <i className="ti ti-trash fs-24 text-danger" />
          </span>
          <h4 className="fs-20 text-gray-9 fw-bold mb-2 mt-1">
            Delete Country
          </h4>
          <p className="text-gray-6 mb-0 fs-16">
            Are you sure you want to delete country?
          </p>
          <div className="d-flex justify-content-center mt-3">
            <Link
            href="#"
              className="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
              data-bs-dismiss="modal"
            >
              Cancel
            </Link>
            <Link
              href="#"
              className="btn btn-primary fs-13 fw-medium p-2 px-3"
            >
              Yes Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Modal */}
</>

  )
}
