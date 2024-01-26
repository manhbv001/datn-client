export interface IBaseEntity {
  id: number;
  is_active?: boolean;
  created_at?: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
  message: string;
}

export enum OAuthProviders {
  Google = 1,
  Facebook = 2,
}

export type SortBy = "DESC" | "ESC";

export interface IBaseQueryParams {
  page?: number;
  size?: number;
  search?: string;
  order_key?: string;
  order_by?: SortBy;
  start_date?: string;
  end_date?: string;
}
