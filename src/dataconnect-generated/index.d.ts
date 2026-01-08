import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Asset_Key {
  id: UUIDString;
  __typename?: 'Asset_Key';
}

export interface Client_Key {
  id: UUIDString;
  __typename?: 'Client_Key';
}

export interface CreateNewProjectData {
  project_insert: Project_Key;
}

export interface CreateNewProjectVariables {
  portfolioId: UUIDString;
  projectName: string;
  description: string;
}

export interface CreateNewUserData {
  user_insert: User_Key;
}

export interface CreateNewUserVariables {
  email: string;
  username: string;
  passwordHash: string;
}

export interface GetMyPortfolioData {
  portfolios: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    publicUrlSlug?: string | null;
    createdAt: TimestampString;
  } & Portfolio_Key)[];
}

export interface ListFeaturedProjectsData {
  projects: ({
    id: UUIDString;
    projectName: string;
    description: string;
    externalLink?: string | null;
    industry?: string | null;
    projectDate?: DateString | null;
    serviceProvided?: string | null;
  } & Project_Key)[];
}

export interface Portfolio_Key {
  id: UUIDString;
  __typename?: 'Portfolio_Key';
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateNewUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewUserVariables): MutationRef<CreateNewUserData, CreateNewUserVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewUserVariables): MutationRef<CreateNewUserData, CreateNewUserVariables>;
  operationName: string;
}
export const createNewUserRef: CreateNewUserRef;

export function createNewUser(vars: CreateNewUserVariables): MutationPromise<CreateNewUserData, CreateNewUserVariables>;
export function createNewUser(dc: DataConnect, vars: CreateNewUserVariables): MutationPromise<CreateNewUserData, CreateNewUserVariables>;

interface GetMyPortfolioRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetMyPortfolioData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetMyPortfolioData, undefined>;
  operationName: string;
}
export const getMyPortfolioRef: GetMyPortfolioRef;

export function getMyPortfolio(): QueryPromise<GetMyPortfolioData, undefined>;
export function getMyPortfolio(dc: DataConnect): QueryPromise<GetMyPortfolioData, undefined>;

interface CreateNewProjectRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateNewProjectVariables): MutationRef<CreateNewProjectData, CreateNewProjectVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateNewProjectVariables): MutationRef<CreateNewProjectData, CreateNewProjectVariables>;
  operationName: string;
}
export const createNewProjectRef: CreateNewProjectRef;

export function createNewProject(vars: CreateNewProjectVariables): MutationPromise<CreateNewProjectData, CreateNewProjectVariables>;
export function createNewProject(dc: DataConnect, vars: CreateNewProjectVariables): MutationPromise<CreateNewProjectData, CreateNewProjectVariables>;

interface ListFeaturedProjectsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListFeaturedProjectsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListFeaturedProjectsData, undefined>;
  operationName: string;
}
export const listFeaturedProjectsRef: ListFeaturedProjectsRef;

export function listFeaturedProjects(): QueryPromise<ListFeaturedProjectsData, undefined>;
export function listFeaturedProjects(dc: DataConnect): QueryPromise<ListFeaturedProjectsData, undefined>;

