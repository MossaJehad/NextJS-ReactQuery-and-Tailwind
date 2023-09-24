"use client";

import Header from "@/components/Header";
import Section from "@/components/Section";
import Movies from "@/components/Movies"; 
import Footer from "@/components/Footer";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Home() {
  return (
    
    <QueryClientProvider client={queryClient}>
      <main>
        <Header />
        <Section />
        <Movies />
        <Footer />
      </main>
    </QueryClientProvider>
  );
}