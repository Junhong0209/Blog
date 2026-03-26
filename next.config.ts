import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import type { NextConfig } from "next";
import path from "node:path";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

export default withVanillaExtract(nextConfig);
