/* eslint-disable react/jsx-one-expression-per-line, max-len */
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import ConvertKitForm from '../components/convertKit';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>
          Home |
          {` ${siteTitle}`}
        </title>
      </Head>
      <section className="h-screen flex flex-col justify-center items-center px-2 md:px-24 xl:px-32 text-center">
        <div className="mb-8">
          <img alt="Adota Logo" src="/images/logo.svg" className="w-32 h-32 md:w-40 md:h-40 lg:w-56 lg:h-56"></img>
        </div>
        <div className="animate__animated animate__fadeInUp">
          <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
            Welcome to Adota.net,
          </h1>
          <h3 className="text-lg lg:text-3xl my-4 lg:my-6 leading-tight text-gray-800">
            This project aims to enable every animal shelter to have a facilitated online presence, hopefully leading to more pet adoptions.
          </h3>
          <p className="text-md lg:text-2xl font-normal">
            It is still <span className="font-bold">under construction</span>, but check in again soon and <span className="text-red">subscribe</span> for updates! 🚧
          </p>
        </div>
        <ConvertKitForm />
      </section>
    </Layout>
  );
}
