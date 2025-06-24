import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getProjectBySlug } from '../../data/projectsList';
import ProjectDetail2 from './ProjectDetail2/ProjectDetail2';
import ProjectDetail3 from './ProjectDetail3/ProjectDetail3';
import ProjectDetail4 from './ProjectDetail4/ProjectDetail4';
import ProjectDetail5 from './ProjectDetail5/ProjectDetail5';

const ProjectDetailSwitch = () => {
  const { projectSlug } = useParams();
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    return <Navigate to="/trabajo" replace />;
  }

  switch (projectSlug) {
    case 'cell-ar':
      return <ProjectDetail2 />;
    case 'inventa-analyt':
      return <ProjectDetail3 />;
    case 'medi-note':
      return <ProjectDetail4 />;
    case 'sport-campus':
      return <ProjectDetail5 />;
    default:
      return <Navigate to="/trabajo" replace />;
  }
};

export default ProjectDetailSwitch;
