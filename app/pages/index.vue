<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
    <header class="bg-gray-900 dark:bg-gray-950 text-white py-2 landscape:py-2 md:py-4 shadow-lg">
      <div class="max-w-6xl mx-auto px-4 landscape:px-6 md:px-8 flex flex-col landscape:flex-row landscape:items-center landscape:justify-between h-full min-h-[200px] landscape:min-h-[80px] md:min-h-[200px]">
        <img 
        src="/IceAgeLogo.svg" 
        alt="Ice Age Heating and AC - Professional HVAC Services"
        class="w-40 h-40 landscape:w-20 landscape:h-20 md:w-40 md:h-40 cursor-pointer hover:opacity-90 transition-opacity"
        @click="scrollToTop" 
        />
        <nav class="flex gap-4 landscape:gap-6 md:gap-8 mt-auto landscape:mt-0 ml-auto">
          <a href="#services" @click.prevent="scrollToSection('services')" class="text-white hover:text-blue-400 transition-colors font-medium cursor-pointer text-sm landscape:text-base md:text-base">Services</a>
          <a href="#about" @click.prevent="scrollToSection('about')" class="text-white hover:text-blue-400 transition-colors font-medium cursor-pointer text-sm landscape:text-base md:text-base">About</a>
          <a href="#contact" @click.prevent="scrollToSection('contact')" class="text-white hover:text-blue-400 transition-colors font-medium cursor-pointer text-sm landscape:text-base md:text-base">Contact</a>
        </nav>
      </div>
    </header>

    <main class="flex-1 transition-colors">
      <!-- Hero Section -->
      <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white py-12 landscape:py-8 md:py-20 lg:py-28">
        <div class="max-w-6xl mx-auto px-4 landscape:px-6 md:px-8">
          <h1 class="text-3xl landscape:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 landscape:mb-4 md:mb-6 leading-tight">
            Professional HVAC Services
          </h1>
          <p class="text-base landscape:text-lg md:text-2xl leading-relaxed text-gray-200 dark:text-gray-300 mb-6 landscape:mb-6 md:mb-8 max-w-3xl">
            We provide reliable heating and cooling solutions for residential customers. With experience across all makes and models, you can count on quality workmanship and honest service every time.
          </p>
          <div class="flex flex-wrap gap-3 landscape:gap-4">
            <div class="flex items-center gap-2 text-gray-200 text-sm landscape:text-base">
              <span class="text-xl landscape:text-2xl">✓</span>
              <span>All Makes & Models</span>
            </div>
            <div class="flex items-center gap-2 text-gray-200 text-sm landscape:text-base">
              <span class="text-xl landscape:text-2xl">✓</span>
              <span>Quality Workmanship</span>
            </div>
            <div class="flex items-center gap-2 text-gray-200 text-sm landscape:text-base">
              <span class="text-xl landscape:text-2xl">✓</span>
              <span>Honest Service</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="py-10 landscape:py-8 md:py-16 lg:py-20 bg-gray-100 dark:bg-gray-800 transition-colors scroll-mt-[200px] landscape:scroll-mt-[80px] md:scroll-mt-[200px]">
        <div class="max-w-6xl mx-auto px-4 landscape:px-6 md:px-8">
          <h2 class="text-3xl landscape:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 landscape:mb-6 md:mb-12 text-center text-gray-900 dark:text-white">
            Our Services
          </h2>
          
          <div class="grid landscape:grid-cols-2 md:grid-cols-2 gap-6 landscape:gap-4 md:gap-8">
            <!-- Maintenance -->
            <article class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 landscape:p-5 md:p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
              <div class="flex items-center gap-3 landscape:gap-2 md:gap-4 mb-3 landscape:mb-2 md:mb-4">
                <div class="text-3xl landscape:text-2xl md:text-4xl">🔧</div>
                <h3 class="text-xl landscape:text-lg md:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white">Maintenance</h3>
              </div>
              <p class="text-base landscape:text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3 landscape:mb-2 md:mb-4">
                Keep your system running efficiently, extend equipment life, and help prevent costly breakdowns.
              </p>
              <ul class="space-y-2 landscape:space-y-1.5 md:space-y-3 text-sm landscape:text-xs md:text-base text-gray-700 dark:text-gray-300">
                <li class="flex items-start gap-2">
                  <span class="text-blue-500 mt-1">•</span>
                  <span>Seasonal inspections and tune-ups for furnaces, air conditioners, and geothermal systems</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-500 mt-1">•</span>
                  <span>Maximize efficiency</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-500 mt-1">•</span>
                  <span>Extend equipment lifespan</span>
                </li>
              </ul>
            </article>

            <!-- Repairs & Trouble Calls -->
            <article class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 landscape:p-5 md:p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-red-500">
              <div class="flex items-center gap-3 landscape:gap-2 md:gap-4 mb-3 landscape:mb-2 md:mb-4">
                <div class="text-3xl landscape:text-2xl md:text-4xl">⚡</div>
                <h3 class="text-xl landscape:text-lg md:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white">Repairs & Trouble Calls</h3>
              </div>
              <p class="text-lg landscape:text-base md:text-xl font-semibold text-gray-900 dark:text-white mb-2 landscape:mb-2 md:mb-3">
                No heat? No AC? No airflow?
              </p>
              <p class="text-base landscape:text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3 landscape:mb-2 md:mb-4">
                Quick response time to diagnose, repair, and get your comfort restored.
              </p>
              <ul class="space-y-2 landscape:space-y-1.5 md:space-y-3 text-sm landscape:text-xs md:text-base text-gray-700 dark:text-gray-300">
                <li class="flex items-start gap-2">
                  <span class="text-red-500 mt-1">•</span>
                  <span>24/7 emergency service available</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-500 mt-1">•</span>
                  <span>Expert diagnosis and fast repairs</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-red-500 mt-1">•</span>
                  <span>All brands and models serviced</span>
                </li>
              </ul>
            </article>

            <!-- New Installations & Replacements -->
            <article class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 landscape:p-5 md:p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
              <div class="flex items-center gap-3 landscape:gap-2 md:gap-4 mb-3 landscape:mb-2 md:mb-4">
                <div class="text-3xl landscape:text-2xl md:text-4xl">🏠</div>
                <h3 class="text-xl landscape:text-lg md:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white">New Installations & Replacements</h3>
              </div>
              <p class="text-base landscape:text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3 landscape:mb-2 md:mb-4">
                High-quality forced-air furnaces, air conditioning systems, geothermal units, and heat pumps.
              </p>
              <div class="mb-3 landscape:mb-2 md:mb-4">
                <p class="text-base landscape:text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-2 landscape:mb-1 md:mb-2">Additional Equipment:</p>
                <ul class="space-y-1.5 landscape:space-y-1 md:space-y-2 text-sm landscape:text-xs md:text-base text-gray-700 dark:text-gray-300">
                  <li class="flex items-start gap-2">
                    <span class="text-green-500 mt-1">•</span>
                    <span>Humidifiers</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-500 mt-1">•</span>
                    <span>Dehumidifiers</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-green-500 mt-1">•</span>
                    <span>ERVs (Energy Recovery Ventilators)</span>
                  </li>
                </ul>
              </div>
              <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 landscape:p-2 md:p-4 border border-green-200 dark:border-green-800">
                <p class="text-base landscape:text-sm md:text-lg font-bold text-green-700 dark:text-green-400">
                  ✓ 10-Year warranty on most systems
                </p>
              </div>
            </article>

            <!-- Ductwork & Ventilation -->
            <article class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 landscape:p-5 md:p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
              <div class="flex items-center gap-3 landscape:gap-2 md:gap-4 mb-3 landscape:mb-2 md:mb-4">
                <div class="text-3xl landscape:text-2xl md:text-4xl">💨</div>
                <h3 class="text-xl landscape:text-lg md:text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white">Ductwork & Ventilation</h3>
              </div>
              <p class="text-base landscape:text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-3 landscape:mb-2 md:mb-4">
                Complete ventilation solutions to improve air quality and system efficiency.
              </p>
              <ul class="space-y-2 landscape:space-y-1.5 md:space-y-3 text-sm landscape:text-xs md:text-base text-gray-700 dark:text-gray-300">
                <li class="flex items-start gap-2">
                  <span class="text-purple-500 mt-1">•</span>
                  <span>New ductwork installation and design</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-purple-500 mt-1">•</span>
                  <span>Bath fans for proper ventilation</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-purple-500 mt-1">•</span>
                  <span>Range exhausts for kitchen air quality</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-10 landscape:py-8 md:py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors scroll-mt-[200px] landscape:scroll-mt-[80px] md:scroll-mt-[200px]">
        <div class="max-w-6xl mx-auto px-4 landscape:px-6 md:px-8">
          <h2 class="text-3xl landscape:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 landscape:mb-6 md:mb-12 text-center text-gray-900 dark:text-white">
            Who We Are
          </h2>
          
          <div class="grid landscape:grid-cols-2 md:grid-cols-2 gap-8 landscape:gap-6 md:gap-12 items-center">
            <div>
              <p class="text-base landscape:text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4 landscape:mb-3 md:mb-6">
                Ice Age Heating and AC is a trusted HVAC service provider dedicated to keeping your home comfortable year-round. We specialize in residential heating and cooling solutions, bringing years of experience and expertise to every job.
              </p>
              <p class="text-base landscape:text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4 landscape:mb-3 md:mb-6">
                Our team is committed to delivering quality workmanship and honest service. We work with all makes and models, ensuring that no matter what system you have, we can help keep it running efficiently and reliably.
              </p>
              <p class="text-base landscape:text-sm md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                From routine maintenance to emergency repairs, from new installations to complete system replacements, we're here to provide the reliable HVAC services your home deserves.
              </p>
            </div>
            
            <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 landscape:p-5 md:p-8">
              <h3 class="text-xl landscape:text-lg md:text-2xl lg:text-3xl font-semibold mb-4 landscape:mb-3 md:mb-6 text-gray-900 dark:text-white">
                Service Areas
              </h3>
              <div class="space-y-3 landscape:space-y-2 md:space-y-4">
                <div class="flex items-center gap-2 landscape:gap-2 md:gap-3">
                  <span class="text-xl landscape:text-lg md:text-2xl">📍</span>
                  <div>
                    <p class="text-base landscape:text-sm md:text-lg font-semibold text-gray-900 dark:text-white">Southern Wisconsin</p>
                  </div>
                </div>
                <div class="flex items-center gap-2 landscape:gap-2 md:gap-3">
                  <span class="text-xl landscape:text-lg md:text-2xl">📍</span>
                  <div>
                    <p class="text-base landscape:text-sm md:text-lg font-semibold text-gray-900 dark:text-white">Northern Illinois</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-10 landscape:py-8 md:py-16 lg:py-20 bg-gray-100 dark:bg-gray-800 transition-colors scroll-mt-[200px] landscape:scroll-mt-[80px] md:scroll-mt-[200px]">
        <div class="max-w-4xl mx-auto px-4 landscape:px-6 md:px-8">
          <h2 class="text-3xl landscape:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 landscape:mb-6 md:mb-12 text-center text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          
          <div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 landscape:p-6 md:p-8 lg:p-12">
            <div class="grid landscape:grid-cols-2 md:grid-cols-2 gap-6 landscape:gap-6 md:gap-8">
              <div class="flex items-start gap-3 landscape:gap-2 md:gap-4">
                <div class="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3 landscape:p-2 md:p-4">
                  <span class="text-2xl landscape:text-xl md:text-3xl">📞</span>
                </div>
                <div>
                  <h3 class="text-lg landscape:text-base md:text-xl font-semibold mb-1 landscape:mb-1 md:mb-2 text-gray-900 dark:text-white">Phone</h3>
                  <a :href="`tel:${phoneNumber}`" class="text-base landscape:text-sm md:text-lg text-blue-600 dark:text-blue-400 hover:underline">
                    {{ phoneNumber || 'Contact us for our phone number' }}
                  </a>
                </div>
              </div>
              
              <div class="flex items-start gap-3 landscape:gap-2 md:gap-4">
                <div class="bg-green-100 dark:bg-green-900/30 rounded-lg p-3 landscape:p-2 md:p-4">
                  <span class="text-2xl landscape:text-xl md:text-3xl">✉️</span>
                </div>
                <div>
                  <h3 class="text-lg landscape:text-base md:text-xl font-semibold mb-1 landscape:mb-1 md:mb-2 text-gray-900 dark:text-white">Email</h3>
                  <a :href="`mailto:${emailAddress}`" class="text-base landscape:text-sm md:text-lg text-blue-600 dark:text-blue-400 hover:underline break-all">
                    {{ emailAddress || 'Contact us for our email address' }}
                  </a>
                </div>
              </div>
            </div>
            
            <div class="mt-6 landscape:mt-4 md:mt-8 pt-6 landscape:pt-4 md:pt-8 border-t border-gray-200 dark:border-gray-700">
              <p class="text-center text-sm landscape:text-xs md:text-base text-gray-600 dark:text-gray-400">
                Ready to schedule service or get a quote? Reach out to us today and we'll be happy to help!
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Call to Action Section -->
      <section class="py-10 landscape:py-8 md:py-16 lg:py-20 bg-gray-900 dark:bg-gray-950 text-white">
        <div class="max-w-4xl mx-auto px-4 landscape:px-6 md:px-8 text-center">
          <h2 class="text-2xl landscape:text-3xl md:text-3xl lg:text-4xl font-bold mb-4 landscape:mb-4 md:mb-6">
            Ready to Get Started?
          </h2>
          <p class="text-base landscape:text-lg md:text-xl text-gray-300 dark:text-gray-400 mb-6 landscape:mb-6 md:mb-8">
            Contact us today for reliable HVAC services you can trust. We're here to keep your home comfortable year-round.
          </p>
          <div class="flex flex-col landscape:flex-row sm:flex-row gap-3 landscape:gap-4 md:gap-4 justify-center">
            <a :href="`tel:${phoneNumber}`" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 landscape:py-2 md:py-3 px-6 landscape:px-4 md:px-8 rounded-lg transition-colors duration-200 inline-block text-sm landscape:text-xs md:text-base">
              Call to Schedule
            </a>
            <a :href="`mailto:${emailAddress}?subject=Quote Request`" class="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2.5 landscape:py-2 md:py-3 px-6 landscape:px-4 md:px-8 rounded-lg transition-colors duration-200 inline-block text-sm landscape:text-xs md:text-base">
              Get a Quote
            </a>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-gray-900 dark:bg-gray-950 text-white py-6 landscape:py-4 md:py-8 mt-auto">
      <div class="max-w-6xl mx-auto px-4 landscape:px-6 md:px-8">
        <div class="grid landscape:grid-cols-3 md:grid-cols-3 gap-6 landscape:gap-4 md:gap-8 mb-6 landscape:mb-4 md:mb-8">
          <div>
            <h3 class="text-lg landscape:text-base md:text-xl font-semibold mb-3 landscape:mb-2 md:mb-4">Ice Age Heating and AC</h3>
            <p class="text-sm landscape:text-xs md:text-base text-gray-400">
              Professional HVAC services for residential customers. Quality workmanship and honest service.
            </p>
          </div>
          <div>
            <h3 class="text-lg landscape:text-base md:text-xl font-semibold mb-3 landscape:mb-2 md:mb-4">Quick Links</h3>
            <ul class="space-y-1.5 landscape:space-y-1 md:space-y-2 text-sm landscape:text-xs md:text-base text-gray-400">
              <li><a href="#services" class="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" class="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" class="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg landscape:text-base md:text-xl font-semibold mb-3 landscape:mb-2 md:mb-4">Services</h3>
            <ul class="space-y-1.5 landscape:space-y-1 md:space-y-2 text-sm landscape:text-xs md:text-base text-gray-400">
              <li>Maintenance</li>
              <li>Repairs & Emergency</li>
              <li>Installations</li>
              <li>Ductwork & Ventilation</li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-4 landscape:pt-3 md:pt-6 text-center">
          <p class="text-sm landscape:text-xs md:text-base text-gray-400">&copy; {{ currentYear }} Ice Age Heating and AC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
