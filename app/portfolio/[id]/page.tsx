import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { projects } from '../../data/projects';
import ProjectDetail from '../../components/ProjectDetail';
import Navigation from '../../components/Navigation';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> | { id: string } }): Promise<Metadata> {
  const resolvedParams = params instanceof Promise ? await params : params;
  const projectId = parseInt(resolvedParams.id);
  const project = projects.find((p) => p.id === projectId);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Portfolio`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
  // Handle both Promise and direct params (Next.js 16 compatibility)
  const resolvedParams = params instanceof Promise ? await params : params;
  const projectId = parseInt(resolvedParams.id);
  
  if (isNaN(projectId)) {
    notFound();
  }
  
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <ProjectDetail project={project} />
    </>
  );
}

