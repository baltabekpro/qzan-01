
export interface Step {
  text: string;
  completed: boolean;
}

export interface HistoryRequest {
  id: number;
  title: string;
  date: string;
  time: string;
  status: string;
  steps?: Step[];
  chatContent?: {
    request: string;
    response: {
      intro: string;
      content: string;
      conclusion: string;
    };
  };
}
