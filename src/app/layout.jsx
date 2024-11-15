import './globals.css'

export const metadata = {
  title: 'Family Survey Presentation',
  description: 'Présentation de l\'enquête sur les familles à Genève',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </head>
      <body>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}