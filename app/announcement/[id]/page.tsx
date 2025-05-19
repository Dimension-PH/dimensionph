'use client'
import { CalendarIcon } from 'lucide-react';
import { redirect } from 'next/navigation';
import { useParams } from 'next/navigation';

import Header from '@components/Header';
import Footer from '@components/Footer';

import { sampleData } from '../data';

export default function ViewAnnouncement() {
  const params = useParams();

  const id = Number(params.id);
  const announcement = sampleData.find(item => item.id === id);

  if (!announcement) {
    redirect('/announcement');
  }

  return (<div className="min-h-screen bg-gray-50 w-full">
      {/* Navigation */}
      <Header />
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <img src={announcement.image} alt="" className="w-full h-64 object-cover" />
          <div className="p-8">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {announcement.category}
              </span>
              <div className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" />
                {new Date(announcement.date).toLocaleDateString()}
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {announcement.title}
            </h1>
            <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{
            __html: announcement.content
          }} />
          </div>
        </article>
      </main>
      {/* Footer */}
      <Footer />
    </div>)
}