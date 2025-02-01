export const setCookie = (name: string, value: string, ttlSeconds: number) => {
  document.cookie = `${name}=${value}; max-age=${ttlSeconds}; path=/`;
};

export const getCookie = (name: string) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
};
