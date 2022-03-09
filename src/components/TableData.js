import React, { useContext } from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import ProjectsData from "./ProjectsData";
const TableData = (props) => {
    const currentUser = useContext(CurrentUserContext);
    const { onLogOut, projectInfo } = props;
    
    return (
        <div className="flex-box">
            <h1 className="table__header">Personal Details</h1>
            <table className="Table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Team</th>
                        <th>JoinedAt</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{currentUser.name}</td>
                        <td>{currentUser.Team}</td>
                        <td>{currentUser.joinedAt}</td>
                        <td>{currentUser.avatar}</td>
                    </tr>
                </tbody>
            </table>
            <h2 className="table__header">Project Details</h2>
            <table className="Table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>score</th>
                        <th>durationInDays</th>
                        <th>bugsCount</th>
                        <th>madeDadeline</th>
                    </tr>
                </thead>
                {
                    projectInfo.map((project, index) => {
                        console.log(project.madeDadeline);
                        return  <ProjectsData 
                        key={index}
                        id={project.id} 
                        name={project.name}
                        score={project.score}
                        durationInDays={project.durationInDays}
                        bugsCount={project.bugsCount}
                        madeDadeline={project.madeDadeline}
                        />
                    })
                }
            </table>
            <button className="logout-btn" onClick={onLogOut}>Logout</button>
        </div>
    )
}

export default TableData;