import Head from "next/head"
import Link from "next/link";
import React from "react";
import { Accordion } from "flowbite-react";
export default function AccountFAQ() {
    return (
        <>

            <Head>
                <title>My FAQ | GyanOK</title>
                <meta name="description" content="My Account Page" />
            </Head>
            <section className="py-5 relative">
                <div className="container">

                    <div className="flex justify-between items-center mb-3">
                        <div className="space-x-3">
                            <Link href="/my-account" className="text-blue-200 border-2 border-blue-200 hover:bg-blue-200 hover:text-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm p-2 text-center inline-flex items-center ">
                                <svg className="w-4 h-4   font-bold" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M17.77 3.77L16 2 6 12l10 10 1.77-1.77L9.54 12z"></path>
                                </svg>
                            </Link>
                            <h4 className="inline-flex text-white">FAQ</h4>
                        </div>
                    </div>

                    <div className=" p-3 mb-3 bg-white rounded-sm shadow-sm">
                    <Accordion alwaysOpen flush  className="faq-accordian">
                        <Accordion.Panel>
                            <Accordion.Title className="faq-header">
                               Q1. What is Flowbite?
                            </Accordion.Title>
                            <Accordion.Content className="faq-body">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Check out this guide to learn how to{' '}
                                    <a
                                        href="https://flowbite.com/docs/getting-started/introduction/"
                                        className="text-blue-600 hover:underline dark:text-blue-500"
                                    >
                                        get started
                                    </a>
                                    {' '}and start developing websites even faster with components on top of Tailwind CSS.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                        <Accordion.Title className="faq-header">
                        Q2.   Is there a Figma file available?
                            </Accordion.Title>
                            <Accordion.Content className="faq-body">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Check out the{' '}
                                    <a
                                        href="https://flowbite.com/figma/"
                                        className="text-blue-600 hover:underline dark:text-blue-500"
                                    >
                                        Figma design system
                                    </a>
                                    {' '}based on the utility classes from Tailwind CSS and components from Flowbite.
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                        <Accordion.Title className="faq-header">
                        Q3.  What are the differences between Flowbite and Tailwind UI?
                            </Accordion.Title>
                            <Accordion.Content className="faq-body">
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.
                                </p>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.
                                </p>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Learn more about these technologies:
                                </p>
                                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                                    <li>
                                        <a
                                            href="https://flowbite.com/pro/"
                                            className="text-blue-600 hover:underline dark:text-blue-500"
                                        >
                                            Flowbite Pro
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://tailwindui.com/"
                                            rel="nofollow"
                                            className="text-blue-600 hover:underline dark:text-blue-500"
                                        >
                                            Tailwind UI
                                        </a>
                                    </li>
                                </ul>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>

                   






                </div>
            </section>
        </>
    )
}