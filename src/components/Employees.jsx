import TeamMemberCard from "./TeamMemberCard";
import Teams from "./Teams";

const Employees = ({
  employees,
  selectedTeam,
  handleEmployeeCardClick,
  handleTeamSelectionChange,
}) => {
  return (
    <main className="container">
      <div className="row justify-content-center ml-3 mb-3">
        <div className="col-6">
          <Teams
            selectedTeam={selectedTeam}
            handleTeamSelectionChange={handleTeamSelectionChange}
          />
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            <TeamMemberCard
              employees={employees}
              handleEmployeeCardClick={handleEmployeeCardClick}
              selectedTeam={selectedTeam}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
