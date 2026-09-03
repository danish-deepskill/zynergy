import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // English brand slugs are canonical; Indonesian + legacy variants redirect.
      { source: "/teknologi", destination: "/technology", permanent: true },
      { source: "/digital", destination: "/technology", permanent: true },
      { source: "/desain", destination: "/creative", permanent: true },
      { source: "/design", destination: "/creative", permanent: true },
      { source: "/pengadaan", destination: "/supply", permanent: true },
    ];
  },
};

export default withPayload(nextConfig);
