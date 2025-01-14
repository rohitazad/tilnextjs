"use client"


const PartialPrerenderingClient = ()=>{
    return (
        <>
            <div className="container">
            <h1>Partial Prerendering in Next.js 14</h1>

            <section>
                <h2>Introduction</h2>
                <p>
                    Partial Prerendering in Next.js 14 is an optimization technique that allows developers to pre-render only the critical 
                    parts of a page, leaving other sections to be hydrated on-demand. This hybrid rendering strategy combines both static 
                    generation and server-side rendering, offering faster load times and improved user experience by prioritizing the most 
                    essential content for prerendering.
                </p>
            </section>

            <section>
                <h2>What is Partial Prerendering?</h2>
                <p>
                    Partial Prerendering allows Next.js to pre-render parts of a page at build time while keeping other parts dynamic. This 
                    strategy provides a balance between static generation, which speeds up the first load, and server-side rendering, which 
                    ensures fresh content. It’s particularly useful for pages that have a mix of static and dynamic content, such as user-specific 
                    data or frequently updated sections.
                </p>
            </section>

            <section>
                <h2>How Does It Work?</h2>
                <p>
                    The basic concept of Partial Prerendering in Next.js 14 is to define which parts of the page should be pre-rendered during 
                    the build process and which parts should be rendered dynamically at runtime. The goal is to strike a balance between performance 
                    and content freshness.
                </p>

                <p>
                    During the build step, static portions of the page (e.g., layout, navigation, and content that doesn’t change frequently) are 
                    generated as static HTML files. Dynamic portions of the page (e.g., user-specific data, real-time updates) are fetched and 
                    rendered on the server during runtime.
                </p>
            </section>

            <section>
                <h2>How to Enable Partial Prerendering in Next.js 14</h2>
                <p>
                    Enabling Partial Prerendering in Next.js 14 is straightforward, and it leverages existing features like 
                    <code>getStaticProps</code> and <code>getServerSideProps</code>. By combining these features, you can pre-render static content 
                    while fetching dynamic content at runtime.
                </p>

                <h3>1. Prerendering with <code>getStaticProps</code></h3>
                <p>
                    <code>getStaticProps</code> is used to fetch data at build time. This is ideal for content that doesn’t change frequently 
                    or requires pre-rendering.
                </p>
                <pre>
                    <code>
{`// Example: pages/index.js

export async function getStaticProps() {
  // Fetch data for static parts of the page
  const staticData = await fetch('https://api.example.com/static-content');
  const data = await staticData.json();

  return {
    props: {
      data,
    },
  };
}

const Home = ({ data }) => {
  return (
    <div>
      <h1>Static Content</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default Home;
`}
                    </code>
                </pre>

                <p>
                    In this example, the page's static content is fetched at build time using <code>getStaticProps</code>, which means it’s 
                    pre-rendered for faster load times.
                </p>

                <h3>2. Dynamic Content with <code>getServerSideProps</code></h3>
                <p>
                    <code>getServerSideProps</code> is used to fetch data at request time, allowing dynamic sections of your page to be 
                    rendered server-side. This is ideal for content that changes frequently or requires real-time data.
                </p>
                <pre>
                    <code>
{`// Example: pages/index.js

export async function getServerSideProps() {
  // Fetch dynamic content at runtime
  const dynamicData = await fetch('https://api.example.com/dynamic-content');
  const data = await dynamicData.json();

  return {
    props: {
      data,
    },
  };
}

const DynamicSection = ({ data }) => {
  return (
    <div>
      <h2>Dynamic Content</h2>
      <p>{data.content}</p>
    </div>
  );
};

export default DynamicSection;
`}
                    </code>
                </pre>

                <p>
                    Here, the dynamic content is fetched at runtime using <code>getServerSideProps</code>. This ensures that the user sees 
                    up-to-date content whenever they load the page.
                </p>

                <h3>3. Combining Both for Partial Prerendering</h3>
                <p>
                    To achieve Partial Prerendering, you can combine static and dynamic rendering in the same page. For example, you could 
                    use <code>getStaticProps</code> to pre-render static sections of the page, while using <code>getServerSideProps</code> 
                    to handle real-time data for user-specific sections.
                </p>
                <pre>
                    <code>
{`// Example: pages/partial-prerendering.js

export async function getStaticProps() {
  const staticData = await fetch('https://api.example.com/static-content');
  const staticProps = await staticData.json();

  return {
    props: {
      staticProps,
    },
  };
}

export async function getServerSideProps() {
  const dynamicData = await fetch('https://api.example.com/dynamic-content');
  const dynamicProps = await dynamicData.json();

  return {
    props: {
      dynamicProps,
    },
  };
}

const PartialPrerendering = ({ staticProps, dynamicProps }) => {
  return (
    <div>
      <h1>Partial Prerendering in Action</h1>
      <div>
        <h2>Static Content</h2>
        <p>{staticProps.content}</p>
      </div>
      <div>
        <h2>Dynamic Content</h2>
        <p>{dynamicProps.content}</p>
      </div>
    </div>
  );
};

export default PartialPrerendering;
`}
                    </code>
                </pre>

                <p>
                    In this example, we combine both static and dynamic rendering to create a partially prerendered page. The static content 
                    is rendered at build time, while the dynamic content is fetched server-side during the request.
                </p>
            </section>

            <section>
                <h2>Benefits of Partial Prerendering</h2>
                <ul>
                    <li><strong>Faster Load Times:</strong> By prerendering static content, pages load faster for users.</li>
                    <li><strong>Fresh Content:</strong> Dynamic sections ensure users always see the latest content.</li>
                    <li><strong>Optimized Performance:</strong> This hybrid approach allows you to optimize for both performance and user experience.</li>
                    <li><strong>SEO Benefits:</strong> Pre-rendered content is search engine friendly, improving your site’s SEO ranking.</li>
                </ul>
            </section>

            <section>
                <h2>Important Considerations</h2>
                <ul>
                    <li>
                        <strong>Build Time vs. Request Time:</strong> You need to decide which parts of your page should be pre-rendered and 
                        which should be rendered dynamically based on how frequently the content changes.
                    </li>
                    <li>
                        <strong>Data Fetching:</strong> Make sure that the dynamic data fetched at runtime doesn’t impact user experience 
                        by causing significant delays.
                    </li>
                    <li>
                        <strong>Complexity:</strong> Combining static and dynamic rendering increases the complexity of your project, so 
                        ensure proper testing and optimization.
                    </li>
                </ul>
            </section>

            <section>
                <h2>Summary</h2>
                <p>
                    Partial Prerendering in Next.js 14 offers the flexibility to pre-render only the critical parts of your page, 
                    while still allowing dynamic sections to fetch fresh data at runtime. This technique improves load times and 
                    ensures up-to-date content is served to users. By strategically choosing what to pre-render and what to render 
                    server-side, you can optimize performance while maintaining a high-quality user experience.
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

export default PartialPrerenderingClient;