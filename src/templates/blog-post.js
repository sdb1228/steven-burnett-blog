import React from "react";
import ReactDisqusThread from "react-disqus-thread";

export default ({ data }) => {
  const post = data.markdownRemark;
  console.log(window.location.href)
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <ReactDisqusThread
      shortname="stevenburnett"
      identifier="steven-burnett-blog"
      title="Blog Comment Thread"
      url={window.location.href}
      category_id="123456" />
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
