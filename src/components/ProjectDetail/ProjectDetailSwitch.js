import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ProjectDetail1 from './ProjectDetail1/ProjectDetail1';
import ProjectDetail2 from './ProjectDetail2/ProjectDetail2';
import ProjectDetail3 from './ProjectDetail3/ProjectDetail3';
import ProjectDetail4 from './ProjectDetail4/ProjectDetail4';
import ProjectDetail5 from './ProjectDetail5/ProjectDetail5';

const ProjectDetailSwitch = () => {
  const { projectSlug } = useParams();

  switch (projectSlug) {
    case 'mikky-jump':
      return <ProjectDetail1 />;
    case 'cell-ar':
      return <ProjectDetail2 />;
    case 'sport-campus':
      return <ProjectDetail3 />;
    case 'inventa-analyt':
      return <ProjectDetail4 />;
    case 'medi-note':
      return <ProjectDetail5 />;
    default:
      return <Navigate to="/trabajo" replace />;
  }
};

export default ProjectDetailSwitch;
