import { StudentTable } from "@/components/StudentTable";
import { students } from "@/data/students";

export default function Page() {
  return (
    <div className=" text-white">
      <h1 className="text-5xl mb-">Lista de estudantes</h1>
      <StudentTable students={students}></StudentTable>
    </div>
  );
}
