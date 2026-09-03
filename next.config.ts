import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // English vanity URLs; Indonesian slugs are canonical for search.
      { source: "/design", destination: "/desain", permanent: true },
      { source: "/technology", destination: "/teknologi", permanent: true },
      // Old flagship route (pre-rename links may exist in the wild).
      { source: "/digital", destination: "/teknologi", permanent: true },
    ];
  },
};

export default withPayload(nextConfig);