const phoneNumber = '+1 (608) 561-7954'
const emailAddress = 'sam@iceageheatingandac.com'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const header = document.querySelector('header')
    // Use smaller offset for landscape orientation
    const isLandscape = window.matchMedia('(orientation: landscape)').matches && window.innerWidth < 768
    const headerHeight = header ? (isLandscape ? 80 : header.offsetHeight) : (isLandscape ? 80 : 200)
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth'
    })
  }
}

// SEO Configuration
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const siteName = 'Ice Age Heating and AC'
const siteDescription = 'Professional HVAC services for residential customers in Southern Wisconsin and Northern Illinois. Expert heating, cooling, maintenance, repairs, and installations. Quality workmanship and honest service.'
const siteImage = `${siteUrl}/IceAgeLogo.svg`

// Comprehensive SEO Meta Tags
useHead({
  title: `${siteName} - Reliable HVAC Services | Heating, Cooling, & Maintenance | Southern Wisconsin & Northern Illinois`,
  titleTemplate: '%s',
  meta: [
    // Basic Meta Tags
    {
      name: 'description',
      content: siteDescription
    },
    {
      name: 'keywords',
      content: 'HVAC services, heating and cooling, air conditioning repair, furnace maintenance, geothermal systems, heat pumps, ductwork, ventilation, residential HVAC, Southern Wisconsin HVAC, Northern Illinois HVAC, HVAC repair, HVAC installation, air conditioner service, furnace repair, HVAC maintenance, emergency HVAC service'
    },
    {
      name: 'author',
      content: siteName
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    },
    {
      name: 'googlebot',
      content: 'index, follow'
    },
    {
      name: 'language',
      content: 'English'
    },
    {
      name: 'revisit-after',
      content: '7 days'
    },
    {
      name: 'rating',
      content: 'general'
    },
    {
      name: 'distribution',
      content: 'global'
    },
    {
      name: 'geo.region',
      content: 'US-WI, US-IL'
    },
    {
      name: 'geo.placename',
      content: 'Southern Wisconsin, Northern Illinois'
    },
    
    // Open Graph / Facebook
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: siteUrl
    },
    {
      property: 'og:title',
      content: `${siteName} - Professional HVAC Services | Southern Wisconsin & Northern Illinois`
    },
    {
      property: 'og:description',
      content: siteDescription
    },
    {
      property: 'og:image',
      content: siteImage
    },
    {
      property: 'og:image:width',
      content: '1200'
    },
    {
      property: 'og:image:height',
      content: '630'
    },
    {
      property: 'og:image:alt',
      content: `${siteName} - Professional HVAC Services`
    },
    {
      property: 'og:site_name',
      content: siteName
    },
    {
      property: 'og:locale',
      content: 'en_US'
    },
    
    // Twitter Card
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:url',
      content: siteUrl
    },
    {
      name: 'twitter:title',
      content: `${siteName} - Professional HVAC Services`
    },
    {
      name: 'twitter:description',
      content: siteDescription
    },
    {
      name: 'twitter:image',
      content: siteImage
    },
    {
      name: 'twitter:image:alt',
      content: `${siteName} - Professional HVAC Services`
    },
    
    // Mobile
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5'
    },
    {
      name: 'theme-color',
      content: '#111827'
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'black-translucent'
    },
    {
      name: 'format-detection',
      content: 'telephone=yes'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: siteUrl
    },
    {
      rel: 'alternate',
      hreflang: 'en',
      href: siteUrl
    },
    // Favicons
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/IceAgeLogo.svg'
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      href: '/IceAgeLogo.svg'
    },
    {
      rel: 'shortcut icon',
      href: '/favicon.ico'
    }
  ],
  htmlAttrs: {
    lang: 'en',
    style: 'scroll-behavior: smooth;'
  }
})

