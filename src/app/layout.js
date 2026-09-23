import './globals.css';

export const metadata = {
  title: 'Manoj Kumar | Senior Vice President - Technical & Operations',
  description: 'Portfolio of Manoj Kumar - Façade, Fenestration & Structural Glazing Leader with 30+ years of mega-project experience.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#090d16] text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
