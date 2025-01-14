"use client"

const ProductionBrowserSourceMapsClients = ()=>{
    return (
        <>
            <div>
            <h1>Enabling Production Browser Source Maps in Next.js 14</h1>
            
            <section>
                <h2>Introduction</h2>
                <p>
                    Production browser source maps are essential for debugging your Next.js application. 
                    They allow you to trace errors and performance issues back to the original source code 
                    even when running a minified production build.
                </p>
            </section>

            <section>
                <h2>Configuration Steps</h2>
                <h3>1. Open Your Next.js Configuration File</h3>
                <p>
                    Locate the <code>next.config.js</code> file in the root of your Next.js project.
                </p>

                <h3>2. Update the Configuration</h3>
                <p>Add the following code to enable production browser source maps:</p>
                <pre>
                    <code>
{`/** @type {import('next').NextConfig} */
const nextConfig = {
    productionBrowserSourceMaps: true, // Enable source maps for production
};

module.exports = nextConfig;`}
                    </code>
                </pre>
            </section>

            <section>
                <h2>Example Code</h2>
                <p>Here's a simple example of a Next.js component:</p>
                <pre>
                    <code>
{`import React from 'react';

const Home = () => {
    // This is a sample component
    return (
        <div>
            <h1>Welcome to My Next.js App</h1>
            <p>This application has source maps enabled in production!</p>
        </div>
    );
};

export default Home;`}
                    </code>
                </pre>
            </section>

            <section>
                <h2>Important Considerations</h2>
                <ul>
                    <li>Enabling source maps in production can expose your source code, which may lead to security risks.</li>
                    <li>It is advisable to enable source maps only in development or staging environments unless needed for specific production debugging.</li>
                    <li>Always review your application's security policies before enabling this feature.</li>
                </ul>
            </section>

            <section>
                <h2>Usage</h2>
                <p>
                    After configuring, build your Next.js application with the following command:
                </p>
                <pre>
                    <code>npm run build</code>
                </pre>
                <p>
                    Once the build is complete, your application will generate the necessary source maps for debugging.
                </p>
            </section>

            <section>
                <h2>Summary</h2>
                <p>
                    Enabling production browser source maps in Next.js 14 enhances the debugging experience 
                    by allowing developers to reference their original source code in production. While this 
                    feature is beneficial, it's crucial to consider security implications and enable it only 
                    when necessary.
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


export default ProductionBrowserSourceMapsClients;
