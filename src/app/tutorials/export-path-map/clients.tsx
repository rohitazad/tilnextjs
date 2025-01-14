"use client"

const ExportPathMapClient = ()=>{
    return (
        <>
            <main>
        <h1>Export Path Map in Next.js 14</h1>
        <p>
          In Next.js, when you want to generate a static site with a custom URL structure, you can use the <strong>Export Path Map</strong>. This allows you to define custom routing for your application during the build process and create static HTML files that match your desired URL structure.
        </p>

        <h2>Overview</h2>
        <p>
          The <code>exportPathMap</code> feature is mainly used when exporting your Next.js app to static HTML. It provides a way to define a set of custom routes that map to specific pages, even for dynamic pages. When you run <code>next export</code>, Next.js will generate static files for each route defined in the <code>exportPathMap</code>.
        </p>

        <h3>When to Use Export Path Map</h3>
        <ul>
          <li>
            You are deploying your Next.js app as a fully static site.
          </li>
          <li>
            You want to control the URL structure of your app during the build process.
          </li>
          <li>
            You need to handle dynamic routes and generate static HTML for each of them.
          </li>
        </ul>

        <h2>Example Code</h2>
        <p>
          {`Let's look at a simple example where we define an <code>exportPathMap</code> for a blog application with static routes and dynamic blog posts:`}
        </p>
        <pre>
          <code>
{`
module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/blog/first-post': { page: '/blog/[slug]', query: { slug: 'first-post' } },
      '/blog/second-post': { page: '/blog/[slug]', query: { slug: 'second-post' } }
    };
  }
};
`}
          </code>
        </pre>

        <p>
          In this example, we define four static routes:
        </p>
        <ul>
          <li><code>/</code> maps to the home page.</li>
          <li><code>/about</code> maps to the about page.</li>
          <li><code>/blog/first-post</code> maps to a dynamic blog post using the slug <code>first-post</code>.</li>
          <li><code>/blog/second-post</code> maps to another dynamic blog post using the slug <code>second-post</code>.</li>
        </ul>

        <h2>Explanation of Export Path Map</h2>
        <p>
          The <code>exportPathMap</code> function allows you to map routes to Next.js pages. Here's a breakdown of how it works:
        </p>
        <ul>
          <li>
            The function returns an object where each key represents a URL path, and the value is an object defining the <code>page</code> and optional <code>query</code> parameters.
          </li>
          <li>
            The <code>page</code> {`key specifies the Next.js page (from the <code>pages</code> directory) that should be rendered.`}
          </li>
          <li>
            The <code>query</code> key is used for dynamic pages to pass parameters such as <code>slug</code>.
          </li>
        </ul>
        <p>
          When you run <code>next export</code>, Next.js will use this map to generate static HTML for each route.
        </p>

        <h2>Handling Dynamic Routes</h2>
        <p>
          For dynamic pages, like a blog post with a slug, you can specify different slugs for each post in the <code>exportPathMap</code>. This is useful when you need to generate static pages for routes like <code>{`/blog/[slug]`}</code>.
        </p>

        <h3>Example with Dynamic Blog Posts</h3>
        <p>
          Here's an enhanced example that dynamically generates blog post paths from an API or database during the export:
        </p>
        <pre>
          <code>
{`
const fetchPosts = async () => {
  // Example: Fetch blog posts from an API or database
  return [
    { slug: 'first-post' },
    { slug: 'second-post' },
  ];
};

module.exports = {
  exportPathMap: async function () {
    const posts = await fetchPosts();
    const paths = posts.reduce((acc, post) => {
      acc[\`/blog/\${post.slug}\`] = {
        page: '/blog/[slug]',
        query: { slug: post.slug },
      };
      return acc;
    }, {});

    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      ...paths,
    };
  }
};
`}
          </code>
        </pre>
        <p>
          In this example, the <code>fetchPosts</code> function retrieves a list of blog posts, and we dynamically generate the path for each post using its slug.
        </p>

        <h2>Benefits of Export Path Map</h2>
        <ul>
          <li>**Custom URL Structures**: Control how your static pages are generated with specific URLs.</li>
          <li>**SEO**: Ensures that pages have a static URL structure, which is beneficial for search engine optimization.</li>
          <li>**Scalability**: Easily scale static sites with dynamic routes by pre-generating them during export.</li>
        </ul>

        <h2>Best Practices</h2>
        <p>
          - Use <code>exportPathMap</code> when your app needs to be exported as a static site.
        </p>
        <p>
          - Ensure that all required dynamic routes are defined in the export path map to avoid missing pages in production.
        </p>

        <h2>Conclusion</h2>
        <p>
          The <code>exportPathMap</code> feature in Next.js 14 allows you to define custom routes and URL structures during the export process. It is particularly useful for static site generation, ensuring that your site can scale with dynamic pages and perform well for SEO. Use this feature to control your app's routing and deliver a fast, optimized static site.
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

export default ExportPathMapClient;