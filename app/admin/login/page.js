'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LockKeyhole, User, LogIn } from 'lucide-react'

export default function AdminLoginPage() {
  const router = useRouter()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || 'Invalid username or password')
        return
      }

      // Login successful
      router.push('/admin/quotation')
      router.refresh()

    } catch (error) {
      console.error(error)
      setError('Unable to login. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        <div className="bg-white rounded-2xl shadow-xl p-8">

          {/* Logo / Heading */}
          <div className="text-center mb-8">

            <div className="mx-auto w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-4">
              <LockKeyhole className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-2xl font-bold text-gray-900">
              SK Industries
            </h1>

            <p className="text-gray-500 mt-1">
              Admin Quotation Portal
            </p>

          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* Username */}
            <div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>

              <div className="relative">

                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />

                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter admin username"
                  className="w-full border border-gray-300 rounded-lg py-2.5 pl-10 pr-3
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <div className="relative">

                <LockKeyhole className="absolute left-3 top-3 w-5 h-5 text-gray-400" />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full border border-gray-300 rounded-lg py-2.5 pl-10 pr-3
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

              </div>

            </div>

            {/* Error */}
            {error && (
              <div className="bg-red-50 text-red-600 border border-red-200 rounded-lg p-3 text-sm">
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-900 hover:bg-blue-800 text-white
              py-3 rounded-lg font-semibold flex items-center justify-center
              gap-2 transition disabled:opacity-60"
            >

              <LogIn className="w-5 h-5" />

              {loading ? 'Logging in...' : 'Admin Login'}

            </button>

          </form>

        </div>

      </div>

    </div>
  )
}