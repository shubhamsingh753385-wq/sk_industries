'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const products = [
  {
    name: 'Air Turbo Ventilators',
    description: 'Industrial roof ventilation systems for optimal airflow and temperature control',
    image: 'https://image.made-in-china.com/202f0j00BwihclGRhapN/Best-Quality-No-Power-Roof-Turbo-Fan-Wind-Turbine-Ventilator-for-Warehouse.webp',
    features: [
      'Energy Efficient Operation',
      'Weather Resistant Construction',
      'Low Maintenance Required',
      'Quiet Operation',
      'Corrosion Resistant',
      'Long Lifespan'
    ]
  },
  {
    name: 'PUF Panel',
    description: 'Insulated sandwich panels for construction walls, roofs, and partitions with excellent thermal properties',
    image: 'https://images.pexels.com/photos/20170984/pexels-photo-20170984.jpeg',
    features: [
      'Excellent Thermal Insulation',
      'Fire Resistant',
      'Lightweight & Strong',
      'Quick Installation',
      'Weather Proof',
      'Multiple Thickness Options'
    ]
  },
  {
    name: 'Portable Security Room',
    description: 'Portable and customized security cabins for various security needs',
    image: 'https://zentilobuild.com/assets/images/hero/puf-guardroom.jpeg',
    features: [
      'Weather Proof Design',
      'Easy Installation & Relocation',
      'Fully Customizable',
      'Durable Structure',
      'Insulated Walls',
      'Pre-wired Electrical Setup'
    ]
  },
  {
    name: 'Window Canopy',
    description: 'Protective window covers and awnings to shield from sun and rain',
    image: 'https://images.pexels.com/photos/30024163/pexels-photo-30024163.jpeg',
    
    features: [
      'UV Protection',
      'Weather Resistant',
      'Custom Designs',
      'Easy Installation',
      'Durable Materials',
      'Aesthetic Appeal'
    ]
  },
  {
    name: 'Pre Fabricated Building',
    description: 'Modular buildings constructed off-site and assembled on location for industrial and office use',
    image: 'https://images.pexels.com/photos/12444957/pexels-photo-12444957.jpeg',
    features: [
      'Quick Installation',
      'Cost Effective',
      'Customizable Design',
      'High Strength Structure',
      'Energy Efficient',
      'Scalable Solutions'
    ]
  },
  {
    name: 'Portable Toilet',
    description: 'Portable sanitation solutions for construction sites, events, and temporary needs',
    image: 'https://images.pexels.com/photos/37592634/pexels-photo-37592634.jpeg',
    features: [
      'Hygienic & Clean',
      'Easy to Move & Install',
      'Water Efficient Design',
      'Low Maintenance',
      'Durable Materials',
      'Ventilation System'
    ]
  },
  {
    name: 'Container Office',
    description: 'Portable office spaces converted from shipping containers, offering modular workspace solutions',
    image: 'https://images.pexels.com/photos/29415315/pexels-photo-29415315.jpeg',
    features: [
      'Portable & Modular',
      'Quick Setup',
      'Fully Furnished Options',
      'Weather Proof',
      'Cost Effective',
      'Customizable Interior'
    ]
  },
  {
    name: 'Polycarbonate Base Plates',
    description: 'Durable and weather-resistant base plates for various industrial applications',
    image: 'https://images.pexels.com/photos/36449518/pexels-photo-36449518.jpeg',
    features: [
      'High Durability',
      'UV Protected',
      'Impact Resistant',
      'Custom Sizes Available',
      'Easy Installation',
      'Weather Proof'
    ]
  },
  {
    name: 'Polycarbonate Sheets',
    description: 'High-quality roofing and covering sheets with excellent light transmission',
    image: 'https://images.pexels.com/photos/10443918/pexels-photo-10443918.jpeg',
    features: [
      'UV Resistant Coating',
      'Lightweight Yet Strong',
      'High Transparency',
      '10 Year Warranty',
      'Fire Retardant',
      'Multiple Thickness Options'
    ]
  }
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function ProductsPage() {
  const handleWhatsAppClick = (productName) => {
    const message = encodeURIComponent(`Hello SK Industries, I am interested in ${productName}. Please share more details.`)
    window.open(`https://wa.me/919958202714?text=${message}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1768128834406-f5b1b962af9d"
            alt="Our Products"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl">Quality Industrial Products for Your Business Needs</p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Product Range</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of industrial products designed to meet the diverse needs of our clients. 
              Each product is manufactured with precision and quality in mind.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <div className="relative h-64 overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-3 text-2xl">{product.name}</CardTitle>
                    <CardDescription className="mb-4 text-base">{product.description}</CardDescription>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-sm">Key Features:</h4>
                      <ul className="space-y-2">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      onClick={() => handleWhatsAppClick(product.name)} 
                      className="w-full bg-green-500 hover:bg-green-600 text-white"
                    >
                      Inquire on WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Custom Solutions?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We understand that every project has unique requirements. Our team is ready to work with you 
              to create customized solutions that perfectly fit your specific needs.
            </p>
            <Button 
              size="lg" 
              onClick={() => handleWhatsAppClick('custom solutions')} 
              className="bg-orange-500 hover:bg-orange-600"
            >
              Discuss Your Requirements
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
