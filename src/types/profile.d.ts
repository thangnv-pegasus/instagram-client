export interface IProfile {
  nickname: string;
  avatar_url: string;
  bio: string;
  created_at: Date;
  date_of_birth: Date;
  email: Date;
  fullname: string;
  user_id: number;
  is_company: number;
  is_real: number;
  phone: string;
  priority: number;
  role: "admin" | "user";
  sex: "male" | "female";
  type: "user" | "me";
  updated_at: Date;
}
