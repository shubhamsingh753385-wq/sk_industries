'use client'

// import { useState } from 'react'
import { useState, useEffect } from 'react'
import { Plus, Trash2, LogOut, FileText, X, Printer } from 'lucide-react'
import { useRouter } from 'next/navigation'

import CompanyCover from "@/components/quotation/CompanyCover";
import QuotationPage from "@/components/quotation/QuotationPage";
import CommercialPage from "@/components/quotation/CommercialPage";
import AboutPage from "@/components/quotation/AboutPage";

import "@/components/quotation/quotation.css";

const productList = [
  'Air Turbo Ventilators',
  'PUF Panel',
  'Portable Security Room',
  'Window Canopy',
  'Pre Fabricated Building',
  'Portable Toilet',
  'Container Office',
  'Polycarbonate Sheets',
]

export default function QuotationGenerator() {
  const router = useRouter()
  useEffect(() => {
  const year = new Date().getFullYear()

  const storageKey = `skindustries_quotation_number_${year}`

  const lastNumber = Number(
    localStorage.getItem(storageKey) || 0
  )

  const nextNumber = lastNumber + 1

  setQuotationNumber(
    `SKI-${year}-${String(nextNumber).padStart(3, '0')}`
  )
}, [])
  // =====================================================
  // QUOTATION DETAILS
  // =====================================================

  // const [quotationNumber, setQuotationNumber] = useState(
  //   `SKI-${new Date().getFullYear()}-001`
  // )

  const [quotationNumber, setQuotationNumber] = useState('')  //automatic number change on every new quotation

  const [date, setDate] = useState(
    new Date().toISOString().split('T')[0]
  )

  // =====================================================
  // CUSTOMER
  // =====================================================

  const [customer, setCustomer] = useState({
    name: '',
    company: '',
    address: '',
    phone: '',
    email: '',
  })

  // =====================================================
  // ITEMS
  // =====================================================

  const [items, setItems] = useState([
    {
      product: '',
      description: '',
      quantity: 1,
      rate: 0,
    },
  ])

  // =====================================================
  // BILLING
  // =====================================================

  // const [discount, setDiscount] = useState(0)
  const [transportation, setTransportation] = useState(0)
  
  const [gst, setGst] = useState(18)

  // =====================================================
  // PREVIEW
  // =====================================================

  const [showPreview, setShowPreview] = useState(false)

  // =====================================================
  // CUSTOMER CHANGE
  // =====================================================

  const handleCustomerChange = (field, value) => {
    setCustomer((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  // =====================================================
  // ITEM CHANGE
  // =====================================================

  const handleItemChange = (index, field, value) => {
    setItems((prev) => {
      const updated = [...prev]

      updated[index] = {
        ...updated[index],
        [field]:
          field === 'quantity' || field === 'rate'
            ? Number(value)
            : value,
      }

      return updated
    })
  }

  // =====================================================
  // ADD ITEM
  // =====================================================

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      {
        product: '',
        description: '',
        quantity: 1,
        rate: 0,
      },
    ])
  }

  // =====================================================
  // REMOVE ITEM
  // =====================================================

  const removeItem = (index) => {
    if (items.length === 1) return

    setItems((prev) => prev.filter((_, i) => i !== index))
  }

  // =====================================================
  // ITEM AMOUNT
  // =====================================================

  const getItemAmount = (item) => {
    return (
      Number(item.quantity || 0) *
      Number(item.rate || 0)
    )
  }

  // =====================================================
  // CALCULATIONS
  // =====================================================

  const subtotal = items.reduce(
    (total, item) => total + getItemAmount(item),
    0
  )

  // const discountAmount =
  //   (subtotal * Number(discount || 0)) / 100

  // const taxableAmount =
  //   subtotal - discountAmount

  // const gstAmount =
  //   (taxableAmount * Number(gst || 0)) / 100

  // const grandTotal =
  //   taxableAmount + gstAmount
  const gstAmount =
    (subtotal * Number(gst || 0)) / 100

  const grandTotal =
    subtotal + gstAmount + Number(transportation || 0)
  // =====================================================
  // CURRENCY
  // =====================================================

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
    }).format(amount || 0)
  }

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', {
        method: 'POST',
      })
    } catch (error) {
      console.error(error)
    }

    router.push('/admin/login')
    router.refresh()
  }

  // =====================================================
  // PRINT
  // =====================================================

  const handlePrint = () => {
  // Hide toolbar and reduce overlay padding to ensure pages start at top
  const toolbar = document.querySelector('.quotation-preview-toolbar')
  const overlay = document.querySelector('.quotation-preview-overlay')

  const prevToolbarDisplay = toolbar?.style.display
  const prevOverlayPadding = overlay?.style.padding

  if (toolbar) toolbar.style.display = 'none'
  if (overlay) overlay.style.padding = '0'

  // Print and then restore UI
  try {
    window.print()
  } finally {
    // Delay restore slightly because some browsers snapshot layout for print
    setTimeout(() => {
      if (toolbar) toolbar.style.display = prevToolbarDisplay || ''
      if (overlay) overlay.style.padding = prevOverlayPadding || ''

      // ==========================================
      // INCREMENT QUOTATION NUMBER
      // ==========================================

      const year = new Date().getFullYear()

      const storageKey = `skindustries_quotation_number_${year}`

      const currentNumber = Number(
        localStorage.getItem(storageKey) || 0
      )

      const nextNumber = currentNumber + 1

      // Save latest number
      localStorage.setItem(
        storageKey,
        String(nextNumber)
      )

      // Set number for next quotation
      setQuotationNumber(
        `SKI-${year}-${String(nextNumber + 1).padStart(3, '0')}`
      )

    }, 300)
  }
}

  // =====================================================
  // OPEN PREVIEW
  // =====================================================

  const openPreview = () => {
    setShowPreview(true)
  }

  // =====================================================
  // CLOSE PREVIEW
  // =====================================================

  const closePreview = () => {
    setShowPreview(false)
  }

  return (
    <div className="min-h-screen bg-slate-100">

      {/* =================================================
          ADMIN HEADER
      ================================================= */}

      <header className="bg-blue-900 text-white shadow-md">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              SK Industries
            </h1>

            <p className="text-blue-200 text-sm">
              Admin Quotation Generator
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>

        </div>

      </header>


      {/* =================================================
          MAIN FORM
      ================================================= */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

        {/* TITLE */}

        <div className="flex items-center gap-3 mb-8">

          <div className="bg-orange-500 p-3 rounded-xl">
            <FileText className="w-7 h-7 text-white" />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Create New Quotation
            </h2>

            <p className="text-gray-500">
              Create a professional quotation for your customer.
            </p>
          </div>

        </div>


        {/* =================================================
            QUOTATION DETAILS
        ================================================= */}

        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

          <h3 className="text-lg font-semibold mb-5">
            Quotation Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>

              <label className="block text-sm font-medium mb-2">
                Quotation Number
              </label>

              <input
                type="text"
                value={quotationNumber}
                onChange={(e) =>
                  setQuotationNumber(e.target.value)
                }
                className="w-full border rounded-lg px-3 py-2.5"
              />

            </div>

            <div>

              <label className="block text-sm font-medium mb-2">
                Date
              </label>

              <input
                type="date"
                value={date}
                onChange={(e) =>
                  setDate(e.target.value)
                }
                className="w-full border rounded-lg px-3 py-2.5"
              />

            </div>

          </div>

        </div>


        {/* =================================================
            CUSTOMER DETAILS
        ================================================= */}

        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

          <h3 className="text-lg font-semibold mb-5">
            Customer Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* NAME */}

            <div>

              <label className="block text-sm font-medium mb-2">
                Customer Name
              </label>

              <input
                value={customer.name}
                onChange={(e) =>
                  handleCustomerChange(
                    'name',
                    e.target.value
                  )
                }
                placeholder="Customer name"
                className="w-full border rounded-lg px-3 py-2.5"
              />

            </div>


            {/* COMPANY */}

            <div>

              <label className="block text-sm font-medium mb-2">
                Company Name
              </label>

              <input
                value={customer.company}
                onChange={(e) =>
                  handleCustomerChange(
                    'company',
                    e.target.value
                  )
                }
                placeholder="Company name"
                className="w-full border rounded-lg px-3 py-2.5"
              />

            </div>


            {/* ADDRESS */}

            <div className="md:col-span-2">

              <label className="block text-sm font-medium mb-2">
                Address
              </label>

              <textarea
                value={customer.address}
                onChange={(e) =>
                  handleCustomerChange(
                    'address',
                    e.target.value
                  )
                }
                rows={3}
                placeholder="Customer address"
                className="w-full border rounded-lg px-3 py-2.5"
              />

            </div>


            {/* PHONE */}

            <div>

              <label className="block text-sm font-medium mb-2">
                Phone
              </label>

              <input
                value={customer.phone}
                onChange={(e) =>
                  handleCustomerChange(
                    'phone',
                    e.target.value
                  )
                }
                placeholder="Phone number"
                className="w-full border rounded-lg px-3 py-2.5"
              />

            </div>


            {/* EMAIL */}

            <div>

              <label className="block text-sm font-medium mb-2">
                Email
              </label>

              <input
                value={customer.email}
                onChange={(e) =>
                  handleCustomerChange(
                    'email',
                    e.target.value
                  )
                }
                placeholder="Email address"
                className="w-full border rounded-lg px-3 py-2.5"
              />

            </div>

          </div>

        </div>


        {/* =================================================
            PRODUCTS
        ================================================= */}

        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

          <div className="flex justify-between items-center mb-5">

            <div>

              <h3 className="text-lg font-semibold">
                Products / Items
              </h3>

              <p className="text-sm text-gray-500">
                Add products to the quotation.
              </p>

            </div>

            <button
              type="button"
              onClick={addItem}
              className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
            >
              <Plus className="w-4 h-4" />
              Add Item
            </button>

          </div>


          <div className="space-y-5">

            {items.map((item, index) => (

              <div
                key={index}
                className="border rounded-xl p-4"
              >

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

                  {/* PRODUCT */}

                  <div className="md:col-span-4">

                    <label className="block text-sm font-medium mb-2">
                      Product
                    </label>

                    <select
                      value={item.product}
                      onChange={(e) =>
                        handleItemChange(
                          index,
                          'product',
                          e.target.value
                        )
                      }
                      className="w-full border rounded-lg px-3 py-2.5 bg-white"
                    >

                      <option value="">
                        Select Product
                      </option>

                      {productList.map((product) => (

                        <option
                          key={product}
                          value={product}
                        >
                          {product}
                        </option>

                      ))}

                    </select>

                  </div>


                  {/* DESCRIPTION */}

                  <div className="md:col-span-8">

                    <label className="block text-sm font-medium mb-2">
                      Description
                    </label>

                    <input
                      value={item.description}
                      onChange={(e) =>
                        handleItemChange(
                          index,
                          'description',
                          e.target.value
                        )
                      }
                      placeholder="Product specifications"
                      className="w-full border rounded-lg px-3 py-2.5"
                    />

                  </div>


                  {/* QUANTITY */}

                  <div className="md:col-span-3">

                    <label className="block text-sm font-medium mb-2">
                      Quantity
                    </label>

                    <input
                      type="number"
                      min="0"
                      value={item.quantity}
                      onChange={(e) =>
                        handleItemChange(
                          index,
                          'quantity',
                          e.target.value
                        )
                      }
                      className="w-full border rounded-lg px-3 py-2.5"
                    />

                  </div>


                  {/* RATE */}

                  <div className="md:col-span-3">

                    <label className="block text-sm font-medium mb-2">
                      Rate (₹)
                    </label>

                    <input
                      type="number"
                      min="0"
                      value={item.rate}
                      onChange={(e) =>
                        handleItemChange(
                          index,
                          'rate',
                          e.target.value
                        )
                      }
                      className="w-full border rounded-lg px-3 py-2.5"
                    />

                  </div>


                  {/* AMOUNT */}

                  <div className="md:col-span-4">

                    <label className="block text-sm font-medium mb-2">
                      Amount
                    </label>

                    <div className="bg-gray-100 border rounded-lg px-3 py-2.5 font-semibold">
                      {formatCurrency(
                        getItemAmount(item)
                      )}
                    </div>

                  </div>


                  {/* REMOVE */}

                  <div className="md:col-span-2 flex items-end">

                    <button
                      type="button"
                      disabled={items.length === 1}
                      onClick={() =>
                        removeItem(index)
                      }
                      className="w-full flex justify-center items-center gap-2 border border-red-200 text-red-600 rounded-lg px-3 py-2.5 disabled:opacity-30"
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>


        {/* =================================================
            BILLING
        ================================================= */}

        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">

          <h3 className="text-lg font-semibold mb-5">
            Billing
          </h3>

          <div className="max-w-md ml-auto space-y-4">

            <div className="flex justify-between">
              <span>Subtotal</span>
              <strong>
                {formatCurrency(subtotal)}
              </strong>
            </div>


            {/* <div className="flex justify-between items-center">

              <span>Discount (%)</span>

              <input
                type="number"
                min="0"
                value={discount}
                onChange={(e) =>
                  setDiscount(Number(e.target.value))
                }
                className="w-24 border rounded-lg px-3 py-2 text-right"
              />

            </div>


            <div className="flex justify-between">

              <span>Discount Amount</span>

              <strong>
                - {formatCurrency(discountAmount)}
              </strong>

            </div> */}
            


            <div className="flex justify-between items-center">

              <span>GST (%)</span>

              <input
                type="number"
                min="0"
                value={gst}
                onChange={(e) =>
                  setGst(Number(e.target.value))
                }
                className="w-24 border rounded-lg px-3 py-2 text-right"
              />

            </div>


            <div className="flex justify-between">

              <span>GST Amount</span>

              <strong>
                {formatCurrency(gstAmount)}
              </strong>

            </div>

            <div className="flex justify-between items-center">

            <span>Transportation Charges (₹)</span>

            <input
              type="number"
              min="0"
              value={transportation}
              onChange={(e) =>
                setTransportation(Number(e.target.value))
              }
              className="w-32 border rounded-lg px-3 py-2 text-right"
            />

          </div>


            <div className="border-t pt-4 flex justify-between">

              <span className="text-xl font-bold">
                Grand Total
              </span>

              <span className="text-2xl font-bold text-blue-900">
                {formatCurrency(grandTotal)}
              </span>

            </div>

          </div>

        </div>


        {/* =================================================
            PREVIEW BUTTON
        ================================================= */}

        <div className="flex justify-end">

          <button
            type="button"
            onClick={openPreview}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg"
          >
            <FileText className="w-5 h-5" />
            Preview Quotation
          </button>

        </div>

      </main>


      {/* =========================================================
          PREVIEW MODAL
      ========================================================= */}

      {showPreview && (
  <div className="quotation-preview-overlay">

    {/* Preview Toolbar */}

    <div className="quotation-preview-toolbar">

      <button
        type="button"
        onClick={() => setShowPreview(false)}
        className="preview-close-btn"
      >
        Close Preview
      </button>

      <button
        type="button"
        onClick={handlePrint}
        className="preview-print-btn"
      >
        Print Quotation
      </button>

    </div>


    {/* PRINT AREA */}

    <div id="quotation-print">


      {/* =========================
          PAGE 1
      ========================= */}

      <div className="quotation-page">

        <CompanyCover />

      </div>


      {/* =========================
          PAGE 2
      ========================= */}

      <div className="quotation-page">

        <QuotationPage
          quotationNo={quotationNumber}
          quotationDate={date}
          customer={customer}
          items={items}
          subtotal={subtotal}
          transportation={transportation}
          gst={gst}
          gstAmount={gstAmount}
          grandTotal={grandTotal}
        />

      </div>


      {/* =========================
          PAGE 3
      ========================= */}

      <div className="quotation-page">

        <CommercialPage />

      </div>


      {/* =========================
          PAGE 4
      ========================= */}

      <div className="quotation-page">

        <AboutPage />

      </div>


    </div>

  </div>
)}

    </div>
  )
}