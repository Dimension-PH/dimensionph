import { CalendarIcon, ChevronRightIcon } from "lucide-react"
import Link from "next/link"
import Header from "@components/Header"
import Footer from "@components/Footer"

import { sampleData } from './data';

const announcements = sampleData;

export default function Announcement() {
    return (
        <div className="min-h-screen bg-gray-50 w-full">
        {/* Navigation */}
        <Header />
        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
            {/* Page Header */}
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Latest Announcements
                </h1>
                <p className="text-lg text-gray-600">
                    Stay updated with our latest news and announcements
                </p>
            </div>
            {/* Announcements List */}
            <div className="max-w-4xl mx-auto space-y-6">
            {announcements.map(announcement => <Link key={announcement.id} href={`/announcement/${announcement.id}`} className="block bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 lg:w-64">
                    <img src={announcement.image} alt="" className="h-48 w-full object-cover" />
                    </div>
                    <div className="p-6 flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                        {announcement.category}
                        </span>
                        <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {new Date(announcement.date).toLocaleDateString()}
                        </div>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                        {announcement.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{announcement.preview}</p>
                    <div className="flex items-center text-blue-600 text-sm font-medium">
                        Read more
                        <ChevronRightIcon className="h-4 w-4 ml-1" />
                    </div>
                    </div>
                </div>
                </Link>)}
                {announcements.length === 0 ? <><hr className="w-80 border-4 border-gray-400 mx-auto" /><div className="text-center mx-auto text-xl text-gray-700 w-full">No announcements yet...</div></> : ''}
            </div>
        </main>
        {/* Footer */}
        <Footer />
        </div>
    )
}