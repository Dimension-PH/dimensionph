import Header from "@components/Header";
import Footer from "@components/Footer";

import { Mail, PhoneIcon } from "lucide-react";
import { COMPANY_EMAIL, FACEBOOK_URL } from "@/app/siteConfig";

export default function Contacts() {
    const companyEmail = COMPANY_EMAIL;
    return(
        <>
        <Header />
        <main className="px-10 py-5 bg-gray-100">
            <section>
                <h1 className="text-center text-2xl lg:text-4xl font-bold bg-gradient-to-tr from-green-700 to-lime-400 bg-clip-text text-transparent mb-10">
                    Dimension-PH Contacts
                </h1>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="relative flex justify-center max-w-2xl mx-auto bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-md text-gray-500 hover:text-gray-400 cursor-pointer">
                    <img className="w-auto min-w-xs max-w-2xl" src={'/fb-banner.png'} alt="Dimension-PH Facebook Page" />
                    <span className="absolute p-1 bottom-0 right-0 text-xs font-bold">Click to View</span>
                </a>
            </section>

            <hr className="border-1 my-5 border-gray-300" />

            <section>
                <div className="space-y-4 pb-5">
                    <h2 className="text-center text-2xl">Other Contact Info</h2>

                    <div className="flex justify-center flex-col lg:flex-row gap-4">
                        <div className="flex justify-center">
                            <iframe className="bg-white rounded-lg shadow-lg p-2 px-4" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d292.9430227634947!2d125.51341752887959!3d8.939323073838267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1747734250085!5m2!1sen!2sph" width="600" height="450" loading="lazy"></iframe>
                        </div>
                        <div className="space-y-4 px-10 lg:px-1">
                            <div>
                                <h3 className="text-lg font-medium mb-2">
                                    Location:
                                </h3>
                                <ul className="list-disc max-w-lg ps-4">
                                    <li>
                                        LSC Building, Door 2 & 3, 2nd Street, Arujville Subdivision, Libertad, Butuan City
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">
                                    Others:
                                </h3>
                                <ul className="ps-2 space-y-2">
                                    <li>
                                        <a className="flex gap-2 items-center" href={`mailto:${companyEmail}`}>
                                            <Mail size={20} />
                                            <span className="text-green-700 underline hover:text-green-800">{companyEmail}</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="flex gap-2 items-center" href={`tel:+639304390294`}>
                                            <PhoneIcon size={20} />
                                            <span className="text-green-700 underline hover:text-green-800">+639304390294</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}
