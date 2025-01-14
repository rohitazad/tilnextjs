"use client";

const ImageOptimization = () => {
  return (
    <>
      <main>
  <h1>Understanding Image Optimization in Next.js 14</h1>
  <p>
    Next.js 14 provides robust built-in image optimization features that enable developers to deliver high-quality images with improved performance. The <code>next/image</code> component is at the core of this functionality, offering automatic resizing, lazy loading, and format conversion.
  </p>

  <h2>Key Features of Image Optimization</h2>
  <ul>
    <li><strong>Automatic Resizing:</strong> Images are automatically resized based on the <code>width</code> and <code>height</code> parameters you provide, ensuring only the necessary size is delivered to the client.</li>
    <li><strong>Lazy Loading:</strong> Images are only loaded when they are in the viewport, improving initial page load times.</li>
    <li><strong>Modern Formats:</strong> Images can be served in modern formats like WebP, which provide better compression and quality.</li>
    <li><strong>Responsive Support:</strong> You can define a range of sizes for images, allowing Next.js to serve the best possible image for each device.</li>
    <li><strong>CDN Integration:</strong> Optimized images are cached and served from a CDN for faster delivery.</li>
  </ul>

  <h2>Using the <code>next/image</code> Component</h2>
  <p>
    The <code>next/image</code> component simplifies adding optimized images to your application. Here’s an example:
  </p>
  <pre>
    <code>
{`
import Image from 'next/image';

export default function OptimizedImageExample() {
  return (
    <div>
      <h2>Example of Optimized Image</h2>
      <Image
        src="/example.jpg"
        alt="Example Image"
        width={800}
        height={600}
        quality={90}
        priority
      />
    </div>
  );
}
`}
    </code>
  </pre>

  <h2>Explanation of Key Properties</h2>
  <ul>
    <li><strong><code>src</code>:</strong> Specifies the source path of the image. It can be a local path or a remote URL.</li>
    <li><strong><code>alt</code>:</strong> Provides alternative text for the image for accessibility.</li>
    <li><strong><code>width</code> and <code>height</code>:</strong> Define the dimensions of the image, enabling Next.js to calculate the appropriate size.</li>
    <li><strong><code>quality</code>:</strong> Sets the image quality (default is 75). Higher values improve image fidelity at the cost of larger file size.</li>
    <li><strong><code>priority</code>:</strong> Ensures the image is loaded eagerly for critical assets.</li>
  </ul>

  <h2>Responsive Images</h2>
  <p>
    The <code>sizes</code> property enables you to deliver responsive images tailored to different screen sizes:
  </p>
  <pre>
    <code>
{`
<Image
  src="/example.jpg"
  alt="Responsive Example"
  sizes="(max-width: 768px) 100vw, 50vw"
  width={800}
  height={600}
/>
`}
    </code>
  </pre>
  <p>
    In this example, images will take up 100% of the viewport width on screens smaller than 768px and 50% on larger screens.
  </p>

  <h2>CDN and Remote Images</h2>
  <p>
    Next.js can optimize remote images by configuring the <code>domains</code> property in <code>next.config.js</code>:
  </p>
  <pre>
    <code>
{`
module.exports = {
  images: {
    domains: ['example.com', 'cdn.example.com'],
  },
};
`}
    </code>
  </pre>

  <h2>Best Practices for Image Optimization</h2>
  <ul>
    <li>Use the <code>next/image</code> component instead of standard <code>&lt;img&gt;</code> tags for automatic optimization.</li>
    <li>Specify appropriate <code>width</code>, <code>height</code>, and <code>alt</code> attributes for all images.</li>
    <li>Configure remote domains in <code>next.config.js</code> to enable optimization of external images.</li>
    <li>Use the <code>priority</code> property for images critical to the initial viewport.</li>
    <li>Optimize the <code>quality</code> parameter to balance file size and visual fidelity.</li>
  </ul>

  <h2>Conclusion</h2>
  <p>
    Image optimization in Next.js 14 is a seamless way to enhance performance and user experience. By leveraging the <code>next/image</code> component and its powerful features, you can ensure your application delivers fast and visually appealing images across all devices and networks.
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

export default ImageOptimization;
