'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, CheckCircle, Zap, Clock, DollarSign, Wrench, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const products = [
  {
    name: 'Air Turbo Ventilators',
    description: 'Industrial roof ventilation systems for optimal airflow',
    image: 'https://image.made-in-china.com/202f0j00BwihclGRhapN/Best-Quality-No-Power-Roof-Turbo-Fan-Wind-Turbine-Ventilator-for-Warehouse.webp',
    features: ['Energy Efficient', 'Weather Resistant', 'Low Maintenance', 'Quiet Operation']
  },
  {
    name: 'PUF Panel',
    description: 'Insulated sandwich panels with excellent thermal properties',
    image: '/gallery/puf-panel.png',
    features: ['Thermal Insulation', 'Fire Resistant', 'Lightweight', 'Quick Installation']
  },
  {
    name: 'Portable Security Room',
    description: 'Portable and customized security cabins',
    image: 'https://zentilobuild.com/assets/images/hero/puf-guardroom.jpeg',
    features: ['Weather Proof', 'Easy Installation', 'Customizable', 'Durable Structure']
  },
  {
    name: 'Window Canopy',
    description: 'Protective window covers and awnings',
    image: '/gallery/window-canopy.jpg',
    features: ['UV Protection', 'Weather Resistant', 'Custom Designs', 'Easy Installation']
  },
  {
    name: 'Pre Fabricated Building',
    description: 'Modular buildings for industrial and office use',
    image: 'https://images.pexels.com/photos/20170984/pexels-photo-20170984.jpeg',
    features: ['Quick Installation', 'Cost Effective', 'Customizable', 'High Strength']
  },
  {
    name: 'Portable Toilet',
    description: 'Portable sanitation solutions for all needs',
    image: 'https://images.pexels.com/photos/37592634/pexels-photo-37592634.jpeg',
    features: ['Hygienic', 'Easy to Move', 'Water Efficient', 'Low Maintenance']
  },
  {
    name: 'Container Office',
    description: 'Portable office spaces from shipping containers',
    image: 'https://images.pexels.com/photos/35385946/pexels-photo-35385946.jpeg',
    features: ['Portable & Modular', 'Quick Setup', 'Fully Furnished', 'Cost Effective']
  },
  {
    name: 'Polycarbonate Sheets',
    description: 'High-quality roofing and covering sheets',
    image: '/gallery/Img6.jpeg',
    features: ['UV Resistant', 'Lightweight', 'High Transparency', '10 Year Warranty']
  }
]

const whyChooseUs = [
  { icon: CheckCircle, title: 'Quality Products', description: 'Premium quality industrial products that meet industry standards' },
  { icon: Clock, title: 'Timely Delivery', description: 'On-time delivery guaranteed for all orders' },
  { icon: DollarSign, title: 'Competitive Pricing', description: 'Best prices in the market without compromising quality' },
  { icon: Users, title: 'Customer Support', description: '24/7 customer support for all your queries' },
  { icon: Wrench, title: 'Custom Manufacturing', description: 'Customized solutions tailored to your specific needs' },
  { icon: Zap, title: 'Quick Response', description: 'Fast response time for all inquiries and orders' }
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hello SK Industries, I am interested in your products. Please share more details.')
    window.open(`https://wa.me/919958202714?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/gallery/main.png"
            alt="Industrial Facility"
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
            {/* <div className="mx-auto w-48">
  <img
    src="/gallery/logo.png"
    alt="SK Industries logo"
    className="mx-auto w-full h-auto"
  />
</div> */}
           <h1
  className="text-5xl md:text-6xl font-extrabold mb-6 text-red-600"
  style={{
    textShadow: `
      0 0 8px rgba(12, 12, 12, 0.9),
      0 0 15px rgba(11, 10, 10, 0.8),
      0 0 25px rgba(11, 10, 10, 0.6)
    `,
  }}
>
  SK Industries
</h1>

<p
  className="text-xl md:text-3xl mb-10 font-semibold text-red-600"
  style={{
    textShadow: `
      0 0 5px rgba(11, 11, 11, 0.9),
      0 0 10px rgba(12, 12, 12, 0.8)
    `,
  }}
>
  Quality Industrial Products & Portable Infrastructure Solutions
</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center ">
              <Link href="/contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Get a Quote
                </Button>
              </Link>
              {/* <Button size="lg" onClick={handleWhatsAppClick} className="bg-orange-500 hover:bg-orange-600 text-white">
                Get a Quote
              </Button> */}
              <Button size="lg" onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white">
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">About SK Industries</h2>
            <p className="text-lg text-muted-foreground mb-6">
              SK Industries is a leading manufacturer and supplier of industrial products and portable infrastructure solutions. 
              We specialize in providing high-quality Turbo Fans, Polycarbonate Sheets, Security Cabins, and Portable Toilets 
              to clients across India.
            </p>
            <Link href="/about">
              <Button variant="outline" size="lg">Learn More About Us</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Products</h2>
            <p className="text-lg text-muted-foreground">Explore our range of quality industrial products</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {products.slice(0, 6).map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0 pt-2">
                    <div className="relative h-48 overflow-hidden rounded-t-lg mx-2">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2">{product.name}</CardTitle>
                    <CardDescription className="mb-4">{product.description}</CardDescription>
                    <ul className="space-y-2 mb-4">
                      {product.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button onClick={handleWhatsAppClick} className="w-full bg-green-500 hover:bg-green-600">
                      Inquire on WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button size="lg" variant="default">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose SK Industries</h2>
            <p className="text-lg text-muted-foreground">Your trusted partner for industrial solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <item.icon className="w-12 h-12 mb-4 text-orange-500" />
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for quality industrial products and customized solutions. 
              We're here to help you find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleWhatsAppClick} className="bg-green-500 hover:bg-green-600 text-white">
                Chat on WhatsApp
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="bg-white text-blue-900 hover:bg-gray-100">
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center text-sm">
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                +91 9958202714
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                skindustriesmanufacturing@gmail.com
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
