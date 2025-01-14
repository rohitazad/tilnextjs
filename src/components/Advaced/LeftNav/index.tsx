"use client";
import { usePathname } from "next/navigation"; // Import usePathname


import styles from "./styles.module.scss";

import Link from "next/link"

const leftArrow = {
    "tutorials": [
      {
        "title": "Bundle Pages Router Dependencies",
        "link": "/tutorials/bundle-pages-router-dependencies"
      },
      {
        "title": "Export Path Map",
        "link": "/tutorials/export-path-map"
      },
      {
        "title": "Generate Build ID and Version Control",
        "link": "/tutorials/generate-build-id-version-control"
      },
      {
        "title": "Configuration of ETag",
        "link": "/tutorials/configuration-etag"
      },
      {
        "title": "HTTP Agent Options",
        "link": "/tutorials/http-agent-options"
      },
      {
        "title": "Image Custom Loader (e.g., Akamai)",
        "link": "/tutorials/image-custom-loader"
      },
      {
        "title": "Output",
        "link": "/tutorials/output"
      },
      {
        "title": "Production Browser Source Maps",
        "link": "/tutorials/production-browser-source-maps"
      },
      {
        "title": "Runtime Config",
        "link": "/tutorials/runtime-config"
      },
      {
        "title": "Server External Packages",
        "link": "/tutorials/server-external-packages"
      },
      {
        "title": "Custom Webpack Configs",
        "link": "/tutorials/custom-webpack-configs"
      },
      {
        "title": "Web Vital Attribution",
        "link": "/tutorials/webvital-attribution"
      },
      {
        "title": "Partial Prerendering",
        "link": "/tutorials/partial-prerendering"
      },
      {
        "title": "Incremental Static Generation",
        "link": "/tutorials/incremental-static-generation"
      },
      {
        "title": "Cache Control",
        "link": "/tutorials/cache-control"
      },
      {
        "title": "Image Optimization",
        "link": "/tutorials/image-optimization"
      }
    ]
  }
  

const LeftNav = ()=>{
  const pathname = usePathname(); // Get the current pathname

    return (
        <ul className={styles.navItemlist}>
            {
                leftArrow.tutorials.map((item:any, index:number)=>{
                  const isActive = pathname === item.link; // Check if the current path matches the link

                    return (
                      <li className={isActive ? styles.active : ''} key={index}> {/* Add active class conditionally */}
                            <Link href={item.link}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default LeftNav;