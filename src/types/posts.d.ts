import { IImage } from "./image";

export interface IPOST {
  id: number;
  name: string;
  caption: string;
  comments: Array<object>;
  total_like: number;
  created_at: Date;
}

export interface IPostPaginate {
  post_id: Number;
  user_id: Number;
  is_like: boolean;
  images: Array<IImage>;
  post_detail: {
    caption: string;
    created_at: Date;
    id: Number;
    like_total: number;
    updated_at: Date;
    user_id: Number;
  };
  user_profile?: {
    avatar_url: string | "https://placehold.it/100x100";
    bio: string;
    id: Number;
    is_company: Number;
    is_real: Number;
    nickname: string;
    priority: number;
    user_id: Number;
  };
}

export interface IMyPost {
  caption: string;
  created_at: Date;
  id: number;
  images: Array<IImage>;
  like_total: number;
  post_id: number;
  updated_at: Date;
  user_id: number;
  comment_count: number;
}

