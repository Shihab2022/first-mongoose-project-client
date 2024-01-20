import { useGetAllSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllSemesterQuery(undefined);
  console.log("data", data);
  return (
    <div>
      <h1>This is academic semester</h1>
    </div>
  );
};

export default AcademicSemester;
