"use client";
/* eslint-disable @next/next/no-img-element */

import CommonFooter from "@/core/common/footer/commonFooter";
import CollapesIcon from "@/core/common/tooltip-content/collapes";
import RefreshIcon from "@/core/common/tooltip-content/refresh";
import Link from "next/link";

export default function WishlistComponent() {
  return (
    <div>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Wishlist</h4>
                <h6>Manage your wishlist</h6>
              </div>
            </div>
            <ul className="table-top-head">
              <RefreshIcon />
              <CollapesIcon />
            </ul>
          </div>
          <div className="wishlist-products p-4 bg-white">
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="mb-3">Products</h4>
              <div className="d-flex align-items-center mb-3">
                <div className="input-icon-start pos-search position-relative me-2">
                  <span className="input-icon-addon">
                    <i className="ti ti-search" />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Product"
                  />
                </div>
                <Link
                  href="#"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#remove_all"
                >
                  <i className="ti ti-trash" /> Remove All
                </Link>
              </div>
            </div>
            <div className="tabs_container">
              <div className="tab_content active" data-tab="all">
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card">
                      <Link href="#" className="img-bg">
                        <img
                          src="assets/img/products/pos-product-01.png"
                          alt="Products"
                        />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link href="#">IPhone 14 64GB</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          In Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$15800</p>
                        <Link href="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card">
                      <Link href="#" className="img-bg">
                        <img
                          src="assets/img/products/pos-product-02.png"
                          alt="Products"
                        />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link href="#">MacBook Pro</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          In Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$1000</p>
                        <Link href="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card">
                      <Link href="#" className="img-bg">
                        <img
                          src="assets/img/products/pos-product-03.png"
                          alt="Products"
                        />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link href="#">Rolex Tribute V3</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          In Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$6800</p>
                        <Link href="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card">
                      <Link href="#" className="img-bg">
                        <img
                          src="assets/img/products/pos-product-04.png"
                          alt="Products"
                        />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link href="#">Red Nike Angelo</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-danger shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          Out of Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$7800</p>
                        <Link href="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card ">
                      <Link href="#" className="img-bg">
                        <img
                          src="assets/img/products/pos-product-05.png"
                          alt="Products"
                        />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link href="#">Airpod 2</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          In Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$5478</p>
                        <Link href="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card">
                      <Link href="#" className="img-bg">
                        <img
                          src="assets/img/products/pos-product-06.png"
                          alt="Products"
                        />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link href="#">Blue White OGR</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          In Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$987</p>
                        <Link href="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card">
                      <Link href="#" className="img-bg">
                        <img
                          src="assets/img/products/pos-product-07.png"
                          alt="Products"
                        />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link href="#">IdeaPad Slim 5 Gen 7</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-danger shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          Out of Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$1454</p>
                        <Link href="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card">
                      <Link href="#" className="img-bg">
                        <img
                          src="assets/img/products/pos-product-08.png"
                          alt="Products"
                        />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link href="#">SWAGME</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          In Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$6587</p>
                        <Link href="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card">
                      <Link href="#" className="img-bg">
                        <img
                          src="assets/img/products/pos-product-09.png"
                          alt="Products"
                        />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link href="#">Timex Black Silver</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          In Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$1457</p>
                        <Link href="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                    <div className="product-info default-cover card">
                      <Link href="#" className="img-bg">
                        <img
                          src="assets/img/products/pos-product-10.png"
                          alt="Products"
                        />
                        <span
                          className=" p-1 rounded-circle d-flex align-items-center"
                          data-bs-toggle="modal"
                          data-bs-target="#remove"
                        >
                          <i className="ti ti-heart text-white" />
                        </span>
                      </Link>
                      <h6 className="product-name mb-1">
                        <Link href="#">Tablet 1.02 inch</Link>
                      </h6>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                          <span>
                            <i className="ti ti-star-filled text-warning me-1" />
                          </span>
                        </div>
                        <span className="badge badge-soft-success shadow-none badge-xs d-inline-flex align-items-center">
                          <i className="ti ti-point-filled" />
                          In Stock
                        </span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between price">
                        <p className="mb-0">$4744</p>
                        <Link href="#" className="btn btn-primary">
                          <i className="ti ti-shopping-cart me-1" />
                          Move to Cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CommonFooter />
      </div>
      <>
        {/* Remove Product */}
        <div className="modal fade modal-default" id="remove">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-0">
                <div className="success-wrap text-center">
                  <form>
                    <div className="icon-success bg-danger-transparent text-danger mb-2">
                      <i className="ti ti-trash" />
                    </div>
                    <h3 className="mb-2">Remove Product</h3>
                    <p className="fs-16 mb-3">
                      Are you sure you want to remove from wishlist?
                    </p>
                    <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                      <button
                        type="button"
                        className="btn btn-md btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        No, Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-md btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Yes, Delete
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Remove Product */}
        {/* Remove all Product */}
        <div className="modal fade modal-default" id="remove_all">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body p-0">
                <div className="success-wrap text-center">
                  <form>
                    <div className="icon-success bg-danger-transparent text-danger mb-2">
                      <i className="ti ti-trash" />
                    </div>
                    <h3 className="mb-2">Remove All Products</h3>
                    <p className="fs-16 mb-3">
                      Are you sure you want to remove all from wishlist?
                    </p>
                    <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                      <button
                        type="button"
                        className="btn btn-md btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        No, Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-md btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Yes, Delete
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Remove all Product */}
      </>
    </div>
  );
}
