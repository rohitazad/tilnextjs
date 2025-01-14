"use client";

const IncrementalStaticGeneration = () => {
  return (
    <>
      <main>
        <h1>Incremental Static Generation in Next.js 14</h1>
        <p>
          Incremental Static Generation (ISG) is a powerful feature in Next.js that allows you to update static pages after the build time. This provides the flexibility of static site generation (SSG) while enabling on-demand updates for your content.
        </p>

        <h2>How It Works</h2>
        <p>
          In ISG, Next.js generates static pages during the build process and serves them to users. However, with revalidation, you can specify a time interval to refresh the static content. This ensures that your static pages stay up-to-date without requiring a full rebuild.
        </p>

        <h2>Key Benefits</h2>
        <ul>
          <li>Faster build times for large sites by generating pages on-demand.</li>
          <li>Automatic content updates without rebuilding the entire site.</li>
          <li>Better performance by serving static pages with the latest data.</li>
        </ul>

        <h2>Configuring ISG</h2>
        <p>
          To use Incremental Static Generation in your Next.js project, you can specify the <code>revalidate</code> property in the <code>getStaticProps</code> function. This property determines the time interval (in seconds) for revalidating the static page.
        </p>

        <h3>Example Code</h3>
        <pre>
          <code>
{`
// pages/example.js
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data').then(res => res.json());

  return {
    props: {
      data,
    },
    revalidate: 10, // Revalidate every 10 seconds
  };
}

const ExamplePage = ({ data }) => {
  return (
    <div>
      <h1>Incremental Static Generation Example</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExamplePage;
`}
          </code>
        </pre>

        <h2>Detailed Explanation</h2>
        <ul>
          <li>
            <strong><code>getStaticProps</code></strong>: Fetches data at build time and provides it as props to the page.
          </li>
          <li>
            <strong><code>revalidate</code></strong>: Specifies the interval (in seconds) after which the page is regenerated in the background.
          </li>
          <li>
            <strong>Fallback Pages</strong>: When a page is not pre-rendered, Next.js shows a fallback page and generates the static page on the first request.
          </li>
        </ul>

        <h2>When to Use ISG</h2>
        <p>
          Incremental Static Generation is best suited for scenarios where:
        </p>
        <ul>
          <li>Content changes frequently but not on every request.</li>
          <li>Build times need to be optimized for large-scale projects.</li>
          <li>You need the benefits of static pages with occasional updates.</li>
        </ul>

        <h2>Best Practices</h2>
        <ul>
          <li>Use ISG for pages with data that changes periodically, like blogs or product listings.</li>
          <li>Set the revalidation time according to how often your data changes.</li>
          <li>Leverage caching at the CDN level for additional performance improvements.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Incremental Static Generation in Next.js 14 combines the speed of static generation with the flexibility of server-side rendering. By leveraging ISG, you can build high-performance, dynamic web applications that scale efficiently and deliver fresh content to users.
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

export default IncrementalStaticGeneration;
