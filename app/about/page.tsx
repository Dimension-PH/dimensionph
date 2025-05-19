import Image from "next/image"
import Header from "@components/Header"
import Footer from "@components/Footer"

export default function About() {
    return (
        <>
            <Header />
            <section className="relative py-16 px-10 bg-lime-200 space-y-4">
                <div className="mx-auto space-y-8 relative z-1">
                    <div className="text-center lg:px-10 max-w-5xl mx-auto space-y-4">
                        <h1 className="text-4xl font-bold">About Us</h1>
                        <p><strong>Dimension PH</strong> is a dedicated <strong>ESL (English as a Second Language)</strong> teaching platform in the Philippines, committed to helping individuals enhance their English communication skills. In partnership with <strong>51Talk</strong> as our <strong>third-party center</strong>, we connect passionate educators with eager learners to foster confident, fluent English speakers in a supportive and engaging virtual environment.</p>
                    </div>
                    
                    <div className="w-fit mx-auto border">
                        <Image src={"/Banner.jpg"} alt={"Dimension PH - Banner"} width={551} height={245} />
                    </div>
                </div>
                {/* Vision & mission */}
                <div className="relative text-center lg:px-10 max-w-5xl mx-auto space-y-4 mt-10 z-1">
                    <div className="space-y-4">
                        <h2 className="text-3xl">Our Vision</h2>
                        <p>At <strong>Dimension-PH Online Tutorial Services</strong>, our vision is to redefine the standards of online education. We envision a future where learning transcends borders, connecting students from diverse backgrounds in a dynamic virtual environment. Through innovative teaching methods, personalized support, and a commitment to excellence, we strive to be at the forefront of educational innovation—making a lasting impact on our students&apos; lives and contributing to a brighter future for generations to come.</p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-3xl">Our Goal</h2>
                        <p>Our goal is to inspire a love for learning, empower individuals with valuable skills and knowledge, and cultivate a community of lifelong learners equipped to thrive in an ever-evolving world.</p>
                    </div>
                    <div className="space-y-4">
                        <p>In this vision, <strong>Dimension-PH</strong> becomes synonymous with quality education, innovation, and inclusivity, serving as a beacon of inspiration and transformation in the global education landscape.</p>
                        <p>We aspire to empower individuals to realize their full potential, embrace new opportunities, and shape a world where education knows no bounds.</p>
                    </div>
                </div>

                <div className="absolute w-30 h-30 border-10 border-lime-400/40 rounded-full top-5 left-30 z-0"></div>
                <div className="absolute w-30 h-30 border-8 border-lime-300/40 top-12 left-14 z-0"></div>
                <div className="absolute w-35 h-35 border-13 border-lime-400/40 rounded-full top-67 right-26 z-0"></div>
                <div className="absolute w-35 h-35 border-13 border-lime-400/40 top-107 left-36 z-0"></div>
                
                <div className="absolute w-35 h-35 border-13 border-lime-300/40 bottom-47 right-26 z-0"></div>
                <div className="absolute w-45 h-35 border-13 border-lime-400/40 -top-20 right-8 z-0"></div>

                <div className="absolute w-38 h-38 bg-lime-400/20 rounded-full top-48 left-20 z-0"></div>
                <div className="absolute w-38 h-38 bg-lime-400/20 rounded-full top-28 right-20 z-0"></div>
                <div className="absolute w-38 h-38 bg-lime-400/20 rounded-full top-116 right-43 z-0"></div>
                <div className="absolute w-38 h-38 bg-lime-400/20 rounded-full top-180 left-20 z-0"></div>
            </section>
            <Footer />
        </>
    )
}