import {FanClubInfo, User} from './user.type';

export interface RootPost {
  data: DataPost;
  pagination_token: string;
}

export interface DataPost {
  count: number;
  items: ItemPost[];
  user: User;
}

export interface ItemPost {
  can_reshare: boolean;
  can_save: boolean;
  caption: Caption;
  caption_is_edited: boolean;
  clips_metadata?: ClipsMetadata;
  clips_tab_pinned_user_ids: any[];
  code: string;
  comment_count: number;
  comment_inform_treatment: CommentInformTreatment;
  comment_likes_enabled?: boolean;
  comment_threading_enabled: boolean;
  commerciality_status: string;
  deleted_reason: number;
  device_timestamp: number;
  fb_like_count?: number;
  fb_play_count?: number;
  fb_user_tags: FbUserTags;
  featured_products: any[];
  filter_type: number;
  fundraiser_tag: FundraiserTag;
  has_audio?: boolean;
  has_liked: boolean;
  has_more_comments: boolean;
  has_privately_liked: boolean;
  has_shared_to_fb: number;
  id: string;
  ig_media_sharing_disabled: boolean;
  image_versions: ImageVersions;
  inline_composer_display_condition: string;
  inline_composer_imp_trigger_time: number;
  integrity_review_decision: string;
  invited_coauthor_producers: any[];
  is_artist_pick?: boolean;
  is_auto_created: boolean;
  is_comments_gif_composer_enabled: boolean;
  is_cutout_sticker_allowed: boolean;
  is_dash_eligible?: number;
  is_in_profile_grid: boolean;
  is_open_to_public_submission: boolean;
  is_organic_product_tagging_eligible: boolean;
  is_paid_partnership: boolean;
  is_post_live_clips_media: boolean;
  is_quiet_post: boolean;
  is_reshare_of_text_post_app_media_in_ig: boolean;
  is_third_party_downloads_eligible?: boolean;
  is_unified_video: boolean;
  is_video: boolean;
  lat?: number;
  like_and_view_counts_disabled: boolean;
  like_count: number;
  lng?: number;
  location?: Location;
  max_num_visible_preview_comments: number;
  media_appreciation_settings?: MediaAppreciationSettings;
  media_cropping_info?: MediaCroppingInfo;
  media_name: string;
  media_type: number;
  mezql_token: string;
  music_metadata?: MusicMetadata;
  number_of_qualities?: number;
  open_carousel_submission_state: string;
  original_height: number;
  original_width: number;
  owner: Owner;
  play_count?: number;
  preview_comments: PreviewComment[];
  product_suggestions: any[];
  product_type: string;
  share_count?: number;
  reshare_count?: number;
  sharing_friction_info: SharingFrictionInfo;
  shop_routing_user_id: any;
  sponsor_tags: any[];
  tagged_users: TaggedUser[];
  taken_at: number;
  taken_at_ts: number;
  thumbnail_url: string;
  top_likers: any[];
  user: User;
  video_codec?: string;
  video_duration?: number;
  video_url?: string;
  video_versions?: VideoVersion[];
  carousel_media?: CarouselMedum[];
  carousel_media_count?: number;
  carousel_media_ids?: number[];
  carousel_media_pending_post_count?: number;
  open_to_public_submission_description_text?: string;
  coauthor_producers?: User[];
}

export interface Caption {
  content_type: string;
  created_at: number;
  created_at_utc: number;
  did_report_as_spam: boolean;
  hashtags: string[];
  id: string;
  is_covered: boolean;
  is_ranked_comment: boolean;
  mentions: string[];
  private_reply_status: number;
  share_enabled: boolean;
  text: string;
  type: number;
  user: User;
  user_id: string;
}

export interface ClipsMetadata {
  achievements_info: AchievementsInfo;
  additional_audio_info: AdditionalAudioInfo;
  asset_recommendation_info: any;
  audio_canonical_id: string;
  audio_ranking_info: AudioRankingInfo;
  audio_type: string;
  branded_content_tag_info: BrandedContentTagInfo;
  breaking_content_info: any;
  breaking_creator_info: any;
  challenge_info: any;
  clips_creation_entry_point: string;
  content_appreciation_info: any;
  contextual_highlight_info: any;
  cutout_sticker_info: any;
  disable_use_in_clips_client_cache: boolean;
  external_media_info: any;
  featured_label: any;
  is_fan_club_promo_video: boolean;
  is_public_chat_welcome_video: boolean;
  is_shared_to_fb: boolean;
  mashup_info: MashupInfo;
  merchandising_pill_info: any;
  music_info?: MusicInfo;
  nux_info: any;
  original_sound_info?: OriginalSoundInfo;
  professional_clips_upsell_type: number;
  reels_on_the_rise_info: any;
  reusable_text_attribute_string: any;
  reusable_text_info: any;
  shopping_info: any;
  show_achievements: boolean;
  show_tips: any;
  template_info: any;
  viewer_interaction_settings: any;
}