// Structured Data (JSON-LD) for Local Business
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HVACContractor',
        '@id': siteUrl,
        name: siteName,
        description: siteDescription,
        url: siteUrl,
        telephone: phoneNumber,
        email: emailAddress,
        address: {
          '@type': 'PostalAddress',
          addressRegion: ['WI', 'IL'],
          addressLocality: ['Southern Wisconsin', 'Northern Illinois'],
          addressCountry: 'US'
        },
        areaServed: [
          {
            '@type': 'State',
            name: 'Wisconsin'
          },
          {
            '@type': 'State',
            name: 'Illinois'
          }
        ],
        serviceType: [
          'HVAC Maintenance',
          'HVAC Repair',
          'HVAC Installation',
          'Air Conditioning Service',
          'Furnace Repair',
          'Geothermal Systems',
          'Heat Pump Installation',
          'Ductwork Installation',
          'Ventilation Services'
        ],
        priceRange: '$$',
        image: siteImage,
        logo: siteImage,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          reviewCount: '1'
        },
        offers: {
          '@type': 'Offer',
          description: '10-Year warranty on most systems'
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: siteName,
        url: siteUrl,
        logo: siteImage,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: phoneNumber,
          contactType: 'Customer Service',
          email: emailAddress,
          areaServed: ['US'],
          availableLanguage: ['English']
        },
        address: {
          '@type': 'PostalAddress',
          addressRegion: ['WI', 'IL'],
          addressCountry: 'US'
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteName,
        url: siteUrl,
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${siteUrl}/?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      })
    }
  ]
})
</script>

