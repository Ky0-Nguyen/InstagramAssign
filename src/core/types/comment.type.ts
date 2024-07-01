import {Caption} from './post.type';
import {User} from './user.type';

export interface RootComment {
  data: DataComment;
  pagination_token: string;
}

export interface DataComment {
  additional_data: AdditionalData;
  count: number;
  items: ItemComment[];
  total: number;
}

export interface AdditionalData {
  caption: Caption;
  caption_is_edited: boolean;
  comment_filter_param: string;
  comment_likes_enabled: boolean;
  insert_new_comment_to_top: boolean;
  is_ranked: boolean;
  media_header_display: string;
  quick_response_emojis: QuickResponseEmoji[];
  threading_enabled: boolean;
}

export interface FanClubStatusSyncInfo {
  eligible_to_subscribe: boolean;
  subscribed: boolean;
}

export interface QuickResponseEmoji {
  unicode: string;
}

export interface ItemComment {
  child_comment_count: number;
  comment_index: number;
  comment_like_count: number;
  content_type: string;
  created_at: number;
  created_at_utc: number;
  did_report_as_spam: boolean;
  has_liked: boolean;
  has_liked_comment: boolean;
  has_more_head_child_comments?: boolean;
  has_more_tail_child_comments?: boolean;
  hashtags: any[];
  id: string;
  inline_composer_display_condition: string;
  is_covered: boolean;
  is_ranked_comment: boolean;
  like_count: number;
  mentions: string[];
  other_preview_users: OtherPreviewUser[];
  private_reply_status: number;
  share_enabled: boolean;
  text: string;
  type: number;
  user: User;
  user_id: string;
  has_translation?: boolean;
}

export interface OtherPreviewUser {
  id: string;
  profile_pic_url: string;
}
