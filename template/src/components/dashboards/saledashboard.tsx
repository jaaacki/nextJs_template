"use client";
/* eslint-disable @next/next/no-img-element */
import PredefinedDateRanges from "@/core/common/daterangepicker/datePicker";
import CommonFooter from "@/core/common/footer/commonFooter";
import CollapesIcon from "@/core/common/tooltip-content/collapes";
import RefreshIcon from "@/core/common/tooltip-content/refresh";
import { all_routes } from "@/data/all_routes";
import { Calendar, ChevronUp, Clock, RotateCcw } from "feather-icons-react";
import Link from "next/dist/client/link";
import SalesAnalysisChart from "../charts/salesanalysis";

export default function Salesdashboard() {
  const route = all_routes;
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="welcome d-lg-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center welcome-text">
            <h3 className="d-flex align-items-center">
              <img src="assets/img/icons/hi.svg" alt="img" />
              &nbsp;Hi John Smilga,
            </h3>
            &nbsp;
            <h6>here&apos;s what&apos;s happening with your store today.</h6>
          </div>
          <div className="d-flex align-items-center">
            <div className="input-icon-start position-relative me-2">
              <span className="input-icon-addon fs-16 text-gray-9">
                <i className="ti ti-calendar" />
              </span>
              <PredefinedDateRanges />
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>
        </div>
        <div className="row sales-cards">
          <div className="col-xl-6 col-sm-12 col-12 d-flex">
            <div className="card d-flex align-items-center justify-content-between flex-fill mb-4">
              <div>
                <h6>Weekly Earning</h6>
                <h3>
                  $
                  <span className="counters" data-count="95000.45">
                    95000.45
                  </span>
                </h3>
                <p className="sales-range">
                  <span className="text-success">
                    <ChevronUp className="feather-16" />
                    48%&nbsp;
                  </span>
                  increase compare to last week
                </p>
              </div>
              <img src="assets/img/icons/weekly-earning.svg" alt="img" />
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 d-flex">
            <div className="card color-info bg-primary flex-fill mb-4">
              <div className="mb-2">
                <img src="assets/img/icons/total-sales.svg" alt="img" />
              </div>
              <h3 className="counters" data-count={10000.0}>
                10,000+
              </h3>
              <p>No of Total Sales</p>
              {/* <i
                  data-feather="rotate-ccw"
                  className="feather-16"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Refresh"
                /> */}
              <RotateCcw className="feather feather-rotate-ccw feather-16" />
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 col-12 d-flex">
            <div className="card color-info bg-secondary flex-fill mb-4">
              <div className="mb-2">
                <img src="assets/img/icons/purchased-earnings.svg" alt="img" />
              </div>
              <h3 className="counters" data-count={800.0}>
                800+
              </h3>
              <p>No of Total Sales</p>
              {/* <i
                  data-feather="rotate-ccw"
                  className="feather-16"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title="Refresh"
                /> */}
              <RotateCcw className="feather feather-rotate-ccw feather-16" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xl-4 d-flex">
            <div className="card flex-fill w-100 mb-4">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title mb-0">Best Seller</h4>
                <Link href="#" className="btn btn-outline-light btn-sm">
                  View All
                </Link>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-borderless best-seller">
                    <tbody>
                      <tr>
                        <td className="pt-0 ps-0">
                          <div className="d-flex align-items-center">
                            <Link
                              href={route.productlist}
                              className="avatar avatar-lg me-2"
                            >
                              <img
                                src="assets/img/products/stock-img-01.png"
                                alt="img"
                              />
                            </Link>
                            <div>
                              <h6 className="fw-medium">
                                <Link
                                  href={route.productlist}
                                  className="fw-bold"
                                >
                                  Lenovo 3rd Generation
                                </Link>
                              </h6>
                              <p>$4420</p>
                            </div>
                          </div>
                        </td>
                        <td className="pt-0">
                          <p className="text-gray-9 mb-1">Sales</p>
                          <p className="text-gray-9 fw-medium">6547</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-0">
                          <div className="d-flex align-items-center">
                            <Link
                              href={route.productlist}
                              className="avatar avatar-lg me-2"
                            >
                              <img
                                src="assets/img/products/stock-img-02.png"
                                alt="img"
                              />
                            </Link>
                            <div>
                              <h6 className="fw-medium">
                                <Link
                                  href={route.productlist}
                                  className="fw-bold"
                                >
                                  Bold V3.2
                                </Link>
                              </h6>
                              <p>$1474</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-gray-9 mb-1">Sales</p>
                          <p className="text-gray-9 fw-medium">3474</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-0">
                          <div className="d-flex align-items-center">
                            <Link
                              href={route.productlist}
                              className="avatar avatar-lg me-2"
                            >
                              <img
                                src="assets/img/products/stock-img-06.png"
                                alt="img"
                              />
                            </Link>
                            <div>
                              <h6 className="fw-medium">
                                <Link
                                  href={route.productlist}
                                  className="fw-bold"
                                >
                                  Nike Jordan
                                </Link>
                              </h6>
                              <p>$8784</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-gray-9 mb-1">Sales</p>
                          <p className="text-gray-9 fw-medium">1478</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-0">
                          <div className="d-flex align-items-center">
                            <Link
                              href={route.productlist}
                              className="avatar avatar-lg me-2"
                            >
                              <img
                                src="assets/img/products/stock-img-03.png"
                                alt="img"
                              />
                            </Link>
                            <div>
                              <h6 className="fw-medium">
                                <Link
                                  href={route.productlist}
                                  className="fw-bold"
                                >
                                  Apple Series 5 Watch
                                </Link>
                              </h6>
                              <p>$3240</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-gray-9 mb-1">Sales</p>
                          <p className="text-gray-9 fw-medium">987</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="ps-0">
                          <div className="d-flex align-items-center">
                            <Link
                              href={route.productlist}
                              className="avatar avatar-lg me-2"
                            >
                              <img
                                src="assets/img/products/stock-img-04.png"
                                alt="img"
                              />
                            </Link>
                            <div>
                              <h6 className="fw-medium">
                                <Link
                                  href={route.productlist}
                                  className="fw-bold"
                                >
                                  Amazon Echo Dot
                                </Link>
                              </h6>
                              <p>$597</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <p className="text-gray-9 mb-1">Sales</p>
                          <p className="text-gray-9 fw-medium">784</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-xl-8 d-flex">
            <div className="card flex-fill w-100 mb-4">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4 className="card-title mb-0">Recent Transactions</h4>
                <Link
                  href={all_routes.purchasetransaction}
                  className="btn btn-outline-light btn-sm"
                >
                  View All
                </Link>
              </div>
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-borderless recent-transactions">
                    <thead className="thead-light">
                      <tr>
                        <th>#</th>
                        <th>Order Details</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              href={route.productlist}
                              className="avatar avatar-lg me-2"
                            >
                              <img
                                src="assets/img/products/stock-img-05.png"
                                alt="img"
                              />
                            </Link>
                            <div>
                              <h6 className="fw-bold">
                                <Link
                                  href={route.productlist}
                                  className="fw-bold"
                                >
                                  Lobar Handy
                                </Link>
                              </h6>
                              <span className="d-flex align-items-center">
                                <Clock className="feather-14" />
                                15 Mins
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="d-block head-text">Paypal</span>
                          <span className="text-blue">#416645453773</span>
                        </td>
                        <td>
                          <span className="badge badge-success badge-xs d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Success
                          </span>
                        </td>
                        <td className="fs-16 fw-bold text-gray-9">$1,099.00</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              href={route.productlist}
                              className="avatar avatar-lg me-2"
                            >
                              <img
                                src="assets/img/products/expire-product-01.png"
                                alt="img"
                              />
                            </Link>
                            <div>
                              <h6 className="fw-medium">
                                <Link
                                  href={route.productlist}
                                  className="fw-bold"
                                >
                                  Red Premium Handy
                                </Link>
                              </h6>
                              <span className="d-flex align-items-center">
                                <Clock className="feather-14" />
                                15 Mins
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="d-block head-text">Apple Pay</span>
                          <span className="text-blue">#147784454554</span>
                        </td>
                        <td>
                          <span className="badge badge-danger badge-xs d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Cancelled
                          </span>
                        </td>
                        <td className="fs-16 fw-bold text-gray-9">$600.55</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              href={route.productlist}
                              className="avatar avatar-lg me-2"
                            >
                              <img
                                src="assets/img/products/expire-product-02.png"
                                alt="img"
                              />
                            </Link>
                            <div>
                              <h6 className="fw-bold">
                                <Link
                                  href={route.productlist}
                                  className="fw-bold"
                                >
                                  Iphone 14 Pro
                                </Link>
                              </h6>
                              <span className="d-flex align-items-center">
                                <Clock className="feather-14" />
                                15 Mins
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="d-block head-text">Stripe</span>
                          <span className="text-blue">#147784454554</span>
                        </td>
                        <td>
                          <span className="badge badge-cyan badge-xs d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Completed
                          </span>
                        </td>
                        <td className="fs-16 fw-bold text-gray-9">$1,099.00</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              href={route.productlist}
                              className="avatar avatar-lg me-2"
                            >
                              <img
                                src="assets/img/products/expire-product-03.png"
                                alt="img"
                              />
                            </Link>
                            <div>
                              <h6 className="fw-bold">
                                <Link
                                  href={route.productlist}
                                  className="fw-bold"
                                >
                                  Black Slim 200
                                </Link>
                              </h6>
                              <span className="d-flex align-items-center">
                                <Clock className="feather-14" />
                                15 Mins
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="d-block head-text">PayU</span>
                          <span className="text-blue">#147784454554</span>
                        </td>
                        <td>
                          <span className="badge badge-success badge-xs d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Success
                          </span>
                        </td>
                        <td className="fs-16 fw-bold text-gray-9">$1,569.00</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <Link
                              href={route.productlist}
                              className="avatar avatar-lg me-2"
                            >
                              <img
                                src="assets/img/products/expire-product-04.png"
                                alt="img"
                              />
                            </Link>
                            <div>
                              <h6 className="fw-bold">
                                <Link
                                  href={route.productlist}
                                  className="fw-bold"
                                >
                                  Woodcraft Sandal
                                </Link>
                              </h6>
                              <span className="d-flex align-items-center">
                                <Clock className="feather-14" />
                                15 Mins
                              </span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="d-block head-text">Paytm</span>
                          <span className="text-blue">#147784454554</span>
                        </td>
                        <td>
                          <span className="badge badge-success badge-xs d-inline-flex align-items-center">
                            <i className="ti ti-circle-filled fs-5 me-1" />
                            Success
                          </span>
                        </td>
                        <td className="fs-16 fw-bold text-gray-9">$1,478.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Button trigger modal */}
        <div className="row sales-board">
          <div className="col-md-12 col-lg-7 col-sm-12 col-12 d-flex">
            <div className="card flex-fill flex-fill">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">Sales Analytics</h5>
                <div className="graph-sets">
                  <div className="dropdown dropdown-wraper">
                    <button
                      className="btn btn-white btn-sm dropdown-toggle d-flex align-items-center"
                      type="button"
                      id="dropdown-sales"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <Calendar className="feather-14" />
                      2023
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdown-sales"
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
              <div className="card-body pt-1 pb-0">
                <SalesAnalysisChart />
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-5 col-sm-12 col-12 d-flex">
            {/* World Map */}
            <div className="card flex-fill">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">Sales by Countries</h5>
                <div className="graph-sets">
                  <div className="dropdown dropdown-wraper">
                    <button
                      className="btn btn-white btn-sm dropdown-toggle d-flex align-items-center"
                      type="button"
                      id="dropdown-country-sales"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      This Week
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdown-country-sales"
                    >
                      <li>
                        <Link href="#" className="dropdown-item">
                          This Month
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="dropdown-item">
                          This Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div id="sales_db_world_map" style={{ height: "265px" }}>
                  <iframe
                    src="https://www.google.com/maps/embed"
                    style={{ border: "0", height: "265px", width: "364px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="contact-map"
                  />
                </div>
                <p className="sales-range">
                  <span className="text-success">
                    <ChevronUp className="feather-16" />
                    48%&nbsp;
                  </span>
                  increase compare to last week
                </p>
              </div>
            </div>
            {/* /World Map */}
          </div>
        </div>
      </div>
      <CommonFooter />
    </div>
  );
}
