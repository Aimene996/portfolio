import { CreateNewUserData, CreateNewUserVariables, GetMyPortfolioData, CreateNewProjectData, CreateNewProjectVariables, ListFeaturedProjectsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateNewUser(options?: useDataConnectMutationOptions<CreateNewUserData, FirebaseError, CreateNewUserVariables>): UseDataConnectMutationResult<CreateNewUserData, CreateNewUserVariables>;
export function useCreateNewUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNewUserData, FirebaseError, CreateNewUserVariables>): UseDataConnectMutationResult<CreateNewUserData, CreateNewUserVariables>;

export function useGetMyPortfolio(options?: useDataConnectQueryOptions<GetMyPortfolioData>): UseDataConnectQueryResult<GetMyPortfolioData, undefined>;
export function useGetMyPortfolio(dc: DataConnect, options?: useDataConnectQueryOptions<GetMyPortfolioData>): UseDataConnectQueryResult<GetMyPortfolioData, undefined>;

export function useCreateNewProject(options?: useDataConnectMutationOptions<CreateNewProjectData, FirebaseError, CreateNewProjectVariables>): UseDataConnectMutationResult<CreateNewProjectData, CreateNewProjectVariables>;
export function useCreateNewProject(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNewProjectData, FirebaseError, CreateNewProjectVariables>): UseDataConnectMutationResult<CreateNewProjectData, CreateNewProjectVariables>;

export function useListFeaturedProjects(options?: useDataConnectQueryOptions<ListFeaturedProjectsData>): UseDataConnectQueryResult<ListFeaturedProjectsData, undefined>;
export function useListFeaturedProjects(dc: DataConnect, options?: useDataConnectQueryOptions<ListFeaturedProjectsData>): UseDataConnectQueryResult<ListFeaturedProjectsData, undefined>;
