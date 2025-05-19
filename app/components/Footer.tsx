import { Smartphone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
    return(
        <footer className="bg-green-900 pt-14 pb-4 text-white px-5 lg:px-10">
            <div className="flex justify-between items-start w-fit gap-5 lg:gap-10">
                <div className="flex flex-col justify-start space-y-2 text-sm lg:text-md">
                    <h6 className="font-bold">Contact Us:</h6>
                    {/* Contacts */}
                    <div className="ms-2 space-y-4">
                        <div className="flex items-center gap-2">
                            <Smartphone size={15} />
                            <a href="tel:+639304390294">+639304390294</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={15} />
                            <a href="mailto:dimensionph1@gmail.com">dimensionph1@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 text-sm lg:text-md">
                    <h6 className="font-bold">Follow Us:</h6>
                    <div className="ms-2 space-y-4">
                        <div className="flex items-center gap-2">
                            <Facebook size={15} />
                            <a href="https://www.facebook.com/profile.php?id=61559330253460">Facebook</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Instagram size={15} />
                            <a href="#">Instagram</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Twitter size={15} />
                            <a href="#">Twitter</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Linkedin size={15} />
                            <a href="#">Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-10">
                &copy; 2025 Dimension PH, All Rights Reserved.
            </div>
        </footer>
    )
}