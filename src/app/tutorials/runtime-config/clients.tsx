"use client"

const RuntimeConfigClient = ()=>{
    return (
        <>
            <div className="container">
            <h1>Using Runtime Configuration in Next.js 14</h1>
            
            <section>
                <h2>Introduction</h2>
                <p>
                    Next.js provides the ability to expose runtime configuration to the client-side using 
                    <code>publicRuntimeConfig</code>. This allows you to access environment-specific settings on the client-side 
                    without hardcoding them into your application.
                </p>
            </section>

            <section>
                <h2>Setting Up Runtime Config</h2>
                <h3>1. Update Your <code>next.config.js</code></h3>
                <p>
                    Open your <code>next.config.js</code> file and add the <code>publicRuntimeConfig</code> as shown below:
                </p>
                <pre>
                    <code>
{`// next.config.js

module.exports = {
    publicRuntimeConfig: {
        apiUrl: process.env.NEXT_PUBLIC_API_URL, // Expose this variable to the client
    },
};`}
                    </code>
                </pre>

                <h3>2. Accessing the Runtime Config</h3>
                <p>
                    You can now access the runtime config values in your components using <code>getConfig</code> as shown in the example below:
                </p>
                <pre>
                    <code>
{`import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

console.log(publicRuntimeConfig.apiUrl); // Output: API URL from runtime config
`}
                    </code>
                </pre>
            </section>

            <section>
                <h2>Example Code</h2>
                <p>
                    Below is an example of a simple component that uses the runtime configuration to display the API URL on the page.
                </p>
                <pre>
                    <code>
{`import React from 'react';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const DisplayApiUrl = () => {
    return (
        <div>
            <h2>API URL from Runtime Config:</h2>
            <p>{publicRuntimeConfig.apiUrl}</p>
        </div>
    );
};

export default DisplayApiUrl;
`}
                    </code>
                </pre>
            </section>

            <section>
                <h2>Important Considerations</h2>
                <ul>
                    <li>Ensure that you only expose non-sensitive information via <code>publicRuntimeConfig</code>.</li>
                    <li>The <code>publicRuntimeConfig</code> is accessible to the client, so avoid putting any secret keys or sensitive data.</li>
                </ul>
            </section>

            <section>
                <h2>Usage</h2>
                <p>
                    After updating your configuration and building your Next.js application, 
                    the runtime config values will be available in your components and pages. 
                    Use <code>getConfig()</code> to access the <code>publicRuntimeConfig</code>.
                </p>
            </section>

            <section>
                <h2>Summary</h2>
                <p>
                    Next.js 14 provides an easy and efficient way to expose environment-specific settings 
                    to the client through <code>publicRuntimeConfig</code>. Use this feature wisely to avoid exposing 
                    sensitive information. It's perfect for configuring API endpoints or other variables 
                    that need to be dynamic but are safe to share with the client.
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

export default RuntimeConfigClient;