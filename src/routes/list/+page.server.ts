import { vnList } from '../../modules/datalist';

export function load() {
  const list = Object.values(vnList.results).map((result: any) => ({
    id: result.id,
    title: result.vn.title
  }));

  return { list };
}
