import type { NextConfig } from "next";
import { createCivicAuthPlugin } from "@civic/auth-web3/nextjs"


const nextConfig: NextConfig = {
  /* config options here */
};

const withCivicAuth = createCivicAuthPlugin({
  clientId: "0d420c1d-32a8-4cff-97be-81e03a2a84e9"
});

export default withCivicAuth(nextConfig)
