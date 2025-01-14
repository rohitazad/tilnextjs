"use client"

const HttpAgentOptionsClient = ()=>{
    return (
        <>
            <main>
        <h1>Configuring httpAgentOptions in Next.js 14</h1>
        <p>
          The <code>httpAgentOptions</code> setting in Next.js 14 allows you to customize the behavior of the HTTP and HTTPS agents used internally by the application. It gives you control over parameters such as connection pooling, timeouts, and more. These options are particularly useful when you're dealing with API requests or external service communication.
        </p>

        <h2>Overview</h2>
        <p>
          In Node.js, the HTTP and HTTPS agents are responsible for managing connection persistence and reuse for network requests. By default, agents use pooled connections to reduce overhead, but you might need to customize this behavior in certain scenarios, such as when dealing with long-running connections, proxies, or custom certificate handling.
        </p>

        <p>
          Next.js 14 allows you to specify your custom settings for these agents through the <code>httpAgentOptions</code> configuration in the <code>next.config.js</code> file. This helps fine-tune network communication in your Next.js application, whether it's for optimizing performance or handling complex request scenarios.
        </p>

        <h2>How to Configure httpAgentOptions in Next.js</h2>
        <p>
          The <code>httpAgentOptions</code> object can be added to the <code>next.config.js</code> file. This configuration is passed to the Node.js HTTP and HTTPS agents, enabling you to adjust various network parameters.
        </p>

        <h2>Example Code</h2>
        <p>Here’s how you can configure <code>httpAgentOptions</code> in your Next.js project:</p>

        <pre>
          <code>
{`
module.exports = {
  // Customize HTTP/HTTPS agent behavior
  httpAgentOptions: {
    keepAlive: true, // Enable connection reuse for better performance
    maxSockets: 50,  // Set the maximum number of concurrent connections
    timeout: 10000,  // Set the socket timeout (in milliseconds)
  },
};
`}
          </code>
        </pre>

        <p>
          In the example above, the following settings are used:
        </p>
        <ul>
          <li><code>keepAlive</code>: Enables connection pooling, which improves performance by reusing TCP connections.</li>
          <li><code>maxSockets</code>: Limits the number of concurrent connections to external services, preventing the server from being overwhelmed by too many requests at once.</li>
          <li><code>timeout</code>: Sets a timeout for each connection, which is useful for avoiding hanging requests.</li>
        </ul>

        <h2>Explanation of httpAgentOptions Properties</h2>
        <p>Here’s a breakdown of the most commonly used <code>httpAgentOptions</code> properties:</p>

        <ul>
          <li>
            <strong><code>keepAlive</code></strong>: Enables or disables the reuse of sockets for multiple requests. When set to <code>true</code>, it keeps the connection open for reuse, reducing latency for future requests.
          </li>
          <li>
            <strong><code>maxSockets</code></strong>: Specifies the maximum number of sockets to use for outgoing connections. This limits the number of concurrent connections to external services, preventing excessive resource usage.
          </li>
          <li>
            <strong><code>timeout</code></strong>: Defines how long (in milliseconds) the agent should wait before timing out a connection. It prevents the application from hanging on slow or unresponsive network requests.
          </li>
          <li>
            <strong><code>maxFreeSockets</code></strong>: Sets the maximum number of idle (unused) sockets that can remain open in the pool. This is useful for managing connection reuse efficiently.
          </li>
          <li>
            <strong><code>proxy</code></strong>: If you're behind a proxy, you can configure the agent to use it by specifying the proxy settings in the options.
          </li>
        </ul>

        <h2>When Should You Use Custom httpAgentOptions?</h2>
        <p>
          Customizing <code>httpAgentOptions</code> is beneficial when your application has specific networking needs. For example:
        </p>
        <ul>
          <li>When making frequent API requests and you want to optimize connection reuse and performance.</li>
          <li>When connecting to external services with complex network configurations, such as through proxies or firewalls.</li>
          <li>When handling long-lived connections and needing better control over timeouts.</li>
        </ul>

        <h2>Using Custom Agents in Fetch API</h2>
        <p>
          In server-side code, you might need to pass a custom HTTP/HTTPS agent with specific configurations to <code>fetch()</code> requests. Here’s an example of how you can use a custom agent for a <code>fetch()</code> request in Next.js:
        </p>

        <pre>
          <code>
{`
import https from 'https';

const agent = new https.Agent({
  keepAlive: true,
  maxSockets: 50,
  timeout: 10000,
});

export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data', { agent });
  const data = await res.json();

  return { props: { data } };
}
`}
          </code>
        </pre>

        <p>
          In this example, the <code>agent</code> is passed to the <code>fetch()</code> request to customize the behavior of the connection. You can use this pattern in server-side rendering (SSR) or API route handlers.
        </p>

        <h2>Customizing HTTP Agents for API Routes</h2>
        <p>
          You can also apply custom agent settings to API routes in Next.js. This can be useful when your application needs to connect to external APIs through a proxy, or when you want fine-tuned control over connection pooling and timeouts.
        </p>

        <pre>
          <code>
{`
import http from 'http';
import https from 'https';

const httpAgent = new http.Agent({ keepAlive: true });
const httpsAgent = new https.Agent({ keepAlive: true });

export default async function handler(req, res) {
  const url = 'https://api.example.com/data';
  const agent = url.startsWith('https') ? httpsAgent : httpAgent;
  
  const response = await fetch(url, { agent });
  const data = await response.json();

  res.status(200).json(data);
}
`}
          </code>
        </pre>

        <h2>Best Practices for httpAgentOptions</h2>
        <ul>
          <li>Enable <code>keepAlive</code> to optimize performance by reducing connection setup time.</li>
          <li>Set appropriate <code>timeout</code> values to avoid long-hanging requests and improve responsiveness.</li>
          <li>Limit <code>maxSockets</code> to control the number of simultaneous connections, especially when interacting with external services.</li>
          <li>Use a custom agent in <code>fetch()</code> for API calls that require special network configurations, like proxies or advanced SSL settings.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          The <code>httpAgentOptions</code> setting in Next.js 14 provides powerful control over HTTP/HTTPS connections, allowing you to fine-tune connection pooling, timeouts, and more. This feature is essential when building applications that make frequent network requests, interact with external services, or require specific network configurations such as proxies or custom SSL handling. Proper configuration of these options can significantly improve performance and reliability in complex networking environments.
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

export default HttpAgentOptionsClient;