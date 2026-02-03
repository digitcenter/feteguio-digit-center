
import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

/**
 * In React 19, metadata tags like <title>, <meta>, and <link> are automatically
 * hoisted to the <head> of the document when rendered anywhere in the component tree.
 * This removes the need for external libraries like react-helmet-async and fixes Error #525.
 */
const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  const fullTitle = `${title} | FETEGUIO DIGIT-CENTER`;
  
  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </>
  );
};

export default SEO;
