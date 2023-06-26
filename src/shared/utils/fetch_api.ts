import api from "src/shared/services/axios.config";

const api_key = process.env.REACT_APP_API_KEY;
const api_hash = process.env.REACT_APP_API_HASH;
const auth_url = `ts=1&apikey=${api_key}&hash=${api_hash}`;

export async function getAllCharacters(limit: number, offset: number) {
  try {
    const { data } = await api.get(
      "characters?" + auth_url + `&limit=${limit}&offset=${offset}`
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getCharacterById(charId: number) {
  try {
    const { data } = await api.get(`characters/${charId}?` + auth_url);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getCharacterByName(charName: string) {
  try {
    const { data } = await api.get(
      `characters?nameStartsWith=${charName}&` + auth_url
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
