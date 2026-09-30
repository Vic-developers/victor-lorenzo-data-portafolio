import type { Metadata } from 'next';
import '../styles/globals.css';
import { SiteHeader, SiteFooter } from '../components/Site';

export const metadata: Metadata = {
  title: 'Victor Elvis Lorenzo | Data Analyst',
  description:
    'Data Analyst portfolio showcasing data analysis, SQL, Power BI, Excel, Python, dashboards and data visualization projects.',
  openGraph: {
    title: 'Victor Elvis Lorenzo | Data Analyst',
    description: 'Turning data into insights, decisions and better questions.',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Victor Elvis Lorenzo | Data Analyst' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Victor Elvis Lorenzo',
              jobTitle: 'Data Analyst',
              description: 'Turning data into insights, decisions and better questions.',
            }),
          }}
        />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
