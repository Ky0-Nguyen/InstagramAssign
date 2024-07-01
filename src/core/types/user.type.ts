export interface User {
  id: string;
  full_name: string;
  account_badges?: any[];
  fan_club_info?: FanClubInfo;
  fbid_v2?: string;
  feed_post_reshare_disabled?: boolean;
  has_anonymous_profile_picture?: boolean;
  is_favorite?: boolean;
  is_private?: boolean;
  is_unpublished?: boolean;
  is_verified?: boolean;
  profile_pic_id?: string;
  profile_pic_url?: string;
  show_account_transparency_details?: boolean;
  third_party_downloads_enabled?: number;
  transparency_product_enabled?: boolean;
  username: string;
}

export interface FanClubInfo {
  autosave_to_exclusive_highlight: any;
  connected_member_count: any;
  fan_club_id: any;
  fan_club_name: any;
  fan_consideration_page_revamp_eligiblity: any;
  has_enough_subscribers_for_ssc: any;
  is_fan_club_gifting_eligible: any;
  is_fan_club_referral_eligible: any;
  subscriber_count: any;
}
