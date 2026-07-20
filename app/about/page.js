'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const values = [
  { icon: Award, title: 'Quality', description: 'Committed to delivering the highest quality products' },
  { icon: CheckCircle, title: 'Reliability', description: 'Dependable service and consistent performance' },
  { icon: Target, title: 'Innovation', description: 'Continuously improving our products and processes' },
  { icon: Users, title: 'Customer Satisfaction', description: 'Dedicated to exceeding customer expectations' }
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3089681/pexels-photo-3089681.jpeg"
            alt="About SK Industries"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About SK Industries</h1>
            <p className="text-xl">Building Quality, Delivering Excellence</p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Company Overview</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                SK Industries is a leading manufacturer and supplier of industrial products and portable infrastructure solutions 
                based in Dadri, Uttar Pradesh. With years of experience in the industry, we have established ourselves as a 
                trusted name in delivering quality products and exceptional service.
              </p>
              <p>
                Our state-of-the-art manufacturing facility is equipped with modern machinery and technology, enabling us to 
                produce high-quality industrial products that meet international standards. We specialize in manufacturing 
                Turbo Fans, Polycarbonate Base Plates, Polycarbonate Sheets, Security Cabins, and Portable Toilets.
              </p>
              <p>
                At SK Industries, we understand the unique needs of our clients and strive to provide customized solutions 
                that perfectly fit their requirements. Our commitment to quality, timely delivery, and customer satisfaction 
                has made us the preferred choice for businesses across India.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <Target className="w-12 h-12 mb-4 text-orange-500" />
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To deliver quality industrial products at competitive prices while maintaining the highest standards 
                    of service and customer satisfaction. We aim to be the go-to partner for all industrial and portable 
                    infrastructure needs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <Eye className="w-12 h-12 mb-4 text-orange-500" />
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become a trusted industrial solutions provider across India, recognized for innovation, quality, 
                    and reliability. We envision expanding our product range and reaching more clients who value excellence 
                    and dependability.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <value.icon className="w-12 h-12 mb-4 text-orange-500 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Partner With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Proven Track Record</h4>
                  <p className="text-sm opacity-90">Years of experience serving diverse industries</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Quality Assurance</h4>
                  <p className="text-sm opacity-90">Rigorous quality control at every stage</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Competitive Pricing</h4>
                  <p className="text-sm opacity-90">Best value for your investment</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Customization Options</h4>
                  <p className="text-sm opacity-90">Tailored solutions for your specific needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">On-Time Delivery</h4>
                  <p className="text-sm opacity-90">Reliable delivery schedules you can count on</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">24/7 Support</h4>
                  <p className="text-sm opacity-90">Always available to assist you</p>
                </div>
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
