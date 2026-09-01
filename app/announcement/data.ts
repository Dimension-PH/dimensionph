export type Announcement = {
id: number;
title: string;
date: string;
content: string | TrustedHTML;
category: string;
preview: string;
image: string;
};

export const sampleData: Announcement[] = [
    {
        id: 5,
        title: 'Teacher of the Month: Mia Freya',
        date: '2026-09-01',
        category: 'Teacher of the Month',
        preview: "Congratulations to Teacher Mia Freya — our Teacher of the Month! A look at the dedication behind her students' progress.",
        image: '/mia-freya-poster.jpg',
        content: `
            <p>Please join us in congratulating <strong>Teacher Mia Freya</strong>, Dimension-PH&rsquo;s <strong>Teacher of the Month</strong>! Mia&rsquo;s patience, warmth, and dedication have made a real difference for her students &mdash; and her results speak for themselves.</p>
            <p>In her own words:</p>
            <blockquote>
                <p>&ldquo;One of the most rewarding parts of being a teacher is witnessing a student&rsquo;s progress. Since last month, we&rsquo;ve had 30 classes together, and I can truly say that every class has been worth it. When we first started, he was struggling to even utter words. Now, he can answer using short sentences, follow directions attentively, and participate more confidently in our lessons.&rdquo;</p>
                <p>&ldquo;I truly admire his effort, patience, and dedication to learning English. There were times when our class would start and I could see how tired he was after his physical classes. But somehow, with a little encouragement, fun, and the right activities, I could capture his attention, make him smile, and keep him engaged until the end of the lesson. Thirty classes, countless little improvements, and so many moments to be proud of &mdash; this is why I love teaching.&rdquo;</p>
                <p>&mdash; Teacher Mia Freya</p>
            </blockquote>
            <p>Thank you, Teacher Mia, for the heart you bring to every class. Want to learn from teachers like Mia, or build a teaching career of your own? Visit our Apply page to get started.</p>
        `,
    },
    {
        id: 6,
        title: 'Year-End Team Building Gathering — Coming Soon',
        date: '2026-09-01',
        category: 'Events',
        preview: 'Our year-end team building gathering is coming up soon. Follow us on Facebook for dates, details, and updates.',
        image: '/fb-banner.png',
        content: `
            <p>Get ready to celebrate &mdash; our <strong>Year-End Team Building Gathering</strong> is coming up soon! It&rsquo;s our way of thanking the Dimension-PH family for a year of hard work, growth, and heart, with a day of fun, connection, and appreciation for the whole team.</p>
            <p>Dates and full details will be announced shortly. <strong>Follow us on Facebook</strong> so you don&rsquo;t miss a single update.</p>
            <p style="text-align:center;margin-top:1.5rem;">
                <a href="https://www.facebook.com/dimensionphbutuan" target="_blank" rel="noopener noreferrer">
                    <img src="/fb-qr.png" alt="Scan to follow Dimension-PH on Facebook" style="width:220px;height:auto;display:inline-block;border-radius:8px;" />
                </a>
            </p>
            <p style="text-align:center;color:#555;">Scan the QR code or visit <a href="https://www.facebook.com/dimensionphbutuan" target="_blank" rel="noopener noreferrer">facebook.com/dimensionphbutuan</a> to follow us for updates.</p>
        `,
    },
    {
        id: 3,
        title: 'New Teacher Training Batch Now Open',
        date: '2026-08-10',
        category: 'Training',
        preview: "Our next New Teacher Training cycle is starting soon. Here's what to expect on your journey to going live.",
        image: '/Banner.jpg',
        content: `
            <p>Dimension-PH is opening a new <strong>New Teacher Training (NTT)</strong> batch for incoming educators. If you&rsquo;ve been thinking about starting your online English teaching career, now is the perfect time to apply. Here&rsquo;s what the journey looks like:</p>
            <ul>
                <li><strong>Application &amp; Screening</strong> &mdash; apply through the center and complete an initial screening.</li>
                <li><strong>Virtual Interview</strong> &mdash; meet our recruitment team and showcase your communication skills.</li>
                <li><strong>Pre-Service Orientation (PSO)</strong> &mdash; get familiar with the platform and the center environment.</li>
                <li><strong>New Teacher Training (NTT)</strong> &mdash; learn essential online teaching techniques and best practices.</li>
                <li><strong>Mock &amp; Final Demo Lessons</strong> &mdash; practice and demonstrate your teaching, with feedback from trainers.</li>
                <li><strong>Onboarding &amp; Go-Live</strong> &mdash; activate your profile and start teaching real students.</li>
            </ul>
            <p>Seats are limited. Apply now through our recruitment form on the Apply page to reserve your place in the upcoming batch.</p>
        `,
    },
    {
        id: 1,
        title: 'Now Hiring: ESL Teachers for Center-Based Online Teaching',
        date: '2026-08-01',
        category: 'Recruitment',
        preview: "Dimension-PH is expanding its team of online English teachers. Fresh graduates are welcome — here's how to apply.",
        image: '/images/image.jpg',
        content: `
            <p>Dimension-PH is now accepting applications for <strong>ESL Teachers</strong> to join our center-based online teaching team in Butuan City. As a 51Talk-accredited center, we&rsquo;re looking for passionate individuals ready to help learners around the world become confident English speakers.</p>
            <h2>Who can apply</h2>
            <p>A graduate of any degree, with or without teaching experience. Fresh graduates are encouraged to apply &mdash; if you&rsquo;re willing to be trained and computer literate, we want to hear from you.</p>
            <h2>Schedule</h2>
            <p>Graveyard shift, 6:00 PM &ndash; 5:00 AM (Monday to Saturday), onsite at our center.</p>
            <h2>What we offer</h2>
            <p>Complete training (Pre-Service Orientation, New Teacher Training, and guided demo lessons), a supportive teaching community, and a clear path to a rewarding online teaching career.</p>
            <p>Ready to apply? Submit your application through the recruitment form on our Apply page. We can&rsquo;t wait to meet you.</p>
        `,
    },
    {
        id: 2,
        title: 'Teacher Spotlight: Meet Teacher Alia Gaile',
        date: '2026-07-15',
        category: 'Teacher Spotlight',
        preview: "Get to know one of our experienced ESL educators and the heart behind her teaching.",
        image: '/images/image-2.jpeg',
        content: `
            <p>This month we&rsquo;re shining a light on <strong>Teacher Alia Gaile</strong>, one of our dedicated ESL educators at Dimension-PH. With over four years of teaching experience and a bachelor&rsquo;s degree in English education, Teacher Alia has taught students of all ages &mdash; from young children to adults.</p>
            <p>Her approach centers on proven methods like <strong>CPR (Contextualized Practice and Review)</strong>, making lessons both effective and enjoyable. She focuses on phonics, grammar, pronunciation, and real-life conversation skills to help learners speak English with confidence.</p>
            <p>Teachers like Alia are what make Dimension-PH a trusted name in online English education. Want to build a teaching career like hers? Visit our Apply page to get started.</p>
        `,
    },
    {
        id: 4,
        title: 'Dimension-PH: Proudly Partnered with 51Talk',
        date: '2026-06-20',
        category: 'Company News',
        preview: "A look at what our 51Talk partnership means for our teachers and the learners they serve.",
        image: '/fb-banner.png',
        content: `
            <p>At Dimension-PH, our partnership with <strong>51Talk</strong> sits at the heart of what we do. As a 51Talk-accredited center based in Butuan City, we recruit, train, and support Filipino educators who deliver quality English lessons to students around the world.</p>
            <p>For our teachers, this means a proven platform, a steady community of learners, and the structured training and support they need to succeed &mdash; without having to find students on their own. For learners, it means access to patient, well-prepared, and passionate teachers who genuinely care about their progress.</p>
            <p>We&rsquo;re proud of this partnership, and we&rsquo;re always working to expand our network of opportunities. To learn more, visit our Partners page or get in touch through our Contact page.</p>
        `,
    },
];
