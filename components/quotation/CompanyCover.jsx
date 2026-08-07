export default function CompanyCover() {
  return (
    <div className="quotation-cover">

      {/* =====================================================
          COMPANY HEADER
      ===================================================== */}

      <div className="cover-header">

        {/* Logo */}
        <div className="company-logo-box">
          <img
            src="/gallery/logo.png"
            alt="SK Industries Logo"
            className="company-logo"
          />
        </div>

        {/* Company Information */}
        <div className="company-details">

          <h1>S.K. INDUSTRIES</h1>

          <p>
            <strong> Khasra No. 196, Near Hero Motors, 
            Dadri, G.B. Nagar, UP - 203207</strong>
          </p>

          <p>
            <strong>Phone:</strong> 9958202714
          </p>

          <p>
            <strong>Email:</strong>{" "}
            skindustriesmanufacturing@gmail.com
          </p>

          <p>
            <strong>Website:</strong> www.skindustriesco.in
          </p>

          <p>
            <strong>GST:</strong> 09BWNPS4642C1Z8
          </p>

        </div>

      </div>


      {/* =====================================================
          QUOTATION COVER TITLE
      ===================================================== */}

      <div className="cover-title">

        {/* <h2>QUOTATION</h2> */}

        <p>
          Quality Industrial Products &amp; Portable Infrastructure Solutions
        </p>

      </div>


      {/* =====================================================
          PRODUCT SHOWCASE
      ===================================================== */}

      <div className="cover-products">

        {/* Product 1 */}
        <div className="cover-product-card">

          <img
            src="/gallery/puf-panel.jpeg"
            alt="PUF Panel"
          />

          <p>PUF Panel</p>

        </div>


        {/* Product 2 */}
        <div className="cover-product-card">

          <img
            src="/gallery/guard-room.jpeg"
            alt="Portable Security Room"
          />

          <p>Portable Security Room</p>

        </div>


        {/* Product 3 */}
        <div className="cover-product-card">

          <img
            src="/gallery/turbo-fan.jpg"
            alt="Air Turbo Ventilator"
          />

          <p>Air Turbo Ventilator</p>

        </div>


        {/* Product 4 */}
        <div className="cover-product-card">

          <img
            src="/gallery/Img6.jpeg"
            alt="Polycarbonate Sheets"
          />

          <p>Polycarbonate Sheets</p>

        </div>

      </div>


      {/* =====================================================
          COMPANY INTRODUCTION
      ===================================================== */}

      <div className="cover-introduction">

        <h3>INDUSTRIAL &amp; PORTABLE INFRASTRUCTURE SOLUTIONS</h3>

        <p>
          SK Industries is engaged in supplying quality industrial
          products and portable infrastructure solutions for commercial,
          industrial and construction requirements.
        </p>

      </div>


      {/* =====================================================
          DEALS IN
      ===================================================== */}

      <div className="deals-section">

        <h3>DEALS IN</h3>

        <p>
          PUF Panels &nbsp;•&nbsp;
          Portable Security Rooms &nbsp;•&nbsp;
          Portable Toilets &nbsp;•&nbsp;
          Container Offices &nbsp;•&nbsp;
          Pre Fabricated Buildings &nbsp;•&nbsp;
          Window Canopies &nbsp;•&nbsp;
          Polycarbonate Sheets &nbsp;•&nbsp;
          Air Turbo Ventilators
        </p>

      </div>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="cover-footer">

        <div>
          <strong>SK INDUSTRIES</strong>
        </div>

        <div>
          Quality&nbsp; • &nbsp;Reliability&nbsp; • &nbsp;Service
        </div>

      </div>

    </div>
  )
}