import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

    if (!accessKey) {
      return NextResponse.json(
        { success: false, message: 'Missing Web3Forms access key.' },
        { status: 500 }
      )
    }
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey,
        ...body,
        to: body.to || 'skindustriesmanufacturing@gmail.com'
      })
    })

    const data = await response.json()

    return NextResponse.json(data, { status: response.ok ? 200 : response.status })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Unable to submit the form right now.' },
      { status: 500 }
    )
  }
}
