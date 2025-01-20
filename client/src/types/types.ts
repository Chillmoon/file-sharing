export interface File {
  name: string;
  url: string;
}

export interface Folder {
  id: string;
  name: string;
  parent: string | null;
  createdAt: string;
}
