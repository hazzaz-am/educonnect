import { getCourses } from "@/mongodb/queries/course-query";

export default async function HomePage() {
  const courses = await getCourses()
  console.log(courses)
  return (
    <div>HomePage</div>
  )
}