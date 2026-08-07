import { bankingDetails } from "@/config/companyConfig"
export default function CommercialPage() {
  return (
    <div className="information-page">

      <h1>COMMERCIAL & BANKING DETAILS</h1>

      {/* Company */}

      <div className="commercial-company-box">

        <h2>SK INDUSTRIES</h2>

        <p>
          Khasra No. 196, Near Hero Motors,<br />
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
          <strong>Website:</strong> www.skindustriesco.in
        </p>

        <p>
          <strong>GST:</strong> 11111000222552
        </p>

      </div>


      {/* Bank Details */}

      <div className="bank-details">

  <h3>
    Bank Details
  </h3>

  <div className="bank-grid">

    <div>
      <strong>
        Account Name:
      </strong>

      <br />

      {bankingDetails.accountName}
    </div>


    <div>
      <strong>
        Bank Name:
      </strong>

      <br />

      {bankingDetails.bankName}
    </div>


    <div>
      <strong>
        Account Number:
      </strong>

      <br />

      {bankingDetails.accountNumber}
    </div>


    <div>
      <strong>
        IFSC Code:
      </strong>

      <br />

      {bankingDetails.ifsc}
    </div>


    <div>
      <strong>
        Branch:
      </strong>

      <br />

      {bankingDetails.branch}
    </div>

  </div>

</div>


      {/* Payment Terms */}

      <div className="info-section">

        <h2>Payment Terms</h2>

        <ol>

          <li>
            Payment terms shall be as mutually agreed between
            SK Industries and the customer.
          </li>

          <li>
            Advance payment, wherever applicable, shall be made
            before commencement of production or work.
          </li>

          <li>
            Balance payment shall be made as per the agreed
            quotation terms.
          </li>

          <li>
            Any applicable taxes shall be charged as per
            prevailing government regulations.
          </li>

        </ol>

      </div>


      {/* Delivery */}

      <div className="info-section">

        <h2>Delivery Terms</h2>

        <p>
          Delivery schedule will depend upon product availability,
          quantity, customization and site requirements.
        </p>

        <p>
          Transportation and unloading charges are not included
          unless specifically mentioned in the quotation.
        </p>

      </div>


      {/* Important Note */}

      <div className="commercial-note">

        <strong>Important Note:</strong>

        <p>
          Transport charges will be extra and shall be borne by
          the customer unless otherwise agreed in writing.
        </p>

      </div>


      {/* Signature */}

      {/* <div className="commercial-signature">

        <p>For SK Industries</p>

        <div className="signature-space"></div>

        <strong>Authorized Signatory</strong>

      </div> */}

    </div>
  )
}