if (self.CavalryLogger) { CavalryLogger.start_js(["3ZWcx"]); }

__d("DimensionLogging",["BanzaiNectar","getViewportDimensions"],(function a(b,c,d,e,f,g){var h=c("getViewportDimensions")();c("BanzaiNectar").log("browser_dimension","homeload",{x:h.width,y:h.height,sw:window.screen.width,sh:window.screen.height,aw:window.screen.availWidth,ah:window.screen.availHeight,at:window.screen.availTop,al:window.screen.availLeft})}),null);
__d("ProfileLink.react",["Link.react","React","URI"],(function a(b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=c("React").PropTypes;h=babelHelpers.inherits(k,c("React").Component);i=h&&h.prototype;k.prototype.render=function(){var l=new(c("URI"))("/ajax/hovercard/user.php").setQueryData({id:this.props.uid});return c("React").createElement(c("Link.react"),babelHelpers["extends"]({},this.props,{href:"/"+this.props.uid,"data-hovercard":l}),this.props.children)};function k(){h.apply(this,arguments)}k.propTypes={uid:j.string.isRequired};f.exports=k}),null);
__d("VideoPauseWhenBackgrounded",["invariant","Event","SubscriptionsHandler","VideoPlayerReason","VideoPlayerStates","Visibility"],(function a(b,c,d,e,f,g,h){"use strict";__p&&__p();function i(){this.$VideoPauseWhenBackgrounded1=new(c("SubscriptionsHandler"))();this.$VideoPauseWhenBackgrounded3=false}i.prototype.enable=function(j){!this.$VideoPauseWhenBackgrounded2||h(0);this.$VideoPauseWhenBackgrounded1.engage();this.$VideoPauseWhenBackgrounded2=j;this.$VideoPauseWhenBackgrounded1.addSubscriptions(c("Event").listen(window,"blur",this.$VideoPauseWhenBackgrounded4.bind(this)),c("Event").listen(window,"focus",this.$VideoPauseWhenBackgrounded5.bind(this)),c("Visibility").addListener(c("Visibility").HIDDEN,this.$VideoPauseWhenBackgrounded4.bind(this)),c("Visibility").addListener(c("Visibility").VISIBLE,this.$VideoPauseWhenBackgrounded5.bind(this)))};i.prototype.disable=function(){this.$VideoPauseWhenBackgrounded1.release();this.$VideoPauseWhenBackgrounded2=null};i.prototype.$VideoPauseWhenBackgrounded4=function(){this.pauseVideo(c("VideoPlayerReason").PAGE_VISIBILITY)};i.prototype.$VideoPauseWhenBackgrounded5=function(){this.playVideo(c("VideoPlayerReason").PAGE_VISIBILITY)};i.prototype.playVideo=function(j){var k=this.$VideoPauseWhenBackgrounded2;k||h(0);if(k.isState(c("VideoPlayerStates").PAUSED)&&this.$VideoPauseWhenBackgrounded3)k.play(j);this.$VideoPauseWhenBackgrounded3=false};i.prototype.pauseVideo=function(j){var k=this.$VideoPauseWhenBackgrounded2;k||h(0);if(k.isState(c("VideoPlayerStates").PLAYING)){k.pause(j);this.$VideoPauseWhenBackgrounded3=true}};f.exports=i}),null);
__d("AsyncData",[],(function a(b,c,d,e,f,g){__p&&__p();var h=Object.create(null),i=Object.create(null),j=Object.create(null),k={resolve:function n(o,p){var q=j[o]={result:p,status:"success"};if(h[o]){h[o].forEach(function(r){return r(q.result)});delete h[o]}delete i[o]},reject:function n(o,p){var q=j[o]={error:p,status:"error"};if(i[o]){i[o].forEach(function(r){return r(q.error)});delete i[o]}delete h[o]},preload:function n(o){var p={};p.onLoaded=l.bind(null,o,p);p.onError=m.bind(null,o,p);return p}};function l(n,o,p){var q=j[n];if(q&&!q.error)p(q.result);else{h[n]=h[n]||[];h[n].push(p)}return o}function m(n,o,p){var q=j[n];if(q){if(q.status==="error")p(q.error)}else{i[n]=i[n]||[];i[n].push(p)}return o}f.exports=k}),null);
__d("VideoChainingCaller",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({INTERNAL:"internal",WWW_FEED_PIVOTS:"www_feed_pivots",WWW_FEED_SNOWLIFT:"www_feed_snowlift",MISC_PHOTO_SET:"misc_photo_set",MOBILE:"mobile",SEARCH:"search",WWW_FEED_RHC:"www_feed_rhc",WWW_NOTIFICATION:"www_notification",WWW_PERMALINK:"www_permalink",WWW_PERMALINK_RHC:"www_permalink_rhc",WWW_PERMALINK_RHC_FROM_NOTIFICATION:"www_permalink_rhc_from_notification",MY_VIDEO_CHANNELS_ENT_QUERY:"my_video_channels_ent_query",TOP_FOLLOWED_VIDEO_CHANNELS_ENT_QUERY:"top_followed_video_channels_ent_query",BADGE:"badge",PAGINATION:"pagination",SUBTITLE:"subtitle",CHANNEL_VIEW_FROM_UNKNOWN:"channel_view_from_unknown",CHANNEL_VIEW_FROM_NEWSFEED:"channel_view_from_newsfeed",CHANNEL_VIEW_FROM_EXPLOREFEED:"channel_view_from_explorefeed",LIVE_INDEXER_FROM_EXPLOREFEED:"live_indexer_from_explorefeed",LIVE_INDEXER_FROM_NEWSFEED:"live_indexer_from_newsfeed",NN_INDEXER_FROM_NEWSFEED:"nn_indexer_from_newsfeed",CHANNEL_VIEW_FROM_SEARCH:"channel_view_from_search",CHANNEL_VIEW_FROM_NEWSFEED_PIVOT:"channel_view_from_newsfeed_pivot",NEWSFEED_PIVOT_INLINE:"newsfeed_pivot_inline",MOBILE_NEWSFEED_PIVOT_INLINE:"mobile_newsfeed_pivot_inline",CHANNEL_VIEW_FROM_PAGE_CALL_TO_ACTION:"channel_view_from_page_call_to_action",CHANNEL_VIEW_FROM_PAGE_TIMELINE:"channel_view_from_page_timeline",CHANNEL_VIEW_FROM_PAGE_TIMELINE_FEATURED:"channel_view_from_page_timeline_featured",CHANNEL_VIEW_FROM_PAGE_VIDEO_TAB:"channel_view_from_page_video_tab",CHANNEL_VIEW_FROM_PAGE_HOME_HERO:"channel_view_from_page_home_hero",CHANNEL_VIEW_FROM_USER_TIMELINE:"channel_view_from_user_timeline",CHANNEL_VIEW_FROM_USER_VIDEO_TAB:"channel_view_from_user_video_tab",CHANNEL_VIEW_FROM_GROUP_TIMELINE:"channel_view_from_group_timeline",CHANNEL_VIEW_FROM_GROUP_VIDEO_TAB:"channel_view_from_group_video_tab",CHANNEL_VIEW_FROM_SAVED_STORY:"channel_view_from_saved_story",SAVED_STORY_INLINE:"saved_story_inline",CHANNEL_VIEW_FROM_SHARED_WITH_YOU_STORY:"channel_view_from_shared_with_you_story",SHARED_WITH_YOU_STORY_INLINE:"shared_with_you_story_inline",CHANNEL_VIEW_FROM_LATEST_FROM_YOUR_CHANNELS_STORY:"channel_view_from_latest_from_your_channels_story",LATEST_FROM_YOUR_CHANNELS_STORY_INLINE:"latest_from_your_channels_story_inline",CHANNEL_VIEW_FROM_CHANNEL_PIVOT:"channel_view_from_channel_pivot",CHANNEL_PIVOT_INLINE:"channel_pivot_inine",CHANNEL_VIEW_FROM_CHANNEL_RECOMMENDED_CHANNEL_STORY:"channel_view_from_recommended_channel_story",RECOMMENDED_CHANNEL_STORY_INLINE:"recommended_channel_story_inline",CHANNEL_VIEW_FROM_VIDEO_HOME:"channel_view_from_video_home",VIDEO_HOME_INLINE:"video_home_inline",VIDEO_HOME_CHANNEL_SEE_ALL:"video_home_channel_see_all",SOCIAL_PLAYER_UP_NEXT:"social_player_up_next",CHANNEL_VIEW_FROM_CASTING:"channel_view_from_casting",CONNECTED_TV:"connected_tv",CONNECTED_TV_DISCOVERY:"connected_tv_discovery",CONNECTED_TV_PLAYER:"connected_tv_player",CONNECTED_TV_PROFILE:"connected_tv_profile",VIDEO_HOME_FEED:"video_home_feed",VIDEO_HOME_HERO:"video_home_hero",FEED_SURVEY_SWIPE:"feed_survey_swipe",FEED_PIVOTS_INLINE:"feed_pivots_inline",CHANNEL_VIEW_FROM_FEED_PIVOTS:"channel_view_from_feed_pivots",VIDEO_SETS_CACHE_REFRESH:"video_sets_cache_refresh",VIDEO_SETS_CACHE_CHECK:"video_sets_cache_check",DUMMY_STORY_RECOMMENDED_VIDEOS:"dummy_story_recommended_videos",DUMMY_STORY_FRIENDS_ENJOYING:"dummy_story_friends_enjoying",LIVE_EVENT_VIDEO_SET:"live_event_video_set",LIVE_VIDEOS_SET:"live_videos_set",SINGLE_CREATOR_VIDEO_SET:"single_creator_video_set",FRT_TOOL:"frt_tool",DUMMY_STORY_FRIENDS_ENJOYING_NOW:"dummy_story_friends_enjoying_now",DUMMY_STORY_DUMMY_ACTION:"dummy_story_dummy_action",OCULUS_VIDEO:"oculus_video",TRENDING_DEMOGRAPHICS_LIVE:"trending_demographics_live",LIVE_MAP:"live_map",UNCONNECTED_LIVE_VIDEO:"unconnected_live_video",PROFILE_VIDEO_GALLERY:"profile_video_gallery",CHANNEL_VIEW_FROM_PLAYLIST:"channel_view_from_playlist",OCULUS_SOCIAL_HUB:"oculus_social_hub",AKIRA:"akira",IS_LIVE_VIDEO_CHAINING:"is_live_video_chaining",IS_LIVE_VIDEO_CHAINING_OTHERS:"is_live_video_chaining_others",VIDEO_CREATOR_CHAINING:"video_creator_chaining",TAHOE:"tahoe",LIVING_ROOM:"living_room",SHOWS_COVER_TRAILER:"shows_cover_trailer",SHOWS_EPISODES_TAB:"shows_episodes_tab",SHOWS_PLAYLISTS_TAB:"shows_playlists_tab",SHOWS_HOME_TAB:"shows_home_tab",SHOWS_MORE_VIDEOS_TAB:"shows_more_videos_tab",SHOW_EPISODE_FEED_RECOMMENDATIONS:"show_episode_feed_recommendations",PARENT_PAGE_TIMELINE:"parent_page_timeline",WATCH_WATCHLIST_TAB:"watch_watchlist_tab",WATCH_FEED_TAB:"watch_feed_tab",WNS:"wns",EXPLORE_FEED_DEEP_DIVE:"explore_feed_deep_dive"})}),null);
__d("react-relay/classic/query/stableStringify",[],(function a(b,c,d,e,f,g){"use strict";__p&&__p();function h(j){return j!==null&&Object.prototype.toString.call(j)==="[object Object]"}function i(j){__p&&__p();var k=Array.isArray(j),l=h(j);if(k||l){var m=Object.keys(j);if(m.length){var n=[];m.sort();for(var o=0;o<m.length;o++){var p=m[o],q=j[p];if(h(q)||Array.isArray(q))q=i(q);else q=JSON.stringify(q);n.push(p+":"+q)}if(k)return"["+n.join(",")+"]";else return"{"+n.join(",")+"}"}}return JSON.stringify(j)}f.exports=i}),null);