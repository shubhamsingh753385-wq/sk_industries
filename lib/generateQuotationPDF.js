import { jsPDF } from "jspdf"
import { PDFDocument } from "pdf-lib"

export async function generateQuotationPDF({
  quotationNo,
  quotationDate,
  customer,
  items,
  subtotal,
  discount,
  discountAmount,
  gst,
  gstAmount,
  grandTotal,
}) {

  // =====================================================
  // CREATE PAGE 2
  // =====================================================

  const page2 = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  })

  const pageWidth = 210
  const margin = 15
  const contentWidth = pageWidth - margin * 2

  const blue = [30, 58, 138]
  const orange = [234, 88, 12]
  const gray = [55, 65, 81]
  const lightGray = [229, 231, 235]

  const currency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(Number(amount || 0))
  }

  // =====================================================
  // HEADER
  // =====================================================

  page2.setTextColor(...blue)
  page2.setFont("helvetica", "bold")
  page2.setFontSize(18)

  page2.text("SK INDUSTRIES", margin, 18)

  page2.setTextColor(...gray)
  page2.setFont("helvetica", "normal")
  page2.setFontSize(8)

  page2.text(
    "Khasra No. 196, Near Hero Motors,",
    margin,
    24
  )

  page2.text(
    "Dadri, G.B. Nagar, UP - 203207",
    margin,
    28
  )

  page2.text(
    "Phone: 9958202714",
    margin,
    32
  )

  page2.text(
    "Email: skindustriesmanufacturing@gmail.com",
    margin,
    36
  )

  page2.text(
    "Website: www.skindustriesco.in",
    margin,
    40
  )

  page2.text(
    "GST: 11111000222552",
    margin,
    44
  )

  // =====================================================
  // QUOTATION META
  // =====================================================

  page2.setTextColor(...orange)
  page2.setFont("helvetica", "bold")
  page2.setFontSize(18)

  page2.text(
    "QUOTATION",
    pageWidth - margin,
    18,
    { align: "right" }
  )

  page2.setTextColor("#111827")
  page2.setFontSize(8)

  page2.text(
    `Quotation No: ${quotationNo || "-"}`,
    pageWidth - margin,
    25,
    { align: "right" }
  )

  page2.text(
    `Date: ${quotationDate || "-"}`,
    pageWidth - margin,
    30,
    { align: "right" }
  )

  // Header line
  page2.setDrawColor(...blue)
  page2.setLineWidth(0.5)

  page2.line(
    margin,
    49,
    pageWidth - margin,
    49
  )

  // =====================================================
  // CUSTOMER DETAILS
  // =====================================================

  let y = 56

  page2.setFillColor(...blue)

  page2.rect(
    margin,
    y,
    contentWidth,
    8,
    "F"
  )

  page2.setTextColor(255, 255, 255)
  page2.setFont("helvetica", "bold")
  page2.setFontSize(8)

  page2.text(
    "Customer Details",
    margin + 3,
    y + 5.5
  )

  y += 8

  page2.setDrawColor(...lightGray)
  page2.rect(
    margin,
    y,
    contentWidth,
    38
  )

  page2.setTextColor("#111827")
  page2.setFontSize(7)

  // Name
  page2.setFont("helvetica", "bold")
  page2.text("Name:", margin + 3, y + 6)

  page2.setFont("helvetica", "normal")
  page2.text(
    customer?.name || "-",
    margin + 3,
    y + 11
  )

  // Company
  page2.setFont("helvetica", "bold")
  page2.text(
    "Company:",
    margin + contentWidth / 2 + 3,
    y + 6
  )

  page2.setFont("helvetica", "normal")
  page2.text(
    customer?.company || "-",
    margin + contentWidth / 2 + 3,
    y + 11
  )

  // Horizontal line
  page2.line(
    margin,
    y + 15,
    margin + contentWidth,
    y + 15
  )

  // Address
  page2.setFont("helvetica", "bold")
  page2.text(
    "Address:",
    margin + 3,
    y + 21
  )

  page2.setFont("helvetica", "normal")

  const addressLines = page2.splitTextToSize(
    customer?.address || "-",
    contentWidth - 10
  )

  page2.text(
    addressLines.slice(0, 2),
    margin + 3,
    y + 26
  )

  page2.line(
    margin,
    y + 30,
    margin + contentWidth,
    y + 30
  )

  // Phone
  page2.setFont("helvetica", "bold")
  page2.text(
    "Phone:",
    margin + 3,
    y + 36
  )

  page2.setFont("helvetica", "normal")
  page2.text(
    customer?.phone || "-",
    margin + 25,
    y + 36
  )

  // Email
  page2.setFont("helvetica", "bold")
  page2.text(
    "Email:",
    margin + contentWidth / 2 + 3,
    y + 36
  )

  page2.setFont("helvetica", "normal")
  page2.text(
    customer?.email || "-",
    margin + contentWidth / 2 + 25,
    y + 36
  )

  y += 45

  // =====================================================
  // PRODUCT TABLE
  // =====================================================

  const tableX = margin
  const tableWidth = contentWidth

  const colWidths = [
    15,
    90,
    15,
    35,
    40,
  ]

  const headers = [
    "S.No.",
    "Product / Description",
    "Qty.",
    "Rate",
    "Amount",
  ]

  const rowHeight = 10

  page2.setFillColor(...blue)

  page2.rect(
    tableX,
    y,
    tableWidth,
    rowHeight,
    "F"
  )

  page2.setTextColor(255, 255, 255)
  page2.setFont("helvetica", "bold")
  page2.setFontSize(7)

  let x = tableX

  headers.forEach((header, index) => {

    page2.text(
      header,
      x + colWidths[index] / 2,
      y + 6.5,
      { align: "center" }
    )

    x += colWidths[index]
  })

  y += rowHeight

  const quotationItems =
    items && items.length > 0
      ? items
      : [{
          product: "-",
          description: "",
          quantity: 0,
          rate: 0,
        }]

  page2.setTextColor("#111827")
  page2.setFont("helvetica", "normal")

  quotationItems.forEach((item, index) => {

    page2.setDrawColor(...lightGray)

    page2.rect(
      tableX,
      y,
      tableWidth,
      rowHeight
    )

    let cellX = tableX

    const amount =
      Number(item.quantity || 0) *
      Number(item.rate || 0)

    const values = [
      String(index + 1),
      item.product || "-",
      String(item.quantity || 0),
      currency(item.rate),
      currency(amount),
    ]

    values.forEach((value, colIndex) => {

      const align =
        colIndex === 1
          ? "left"
          : "center"

      page2.text(
        value,
        align === "left"
          ? cellX + 2
          : cellX + colWidths[colIndex] / 2,
        y + 6.5,
        { align }
      )

      cellX += colWidths[colIndex]
    })

    y += rowHeight
  })

  // =====================================================
  // BILLING
  // =====================================================

  y += 8

  const billingX = 125
  const billingWidth = 70

  page2.setFontSize(8)

  const billingRow = (label, value) => {

    page2.setTextColor(...gray)

    page2.text(
      label,
      billingX,
      y
    )

    page2.setTextColor("#111827")

    page2.text(
      value,
      billingX + billingWidth,
      y,
      { align: "right" }
    )

    y += 7
  }

  billingRow(
    "Subtotal",
    currency(subtotal)
  )

  billingRow(
    `Discount (${discount || 0}%)`,
    `- ${currency(discountAmount)}`
  )

  billingRow(
    `GST (${gst || 0}%)`,
    currency(gstAmount)
  )

  page2.setDrawColor(...blue)

  page2.line(
    billingX,
    y - 3,
    billingX + billingWidth,
    y - 3
  )

  page2.setFont("helvetica", "bold")
  page2.setFontSize(10)

  page2.text(
    "Grand Total",
    billingX,
    y + 4
  )

  page2.text(
    currency(grandTotal),
    billingX + billingWidth,
    y + 4,
    { align: "right" }
  )

  y += 15

  // =====================================================
  // TRANSPORT NOTE
  // =====================================================

  page2.setFillColor(255, 251, 235)
  page2.setDrawColor(245, 158, 11)

  page2.rect(
    margin,
    y,
    contentWidth,
    10,
    "FD"
  )

  page2.setTextColor(120, 53, 15)
  page2.setFont("helvetica", "bold")
  page2.setFontSize(7)

  page2.text(
    "Note:",
    margin + 3,
    y + 6
  )

  page2.setFont("helvetica", "normal")

  page2.text(
    "Transport charges will be extra.",
    margin + 18,
    y + 6
  )

  y += 17

  // =====================================================
  // BANK DETAILS
  // =====================================================

  page2.setFillColor(...blue)

  page2.rect(
    margin,
    y,
    contentWidth,
    8,
    "F"
  )

  page2.setTextColor(255, 255, 255)
  page2.setFont("helvetica", "bold")
  page2.setFontSize(8)

  page2.text(
    "Bank Details",
    margin + 3,
    y + 5.5
  )

  y += 8

  page2.setTextColor("#111827")
  page2.setFontSize(7)

  page2.setDrawColor(...lightGray)

  page2.rect(
    margin,
    y,
    contentWidth,
    32
  )

  const leftX = margin + 3
  const rightX = margin + contentWidth / 2 + 3

  page2.setFont("helvetica", "bold")
  page2.text("Account Name:", leftX, y + 6)
  page2.text("Bank Name:", rightX, y + 6)

  page2.setFont("helvetica", "normal")
  page2.text("SK Industries", leftX, y + 11)
  page2.text("ABC Bank", rightX, y + 11)

  page2.line(
    margin,
    y + 16,
    margin + contentWidth,
    y + 16
  )

  page2.setFont("helvetica", "bold")
  page2.text("Account Number:", leftX, y + 22)
  page2.text("IFSC Code:", rightX, y + 22)

  page2.setFont("helvetica", "normal")
  page2.text("000000000000", leftX, y + 27)
  page2.text("ABCD0000000", rightX, y + 27)

  page2.line(
    margin,
    y + 32,
    margin + contentWidth,
    y + 32
  )

  // =====================================================
  // SIGNATURE
  // =====================================================

  page2.setFont("helvetica", "normal")
  page2.setFontSize(7)

  page2.text(
    "For SK Industries",
    pageWidth - margin,
    270,
    { align: "right" }
  )

  page2.setFont("helvetica", "bold")

  page2.text(
    "Authorized Signatory",
    pageWidth - margin,
    282,
    { align: "right" }
  )


  // =====================================================
  // CONVERT PAGE 2 TO BYTES
  // =====================================================

  const page2Bytes = page2.output("arraybuffer")


  // =====================================================
  // LOAD FINAL PDF
  // =====================================================

  const finalPdf = await PDFDocument.create()

  const fixedPages = [
    "/quotation-pages/pg1.pdf",
    null,
    "/quotation-pages/pg3.pdf",
    "/quotation-pages/pg4.pdf",
  ]


  // =====================================================
  // PAGE 1
  // =====================================================

  const pg1Response = await fetch(
    "/quotation-pages/pg1.pdf"
  )

  const pg1Bytes =
    await pg1Response.arrayBuffer()

  const pg1Pdf =
    await PDFDocument.load(pg1Bytes)

  const pg1Pages =
    await finalPdf.copyPages(
      pg1Pdf,
      pg1Pdf.getPageIndices()
    )

  pg1Pages.forEach((page) => {
    finalPdf.addPage(page)
  })


  // =====================================================
  // PAGE 2
  // =====================================================

  const dynamicPdf =
    await PDFDocument.load(page2Bytes)

  const dynamicPages =
    await finalPdf.copyPages(
      dynamicPdf,
      dynamicPdf.getPageIndices()
    )

  dynamicPages.forEach((page) => {
    finalPdf.addPage(page)
  })


  // =====================================================
  // PAGE 3
  // =====================================================

  const pg3Response = await fetch(
    "/quotation-pages/pg3.pdf"
  )

  const pg3Bytes =
    await pg3Response.arrayBuffer()

  const pg3Pdf =
    await PDFDocument.load(pg3Bytes)

  const pg3Pages =
    await finalPdf.copyPages(
      pg3Pdf,
      pg3Pdf.getPageIndices()
    )

  pg3Pages.forEach((page) => {
    finalPdf.addPage(page)
  })


  // =====================================================
  // PAGE 4
  // =====================================================

  const pg4Response = await fetch(
    "/quotation-pages/pg4.pdf"
  )

  const pg4Bytes =
    await pg4Response.arrayBuffer()

  const pg4Pdf =
    await PDFDocument.load(pg4Bytes)

  const pg4Pages =
    await finalPdf.copyPages(
      pg4Pdf,
      pg4Pdf.getPageIndices()
    )

  pg4Pages.forEach((page) => {
    finalPdf.addPage(page)
  })


  // =====================================================
  // FINAL PDF
  // =====================================================

  const finalBytes =
    await finalPdf.save()

  return new Blob(
    [finalBytes],
    { type: "application/pdf" }
  )
}