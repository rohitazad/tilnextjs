"use client"

const OutputClients = () => {
    return (
        <>
            <main>
                <h1>Understanding Cache-Control in Next.js 14</h1>
                <p>
                    Cache-Control is a powerful HTTP header used to define caching policies for your web application. In Next.js 14, understanding and configuring Cache-Control headers ensures optimal performance, efficient resource utilization, and better user experiences.
                </p>

                <h2>Overview</h2>
                <p>
                    The <code>Cache-Control</code> header specifies directives for caching mechanisms in both the browser and intermediary caches (like CDNs). It is a critical tool for managing how resources are stored and fetched, affecting page speed and resource delivery.
                </p>

                <h2>Default Behavior in Next.js</h2>
                <p>
                    By default, Next.js applies sensible caching strategies for different types of resources:
                </p>
                <ul>
                    <li>Static files (e.g., images, CSS, JavaScript) are served with long-term caching.</li>
                    <li>Dynamic pages use server-side caching policies based on rendering strategies (SSG, ISR, SSR).</li>
                </ul>

                <h2>Customizing Cache-Control Headers</h2>
                <p>
                    You can set custom Cache-Control headers to optimize caching for your specific use case. This is achieved through the <code>next.config.js</code> file or API routes.
                </p>

                <h3>Using Middleware for Cache Control</h3>
                <p>
                    Middleware in Next.js allows fine-grained control over caching policies. Here’s an example of setting Cache-Control headers using Middleware:
                </p>
                <pre>
                    <code>
{`
// middleware.ts
import { NextResponse } from 'next/server';

export function middleware(request) {
    const response = NextResponse.next();
    response.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=59');
    return response;
}
`}
                    </code>
                </pre>

                <h3>Setting Cache-Control in API Routes</h3>
                <p>
                    For API routes, you can set headers directly within the response. Here’s an example:
                </p>
                <pre>
                    <code>
{`
// pages/api/example.js
export default function handler(req, res) {
    res.setHeader('Cache-Control', 'public, max-age=300, stale-while-revalidate=59');
    res.status(200).json({ message: 'Hello, world!' });
}
`}
                    </code>
                </pre>

                <h2>Cache-Control Directives Explained</h2>
                <p>
                    Cache-Control headers support various directives. Here are the most commonly used ones:
                </p>
                <ul>
                    <li>
                        <strong><code>public</code></strong>: Indicates that the resource can be cached by both the browser and intermediary caches.
                    </li>
                    <li>
                        <strong><code>private</code></strong>: Ensures the resource is cached only by the browser.
                    </li>
                    <li>
                        <strong><code>no-cache</code></strong>: Forces validation with the server before using a cached resource.
                    </li>
                    <li>
                        <strong><code>no-store</code></strong>: Prevents caching of the resource entirely.
                    </li>
                    <li>
                        <strong><code>max-age=seconds</code></strong>: Defines the maximum time (in seconds) the resource is considered fresh.
                    </li>
                    <li>
                        <strong><code>stale-while-revalidate=seconds</code></strong>: Allows serving stale content while asynchronously refreshing it.
                    </li>
                </ul>

                <h2>Use Cases</h2>
                <p>
                    Cache-Control headers can be customized for various scenarios:
                </p>
                <ul>
                    <li>
                        <strong>Static Assets:</strong> Use long-term caching (<code>public, max-age=31536000</code>) for images, JavaScript, and CSS.
                    </li>
                    <li>
                        <strong>API Responses:</strong> Use <code>stale-while-revalidate</code> for dynamic data to improve perceived performance.
                    </li>
                    <li>
                        <strong>Dynamic Pages:</strong> Set <code>no-cache</code> for server-rendered pages that require fresh data.
                    </li>
                </ul>

                <h2>Best Practices</h2>
                <ul>
                    <li>Use <code>stale-while-revalidate</code> for data that can tolerate slight staleness.</li>
                    <li>Set <code>max-age</code> appropriately based on resource volatility.</li>
                    <li>Combine Cache-Control headers with a CDN for optimal performance.</li>
                </ul>

                <h2>Testing Cache-Control Headers</h2>
                <p>
                    You can verify your Cache-Control headers using browser developer tools or command-line tools like <code>curl</code>:
                </p>
                <pre>
                    <code>
{`
curl -I https://example.com
`}
                    </code>
                </pre>
                <p>Look for the <code>Cache-Control</code> header in the response.</p>

                <h2>Conclusion</h2>
                <p>
                    Properly configuring Cache-Control headers is crucial for optimizing web performance. By understanding and leveraging the various directives, you can ensure efficient caching, faster load times, and a seamless user experience in your Next.js applications.
                </p>
            </main>

            <style jsx>{`
                main {
                    padding: 2rem;
                    max-width: 800px;
                    margin: auto;
                }

                h1 {
                    color: #0070f3;
                    font-size: 2.5rem;
                    line-height: 42px;
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
    );
};

export default OutputClients;
