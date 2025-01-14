"use client"


const ImageCustomLoaderClient = ()=>{
    return (
        <>
            <main>
        <h1>Configuring Image Custom Loader in Next.js 14</h1>
        <p>
          The <code>Image</code> component in Next.js 14 is optimized to handle images efficiently, but sometimes, you may need to use a custom image loader to serve images from a specific provider like Akamai, Cloudinary, or your own CDN. With a custom loader, you can define how your images are optimized and delivered, offering flexibility in handling image requests.
        </p>

        <h2>Overview</h2>
        <p>
          By default, Next.js uses its built-in image optimization, but custom loaders can be used to integrate with external image services or CDNs. These loaders determine how the URLs for the images are constructed. The most common use cases for custom loaders include:
        </p>

        <ul>
          <li>Serving images from a Content Delivery Network (CDN) like Akamai or Cloudinary.</li>
          <li>Applying custom transformations to images, such as resizing, compression, or format conversion.</li>
          <li>Optimizing the delivery of images from external servers.</li>
        </ul>

        <h2>How to Create a Custom Image Loader in Next.js</h2>
        <p>
          To define a custom image loader, you need to pass a function to the <code>loader</code> property of the <code>Image</code> component. This function should return a URL string that points to the image's location.
        </p>

        <h2>Example Code</h2>
        <p>Here’s an example of how to implement a custom loader for Akamai in your Next.js project:</p>

        <pre>
          <code>
{`
import Image from 'next/image';

// Custom loader function for Akamai
const akamaiLoader = ({ src, width, quality }) => {
  return \`https://example-akamai-cdn.com/\${src}?w=\${width}&q=\${quality || 75}\`;
};

export default function CustomLoaderExample() {
  return (
    <div>
      <h1>Using Akamai Image Loader</h1>
      <Image
        loader={akamaiLoader}
        src="/images/my-image.jpg" // Path relative to public folder
        alt="Example Image"
        width={800}
        height={600}
      />
    </div>
  );
}
`}
          </code>
        </pre>

        <h2>Explanation of Custom Loader Function</h2>
        <p>
          In the example above, the <code>akamaiLoader</code> function is responsible for generating the URL of the image:
        </p>
        <ul>
          <li><strong><code>src</code></strong>: The path to the image (relative to your <code>public</code> folder or any external source).</li>
          <li><strong><code>width</code></strong>: The desired width of the image, which can be used to generate a resized image URL.</li>
          <li><strong><code>quality</code></strong>: The quality of the image, passed as an optional parameter. It defaults to 75 if not specified.</li>
        </ul>

        <h2>When to Use a Custom Image Loader?</h2>
        <p>
          You should consider using a custom image loader when:
        </p>
        <ul>
          <li>You're hosting images on a third-party CDN and need to format the image URLs according to the CDN's requirements.</li>
          <li>You're working with dynamic image transformations, such as resizing or applying filters to images.</li>
          <li>You're using a custom image optimization pipeline that requires a specific format for image URLs.</li>
        </ul>

        <h2>Other CDN Examples</h2>
        <p>
          Here's another example of a custom image loader for <strong>Cloudinary</strong>, a popular image hosting service that provides on-the-fly image transformation capabilities.
        </p>

        <pre>
          <code>
{`
import Image from 'next/image';

// Custom loader function for Cloudinary
const cloudinaryLoader = ({ src, width, quality }) => {
  return \`https://res.cloudinary.com/demo/image/upload/c_scale,w_\${width},q_\${quality || 75}/\${src}\`;
};

export default function CloudinaryLoaderExample() {
  return (
    <div>
      <h1>Using Cloudinary Image Loader</h1>
      <Image
        loader={cloudinaryLoader}
        src="sample.jpg" // Cloudinary public ID for the image
        alt="Example Image"
        width={800}
        height={600}
      />
    </div>
  );
}
`}
          </code>
        </pre>

        <h2>Understanding Custom Image Loaders</h2>
        <p>
          The <code>Image</code> component's <code>loader</code> function is where you define the logic for building the image URLs. The <code>src</code> argument is typically the path to the image, while <code>width</code> and <code>quality</code> define how the image should be optimized. With this function, you can integrate any external image provider or CDN and make sure the image URLs conform to their required format.
        </p>

        <h2>Using Local Images with a Custom Loader</h2>
        <p>
          While the built-in Next.js loader optimizes local images automatically, you can still define a custom loader to handle specific transformations or serve images from a particular folder.
        </p>
        <pre>
          <code>
{`
const localImageLoader = ({ src, width, quality }) => {
  return \`/custom-folder/\${src}?w=\${width}&q=\${quality || 75}\`;
};

// Using the local image loader
<Image
  loader={localImageLoader}
  src="my-local-image.jpg"
  alt="Local Image"
  width={800}
  height={600}
/>
`}
          </code>
        </pre>

        <h2>Best Practices for Custom Image Loaders</h2>
        <ul>
          <li>Ensure that your custom loader function returns a valid URL that points to a valid image source.</li>
          <li>Use <code>width</code> and <code>quality</code> parameters to optimize the image size and performance.</li>
          <li>Test your custom loader with different image sources to ensure compatibility and correct URL generation.</li>
          <li>Always specify <code>width</code> and <code>height</code> properties for images to avoid layout shifts and improve loading performance.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          The custom image loader functionality in Next.js 14 provides great flexibility for serving images from external sources or CDNs like Akamai, Cloudinary, and others. By defining your own loader function, you can optimize how images are fetched and displayed based on your application's needs. Whether you’re optimizing image delivery from a CDN or customizing image transformations, this feature allows you to seamlessly integrate with various image providers and improve the performance of your Next.js application.
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

export default ImageCustomLoaderClient;