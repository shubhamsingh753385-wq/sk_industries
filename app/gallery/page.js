'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Dialog, DialogContent } from '@/components/ui/dialog'

const galleryImages = [
  {
    src: '/gallery/Img1.jpeg',
    alt: 'Air Turbo Ventilator 1',
    category: 'Air Turbo Ventilators'
  },
  {
    src: '/gallery/Img2.jpeg',
    alt: 'Polycarbonate Sheet 1',
    category: 'Polycarbonate Sheets'
  },
  {
    src: '/gallery/Img3.jpeg',
    alt: 'Portable Guard Room 1',
    category: 'Portable Security Room'
  },
  {
    src: '/gallery/Img4.jpeg',
    alt: 'Air Turbo Ventilator 2',
    category: 'Air Turbo Ventilators'
  },
  {
    src: '/gallery/img5.jpeg',
    alt: 'Polycarbonate Sheet 2',
    category: 'Polycarbonate Sheets'
  },
  {
    src: '/gallery/Img6.jpeg',
    alt: 'Polycarbonate Sheet 3',
    category: 'Polycarbonate Sheets'
  },
  {
    src: '/gallery/Img7.jpeg',
    alt: 'Polycarbonate Sheet 4',
    category: 'Polycarbonate Sheets'
  },
  {
    src: '/gallery/img8.jpeg',
    alt: 'Air Turbo Ventilator 3',
    category: 'Air Turbo Ventilators'
  },
  {
    src: 'https://images.pexels.com/photos/20170984/pexels-photo-20170984.jpeg',
    alt: 'PUF Panel 1',
    category: 'PUF Panel'
  },
  {
    src: '/gallery/puf-panel.png',
    alt: 'PUF Panel 2',
    category: 'PUF Panel'
  },
  {
    src: '/gallery/window-canopy.jpg',
    alt: 'Window Canopy 1',
    category: 'Window Canopy'
  },
  {
    src: '/gallery/window-canopy-2.jpg',
    alt: 'Window Canopy 2',
    category: 'Window Canopy'
  },
  {
    src: '/gallery/window-canopy-3.jpeg',
    alt: 'Window Canopy 3',
    category: 'Window Canopy'
  },
  {
    src: '/gallery/prefabricated.png',
    alt: 'Pre Fabricated Building 1',
    category: 'Pre Fabricated Building'
  },
  {
    src: '/gallery/prefabricated2.jpg',
    alt: 'Pre Fabricated Building 2',
    category: 'Pre Fabricated Building'
  },
  {
    src: 'gallery/container.png',
    alt: 'Container Office',
    category: 'Container Office'
  },
  {
    src: '/gallery/polycarbonate-base-plate.jpg',
    alt: 'Polycarbonate Base Plate',
    category: 'Polycarbonate Base Plates'
  },
  {
    src: 'https://images.pexels.com/photos/37592634/pexels-photo-37592634.jpeg',
    alt: 'portable Toilet',
    category: 'Portable Toilet'
  },
  // {
  //   src: '',
  //   alt: 'Industrial Facility',
  //   category: 'Installation Projects'
  // },
  // {
  //   src: '',
  //   alt: 'Manufacturing Facility',
  //   category: 'Installation Projects'
  // }
]

const categories = ['All', 'Air Turbo Ventilators', 'PUF Panel', 'Portable Security Room', 'Window Canopy', 'Pre Fabricated Building', 'Portable Toilet', 'Container Office', 'Polycarbonate Sheets', 'Polycarbonate Base Plates']

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1768128834406-f5b1b962af9d"
            alt="Gallery"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl">Explore Our Products and Projects</p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30 md:sticky md:top-16 md:z-40">
        <div className="container px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container px-4 mt-2 md:mt-0">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work Showcase</h2>
            <p className="text-lg text-muted-foreground">
              Browse through our collection of products and completed projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm font-semibold">{image.category}</p>
                    <p className="text-xs opacity-90">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">{selectedImage.category}</h3>
                <p className="text-sm text-muted-foreground">{selectedImage.alt}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
