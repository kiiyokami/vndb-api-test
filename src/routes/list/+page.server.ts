import { getListofVNs } from "../../modules/datalist";

export async function load() {
  return { list: getListofVNs() };
}
