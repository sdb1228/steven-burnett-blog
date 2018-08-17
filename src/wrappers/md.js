import Disqus from '../components/Disqus'
import ReactDisqusThread from "react-disqus-thread"

render() {
  return (
    <Disqus shortname={config.disqusShortname} title={post.title} url={`${config.disqusUrlPrefix}${route.page.path}`} />
  )
}
