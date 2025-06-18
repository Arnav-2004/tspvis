import Helmet from "react-helmet";

const description =
  "Interactive solver for the traveling salesman problem to visualize different algorithms. Includes various Heuristic and Exhaustive algorithms.";

export const SEO = ({ subtitle }) => {
  return (
    <Helmet
      title={`TSP Visualizer${subtitle ? " | " : ""}${subtitle}`}
      htmlAttributes={{ lang: "en" }}
    >
      <meta name="description" content={description} />

      <meta
        property="og:title"
        content={`Traveling Salesman Problem Visualizer`}
      />
      <meta property="og:url" content="https://tspvis.vercel.app/" />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};
