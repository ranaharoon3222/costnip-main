export const useMedia = (media) => {
  return `${process.env.NEXT_PUBLIC_API}/${media?.data?.attributes.url}`;
};
