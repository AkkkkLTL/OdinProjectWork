const GAMELIB_URL = import.meta.env.VITE_RAWG_API_URL;
const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

const getData = async <T>(
  endpoint: string,
  params?: Record<string, string>,
) => {
  if (API_KEY !== undefined)
  {
    const searchParams = new URLSearchParams(params).toString();
    console.log(`searchParams: ${searchParams}`);
    const response = await fetch(
      `${GAMELIB_URL}/${endpoint}?${searchParams}&key=${API_KEY}`,
    );
    if (!response.ok) throw new Error(response.statusText);
    const data = (await response.json()) as Promise<T>;

    return data;
  }
  throw new Error("Api key is undefined");
}