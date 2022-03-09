import React from "react";

const ProjectsData = (props) => {
    const { id, name, score, durationInDays, bugsCount, madeDadeline } = props;
    const redOrGreen = score > 90 ? "green-theme" : score < 70 ? "red-theme" : "blue-theme";
    return (
        <tbody>
            <tr>
                <td className={redOrGreen}>{id}</td>
                <td className={redOrGreen}>{name}</td>
                <td className={redOrGreen}>{score}</td>
                <td className={redOrGreen}>{durationInDays}</td>
                <td className={redOrGreen}>{bugsCount}</td>
                <td className={redOrGreen}>{madeDadeline ? "true" : "false"}</td>
            </tr>
        </tbody>
    )
}

export default ProjectsData;