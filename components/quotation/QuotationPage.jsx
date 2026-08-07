
export default function QuotationPage({
  quotationNo,
  quotationDate,
  customer,
  items = [],
  subtotal = 0,
  transportation = 0,
  gst = 0,
  gstAmount = 0,
  grandTotal = 0,
}) {

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(Number(amount || 0))
  }

  return (
    <div className="quotation-content">

      {/* HEADER */}
      <div className="quotation-header">

        <div className="quotation-company">

          <h1>SK INDUSTRIES</h1>

          <p>
            Khasra No. 196, Near Hero Motors,
            Dadri, G.B. Nagar, UP - 203207
          </p>

          <p>
            <strong>Phone:</strong> 9958202714
          </p>

          <p>
            <strong>Email:</strong>{" "}
            skindustriesmanufacturing@gmail.com
          </p>

          <p>
            <strong>Website:</strong>{" "}
            www.skindustriesco.in
          </p>

          <p>
            <strong>GST:</strong> 09BWNPS4642C1Z8
          </p>

        </div>

        <div className="quotation-meta">

          <h2>QUOTATION</h2>

          <p>
            <strong>Quotation No:</strong>{" "}
            {quotationNo || "-"}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {quotationDate || "-"}
          </p>

        </div>

      </div>


      {/* CUSTOMER DETAILS */}
      <div className="customer-section">

        <h3>Customer Details</h3>

        <div className="customer-grid">

          <div>
            <strong>Name:</strong>
            <br />
            {customer?.name || "-"}
          </div>

          <div>
            <strong>Company:</strong>
            <br />
            {customer?.company || "-"}
          </div>

          <div className="full-width">
            <strong>Address:</strong>
            <br />
            {customer?.address || "-"}
          </div>

          <div>
            <strong>Phone:</strong>
            <br />
            {customer?.phone || "-"}
          </div>

          <div>
            <strong>Email:</strong>
            <br />
            {customer?.email || "-"}
          </div>

        </div>

      </div>


      {/* PRODUCTS TABLE */}
      <table className="quotation-table">

        <thead>
          <tr>
            <th>S.No.</th>
            <th>Product / Description</th>
            <th>Qty.</th>
            <th>Rate</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>

          {items.length > 0 ? (

            items.map((item, index) => {

              const amount =
                Number(item.quantity || 0) *
                Number(item.rate || 0)

              return (
                <tr key={index}>

                  <td>
                    {index + 1}
                  </td>

                  <td>
                    <strong>
                      {item.product || "-"}
                    </strong>

                    {item.description && (
                      <div className="item-description">
                        {item.description}
                      </div>
                    )}
                  </td>

                  <td>
                    {item.quantity || 0}
                  </td>

                  <td>
                    {formatCurrency(item.rate)}
                  </td>

                  <td>
                    {formatCurrency(amount)}
                  </td>

                </tr>
              )

            })

          ) : (

            <tr>
              <td>1</td>
              <td>-</td>
              <td>0</td>
              <td>₹0.00</td>
              <td>₹0.00</td>
            </tr>

          )}

        </tbody>

      </table>


      {/* BILLING */}
      <div className="billing-section">

        <div className="billing-row">
          <span>Subtotal</span>

          <strong>
            {formatCurrency(subtotal)}
          </strong>
        </div>
        
        {/* <div className="billing-row">

          <span>
            Discount ({discount || 0}%)
          </span>

          <strong>
            - {formatCurrency(discountAmount)}
          </strong>

        </div> */}

        <div className="billing-row">

          <span>
            GST ({gst || 0}%)
          </span>

          <strong>
            {formatCurrency(gstAmount)}
          </strong>

        </div>

        <div className="billing-row">
          <span>Transportation</span>

          <strong>
            {formatCurrency(transportation)}
          </strong>
        </div>
        
        <div className="billing-total">

          <span>
            Grand Total
          </span>

          <strong>
            {formatCurrency(grandTotal)}
          </strong>

        </div>

      </div>


      {/* TRANSPORT NOTE */}
      <div className="transport-note">

        <strong>Note:</strong>

        <span>
          Transport charges will be extra.
        </span>

      </div>


      {/* SIGNATURE - BOTTOM RIGHT */}
      <div className="quotation-signature">

        <p>
          For SK Industries
        </p>

        <div className="signature-space"></div>

        <strong>
          Authorized Signatory
        </strong>

      </div>

    </div>
  )
}