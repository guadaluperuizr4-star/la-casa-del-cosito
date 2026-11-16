warning: in the working copy of 'next.config.ts', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/next.config.ts b/next.config.ts[m
[1mindex a0cf0c7..7a006d5 100644[m
[1m--- a/next.config.ts[m
[1m+++ b/next.config.ts[m
[36m@@ -2,8 +2,10 @@[m [mimport type { NextConfig } from "next";[m
 [m
 const nextConfig: NextConfig = {[m
   /* config options here */[m
[31m-  cacheComponents: true,[m
[31m-  partialPrefetching: true,[m
[32m+[m[32m  output: "export",[m
[32m+[m[32m  images: {[m
[32m+[m[32m    unoptimized: true,[m
[32m+[m[32m  },[m
   turbopack: {[m
     rules: {[m
       "*.css": {[m
