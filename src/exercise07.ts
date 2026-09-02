import fs from "fs";

export type Gradebook = {
  [student: string]: {
    [subject: string]: number;
  };
};

export function calculateSubjectAverage(subject: string): number {
  const data = fs.readFileSync("data/gradebook.json", "utf-8");
  const gradebook: Gradebook = JSON.parse(data);
  const students = Object.values(gradebook);
  const grades = students
    .map((student) => student[subject])
    .filter((grade) => grade !== undefined);

  if (grades.length === 0) {
    return 0;
  }

  const total = grades.reduce((sum, grade) => {
    return sum + grade;
  }, 0);

  return total / grades.length;
}