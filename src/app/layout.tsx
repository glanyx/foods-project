import MainHeader from '@/components/header/MainHeader';
import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className='font-[Quicksand] font-sans' lang="en">
      <body className='m-0 bg-radial from-[#282c34] to-[#282c34]'>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
