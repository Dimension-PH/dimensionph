import { Smartphone, Mail, Facebook } from "lucide-react"
import Link from "next/link";
import { COMPANY_EMAIL, FACEBOOK_URL, PHONE_TEL, PHONE_DISPLAY } from "@/app/siteConfig";

export default function Footer() {
    const year = new Date().getFullYear();

    return(
        <footer className="bg-green-900 pt-14 pb-4 text-white px-5 lg:px-10">
            <div className="flex flex-wrap justify-between items-start w-fit gap-5 lg:gap-10 lg:w-full lg:justify-evenly">
                <div className="flex flex-col justify-start space-y-2 text-sm lg:text-md">
                    <h6 className="font-bold">Contact Us:</h6>
                    {/* Contacts */}
                    <div className="ms-2 space-y-4">
                        <div className="flex items-center gap-2">
                            <Smartphone size={15} />
                            <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={15} />
                            <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-sm lg:text-md">
                    <h6 className="font-bold">Follow Us:</h6>
                    <div className="ms-2 space-y-4">
                        <div className="flex items-center gap-2">
                            <Facebook size={15} />
                            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">Facebook</a>
                        </div>
                        {/* Scan-to-follow QR for the Facebook page */}
                        <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
                            <img
                                src="/fb-qr.png"
                                alt="Scan the QR code to follow Dimension-PH on Facebook"
                                width={128}
                                height={149}
                                className="rounded-md shadow-md"
                            />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-sm lg:text-md">
                    <h6 className="font-bold">Menu:</h6>
                    <ul className="space-y-2 ps-2">
                        <li className="hover:font-bold hover:cursor-pointer">
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li className="hover:font-bold hover:cursor-pointer">
                            <Link href={'/announcement'}>Announcement</Link>
                        </li>
                        <li className="hover:font-bold hover:cursor-pointer">
                            <Link href={'/third-party'}>Partners</Link>
                        </li>
                        <li className="hover:font-bold hover:cursor-pointer">
                            <Link href={'/about'}>About Us</Link>
                        </li>
                        <li className="hover:font-bold hover:cursor-pointer">
                            <Link href={'/contacts'}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-10">
                &copy; {year} Dimension-PH, All Rights Reserved.
            </div>
        </footer>
    )
}
