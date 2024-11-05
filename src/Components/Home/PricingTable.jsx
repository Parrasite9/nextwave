import React from 'react'

function PricingTable() {
  return (
    <div>
      <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* <!-- Header --> */}
            <div class="text-center mb-12">
                <h2 class="text-3xl font-extrabold text-gray-900">Plans that scale with business</h2>
                <p class="mt-4 text-lg text-gray-600">
                    Clarity gives you the blocks &amp; components you need to create a truly professional website, landing page, or admin panel for your SaaS.
                </p>
            </div>

            {/* <!-- Plan Toggle --> */}
            <div class="flex justify-center mb-8">
                <div class="flex items-center space-x-4">
                    <div class="flex items-center">
                        <input type="radio" id="monthly" name="pricing-plans" class="hidden" checked />
                        <label for="monthly" class="cursor-pointer text-lg font-medium text-gray-700">Monthly Plan</label>
                    </div>
                    <div class="flex items-center">
                        <input type="radio" id="yearly" name="pricing-plans" class="hidden" />
                        <label for="yearly" class="cursor-pointer text-lg font-medium text-gray-700">Yearly Plan</label>
                        <span class="ml-2 text-sm text-gray-500">(Save 20%)</span>
                    </div>
                </div>
            </div>

            {/* <!-- Pricing Cards --> */}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Basic Plan --> */}
                <div class="bg-white shadow-lg rounded-lg p-6">
                    <div class="flex items-center mb-4">
                        <span class="text-2xl">👋</span>
                        <div class="ml-4">
                            <h3 class="text-xl font-semibold text-gray-900">Basic</h3>
                            <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipis elit</p>
                        </div>
                    </div>
                    <div class="mb-6">
                        <div class="flex items-baseline">
                            <span class="text-4xl font-extrabold text-gray-900">$0</span>
                            <span class="ml-1 text-gray-500">/mo/user</span>
                        </div>
                    </div>
                    <a href="#" class="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Get 14 days free trial</a>
                    <p class="mt-4 text-sm text-gray-500">Best for free</p>
                    <ul class="mt-6 space-y-4">
                        <li class="flex items-center">
                            {/* <!-- SVG Icon --> */}
                            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.69-10.29a1 1 0 10-1.38-1.44L9 10.58 7.69 9.29a1 1 0 10-1.38 1.44l2 2a1 1 0 001.38 0l4-4z" clip-rule="evenodd"/>
                            </svg>
                            <span class="ml-2 text-gray-700">Full Access to Landingfolio</span>
                        </li>
                        {/* <!-- Repeat for other features --> */}
                        <li class="flex items-center">
                            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            {/* <!-- SVG Path --> */}
                            </svg>
                            <span class="ml-2 text-gray-700">100 GB Free Storage</span>
                        </li>
                        {/* <!-- Add more features as needed --> */}
                    </ul>
                </div>

                {/* <!-- Pro Plan --> */}
                <div class="bg-white shadow-xl rounded-lg p-6 border-2 border-blue-600 relative">
                    <div class="absolute top-0 right-0 mt-2 mr-2 bg-blue-600 text-white text-sm px-2 py-1 rounded-md">Most popular</div>
                        <div class="flex items-center mb-4">
                            <span class="text-2xl">💪</span>
                            <div class="ml-4">
                                <h3 class="text-xl font-semibold text-gray-900">Pro</h3>
                                <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipis elit</p>
                            </div>
                        </div>
                    <div class="mb-6">
                        <div class="flex items-baseline">
                            <span class="text-4xl font-extrabold text-gray-900">$49</span>
                            <span class="ml-1 text-gray-500">/mo/user</span>
                        </div>
                    </div>
                    <a href="#" class="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Get 14 days free trial</a>
                    <p class="mt-4 text-sm text-gray-500">Best for growing businesses</p>
                    <ul class="mt-6 space-y-4">
                        {/* <!-- List of features --> */}
                        <li class="flex items-center">
                            {/* <!-- SVG Icon --> */}
                            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            {/* <!-- SVG Path --> */}
                            </svg>
                            <span class="ml-2 text-gray-700">Full Access to Landingfolio</span>
                        </li>
                        {/* <!-- Add more features as needed --> */}
                    </ul>
                </div>

                {/* <!-- Exclusive Plan --> */}
                <div class="bg-white shadow-lg rounded-lg p-6">
                    <div class="flex items-center mb-4">
                        <span class="text-2xl">🚀</span>
                        <div class="ml-4">
                            <h3 class="text-xl font-semibold text-gray-900">Exclusive</h3>
                            <p class="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipis elit</p>
                        </div>
                    </div>
                    <div class="mb-6">
                        <div class="flex items-baseline">
                            <span class="text-4xl font-extrabold text-gray-900">$99</span>
                            <span class="ml-1 text-gray-500">/mo/user</span>
                        </div>
                    </div>
                    <a href="#" class="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Get 14 days free trial</a>
                    <p class="mt-4 text-sm text-gray-500">Best for enterprises</p>
                    <ul class="mt-6 space-y-4">
                        {/* <!-- List of features --> */}
                        <li class="flex items-center">
                            {/* <!-- SVG Icon --> */}
                            <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            {/* <!-- SVG Path --> */}
                            </svg>
                            <span class="ml-2 text-gray-700">Full Access to Landingfolio</span>
                        </li>
                        {/* <!-- Add more features as needed --> */}
                    </ul>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default PricingTable
