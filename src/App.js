
import StudentAddForm from "./components/Form/StudentAddForm";
import StudentsTable from "./components/StudentsTable";


function App() {
  return (
    <div className="Container">
      <div className="row justify-content-center mt-1">
        <div className="col-10">
          <StudentAddForm />
        </div>
      </div>
      <div className="row justify-content-center mt-1">
        <div className="col-10">
          <StudentsTable />
        </div>
      </div>
     
    </div>
  );
}

export default App;
