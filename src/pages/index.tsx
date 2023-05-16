import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {
    const hello = api.example.hello.useQuery({ text: "from tRPC" });

    return (
            <>
                <Head>
                    <title>T3 Demo App</title>
                    <meta name="description" content="Testing the T3 Stack" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#050908] to-[#0a0830]">
                    <h1 className="text-2xl text-white">T3 Stack</h1>
                </main>
            </>
           );
};

export default Home;
