import api from "src/shared/services/axios.config";

const api_key = process.env.REACT_APP_API_KEY;
const api_hash = process.env.REACT_APP_API_HASH;
const auth_url = `ts=1&apikey=${api_key}&hash=${api_hash}`;

export async function getAllCharacters(limit: number, offset: number) {
  const skip = offset * limit;
  try {
    const { data } = await api.get(
      "characters?" + auth_url + `&limit=${limit}&offset=${skip}`
    );
    return data;
  } catch (error) {}
}

export async function getCharacterById(charId: string) {
  try {
    const charData = await api.get(`characters/${charId}?` + auth_url);
    const comicsData = await api.get(
      `characters/${charId}/comics?` + auth_url + `&limit=10&offset=0`
    );

    const character = charData?.data?.data?.results;
    const comics = comicsData?.data?.data?.results;
    return { character, comics };
  } catch (error) {}
}

export async function getCharacterByName(charName: string) {
  if (charName.length < 1) return;

  try {
    const { data } = await api.get(
      `characters?nameStartsWith=${charName}&` + auth_url
    );
    return data;
  } catch (error) {}
}
