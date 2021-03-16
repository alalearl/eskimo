const fetcher = async (
  ...args: [input: RequestInfo, init?: RequestInit | undefined]
) => {
  const res = await fetch(...args);
  console.log("test");
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    console.log("test");
    // Attach extra info to the error object.
    const info = await res.json();
    throw new Error(info);
  }

  return res.json();
};

export default fetcher;
