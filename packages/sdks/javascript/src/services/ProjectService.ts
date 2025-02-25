import { ProjectsApiService } from '../api/generated/apis/projects-api';
import { ProjectsActionsApiService } from '../api/generated/apis/projects-actions-api';
import { ProjectsEnvironmentsApiService } from '../api/generated/apis/projects-environments-api';
import { ProjectsRolesApiService } from '../api/generated/apis/projects-roles-api';
import { ProjectsTeamsApiService } from '../api/generated/apis/projects-teams-api';

export class ProjectService extends ProjectsApiService {
  public actions = new ProjectsActionsApiService();
  public environments = new ProjectsEnvironmentsApiService();
  public roles = new ProjectsRolesApiService();
  public teams = new ProjectsTeamsApiService();
}