export interface AchievementsInfo {
  num_earned_achievements: any;
  show_achievements: boolean;
}

export interface AdditionalAudioInfo {
  additional_audio_username: any;
  audio_reattribution_info: AudioReattributionInfo;
}

export interface AudioReattributionInfo {
  should_allow_restore: boolean;
}

export interface AudioRankingInfo {
  best_audio_cluster_id: string;
}

export interface BrandedContentTagInfo {
  can_add_tag: boolean;
}

export interface MashupInfo {
  can_toggle_mashups_allowed: boolean;
  formatted_mashups_count: any;
  has_been_mashed_up: boolean;
  has_nonmimicable_additional_audio: boolean;
  is_creator_requesting_mashup: boolean;
  is_light_weight_check: boolean;
  is_pivot_page_available: boolean;
  mashup_type: any;
  mashups_allowed: boolean;
  non_privacy_filtered_mashups_media_count: number;
  original_media: any;
  privacy_filtered_mashups_media_count: any;
}

export interface MusicInfo {
  music_asset_info: MusicAssetInfo;
  music_consumption_info: MusicConsumptionInfo;
}

export interface MusicAssetInfo {
  allows_saving: boolean;
  artist_id?: string;
  audio_asset_id: string;
  audio_id: string;
  cover_artwork_thumbnail_uri: string;
  cover_artwork_uri: string;
  dark_message: any;
  display_artist: string;
  duration_in_ms: number;
  fast_start_progressive_download_url: string;
  has_lyrics: boolean;
  highlight_start_times_in_ms: number[];
  id: string;
  ig_username?: string;
  is_eligible_for_audio_effects: boolean;
  is_explicit: boolean;
  progressive_download_url: string;
  reactive_audio_download_url: any;
  sanitized_title: any;
  subtitle: string;
  title: string;
  web_30s_preview_download_url: any;
}

export interface MusicConsumptionInfo {
  allow_media_creation_with_music: boolean;
  audio_asset_start_time_in_ms: number;
  audio_filter_infos: any[];
  audio_muting_info: AudioMutingInfo;
  contains_lyrics: any;
  derived_content_id: any;
  display_labels: any;
  formatted_clips_media_count: any;
  ig_artist?: User;
  is_bookmarked: boolean;
  is_trending_in_clips: boolean;
  overlap_duration_in_ms: number;
  placeholder_profile_pic_url: string;
  should_allow_music_editing: boolean;
  should_mute_audio: boolean;
  should_mute_audio_reason: string;
  should_mute_audio_reason_type?: string;
  trend_rank: any;
}

export interface AudioMutingInfo {
  allow_audio_editing: boolean;
  mute_audio: boolean;
  mute_reason_str: string;
  show_muted_audio_toast: boolean;
  mute_reason?: string;
}

export interface OriginalSoundInfo {
  allow_creator_to_rename: boolean;
  audio_asset_id: number;
  audio_filter_infos: any[];
  audio_parts: any[];
  audio_parts_by_filter: any[];
  can_remix_be_shared_to_fb: boolean;
  can_remix_be_shared_to_fb_expansion: boolean;
  consumption_info: ConsumptionInfo;
  duration_in_ms: number;
  formatted_clips_media_count: any;
  hide_remixing: boolean;
  ig_artist: User;
  is_audio_automatically_attributed: boolean;
  is_eligible_for_audio_effects: boolean;
  is_explicit: boolean;
  is_original_audio_download_eligible: boolean;
  is_reuse_disabled: boolean;
  is_xpost_from_fb: boolean;
  oa_owner_is_music_artist: boolean;
  original_audio_subtype: string;
  original_audio_title: string;
  original_media_id: number;
  progressive_download_url: string;
  should_mute_audio: boolean;
  time_created: number;
  trend_rank: any;
  xpost_fb_creator_info: any;
}

export interface ConsumptionInfo {
  display_media_id: any;
  is_bookmarked: boolean;
  is_trending_in_clips: boolean;
  should_mute_audio_reason: string;
  should_mute_audio_reason_type: any;
}

export interface CommentInformTreatment {
  action_type: any;
  should_have_inform_treatment: boolean;
  text: string;
  url: any;
}

export interface FbUserTags {
  in: any[];
}

export interface FundraiserTag {
  has_standalone_fundraiser: boolean;
}

export interface ImageVersions {
  additional_items?: AdditionalItems;
  items: Item[];
  scrubber_spritesheet_info_candidates?: ScrubberSpritesheetInfoCandidates;
  smart_thumbnail_enabled?: boolean;
}

export interface AdditionalItems {
  first_frame: Item;
  igtv_first_frame: Item;
  smart_frame: any;
}

export interface Item {
  height: number;
  url: string;
  width: number;
}

