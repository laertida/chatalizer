import Head from 'next/head';
import Image from 'next/image';


const Layout = ({ title, theme, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A simple page to analyze whatsapp chats" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;
