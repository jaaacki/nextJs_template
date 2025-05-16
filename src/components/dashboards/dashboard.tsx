"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import CountUp from "react-countup";
import { User, UserCheck, ArrowRight, File } from "feather-icons-react";
import { all_routes } from "@/data/all_routes";
import SalesStatisticsChart from "../charts/salesstatisticschart";

export default function Admindashboard() {
    const route = all_routes
  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="card dash-widget w-100">
                <div className="card-body d-flex align-items-center">
                  <div className="dash-widgetimg">
                    <span>
                      <img src="assets/img/icons/dash1.svg" alt="img" />
                    </span>
                  </div>
                  <div className="dash-widgetcontent">
                    <h5>
                      <CountUp
                        className="counters"
                        start={0}
                        end={307144}
                        duration={3}
                        prefix="$"
                      />
                    </h5>
                    <p className="mb-0">Total Purchase Due</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="card dash-widget dash1 w-100">
                <div className="card-body d-flex align-items-center">
                  <div className="dash-widgetimg">
                    <span>
                      <img src="assets/img/icons/dash2.svg" alt="img" />
                    </span>
                  </div>
                  <div className="dash-widgetcontent">
                    <h5>
                      <span className="counters">
                        <CountUp
                          start={0}
                          end={4385.0}
                          duration={3}
                          prefix="$"
                        />
                      </span>
                    </h5>
                    <p className="mb-0">Total Sales Due</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="card dash-widget dash2 w-100">
                <div className="card-body d-flex align-items-center">
                  <div className="dash-widgetimg">
                    <span>
                      <img src="assets/img/icons/dash3.svg" alt="img" />
                    </span>
                  </div>
                  <div className="dash-widgetcontent">
                    <h5>
                      <span className="counters">
                        <CountUp
                          start={0}
                          end={385656.5}
                          duration={3}
                          prefix="$"
                        />
                      </span>
                    </h5>
                    <p className="mb-0">Total Sale Amount</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="card dash-widget dash3 w-100">
                <div className="card-body d-flex align-items-center">
                  <div className="dash-widgetimg">
                    <span>
                      <img src="assets/img/icons/dash4.svg" alt="img" />
                    </span>
                  </div>
                  <div className="dash-widgetcontent">
                    <h5>
                      <span className="counters">
                        <CountUp
                          start={0}
                          end={400.0}
                          duration={3}
                          prefix="$"
                        />
                      </span>
                    </h5>
                    <p className="mb-0">Total Expense Amount</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="dash-count">
                <div className="dash-counts">
                  <h4>100</h4>
                  <h5>Customers</h5>
                </div>
                <div className="dash-imgs">
                  <User />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das1">
                <div className="dash-counts">
                  <h4>110</h4>
                  <h5>Suppliers</h5>
                </div>
                <div className="dash-imgs">
                  <UserCheck />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das2 bg-dark">
                <div className="dash-counts">
                  <h4>150</h4>
                  <h5>Purchase Invoice</h5>
                </div>
                <div className="dash-imgs">
                  <img
                    src="assets/img/icons/file-text-icon-01.svg"
                    className="img-fluid"
                    alt="icon"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 d-flex">
              <div className="dash-count das3">
                <div className="dash-counts">
                  <h4>170</h4>
                  <h5>Sales Invoice</h5>
                </div>
                <div className="dash-imgs">
                  <File />
                </div>
              </div>
            </div>
          </div>
          {/* Button trigger modal */}

          <div className="row">
            <div className="col-xl-7 col-sm-12 col-12 d-flex">
              <div className="card flex-fill">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 className="card-title mb-0">Purchase &amp; Sales</h5>
                  <div className="graph-sets">
                    <ul className="mb-0">
                      <li>
                        <span>Sales</span>
                      </li>
                      <li>
                        <span>Purchase</span>
                      </li>
                    </ul>
                    <div className="dropdown dropdown-wraper">
                      <button
                        className="btn btn-light btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        2025
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <Link href="#" className="dropdown-item">
                            2023
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="dropdown-item">
                            2022
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="dropdown-item">
                            2021
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div id="sales_charts" />
                  <SalesStatisticsChart />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-sm-12 col-12 d-flex">
              <div className="card flex-fill default-cover mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h4 className="card-title mb-0">Recent Products</h4>
                  <div className="view-all-link">
                    <Link
                      href="#"
                      className="view-all d-flex align-items-center"
                    >
                      View All
                      <span className="ps-2 d-flex align-items-center">
                        <ArrowRight className="feather-16" />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive dataview">
                    <table className="table dashboard-recent-products">
                      <thead className="thead-light">
                        <tr>
                          <th>#</th>
                          <th>Products</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td className="d-flex align-items-center">
                            <Link
                              href={route.productlist}
                              className="avatar avatar-lg me-2"
                            >
                              <img
                                src="assets/img/products/stock-img-01.png"
                                alt="product"
                              />
                            </Link>
                            <Link href={route.productlist} className="fw-bold">
                              Lenevo 3rd Generation
                            </Link>
                          </td>
                          <td>$12500</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td className="d-flex align-items-center">
                            <Link
                              href={route.productlist}
                              className="avatar avatar-lg me-2"
                            >
                              <img
                                src="assets/img/products/stock-img-06.png"
                                alt="product"
                              />
                            </Link>
                            <Link href={route.productlist} className="fw-bold">
                              Bold V3.2
                            </Link>
                          </td>
                          <td>$1600</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td className="d-flex align-items-center">
                            <Link
                              href={route.productlist}
                              className="avatar avatar-lg me-2"
                            >
                              <img
                                src="assets/img/products/stock-img-02.png"
                                alt="product"
                              />
                            </Link>
                            <Link href={route.productlist} className="fw-bold">
                              Nike Jordan
                            </Link>
                          </td>
                          <td>$2000</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td className="d-flex align-items-center">
                            <Link
                              href={route.productlist}
                              className="avatar avatar-lg me-2"
                            >
                              <img
                                src="assets/img/products/stock-img-03.png"
                                alt="product"
                              />
                            </Link>
                            <Link href={route.productlist} className="fw-bold">
                              Apple Series 5 Watch
                            </Link>
                          </td>
                          <td>$800</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Expired Products</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive dataview">
                <table className="table dashboard-expired-products">
                  <thead className="thead-light">
                    <tr>
                      <th className="no-sort">
                        <label className="checkboxs">
                          <input type="checkbox" id="select-all" />
                          <span className="checkmarks" />
                        </label>
                      </th>
                      <th>Product</th>
                      <th>SKU</th>
                      <th>Manufactured Date</th>
                      <th>Expired Date</th>
                      <th className="no-sort">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link href="#" className="avatar avatar-lg me-2">
                            <img
                              src="assets/img/products/expire-product-01.png"
                              alt="product"
                            />
                          </Link>
                          <Link href="#" className="fw-bold">
                            Red Premium Handy{" "}
                          </Link>
                        </div>
                      </td>
                      <td>PT006</td>
                      <td>17 Jan 2023</td>
                      <td>29 Mar 2023</td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <Link className="me-2 p-2" href="#">
                            <i data-feather="edit" className="feather-edit" />
                          </Link>
                          <Link className=" confirm-text p-2" href="#">
                            <i
                              data-feather="trash-2"
                              className="feather-trash-2"
                            />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link href="#" className="avatar avatar-lg me-2">
                            <img
                              src="assets/img/products/expire-product-02.png"
                              alt="product"
                            />
                          </Link>
                          <Link href="#" className="fw-bold">
                            Iphone 14 Pro
                          </Link>
                        </div>
                      </td>
                      <td>PT007</td>
                      <td>22 Feb 2023</td>
                      <td>04 Apr 2023</td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <Link className="me-2 p-2" href="#">
                            <i data-feather="edit" className="feather-edit" />
                          </Link>
                          <Link className="confirm-text p-2" href="#">
                            <i
                              data-feather="trash-2"
                              className="feather-trash-2"
                            />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link href="#" className="avatar avatar-lg me-2">
                            <img
                              src="assets/img/products/expire-product-03.png"
                              alt="product"
                            />
                          </Link>
                          <Link href="#" className="fw-bold">
                            Black Slim 200{" "}
                          </Link>
                        </div>
                      </td>
                      <td>PT008</td>
                      <td>18 Mar 2023</td>
                      <td>13 May 2023</td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <Link className="me-2 p-2" href="#">
                            <i data-feather="edit" className="feather-edit" />
                          </Link>
                          <Link className=" confirm-text p-2" href="#">
                            <i
                              data-feather="trash-2"
                              className="feather-trash-2"
                            />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link href="#" className="avatar avatar-lg me-2">
                            <img
                              src="assets/img/products/expire-product-04.png"
                              alt="product"
                            />
                          </Link>
                          <Link href="#" className="fw-bold">
                            Woodcraft Sandal
                          </Link>
                        </div>
                      </td>
                      <td>PT009</td>
                      <td>29 Mar 2023</td>
                      <td>27 May 2023</td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <Link className="me-2 p-2" href="#">
                            <i data-feather="edit" className="feather-edit" />
                          </Link>
                          <Link className=" confirm-text p-2" href="#">
                            <i
                              data-feather="trash-2"
                              className="feather-trash-2"
                            />
                          </Link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkboxs">
                          <input type="checkbox" />
                          <span className="checkmarks" />
                        </label>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <Link href="#" className="avatar avatar-lg me-2">
                            <img
                              src="assets/img/products/stock-img-03.png"
                              alt="product"
                            />
                          </Link>
                          <Link href="#" className="fw-bold">
                            Apple Series 5 Watch{" "}
                          </Link>
                        </div>
                      </td>
                      <td>PT010</td>
                      <td>24 Mar 2023</td>
                      <td>26 May 2023</td>
                      <td className="action-table-data">
                        <div className="edit-delete-action">
                          <Link
                            className="me-2 p-2"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#edit-units"
                          >
                            <i data-feather="edit" className="feather-edit" />
                          </Link>
                          <Link className=" confirm-text p-2" href="#">
                            <i
                              data-feather="trash-2"
                              className="feather-trash-2"
                            />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
