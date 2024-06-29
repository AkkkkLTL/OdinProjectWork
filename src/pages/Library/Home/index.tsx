import { useLoaderData } from "react-router-dom";
import { homeLoader } from "./types";
import { option } from "./constant";
import { EchartBoard } from "./styles";

export const HomePage = () => {

  const { summaryData } = useLoaderData() as homeLoader;

  return (
    <>
      <h1>Home</h1>
      <p>
        Welcome to <em>LocalLibrary</em>, a very basic Express website developed as a tutorial example on the Mozilla Developer Network.
      </p>

      <h1>Dynamic content</h1>
      <p>
        The library has the following record counts:
      </p>

      <ul>
        <li><strong>Books:</strong>{summaryData?.sumBook}</li>
        <li><strong>Authors:</strong>{summaryData?.sumAuthor}</li>
        <li><strong>Genres:</strong>{summaryData?.sumGenre}</li>
      </ul>
      <EchartBoard option={option(summaryData)} />
    </>
  );
}