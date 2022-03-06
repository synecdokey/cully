const fetcher = async (input: RequestInfo, init: RequestInit) =>
  fetch(input, init)
    .then((res) => res.json())
    .then((json) => json.data);

export default fetcher;
