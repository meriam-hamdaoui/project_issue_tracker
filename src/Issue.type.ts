type periorityType = "low" | "medium" | "high";

export interface IIssue {
  id: string;
  title: string;
  description?: string;
  openedAt: Date;
  periority: periorityType;
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
