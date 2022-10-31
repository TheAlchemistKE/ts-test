import { httpGet } from './mock-http-interface';

type TResult = any;

export const getArnieQuotes = async (urls : string[]) : Promise<TResult[]> => {
  const results = await Promise.all(urls.map(url => httpGet(url)));
  return results.map(result => {
    if (result.status === 200) {
      return { 'Arnie Quote': JSON.parse(result.body).message };
    }
    return { 'FAILURE': 'Your request has been terminated' };
  });
};

