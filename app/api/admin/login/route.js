import { NextResponse } from 'next/server'
import crypto from 'crypto'

function createToken(username) {
  return crypto
    .createHmac('sha256', process.env.ADMIN_SECRET)
    .update(username)
    .digest('hex')
}

export async function POST(request) {
  try {
    const { username, password } = await request.json()

    // Check admin credentials
    if (
      username !== process.env.ADMIN_USERNAME ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid username or password'
        },
        { status: 401 }
      )
    }

    // Create admin session token
    const token = createToken(username)

    const response = NextResponse.json({
      success: true,
      message: 'Login successful'
    })

    // Store token in secure HTTP-only cookie
    response.cookies.set('admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 8 // 8 hours
    })

    return response

  } catch (error) {
    console.error('Admin login error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong'
      },
      { status: 500 }
    )
  }
}