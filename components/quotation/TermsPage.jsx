export default function TermsPage() {
  return (
    <div className="a4-page bg-white text-black p-10 relative">

      {/* Header */}

      <div className="border-b-4 border-blue-900 pb-4">

        <h1 className="text-4xl font-bold text-blue-900">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mt-2">
          SK Industries
        </p>

      </div>

      {/* Terms */}

      <div className="mt-8">

        <h2 className="text-2xl font-bold text-orange-600 mb-4">
          General Terms
        </h2>

        <ol className="list-decimal ml-6 space-y-3 leading-7">

          <li>
            This quotation is valid for <strong>15 days</strong> from the date of issue.
          </li>

          <li>
            GST will be charged as applicable unless specifically mentioned otherwise.
          </li>

          <li>
            Transport, unloading and installation charges are extra unless included in the quotation.
          </li>

          <li>
            Delivery schedule will commence after receipt of confirmed purchase order and agreed advance payment.
          </li>

          <li>
            Any change in specifications after confirmation may result in revised pricing and delivery schedule.
          </li>

          <li>
            Goods once dispatched cannot be returned without prior written approval.
          </li>

          <li>
            Delay caused due to natural calamities, transportation issues or government restrictions shall not be considered the responsibility of SK Industries.
          </li>

          <li>
            Any dispute shall be subject to the jurisdiction of Dadri, Uttar Pradesh only.
          </li>

        </ol>

      </div>

      {/* Payment Terms */}

      <div className="mt-10">

        <h2 className="text-2xl font-bold text-orange-600 mb-4">
          Payment Terms
        </h2>

        <div className="border rounded-lg p-5 bg-gray-50">

          <ul className="space-y-2">

            <li>• 50% Advance along with Purchase Order.</li>

            <li>• Balance payment before dispatch.</li>

            <li>• Payment through NEFT / RTGS / IMPS / Bank Transfer.</li>

            <li>• Prices are subject to change if raw material prices increase before order confirmation.</li>

          </ul>

        </div>

      </div>

      {/* Warranty */}

      <div className="mt-10">

        <h2 className="text-2xl font-bold text-orange-600 mb-4">
          Warranty
        </h2>

        <p className="leading-7">

          SK Industries assures quality workmanship and manufacturing standards.
          Warranty is applicable only against manufacturing defects and does not
          cover damage caused by improper handling, misuse, accidents or natural disasters.

        </p>

      </div>

      {/* Bank */}

      <div className="mt-10">

        <h2 className="text-2xl font-bold text-orange-600 mb-4">
          Bank Details
        </h2>

        <table className="w-full border">

          <tbody>

            <tr>

              <td className="border p-3 font-semibold w-52">
                Bank Name
              </td>

              <td className="border p-3">
                ABC Bank Ltd.
              </td>

            </tr>

            <tr>

              <td className="border p-3 font-semibold">
                Account Name
              </td>

              <td className="border p-3">
                SK Industries
              </td>

            </tr>

            <tr>

              <td className="border p-3 font-semibold">
                Account Number
              </td>

              <td className="border p-3">
                XXXXXXXXXXXXXX
              </td>

            </tr>

            <tr>

              <td className="border p-3 font-semibold">
                IFSC Code
              </td>

              <td className="border p-3">
                ABCD0001234
              </td>

            </tr>

            <tr>

              <td className="border p-3 font-semibold">
                Branch
              </td>

              <td className="border p-3">
                Dadri
              </td>

            </tr>

          </tbody>

        </table>

      </div>

      {/* Declaration */}

      <div className="mt-10 border-l-4 border-blue-900 bg-blue-50 p-5">

        <h2 className="text-xl font-bold text-blue-900 mb-2">
          Declaration
        </h2>

        <p className="leading-7">

          We hereby declare that the information provided in this quotation is true
          and correct to the best of our knowledge. We assure quality products,
          competitive pricing and timely delivery.

        </p>

      </div>

      {/* Thank You */}

      <div className="absolute bottom-10 left-0 right-0 text-center">

        <h2 className="text-3xl font-bold text-blue-900">
          THANK YOU
        </h2>

        <p className="mt-2 text-gray-700">
          We appreciate your business and look forward to serving you.
        </p>

        <div className="mt-6">

          <h3 className="font-bold text-lg">
            SK INDUSTRIES
          </h3>

          <p>Khasra No. 196, Near Hero Motors</p>

          <p>Dadri, G.B. Nagar, Uttar Pradesh - 203207</p>

          <p>📞 +91 9958202714</p>

          <p>✉ skindustriesmanufacturing@gmail.com</p>

          <p>🌐 www.skindustriesco.in</p>

        </div>

      </div>

    </div>
  );
}