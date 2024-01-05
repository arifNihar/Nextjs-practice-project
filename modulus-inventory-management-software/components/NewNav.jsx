export default function NewNav() {
  return (
    <div className="bg-indigo-700 product-header">
      <div className="clearfix product-header-inner">
        <a className="z-product-logo" href="/inventory/">
          Inventory
        </a>
        <span className="sub-menu-icon">Menu</span>
        <div className="zgh-accounts">
          <a
            href="https://accounts.zoho.com/signin?servicename=ZohoInventory&amp;signupurl=https://www.zoho.com/inventory/signup/index.html"
            className="inline-block zgh-login"
          >
            Sign In
          </a>
          <a
            href="/inventory/signup/?website.header"
            className="inline-block zgh-signup"
          >
            Sign Up Now
          </a>
        </div>
        <div className="zgh-localization init">
          <span className="zgh-localSelect">English</span>
          <div className="zgh-localBox">
            <ul>
              <li>
                <a href="https://www.zoho.com/de/inventory/">Deutsch</a>
              </li>
              <li>
                <a href="https://www.zoho.com/nl/inventory/">Nederlands</a>
              </li>
              <li>
                <a href="https://www.zoho.com/fr/inventory/">Français</a>
              </li>
              <li>
                <a href="https://www.zoho.com/es-xl/inventory/">
                  Español (Latinoamérica)
                </a>
              </li>
            </ul>
          </div>
        </div>
        <ul className="top-auto block h-auto product-menu scale">
          <li className="zom-dropdown-menu zom-features">
            <a href="/inventory/features/">
              Features <span className="triangle-down"></span>
            </a>
            <div className="clearfix zom-dropdown-list features-dropdown">
              <div className="features-dropdown-left">
                <div className="features-dropdown-left-list">
                  <h5>Inventory Solutions</h5>
                  <a href="/inventory/inventory-control-system/">
                    <img
                      className="svg-icon"
                      src="/inventory/images/svgs/inventory-control.svg"
                      alt="img"
                    />
                    &nbsp;&nbsp;Inventory Control
                  </a>
                  <a href="/inventory/warehouse-inventory-management/">
                    <img
                      className="svg-icon"
                      src="/inventory/images/svgs/warehouse-management.svg"
                      alt="img"
                    />
                    &nbsp;&nbsp;Warehouse Management
                  </a>
                  <a href="/inventory/multichannel-selling-software/">
                    <img
                      className="svg-icon"
                      src="/inventory/images/svgs/multichannel-selling.svg"
                      alt="img"
                    />
                    &nbsp;&nbsp;Multichannel Selling
                  </a>
                  <a href="/inventory/order-management/">
                    <img
                      className="svg-icon"
                      src="/inventory/images/svgs/order-management.svg"
                      alt="img"
                    />
                    &nbsp;&nbsp;Order Management
                  </a>
                  <a href="/inventory/order-fulfillment-software/">
                    <img
                      className="svg-icon"
                      src="/inventory/images/svgs/order-fulfillment.svg"
                      alt="img"
                    />
                    &nbsp;&nbsp;Order Fulfillment
                  </a>
                  <a href="/inventory/inventory-reports/">
                    <img
                      className="svg-icon"
                      src="/inventory/images/svgs/insightful-reports.svg"
                      alt="img"
                    />
                    &nbsp;&nbsp;Insightful Reports
                  </a>
                </div>
              </div>
              <div className="features-dropdown-right-list">
                <section className="dropdown-header">
                  <div className="horizontal-line"></div>
                  <div className="dropdown-heading">
                    <h5>Inventory Feature Tour</h5>
                  </div>
                  <div className="horizontal-line"></div>
                </section>
                <section className="dropdown-right-wrap">
                  <div className="dropdown-right-list">
                    <h5>
                      <a href="/inventory/features/#item-management">
                        Item management
                      </a>
                    </h5>
                    <p>
                      <a href="/inventory/item-grouping-bundling/">
                        Item grouping and bundling
                      </a>
                    </p>
                    <p>
                      <a href="/inventory/multi-warehouse-stock/">
                        Multi-warehouse management
                      </a>
                    </p>
                    <p>
                      <a href="/inventory/serial-batch-tracking/">
                        Serial and batch tracking
                      </a>
                    </p>
                  </div>
                  <div className="dropdown-right-list">
                    <h5>
                      <a href="/inventory/features/#customer-lifecycle">
                        Customer lifecycle
                      </a>
                    </h5>
                    <p>
                      <a href="/inventory/sales-order-management/">
                        Sales order management
                      </a>
                    </p>
                    <p>
                      <a href="/inventory/invoicing/">Invoicing</a>
                    </p>
                    <p>
                      <a href="/inventory/packaging/">Packaging and shipping</a>
                    </p>
                  </div>
                  <div className="dropdown-right-list">
                    <h5>
                      <a href="/inventory/features/#vendor-relations">
                        Vendor relations
                      </a>
                    </h5>
                    <p>
                      <a href="/inventory/vendor-price-list/">
                        Vendor price lists
                      </a>
                    </p>
                    <p>
                      <a href="/inventory/purchase-orders-billing-solution/">
                        Purchase order and billing solution
                      </a>
                    </p>
                    <p>
                      <a href="/inventory/backorders-dropshipments/">
                        Backorders and Dropshipments
                      </a>
                    </p>
                    <p>
                      <a href="/inventory/vendor-payments/">Vendor payments</a>
                    </p>

                    <p>
                      <a href="/inventory/purchase-order-templates/">
                        Purchase Order Templates
                      </a>
                    </p>
                  </div>
                  <div className="dropdown-right-list">
                    <h5>
                      <a href="/inventory/features/#automation">Automation</a>
                    </h5>
                    <p>
                      <a href="/inventory/customize-workflows-functions/">
                        Webhooks and custom functions
                      </a>
                    </p>
                    <p>
                      <a href="/inventory/email-field-automation/">
                        Email and field update
                      </a>
                    </p>
                  </div>
                  <div className="dropdown-right-list">
                    <h5>
                      <a href="/inventory/features/#smart-features">
                        Smart features
                      </a>
                    </h5>
                    <p>
                      <a href="/inventory/reporting-and-analytics/">
                        Reporting and analytics
                      </a>
                    </p>
                    <p>
                      <a href="/inventory/sku-generator/">SKU generator</a>
                    </p>
                    <p>
                      <a href="/inventory/reorder-point-calculator/">
                        Reorder points
                      </a>
                    </p>
                  </div>
                </section>
                <a href="/inventory/features/" className="dropdown-btn-section">
                  <p>View All Features</p>
                </a>
              </div>
            </div>
          </li>

          <li className="pricing-menu">
            <a href="/inventory/pricing/">Pricing</a>
          </li>
          <li className="customers-menu">
            <a href="/inventory/customer-testimonials/">Customers</a>
          </li>

          <li className="support-menu">
            <a href="/inventory/support/">Resources</a>
          </li>
          <li className="zom-dropdown-menu zom-more">
            <a>
              More <span className="triangle-down"></span>
            </a>
            <ul className="clearfix bg-indigo-500 zom-dropdown-list">
              <li className="text-gray-600 mob-menu">
                <a href="/inventory/mobile-apps/" className="text-gray-600">
                  Mobile
                </a>
              </li>

              <li className="businessguide-menu">
                <a href="/inventory/small-business-guides/">
                  Small Business Guides
                </a>
              </li>
              <li>
                <a href="/inventory/api/v1/">Developers</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
