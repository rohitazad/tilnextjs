"use client"


const ServerExternalPackagesClient = ()=>{
    return (
        <>
            <div className="container">
            <h1>Using Server External Packages in Next.js 14</h1>
            
            <section>
                <h2>Introduction</h2>
                <p>
                    In Next.js, server-side code can use external packages, such as Node.js modules, 
                    to extend the functionality of your application. These packages are only bundled on the server 
                    and are not shipped to the client. This approach ensures that large server-side libraries 
                    do not increase the client bundle size.
                </p>
            </section>

            <section>
                <h2>Why Use External Packages on the Server?</h2>
                <ul>
                    <li>Improves client-side performance by keeping large dependencies server-side only.</li>
                    <li>Allows access to packages that rely on Node.js APIs, such as file system access, without client exposure.</li>
                    <li>Reduces bundle size, which improves load times for the client.</li>
                </ul>
            </section>

            <section>
                <h2>How to Configure External Packages</h2>
                <h3>1. Install the Package</h3>
                <p>
                    You can install external packages using <code>npm</code> or <code>yarn</code>. For example, 
                    to use <code>axios</code> on the server-side:
                </p>
                <pre>
                    <code>npm install axios</code>
                </pre>

                <h3>2. Use the Package in Server-side Code</h3>
                <p>
                    In Next.js 14, server-side code, such as API routes, <code>getServerSideProps</code>, or 
                    <code>getStaticProps</code>, can utilize external packages. For example, here's how to use 
                    <code>axios</code> to fetch data from an external API:
                </p>
                <pre>
                    <code>
{`// pages/api/data.js

import axios from 'axios';

export default async function handler(req, res) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data' });
    }
}
`}
                    </code>
                </pre>

                <h3>3. Fetching Server-Side Data in Pages</h3>
                <p>
                    You can use server-side external packages in <code>getServerSideProps</code> to fetch data before rendering 
                    a page:
                </p>
                <pre>
                    <code>
{`// pages/server-side-data.js

import axios from 'axios';

export async function getServerSideProps() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return {
        props: {
            posts: response.data,
        },
    };
}

const ServerSideDataPage = ({ posts }) => (
    <div>
        <h1>Server-Side Fetched Data</h1>
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
);

export default ServerSideDataPage;
`}
                    </code>
                </pre>
            </section>

            <section>
                <h2>Example Code</h2>
                <p>Here's an example of a page using the server-side fetched data from an external package:</p>
                <pre>
                    <code>
{`import React from 'react';
import axios from 'axios';

export async function getServerSideProps() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return {
        props: {
            posts: response.data,
        },
    };
}

const ExternalPackagesExample = ({ posts }) => (
    <div>
        <h2>Posts Fetched from Server-Side:</h2>
        <ul>
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </div>
);

export default ExternalPackagesExample;
`}
                    </code>
                </pre>
            </section>

            <section>
                <h2>Important Considerations</h2>
                <ul>
                    <li>Make sure the external package is only used server-side to avoid increasing the client bundle size.</li>
                    <li>Server-side external packages can access Node.js features, so ensure no sensitive data is exposed on the client.</li>
                    <li>Optimize server-side usage to reduce latency in fetching data, especially if you're dealing with external APIs.</li>
                </ul>
            </section>

            <section>
                <h2>Summary</h2>
                <p>
                    Next.js 14 allows you to use external packages in server-side code like API routes, <code>getServerSideProps</code>, and 
                    <code>getStaticProps</code>. This capability improves performance by keeping large dependencies 
                    on the server and not bundling them in the client-side JavaScript.
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

export default ServerExternalPackagesClient;