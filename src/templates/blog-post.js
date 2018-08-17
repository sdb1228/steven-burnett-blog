import React from "react";
import ReactDisqusThread from "react-disqus-thread";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <ReactDisqusThread
        shortname="steven-burnett-blog"
        identifier="hey-bob-lets-talk-about-yarn"
        title="Steven Burnett Blow"
        url="http://therapeutic-cars.surge.sh/" />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
