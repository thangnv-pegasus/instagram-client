export interface IChildComment {
  comment_id: number;
  content: string;
  created_at: Date;
  id: number;
  like_total: number;
  nickname: string;
  post_id: number;
  updated_at: Date;
  avatar_url: string;
  user_id: number;
}
export interface ICcomment {
  child_comment: Array<IChildComment>;
  content: string;
  avatar_url: string;
  created_at: Date;
  id: number;
  like_total: number;
  nickname: string;
  post_id: number;
  updated_at: Date;
  user_id: number;
}
