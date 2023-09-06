declare module '*.svg';
declare module '@/api/utils/apiEndpoint.js' {
  export const apiEndpoints: {
    LOGIN: string;
    GITHUB_AUTH: string;
    MEMBERS: string;
    FEEDBACKS: string;
    TOOLTIPS: string;
    ADMIN_SYSTEM_DASHBOARD: string;
    PROFILE: string;
    USER_EMAIL_NOTIFICATION: string;
    UNLINK_GITHUB_ACCOUNT: string;
    USER_DETAILS_BY_PARAMS: string;
    GITHUB_REPOS: string;
    IS_PROJECT_EXISTS: string;
    PROJECTS: string;
  };
}
