import fs from "fs";
export type CommentSummary = {
  postId: number;
  id: number;
  commenterEmail: string;
};

export async function processCommentsPipeline(
  targetPostId: number,
  outputPath: string,
): Promise<number> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${targetPostId}`,
  )
  const comments = (await response.json()) as Array<{
    postId: number;
    id: number;
    email: string;
  }>;
  const summaries = comments.map((comment) => ({
    postId: comment.postId,
    id: comment.id,
    commenterEmail: comment.email.trim(),
  }));

  const filtered = summaries.filter((comment) => {
  return !comment.commenterEmail.endsWith(".org");
});
  await fs.promises.writeFile(
    outputPath,
    JSON.stringify(filtered),
  );
  return filtered.length;
}
