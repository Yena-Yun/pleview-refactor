export type IdType = {
  id?: string;
};

export type TagType = {
  name: string;
} & IdType;

export type CategoryType = {
  name: string;
} & IdType;

export type PostType = {
  title: string;
  content: string;
  code: string;
  editDate: any;
  author: string;
  tags: string[];
  category: string;
  authorInfo?: UserType;
} & IdType;

export type CommentType = {
  author: string;
  content: string;
  postId: string;
  parentId: string;
  regDate: Date;
} & IdType;

export type UserType = {
  displayName: string;
  email: string;
  photoURL: string;
} & IdType;
