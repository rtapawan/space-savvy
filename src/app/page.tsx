"use client";

import { useEffect, useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { APIResponse } from "./constants";

export default function Page() {
  const [data, setData] = useState<APIResponse>();

  useEffect(() => {
    fetch("/api/home")
      .then((res) => res.json())
      .then((data) => {
        setData({
          launches: JSON.parse(data.launches),
          launchpads: JSON.parse(data.launchpads),
        });
      });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <div
        id="body-start"
        className="w-full min-h-[500px] flex flex-col items-center bg-gray-200 pt-12 pl-12 pr-12 pb-6"
      >
        <Body
          launches={data?.launches ?? []}
          launchpads={data?.launchpads ?? []}
        />
        <Footer />
      </div>
    </main>
  );
}
