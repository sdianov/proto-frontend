export interface WorkstepData {

  id: string;
  title: string;
  description: string;
  relations?: Relation[];
}

export interface Relation {

  kind: string;
}
