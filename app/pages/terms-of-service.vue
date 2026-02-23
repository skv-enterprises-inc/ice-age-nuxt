<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors">
    <header class="bg-gray-900 dark:bg-gray-950 text-white py-2 landscape:py-2 md:py-4 shadow-lg">
      <div class="max-w-6xl mx-auto px-4 landscape:px-6 md:px-8 flex flex-col landscape:flex-row landscape:items-center landscape:justify-between h-full min-h-[200px] landscape:min-h-[80px] md:min-h-[200px]">
        <NuxtLink to="/" class="inline-block">
          <img
            src="/IceAgeLogo.svg"
            alt="Ice Age Heating and AC - Professional HVAC Services"
            class="w-40 h-40 landscape:w-20 landscape:h-20 md:w-40 md:h-40 cursor-pointer hover:opacity-90 transition-opacity"
          />
        </NuxtLink>
        <nav class="flex gap-4 landscape:gap-6 md:gap-8 mt-auto landscape:mt-0 ml-auto">
          <NuxtLink to="/" class="text-white hover:text-blue-400 transition-colors font-medium cursor-pointer text-sm landscape:text-base md:text-base">Home</NuxtLink>
          <NuxtLink to="/#services" class="text-white hover:text-blue-400 transition-colors font-medium cursor-pointer text-sm landscape:text-base md:text-base">Services</NuxtLink>
          <NuxtLink to="/#about" class="text-white hover:text-blue-400 transition-colors font-medium cursor-pointer text-sm landscape:text-base md:text-base">About</NuxtLink>
          <NuxtLink to="/#contact" class="text-white hover:text-blue-400 transition-colors font-medium cursor-pointer text-sm landscape:text-base md:text-base">Contact</NuxtLink>
        </nav>
      </div>
    </header>

    <main class="flex-1">
      <!-- Hero -->
      <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-white py-12 landscape:py-8 md:py-16 lg:py-20">
        <div class="max-w-3xl mx-auto px-4 landscape:px-6 md:px-8 text-center">
          <h1 class="text-3xl landscape:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-white">
            Terms & Conditions
          </h1>
          <p class="text-gray-300 dark:text-gray-400 text-base md:text-lg">
            Ice Age Heating and AC · Last Updated: 2/22/2026
          </p>
        </div>
      </section>

      <!-- Content -->
      <div class="max-w-3xl mx-auto px-4 landscape:px-6 md:px-8 py-10 landscape:py-8 md:py-16">
        <div class="space-y-10 md:space-y-14">
          <!-- 1. Introduction -->
          <section class="scroll-mt-24">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-bold">1</span>
              Introduction
            </h2>
            <p class="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              These Terms and Conditions ("Terms") govern your use of the Ice Age Heating and AC website ("Website"), owned and operated by SKV Enterprises Inc., doing business as Ice Age Heating and AC ("Company," "we," "our," or "us"). By accessing or using this Website, you agree to be bound by these Terms. If you do not agree, please discontinue use of the Website.
            </p>
          </section>

          <!-- 2. Services -->
          <section class="scroll-mt-24">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-bold">2</span>
              Services
            </h2>
            <p class="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Ice Age Heating and AC provides heating, cooling, ventilation, and related HVAC services in Wisconsin. Information on this Website is for general informational purposes only and may change without notice.
            </p>
          </section>

          <!-- 3. Quotes and Estimates -->
          <section class="scroll-mt-24">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-bold">3</span>
              Quotes and Estimates
            </h2>
            <p class="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Any service quotes or estimates provided through the Website or by email/phone are non-binding until confirmed by a written service agreement or work order.
            </p>
          </section>

          <!-- 4. Scheduling and Cancellations -->
          <section class="scroll-mt-24">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-bold">4</span>
              Scheduling and Cancellations
            </h2>
            <p class="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Customers are responsible for providing accurate contact information and ensuring access to the service location. We reserve the right to charge cancellation or rescheduling fees when applicable.
            </p>
          </section>

          <!-- 5. Intellectual Property -->
          <section class="scroll-mt-24">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-bold">5</span>
              Intellectual Property
            </h2>
            <p class="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              All content on this Website—including text, graphics, logos, images, and design—is the property of SKV Enterprises Inc. and is protected by copyright and trademark laws. You may not copy, reproduce, or distribute any content without written permission.
            </p>
          </section>

          <!-- 6. User Responsibilities -->
          <section class="scroll-mt-24">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-bold">6</span>
              User Responsibilities
            </h2>
            <p class="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              You agree not to: use the Website for unlawful purposes; attempt to disrupt or compromise Website security; submit false or misleading information.
            </p>
          </section>

          <!-- 7. Third-Party Links -->
          <section class="scroll-mt-24">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-bold">7</span>
              Third-Party Links
            </h2>
            <p class="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Our Website may contain links to third-party websites. We are not responsible for the content, policies, or practices of those external sites.
            </p>
          </section>

          <!-- 8. Limitation of Liability -->
          <section class="scroll-mt-24">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-bold">8</span>
              Limitation of Liability
            </h2>
            <p class="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              To the fullest extent permitted by Wisconsin law, Ice Age Heating and AC is not liable for: damages resulting from Website use; errors or omissions in Website content; service interruptions or technical issues. All HVAC services are subject to separate service agreements and warranties.
            </p>
          </section>

          <!-- 9. Warranties -->
          <section class="scroll-mt-24">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-bold">9</span>
              Warranties
            </h2>
            <p class="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Website content is provided "as is" without warranties of any kind. We make no guarantees regarding accuracy, completeness, or availability.
            </p>
          </section>

          <!-- 10. Governing Law -->
          <section class="scroll-mt-24">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-bold">10</span>
              Governing Law
            </h2>
            <p class="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              These Terms are governed by the laws of the State of Wisconsin. Any disputes shall be resolved in Wisconsin courts.
            </p>
          </section>

          <!-- 11. Changes to Terms -->
          <section class="scroll-mt-24">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-bold">11</span>
              Changes to Terms
            </h2>
            <p class="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              We may update these Terms at any time. Continued use of the Website constitutes acceptance of the updated Terms.
            </p>
          </section>

          <!-- 12. Contact Information -->
          <section class="scroll-mt-24">
            <h2 class="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white text-sm font-bold">12</span>
              Contact Information
            </h2>
            <div class="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-200 dark:border-gray-700">
              <p class="font-semibold text-gray-900 dark:text-white text-lg mb-1">SKV Enterprises Inc.</p>
              <p class="font-semibold text-gray-900 dark:text-white mb-4">Ice Age Heating and AC</p>
              <p class="text-gray-700 dark:text-gray-300 mb-1">2671 S. Natures Ridge Rd.</p>
              <p class="text-gray-700 dark:text-gray-300 mb-4">Beloit, WI 53511</p>
              <p class="mb-1">
                <a :href="`tel:${phoneNumber}`" class="text-blue-600 dark:text-blue-400 hover:underline font-medium">{{ phoneNumber }}</a>
              </p>
              <p>
                <a :href="`mailto:${emailAddress}`" class="text-blue-600 dark:text-blue-400 hover:underline font-medium break-all">{{ emailAddress }}</a>
              </p>
            </div>
          </section>
        </div>

        <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <NuxtLink to="/" class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-medium">
            ← Back to Home
          </NuxtLink>
        </div>
      </div>
    </main>

    <footer class="bg-gray-900 dark:bg-gray-950 text-white py-6 landscape:py-4 md:py-8 mt-auto">
      <div class="max-w-6xl mx-auto px-4 landscape:px-6 md:px-8 text-center">
        <p class="text-sm landscape:text-xs md:text-base text-gray-400">&copy; {{ currentYear }} Ice Age Heating and AC. All rights reserved.</p>
        <p class="mt-2 text-sm text-gray-500">
          <NuxtLink to="/privacy-policy" class="hover:text-white transition-colors">Privacy Policy</NuxtLink>
          <span class="mx-2">|</span>
          <NuxtLink to="/terms-of-service" class="hover:text-white transition-colors">Terms & Conditions</NuxtLink>
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
const phoneNumber = '(608) 289-3093'
const emailAddress = 'skventerprisesinc@gmail.com'

useHead({
  title: 'Terms & Conditions - Ice Age Heating and AC',
  meta: [
    { name: 'description', content: 'Terms and Conditions for Ice Age Heating and AC. Terms governing use of our website and services.' }
  ]
})
</script>
