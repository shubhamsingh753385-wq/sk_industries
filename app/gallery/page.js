'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { Dialog, DialogContent } from '@/components/ui/dialog'

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/29160023/pexels-photo-29160023.jpeg',
    alt: 'Portable Security Room 1',
    category: 'Portable Security Room'
  },
  {
    src: 'https://images.pexels.com/photos/13460092/pexels-photo-13460092.jpeg',
    alt: 'Portable Security Room 2',
    category: 'Portable Security Room'
  },
  {
    src: 'https://images.unsplash.com/photo-1701637783855-da67ab363cfa',
    alt: 'Portable Toilet 1',
    category: 'Portable Toilet'
  },
  {
    src: 'https://images.pexels.com/photos/25461701/pexels-photo-25461701.jpeg',
    alt: 'Portable Toilet 2',
    category: 'Portable Toilet'
  },
  {
    src: 'https://images.pexels.com/photos/10443918/pexels-photo-10443918.jpeg',
    alt: 'Polycarbonate Sheet 1',
    category: 'Polycarbonate Sheets'
  },
  {
    src: 'https://images.pexels.com/photos/8221391/pexels-photo-8221391.jpeg',
    alt: 'Polycarbonate Sheet 2',
    category: 'Polycarbonate Sheets'
  },
  {
    src: 'https://images.pexels.com/photos/22938256/pexels-photo-22938256.jpeg',
    alt: 'Air Turbo Ventilator 1',
    category: 'Air Turbo Ventilators'
  },
  {
    src: 'https://images.unsplash.com/photo-1652463349034-85793fa26b7e',
    alt: 'Air Turbo Ventilator 2',
    category: 'Air Turbo Ventilators'
  },
  {
    src: 'https://images.pexels.com/photos/20170984/pexels-photo-20170984.jpeg',
    alt: 'PUF Panel 1',
    category: 'PUF Panel'
  },
  {
    src: 'https://images.pexels.com/photos/38613440/pexels-photo-38613440.jpeg',
    alt: 'PUF Panel 2',
    category: 'PUF Panel'
  },
  {
    src: 'https://images.unsplash.com/photo-1762088779403-8b3c732ffafb',
    alt: 'Window Canopy',
    category: 'Window Canopy'
  },
  {
    src: 'https://images.pexels.com/photos/12444957/pexels-photo-12444957.jpeg',
    alt: 'Pre Fabricated Building 1',
    category: 'Pre Fabricated Building'
  },
  {
    src: 'https://images.unsplash.com/photo-1504149730145-54e4ebcaf03e',
    alt: 'Pre Fabricated Building 2',
    category: 'Pre Fabricated Building'
  },
  {
    src: 'https://images.pexels.com/photos/29415315/pexels-photo-29415315.jpeg',
    alt: 'Container Office',
    category: 'Container Office'
  },
  {
    src: 'https://images.pexels.com/photos/36449518/pexels-photo-36449518.jpeg',
    alt: 'Polycarbonate Base Plate',
    category: 'Polycarbonate Base Plates'
  },
  {
    src: 'https://images.pexels.com/photos/48895/roof-plate-tiles-brick-black-48895.jpeg',
    alt: 'Installation Project 1',
    category: 'Installation Projects'
  },
  {
    src: 'https://images.pexels.com/photos/17180396/pexels-photo-17180396.jpeg',
    alt: 'Industrial Facility',
    category: 'Installation Projects'
  },
  {
    src: 'https://images.pexels.com/photos/3089681/pexels-photo-3089681.jpeg',
    alt: 'Manufacturing Facility',
    category: 'Installation Projects'
  }
]

const categories = ['All', 'Air Turbo Ventilators', 'PUF Panel', 'Portable Security Room', 'Window Canopy', 'Pre Fabricated Building', 'Portable Toilet', 'Container Office', 'Polycarbonate Sheets', 'Polycarbonate Base Plates', 'Installation Projects']

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
      <section className="py-8 bg-muted/30 sticky top-16 z-40">
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
        <div className="container px-4">
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