export interface ScrubberSpritesheetInfoCandidates {
  default: Default;
}

export interface Default {
  file_size_kb: number;
  max_thumbnails_per_sprite: number;
  rendered_width: number;
  sprite_height: number;
  sprite_urls: string[];
  sprite_width: number;
  thumbnail_duration: number;
  thumbnail_height: number;
  thumbnail_width: number;
  thumbnails_per_row: number;
  total_thumbnail_num_per_sprite: number;
  video_length: number;
}

export interface Location {
  address: string;
  category: string;
  city: string;
  external_id: string;
  external_id_source: string;
  hours: Hours;
  id: string;
  lat: number;
  lng: number;
  name: string;
  phone: string;
  website: string;
  zip: any;
}

export interface Hours {}

export interface MediaAppreciationSettings {
  gift_count_visibility: string;
  media_gifting_state: string;
}

export interface MediaCroppingInfo {
  square_crop: SquareCrop;
}

export interface SquareCrop {
  crop_bottom: number;
  crop_left: number;
  crop_right: number;
  crop_top: number;
}

export interface MusicMetadata {
  audio_canonical_id: string;
  audio_type: any;
  music_info: any;
  original_sound_info: any;
  pinned_media_ids: any;
}

export interface Owner {
  account_badges: any[];
  fan_club_info: FanClubInfo;
  fbid_v2: string;
  feed_post_reshare_disabled: boolean;
  full_name: string;
  has_anonymous_profile_picture: boolean;
  id: string;
  is_favorite: boolean;
  is_private: boolean;
  is_unpublished: boolean;
  is_verified: boolean;
  profile_pic_id: string;
  profile_pic_url: string;
  show_account_transparency_details: boolean;
  third_party_downloads_enabled: number;
  transparency_product_enabled: boolean;
  username: string;
}

export interface PreviewComment {
  comment_like_count: number;
  content_type: string;
  created_at: number;
  created_at_utc: number;
  did_report_as_spam: boolean;
  has_liked_comment: boolean;
  hashtags: any[];
  id: string;
  is_covered: boolean;
  is_pinned: boolean;
  is_ranked_comment: boolean;
  mentions: string[];
  share_enabled: boolean;
  text: string;
  type: number;
  user: User;
  user_id: string;
}

export interface SharingFrictionInfo {
  bloks_app_url: any;
  sharing_friction_payload: any;
  should_have_sharing_friction: boolean;
}

export interface TaggedUser {
  user: User;
  x: number;
  y: number;
}
export interface VideoVersion {
  height: number;
  id: string;
  type: number;
  url: string;
  width: number;
}

export interface CarouselMedum {
  carousel_parent_id: string;
  commerciality_status: string;
  explore_pivot_grid: boolean;
  fb_user_tags: FbUserTags2;
  featured_products: any[];
  id: string;
  image_versions: ImageVersions;
  is_video: boolean;
  media_name: string;
  media_type: number;
  original_height: number;
  original_width: number;
  product_suggestions: ProductSuggestion[];
  product_type: string;
  sharing_friction_info: SharingFrictionInfo2;
  shop_routing_user_id: any;
  tagged_users: TaggedUsers;
  taken_at: number;
  thumbnail_url: string;
  has_audio?: boolean;
  is_dash_eligible?: number;
  number_of_qualities?: number;
  video_codec?: string;
  video_duration?: number;
  video_url?: string;
  video_versions?: VideoVersion[];
}

export interface FbUserTags2 {
  in: any[];
}
export interface ProductSuggestion {
  product_item: ProductItem;
}

export interface ProductItem {
  checkout_info: any;
  checkout_properties: any;
  checkout_style: string;
  compound_product_id: string;
  current_price: string;
  current_price_amount: string;
  current_price_stripped: string;
  description: string;
  external_url: string;
  full_price: string;
  full_price_amount: string;
  full_price_stripped: string;
  has_variants: boolean;
  is_in_stock: boolean;
  main_image: MainImage;
  merchant: Merchant;
  name: string;
  per_unit_price: any;
  price: string;
  product_id: string;
  retailer_id: string;
  review_status: string;
  thumbnail_image: ThumbnailImage;
}

export interface MainImage {
  image_versions: ImageVersions;
}

export interface ImageVersions3 {
  items: Item[];
}
export interface Merchant {
  id: string;
  is_verified: boolean;
  profile_pic_url: string;
  username: string;
}

export interface ThumbnailImage {
  image_versions: ImageVersions;
}

export interface SharingFrictionInfo2 {
  bloks_app_url: any;
  sharing_friction_payload: any;
  should_have_sharing_friction: boolean;
}

export interface TaggedUsers {
  in: In[];
}

export interface In {
  categories?: string[];
  duration_in_video_in_sec: any;
  position: number[];
  show_category_of_user: boolean;
  start_time_in_video_in_sec: any;
  user: User;
}
