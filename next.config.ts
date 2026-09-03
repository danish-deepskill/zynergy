import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // English vanity URL; /desain is canonical for Indonesian search.
      { source: "/design", destination: "/desain", permanent: true },
    ];
  },
};

export default withPayload(nextConfig);
