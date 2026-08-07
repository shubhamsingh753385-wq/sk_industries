import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import crypto from 'crypto'
import QuotationGenerator from './QuotationGenerator'

function createToken(username) {
  return crypto
    .createHmac('sha256', process.env.ADMIN_SECRET)
    .update(username)
    .digest('hex')
}

export default async function QuotationPage() {
  const cookieStore = await cookies()

  const session = cookieStore.get('admin_session')?.value

  const expectedToken = createToken(
    process.env.ADMIN_USERNAME
  )

  if (!session || session !== expectedToken) {
    redirect('/admin/login')
  }

  return <QuotationGenerator />
}