export const fnGenerateMetaData = (meta?: any) => {
    const imageUrl =
      meta?.imgurl || "https://timesinternet.in/images/android-icon-192x192.png";
    const shouldIndex = meta?.index !== undefined ? meta.index : true;
  
    let pathname = meta?.pathname || "";
    const url = new URL(pathname, "http://localhost:3000");
  
    return {
      title: `${meta?.title} | Times Internert`,
      description: meta?.desc,
      generator: "TIL",
      applicationName: "Times Internert",
      keywords: meta?.keywords?.split(","),
      metadataBase: new URL("http://localhost:3000"),
      alternates: {
        canonical: url.pathname + url.search,
      },
      openGraph: {
        title: `${meta?.title} | Times Internert`,
        description: meta?.desc,
        url: url.pathname + url.search,
        siteName: "Times Internert",
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 628,
          },
        ],
        locale: "en-IN",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${meta?.title} | Times Internert`,
        description: meta?.desc,
        creator: "@til",
        images: [imageUrl],
      },
      robots: {
        index: shouldIndex,
        follow: shouldIndex,
        googleBot: {
          index: shouldIndex,
          follow: shouldIndex,
        },
      },
      icons: {
        icon: "https://timesinternet.in/images/favicon-32x32.png",
      },
    };
  };