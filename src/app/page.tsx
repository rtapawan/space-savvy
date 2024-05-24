"use client";

import { useEffect, useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { APIResponse } from "./constants";
import styles from "./styles/Page.module.css";

export default function Page() {
  const [data, setData] = useState<APIResponse>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/home");
        const result = await response.json();
        setData({
          launches: JSON.parse(result.launches),
          launchpads: JSON.parse(result.launchpads),
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <Hero />
      <div id="body-start" className={styles.bodyContainer}>
        <Body
          launches={data?.launches ?? []}
          launchpads={data?.launchpads ?? []}
        />
        <Footer />
      </div>
    </main>
  );
}
