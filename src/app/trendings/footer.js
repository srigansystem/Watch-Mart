"use client"
import React from 'react'
import Image from "next/image";
const Footer = () => {
  return (
    <>
       <footer className="bg-white lg:grid lg:grid-cols-5">
  <div className="relative block h-32 lg:col-span-2 lg:h-full">
    <Image
    width={100}
    height={100}
      src="data:image/jpeg;base64,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"
      alt="Company"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>

  <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p>
          <span className="text-xs uppercase tracking-wide text-gray-500"> Call us </span>

          <a href="#" className="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl">
            0123456789
          </a>
        </p>

        <ul className="mt-8 space-y-1 text-sm text-gray-700">
          <li>Monday to Friday: 10am - 5pm</li>
          <li>Weekend: 10am - 3pm</li>
        </ul>

        <ul className="mt-8 flex gap-6">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Facebook</span>

              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Instagram</span>

              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Twitter</span>

              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">GitHub</span>

              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:opacity-75"
            >
              <span className="sr-only">Dribbble</span>

              <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className="font-medium text-gray-900">Services</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> 1on1 Coaching </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Company Review </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> HR Consulting </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> SEO Optimisation </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900">Company</p>

          <ul className="mt-6 space-y-4 text-sm">
            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> About </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
            </li>

            <li>
              <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-100 pt-12">
      <div className="sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap gap-4 text-xs">
          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> Terms & Conditions </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> Privacy Policy </a>
          </li>

          <li>
            <a href="#" className="text-gray-500 transition hover:opacity-75"> Cookies </a>
          </li>
        </ul>

        <p className="mt-8 text-xs text-gray-500 sm:mt-0">
          &copy; 2022. Company Name. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}

export default Footer