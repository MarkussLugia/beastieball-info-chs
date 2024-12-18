import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  image: string;
  url: string;
  description: string;
  notfound?: boolean;
};

export default function OpenGraph(props: Props): React.ReactElement {
  const url = import.meta.env.VITE_URL
    ? import.meta.env.VITE_URL
    : window.location.origin;
  return (
    <Helmet>
      <title>
        {import.meta.env.DEV ? "🔧" : ""}
        {props.title}
      </title>
      <meta property="og:title" content={props.title} />
      <meta property="og:image" content={`${url}/${props.image}`} />
      <meta property="og:url" content={`${url}/${props.url}`} />
      <meta property="og:description" content={props.description} />
      <meta name="description" content={props.description} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={`${url}/${props.url}`} />
      <meta name="twitter:card" content="summary" />
      <meta
        name="prerender-status-code"
        content={props.notfound ? "404" : "200"}
      ></meta>
    </Helmet>
  );
}
