"use client"

const WebvitalAttributionClient = ()=>{
    return (
        <>
            <div className="container">
            <h1>Web Vitals Attribution in Next.js 14</h1>
            
            <section>
                <h2>Introduction</h2>
                <p>
                    Web Vitals Attribution is a feature in Next.js that allows you to monitor and improve the user experience by 
                    providing detailed insights into the performance of your web pages. Web Vitals are essential metrics related 
                    to speed, responsiveness, and visual stability, and this feature enables developers to track how their code 
                    contributes to these performance indicators.
                </p>
            </section>

            <section>
                <h2>What are Web Vitals?</h2>
                <p>
                    Web Vitals are metrics introduced by Google to measure the performance and user experience of websites. They 
                    focus on three primary areas:
                </p>
                <ul>
                    <li><strong>Largest Contentful Paint (LCP):</strong> Measures the loading performance of the largest visible element on the page.</li>
                    <li><strong>First Input Delay (FID):</strong> Tracks the time it takes for the page to respond to the first user interaction.</li>
                    <li><strong>Cumulative Layout Shift (CLS):</strong> Measures visual stability, tracking unexpected layout shifts.</li>
                </ul>
            </section>

            <section>
                <h2>Why Web Vitals Attribution?</h2>
                <p>
                    Web Vitals Attribution helps you understand how different parts of your code impact your Web Vitals scores. 
                    By enabling attribution, Next.js allows you to identify performance bottlenecks and optimize critical 
                    areas of your application.
                </p>
                <p>
                    For example, you can see which specific images, scripts, or third-party content are contributing to delays 
                    in loading or responsiveness. This detailed breakdown enables more targeted optimizations.
                </p>
            </section>

            <section>
                <h2>How to Enable Web Vitals Attribution in Next.js 14</h2>
                <p>
                    Next.js 14 makes it simple to enable Web Vitals Attribution through a few configuration steps in the 
                    <code>next.config.js</code> file.
                </p>

                <h3>1. Basic Configuration</h3>
                <p>
                    To enable Web Vitals Attribution, you can start by updating your <code>next.config.js</code> file:
                </p>
                <pre>
                    <code>
{`// next.config.js

module.exports = {
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP', 'FID'],
  },
};
`}
                    </code>
                </pre>
                <p>
                    In this example, Web Vitals Attribution is enabled for all three core metrics: CLS, LCP, and FID.
                </p>

                <h3>2. Custom Web Vitals Reporting</h3>
                <p>
                    After enabling Web Vitals Attribution, you can create a custom handler for reporting the metrics. 
                    This can be done by adding a function to report the results in your app:
                </p>
                <pre>
                    <code>
{`// pages/_app.js (or app/layout.js in the app router)

export function reportWebVitals(metric) {
  if (metric.name === 'LCP') {
    console.log('Largest Contentful Paint:', metric);
  } else if (metric.name === 'FID') {
    console.log('First Input Delay:', metric);
  } else if (metric.name === 'CLS') {
    console.log('Cumulative Layout Shift:', metric);
  }
}
`}
                    </code>
                </pre>

                <p>
                    In this example, we’re logging the Web Vitals metrics to the console, but you can send these metrics 
                    to any analytics service (e.g., Google Analytics or a custom performance monitoring solution).
                </p>
            </section>

            <section>
                <h2>Example: Web Vitals Attribution in Action</h2>
                <p>
                    Below is an example of a page that uses Web Vitals Attribution to track how various elements contribute 
                    to Web Vitals performance. This includes layout shifts caused by images and delayed script execution:
                </p>
                <pre>
                    <code>
{`// Example: pages/index.js

import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const img = document.createElement('img');
    img.src = 'https://example.com/large-image.jpg';
    img.alt = 'Large Image';
    document.body.appendChild(img);
  }, []);

  return (
    <div>
      <h1>Welcome to the Web Vitals Attribution Example</h1>
      <p>This page dynamically loads a large image to simulate LCP impact.</p>
    </div>
  );
}
`}
                    </code>
                </pre>

                <p>
                    In this example, a large image is dynamically added to the page after the component is mounted, which can 
                    affect the Largest Contentful Paint (LCP) metric. With Web Vitals Attribution enabled, you'll be able to 
                    see exactly how this impacts performance.
                </p>
            </section>

            <section>
                <h2>Important Considerations</h2>
                <ul>
                    <li>Web Vitals Attribution should be enabled only in production environments to monitor real-user performance.</li>
                    <li>Attribution metrics are more useful when paired with tools like Google Analytics or custom performance dashboards.</li>
                    <li>Pay close attention to third-party content (like ads or analytics scripts), which often impacts Web Vitals performance.</li>
                </ul>
            </section>

            <section>
                <h2>Summary</h2>
                <p>
                    Web Vitals Attribution in Next.js 14 provides powerful insights into how your application’s performance metrics 
                    are affected by specific pieces of code or resources. By understanding these metrics and leveraging attribution, 
                    you can make more informed decisions to optimize user experience, improve page load times, and enhance the 
                    overall responsiveness and stability of your application.
                </p>
            </section>
        </div>
        <style jsx>{`
        main {
          padding: 2rem;
          max-width: 800px;
          margin: auto;
        }

        h1 {
          color: #0070f3;
          font-size: 2.5rem;
          line-height:42px;
        }

        pre {
          background: #f0f0f0;
          padding: 1rem;
          border-radius: 5px;
          white-space: pre-wrap;
          word-wrap: break-word;
        }

        code {
          color: #d63384;
        }

        ul {
          padding-left: 20px;
        }

        ul li {
          margin-bottom: 10px;
        }
      `}</style>
        </>
    )
}

export default WebvitalAttributionClient;