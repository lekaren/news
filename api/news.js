// config 에서 뉴스 호출정보를 불러온다.
import { article_url, category, country_code, __api_key } from '../config/rest_config';
import axios from 'axios';

export const getArticles = async (category) => {
  try {
    const articles = await axios.get(`${article_url}?country=${country_code}&category=${category}&apiKey=${__api_key}`);
    return articles.data.articles;
  } catch (error) {
    throw error;
  }
}