import type { Metadata } from "next"
import { Fredoka } from "next/font/google"
import { CheckCircle2, GraduationCap, Users } from "lucide-react"

import Header from "@components/Header"
import Footer from "@components/Footer"
import Button from "@components/Button"

const fredoka = Fredoka({
    subsets: ["latin"],
    weight: ["400", "700"],
})

export const metadata: Metadata = {
    title: "Partners | Dimension-PH",
    description: "The trusted platforms that power world-class online English education at Dimension-PH, including our 51Talk partnership.",
}

export default function Partners() {
    return (
        <>
            <Header />
            <main className="bg-gray-100 pb-10">
                {/* Hero */}
                <section className="py-20 px-10 bg-gradient-to-r from-green-700 to-lime-400 space-y-4">
                    <h1 className="text-2xl lg:text-4xl text-white font-bold">Our Partners</h1>
                    <p className="text-lg font-medium text-white max-w-3xl">
                        The trusted platforms that power world-class online English education at Dimension-PH.
                    </p>
                </section>

                {/* Intro */}
                <section className="py-12 px-10 max-w-5xl mx-auto">
                    <p className="text-gray-700 text-lg leading-relaxed">
                        At Dimension-PH, we believe great teaching deserves great opportunities. That&apos;s why we partner with
                        established online English education platforms to connect our Filipino educators with learners around the
                        world. Through these partnerships, our teachers gain access to structured curricula, a global community of
                        students, and the tools they need to build a rewarding career in online education &mdash; all backed by the
                        hands-on support of our center.
                    </p>
                </section>

                <hr className="mx-10 lg:mx-20 border-2 border-gray-300" />

                {/* Featured partner: 51Talk */}
                <section className="py-12 px-10 max-w-5xl mx-auto space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                        <div className="bg-yellow-400 rounded-lg shadow-lg w-32 h-20 flex flex-col items-center justify-center shrink-0">
                            <h6 className={`${fredoka.className} text-3xl text-cyan-600 font-bold`}>51Talk</h6>
                            <span className="text-[10px] text-gray-600 text-center px-1">Our featured partner platform</span>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold">
                            Featured Partner &mdash;{" "}
                            <span className="bg-gradient-to-tr from-green-700 to-lime-400 bg-clip-text text-transparent">51Talk</span>
                        </h2>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                        51Talk is one of the world&apos;s leading online English education platforms, connecting students across the
                        globe with dedicated English teachers. As a proud 51Talk-accredited center, Dimension-PH recruits, trains,
                        and supports teachers who deliver 51Talk lessons from our center-based environment in Butuan City.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        This partnership gives our educators a proven platform, a steady stream of students, and a clear path to
                        grow &mdash; while giving learners access to patient, well-trained, and passionate Filipino teachers.
                    </p>

                    {/* Two benefit cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                                    <Users className="text-green-700" size={24} />
                                </div>
                                <h3 className="text-xl font-semibold">What it means for teachers</h3>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "An accredited, center-based teaching setup with hands-on support",
                                    "Structured onboarding: Pre-Service Orientation, New Teacher Training, and guided demo lessons",
                                    "A reliable platform and student base — no need to find your own students",
                                    "Ongoing professional development and a supportive teaching community",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600">
                                        <CheckCircle2 className="text-lime-600 shrink-0 mt-0.5" size={18} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-md">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                                    <GraduationCap className="text-green-700" size={24} />
                                </div>
                                <h3 className="text-xl font-semibold">What it means for students</h3>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    "Lessons from carefully selected and trained Filipino ESL educators",
                                    "Proven teaching methods such as CPR (Contextualized Practice and Review)",
                                    "A focus on phonics, grammar, pronunciation, and real conversation skills",
                                    "A consistent, quality-assured learning experience",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600">
                                        <CheckCircle2 className="text-lime-600 shrink-0 mt-0.5" size={18} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <hr className="mx-10 lg:mx-20 border-2 border-gray-300" />

                {/* Growing our network */}
                <section className="py-12 px-10 max-w-5xl mx-auto space-y-3">
                    <h2 className="text-2xl lg:text-3xl font-bold">Growing Our Network</h2>
                    <p className="text-gray-700 leading-relaxed">
                        51Talk is one of several third-party platforms we work with. We&apos;re continually expanding our
                        partnerships to create more opportunities for teachers and more value for students.
                    </p>
                </section>

                {/* CTA */}
                <section className="mx-10 lg:mx-20 my-4 rounded-2xl bg-gradient-to-r from-green-600 to-lime-500 text-white px-8 py-12 text-center space-y-5">
                    <h2 className="text-2xl lg:text-3xl font-bold">Ready to start your online teaching career?</h2>
                    <p className="max-w-2xl mx-auto text-white/90">
                        Join a team that&apos;s trusted by a leading global platform &mdash; and supported every step of the way.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                        <Button
                            className="px-10 py-3 bg-white text-green-700 rounded-full font-bold hover:bg-gray-100 transition duration-300"
                            redirect="/apply"
                            text="Apply Now"
                        />
                        <Button
                            className="px-10 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-green-700 transition duration-300"
                            redirect="/contacts"
                            text="Contact Us"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
