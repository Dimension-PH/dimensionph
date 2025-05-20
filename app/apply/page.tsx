import Header from "@components/Header"
import Footer from "@components/Footer"

export default function ApplyNow() {
    const companyEmail = process.env.NEXT_PUBLIC_COMPANY_EMAIL === "" ? "companyEmail" : process.env.NEXT_PUBLIC_COMPANY_EMAIL;

    return(
        <>
        <Header />
        <main className="bg-gray-100 pb-10">
            <section className="py-20 px-10 bg-gradient-to-r from-green-700 to-lime-400 space-y-4">
                <h1 className="text-2xl lg:text-4xl text-white font-bold">Apply to Dimension PH</h1>
                <p className="text-lg font-medium text-white">Join our community of English language learners and take the first step toward becoming a confident English speaker.</p>
            </section>
            <section className="py-12 px-10 space-y-6">
                <div className="space-y-2 pe-6">
                    <h2 className="font-bold text-2xl">About <span className="bg-gradient-to-tr from-green-700 to-lime-400 bg-clip-text text-transparent">Dimension-PH</span></h2>
                    <p>At Dimension-PH Online Tutorial Teachers, we take pride in providing professional, high-quality English instruction to learners worldwide. As a proudly 51Talk-accredited agency, we are committed to excellence in online education, guided by integrity, patience, and a passion for teaching.</p>
                    <p>Our team of dedicated Filipino educators is carefully selected and trained to deliver engaging and effective lessons tailored to each student&apos;s needs. Whether you&apos;re a beginner or advancing your skills, we offer a supportive and enriching learning environment designed to help you grow with confidence.</p>
                </div>
            </section>
            <hr className="mx-20 mb-10 border-2 border-gray-300" />
            <section className="px-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6" data-id="element-17">
                    Application Requirements
                </h3>
                <div data-id="element-18">
                    <ul className="list-disc pl-5 space-y-2">
                        <li>A graduate of any degree</li>
                        <li>With of without teaching experience</li>
                        <li>Fresh Graduate is encouraged to apply</li>
                        <li>Willing to be trained</li>
                        <li>Computer literate</li>
                    </ul>
                </div>

                <div className="mt-6 py-2 space-y-2">
                    <h4 className="text-lg font-medium">Open Positions:</h4>
                    <ul className="ps-2 space-y-2">
                        <li>ESL Teachers (for online teaching) - <strong>Onsite</strong></li>
                    </ul>
                </div>

                <div className="mt-6 py-2 space-y-2">
                    <h4 className="text-lg font-medium">Schedule:</h4>
                    <ul className="ps-2 space-y-2">
                        <li>Graveyard shift, 6:00 PM – 5:00 AM (Monday to Saturday)</li>
                    </ul>
                </div>

                <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200" data-id="element-63">
                    <h3 className="text-lg font-medium text-gray-900 mb-3" data-id="element-64">Application Process</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-600" data-id="element-65">
                        <li data-id="element-66">Send your updated resume to our official email address: [ <a className="text-blue-500 underline" href={`mailto:${companyEmail}`}>{companyEmail}</a> ]. Make sure your contact details are up to date.</li>
                        <li data-id="element-67">Once we receive your application, our recruitment team will review it. If shortlisted, you will be contacted via email or phone to schedule an interview.</li>
                        <li data-id="element-68">If your interview is successful, you will be invited to conduct a short mock teaching session to assess your communication and instructional skills.</li>
                        <li data-id="element-69">Candidates who pass the mock session will receive an offer and be asked to review and sign the employment contract.</li>
                        <li data-id="element-70">After signing the contract, you&apos;ll receive an email with <strong>training schedules</strong> and your <strong>official start date</strong>.</li>
                    </ol>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}