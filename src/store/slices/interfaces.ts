export interface IIssue {
  id: string;
  title: string;
  description: string;
  openedAt: string;
  periority: "low" | "medium" | "high";
}

export interface IProject {
  projectIssuess: IIssue[];
}
