import React from "react";
import Head from "next/head";

export default function Layout({ title, children }) {
  return (
    <Head className="bg-gray-300">
      <title>{title}</title>

      <link rel="icon" href="/favicon.ico" />
      <main className="container mx-auto max-w-xl pt-8 min-h-screen">
        {children}
      </main>
    </Head>
  );
}
