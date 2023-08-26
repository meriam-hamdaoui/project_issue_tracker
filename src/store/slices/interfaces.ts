export interface IIssue {
  id: string;
  title: string;
  description?: string;
  openedAt: string;
  periority: "low" | "medium" | "high";
}

export type IssueProps = {
  issue: IIssue;
};

export interface IProject {
  projectIssuess: IIssue[];
}
export type IssueState = {
  issueState: IProject;
};
