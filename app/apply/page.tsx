import Header from "@components/Header"
import Footer from "@components/Footer"
import Button from "@components/Button"

export default function ApplyNow() {
    return(
        <>
        <Header />
        <main className="bg-gray-100 pb-10">
            <section className="py-20 px-10 bg-gradient-to-r from-green-700 to-lime-400 space-y-4">
                <h1 className="text-2xl lg:text-4xl text-white font-bold">Apply to Dimension PH</h1>
                <p className="text-lg font-medium text-white">Join our community of English language educators and take the first step toward becoming a confident English teacher.</p>
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

                <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200 bg-white rounded-lg shadow-lg" data-id="element-63">
                    <h3 className="text-xl lg:text-2xl font-medium text-gray-900 mb-3" data-id="element-64">Application Process</h3>
                    <div className="mx-auto p-6 space-y-6">
                        <section className="text-gray-800">
                            <h2 className="text-xl font-semibold text-indigo-600">Application & Screening</h2>
                            <p className="text-base">
                            To begin your journey as a 51Talk center-based teacher, you will first need to apply directly through your assigned center. Once your application is received, you will undergo an initial screening process to ensure you meet the basic qualifications for the role. If you are deemed eligible, you will be scheduled for an interview to further assess your candidacy.
                            </p>
                        </section>

                        <section className="text-gray-800">
                            <h2 className="text-lg lg:text-xl font-semibold text-indigo-600">Virtual Interview</h2>
                            <p className="text-base">
                            During the virtual interview, you will meet with a recruitment specialist who will evaluate your communication skills, professionalism, and potential as an online ESL instructor. This interview serves as an opportunity to demonstrate your suitability for the role and discuss your teaching experience or qualifications in more detail.
                            </p>
                        </section>

                        <section className="text-gray-800">
                            <h2 className="text-lg lg:text-xl font-semibold text-indigo-600">Pre-Service Orientation (PSO)</h2>
                            <p className="text-base">
                            The Pre-Service Orientation (PSO) provides you with a comprehensive overview of 51Talk&apos;s online teaching platform, the center-based work environment, and expectations for the role. This orientation ensures you are well-prepared and familiar with the tools and resources available to support your teaching.
                            </p>
                        </section>

                        <section className="text-gray-800">
                            <h2 className="text-lg lg:text-xl font-semibold text-indigo-600">New Teacher Training (NTT)</h2>
                            <p className="text-base">
                            In the New Teacher Training (NTT), you will participate in guided sessions focused on essential teaching techniques and best practices for online instruction. These sessions cover how to effectively engage remote learners, utilize teaching tools, and create an interactive and productive learning environment, all within the context of working from a center.
                            </p>
                        </section>

                        <section className="text-gray-800">
                            <h2 className="text-lg lg:text-xl font-semibold text-indigo-600">Mock Demo Lesson</h2>
                            <p className="text-base">
                            As part of the training process, you will conduct a mock demo lesson, which simulates an actual online class. This session allows you to practice your teaching skills in a controlled environment and receive constructive feedback from trainers to help you refine your approach before the final assessment.
                            </p>
                        </section>

                        <section className="text-gray-800">
                            <h2 className="text-lg lg:text-xl font-semibold text-indigo-600">Final Demo Lesson</h2>
                            <p className="text-base">
                            The final demo lesson is a crucial component of the certification process. Here, you will showcase all the skills and techniques you have learned throughout your training by delivering a complete, live lesson to a mock student. This demonstration serves as the final step in proving your readiness to teach real students online.
                            </p>
                        </section>

                        <section className="text-gray-800">
                            <h2 className="text-lg lg:text-xl font-semibold text-indigo-600">Onboarding & Go-Live</h2>
                            <p className="text-base">
                            Upon successful completion of your final demo lesson, you will proceed with the onboarding process, which includes activating your teaching profile and finalizing necessary administrative steps. Once onboarded, you will be ready to start accepting and teaching online classes from the center, officially becoming part of the 51Talk teaching team.
                            </p>
                        </section>
                    </div>
                </div>

                <div className="flex justify-center my-5">
                    <Button className="px-10 py-3 w-full md:w-fit mx-auto bg-gradient-to-tr from-green-700 to-lime-400 rounded-full font-bold text-white hover:from-green-800 hover:to-lime-500" redirect="https://docs.google.com/forms/d/e/1FAIpQLSerJQec945h9wy_0-W-tYK2vs5h5nhCHhd5b_wPB8oyp0gc7g/viewform?usp=header" text="Open Google Recruitment Form" />
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}