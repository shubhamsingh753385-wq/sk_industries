'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { Toaster } from '@/components/ui/toaster'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const products = [
  'Air Turbo Ventilators',
  'PUF Panel',
  'Portable Security Room',
  'Window Canopy',
  'Pre Fabricated Building',
  'Portable Toilet',
  'Container Office',
  'Polycarbonate Base Plates',
  'Polycarbonate Sheets',
  'Other'
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleProductChange = (value) => {
    setFormData(prev => ({ ...prev, product: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Using Web3Forms for form submission
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '61af15af-1403-45aa-8366-be613714a27c', // This is a placeholder - will need to be replaced with actual key
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          product: formData.product,
          message: formData.message,
          to: 'skindustriesmanufacturing@gmail.com'
        })
      })

      if (response.ok) {
        toast({
          title: 'Success!',
          description: 'Thank you for contacting SK Industries. We will get back to you shortly.',
        })
        setFormData({
          name: '',
          phone: '',
          email: '',
          product: '',
          message: ''
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit form. Please try again or contact us directly.',
        variant: 'destructive'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3089681/pexels-photo-3089681.jpeg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70" />
        </div>
        
        <div className="container relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Get in Touch with SK Industries</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1 space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mt-1 mr-3 text-orange-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone Numbers</h4>
                      <p className="text-sm text-muted-foreground">+91 9958202714</p>
                      <p className="text-sm text-muted-foreground">+91 9560184681</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mt-1 mr-3 text-orange-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-sm text-muted-foreground break-all">
                        skindustriesmanufacturing@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mt-1 mr-3 text-orange-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-sm text-muted-foreground">
                        Opp. Hero Motors,<br />
                        Dadri,<br />
                        Gautam Buddha Nagar,<br />
                        Uttar Pradesh - 203207
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-5 h-5 mt-1 mr-3 text-orange-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Business Hours</h4>
                      <p className="text-sm text-muted-foreground">
                        Monday - Saturday<br />
                        9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-lg">Quick Response via WhatsApp</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Get instant replies to your queries
                  </p>
                  <Button 
                    onClick={() => {
                      const message = encodeURIComponent('Hello SK Industries, I would like to inquire about your products.')
                      window.open(`https://wa.me/919958202714?text=${message}`, '_blank')
                    }}
                    className="w-full bg-white text-green-600 hover:bg-gray-100"
                  >
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="product">Product Interested In *</Label>
                      <Select value={formData.product} onValueChange={handleProductChange} required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a product" />
                        </SelectTrigger>
                        <SelectContent>
                          {products.map((product) => (
                            <SelectItem key={product} value={product}>
                              {product}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-blue-900 hover:bg-blue-800"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      We typically respond within 24 hours
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - can be added later) */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Facility</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Located in Dadri, Uttar Pradesh, opposite Hero Motors
            </p>
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-muted-foreground">Map integration can be added here</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  )
}
