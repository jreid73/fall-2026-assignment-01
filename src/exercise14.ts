export type PostItem = {
  id: number;
  title: string;
  body: string;
};

export async function fetchPostBatch(postIds: number[]): Promise<PostItem[]> {
  const posts = await Promise.all(
    postIds.map(async(postId) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
      );

      return (await response.json()) as PostItem;
    }),
  );
  return posts;
}