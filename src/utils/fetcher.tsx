import { Fetcher } from "swr";

const fetcher = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then((json) => json.data);

export default fetcher;
