import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BlogPostsGrid from "./components/BlogPostsGrid";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <Hero />

        {/* Blog Grid */}
        <BlogPostsGrid />
      </div>
    </>
  );
}
