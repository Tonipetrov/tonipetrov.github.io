# tonipetrov.github.io
My web development and web design portfolio.

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>



1	Content structure/taxonomy
1.1	Products
Products will be defined by tags. There will be main product tags and product sub tags.
Main product tags: webmethods, cumulocity-iot, adabas-natural, etc
Sub tags: 
•	Under webmethods – api-gateway, api-portal, webmethods.io-integration, etc
•	Under adabas-natural – adabas, natural, adabas-on-open-systems, etc
Tags can be viewed at DISCOURSEDOMAIN/tags
Or filtered on the home page/category page:
 
1.2	Content types
Everything that is posted in Discourse in the backend is taken as a topic or reply (topic is the first post). That’s why we’ll use categories to define content types. They will be:
•	Category name Forum discussions (or Q&As) – default category, where users will post there questions and can also mark them as solved (with the official Solved plugin https://meta.discourse.org/t/discourse-solved-accepted-answer-plugin/30155). Topics there will have the regular Discourse post look & feel.
•	Category name Wiki (or Knowledge Base or KB) – by default new topics created there will be wikis. They will have a more blog-like look & feel (from the Blog Post Styling theme component https://meta.discourse.org/t/blog-post-styling/110841) & a table of contents (from the DiscoTOC theme component https://meta.discourse.org/t/discotoc-automatic-table-of-contents/111143). Only Team group & TL2 can create topics there. Usual members can reply.
•	Category name News (or Announcements) – We (staff only) will be able to post or reply there (it will be closed for replies). They will have a more blog-like look & feel (from the Blog Post Styling theme component https://meta.discourse.org/t/blog-post-styling/110841). We’ll post there from a special account that will have a different avatar (or from the techcommunity account).
•	Videos will go under the Wiki category – TBD if it will be a subcategory. 
•	Downloads – we might have a category for that, where only we (staff) can create posts (pages). We might hide this category and just have the download pages linked and unlisted.
•	Blog – TBD if it will be a category, tag or something else
•	For Documentation will have simply a page (maybe under wiki or uncategorized)
We can style the different categories(content from them) with color/icons so that it’s easier to distinguish the content type. 
2	Downloads / free trials
2.1	All free trials/downloads page
2.2	Free trials pages
2.3	CloudStreams pages
2.4	Download forms
3	Other static pages
3.1	Product documentation
3.2	Members 
3.2.1	Main members page
3.2.2	Top members
3.2.3	All members
3.2.4	Newsletters
3.2.5	TECHchallenge
3.2.6	Recognition program
3.3	Roadmaps
3.4	Newsletters (again)
3.5	Get started/help
3.5.1	About
3.5.2	First steps
3.5.3	Advanced
3.5.4	How to post
3.5.5	FAQs
4	Files
Files that we upload to Discourse will be forbidden for access if you don’t have an account (unless it’s an image).
For public files we’ll use a separate FTP/CDN/S3
TO DO – what types of files should users be able to upload. What types should staff be able to upload.
TO DO – Currently pdf-s start downloading instead of opening
5	Look & feel
5.1	Theme components
5.1.1	Blog Post Styling (enabled)
https://meta.discourse.org/t/blog-post-styling/110841
5.1.2	DiscoTOC (enabled)
https://meta.discourse.org/t/discotoc-automatic-table-of-contents/111143
5.1.3	Discourse Tab Bar for Mobile (enabled)
https://meta.discourse.org/t/discourse-tab-bar-for-mobile/75696 
5.1.4	discourse-tag-banners (enabled)
Shows tag name on top of tag page
5.1.5	discourse-tag-sidebars (enabled)
For product/tag descriptions
5.1.6	Easy Footer (currently disabled)
Adds a footer with custom links
5.1.7	Hamburger Theme Selector (enabled)
5.1.8	Header Search (enabled)
5.1.9	Linkify words in post  (currently disabled)
https://meta.discourse.org/t/linkify-words-in-post/82193 - automatically creates links for some common words – we may use it for SEO
5.1.10	Post Badges component (enabled)
https://meta.discourse.org/t/post-badges-component/114722 - to show earned badges next to user’s avatar
5.1.11	Tag Icons (enabled)
5.1.12	Trust-level avatar flairs (enabled)
https://meta.discourse.org/t/trust-level-avatar-flair/82656 - may adapt it for the trust level icons (user, senior, guru)  
Needs tweaking since it’s broken on the KB/News sections (because of Blog Post Styling).
5.1.13	Unanswered Filter (enabled)
https://meta.discourse.org/t/unanswered-filter/126257 
5.1.14	Versatile Banner (currently disabled)
May use it, but currently it breaks DiscoTOC
5.1.15	 Custom Header Links (currently disabled)
May use it
5.1.16	 Nav Links Component (currently disabled)
May use it
5.1.17	Unformatted Code Detector theme component (not installed)
https://meta.discourse.org/t/unformatted-code-detector-theme-component/112773 - useful for improving UX
5.1.18	MD Composer extras (not installed)
https://meta.discourse.org/t/md-composer-extras/118912 - useful for improving UX
5.1.19	Alternative Voting Category Style (not installed)
https://meta.discourse.org/t/alternative-voting-category-style/101532 - To make votes look better 
https://meta.discourse.org/t/topic-footer-buttons-theme-components/116968 - may use that to add something after a topic
https://meta.discourse.org/t/slick-image-gallery/81952 - if we want to add image carousel to a topic at some point (not very likely) or image gallery - https://meta.discourse.org/t/tiles-image-gallery/81950/2 
5.2	Customizations
5.2.1	Logo (to be done)
5.2.2	Top navigation (to be done)
5.2.3	Products dropdown in top nav (to be done)
5.2.4	TRY free dropdown in top nav (to be done)
5.2.5	Banner on home page (to be done)
5.2.6	Customize KB (to be done)
5.2.7	Customize news (to be done)
5.2.8	Customize categories and tags in the topics list (to be done)
5.2.9	Customize tags page (to be done)
5.2.10	Fix versatile banner (to be done)
5.2.11	Fix blog theme component page – make it full screen and fix the TOC (to be done)
Hide avatars and flairs on blog view (KB & news)
5.2.12	Tags page (to hide dashes)
5.2.13	Tags page – to make the sidebar text go to top and have buttons
5.2.14	Enable and fix long tags for topics:
 
 
5.2.15	New reply/bookmark under timeline (to be done)
see how to do it from here https://meta.discourse.org/t/timeline-mute-button/127859 
Scroll to top/bottom buttons - https://meta.discourse.org/t/scroll-to-top-component/116506 
https://meta.discourse.org/t/add-a-button-at-the-bottom-of-a-topic-visible-to-everyone-discourse-custom-topic-button/36217 
5.2.16	New topic button on all pages (to be done)
change this https://meta.discourse.org/t/new-topic-button-on-all-pages/84551 so that it won’t show in the top navigation, but below it
to change the color to something more visible
5.2.17	New topic button for wiki to be different (to be done)
https://meta.discourse.org/t/customize-text-new-topic/140593/2 
5.2.18	New topic button for not logged in DISCOURSEURL/new-topic (to be done)
5.2.19	Default category for new topic to be forums (to be done)
5.2.20	Tags dropdown in create/edit topic (to be done)
5.2.21	Customize edit profile dropdown (to be done)
 
5.2.22	Customize tags/categories in the secondary nav (to be done)
Hide no tags.
5.2.23	Hide views count (to be done)
5.2.24	Customize edit profile dropdown (to be done)
5.2.25	Solved to look better (to be done)
5.2.26	In the search (to be done):
 

6	Users
6.1	Custom user fields
-	Country
-	State
-	Company
-	Job title
-	Areas of interest
-	Empower
-	Documentation
-	Newsletter subscription
6.2	API calls
6.3	Subscriptions
6.4	Badges
We’ll use the existing badges in the beginning and can create new after live and stable
https://meta.discourse.org/t/what-cool-badge-queries-have-you-come-up-with/18978 
6.5	Existing points in social equity (liferay)
We’ll have a badge that can be awarded more than once (e.g. XP) 
7	Login/registration
7.1	Test social login
7.1.1	Google
7.1.2	Twitter
7.1.3	LinkedIn
7.1.4	Github
8	Groups/roles
Team group – there’s a team group, that users with email domain softwareag.com are automatically added to. They are automatically granted Trust level 3 and have an icon in the bottom-right.
8.1	Moderators
-	Moderators will have moderator rights for all tags/forums (not per)
-	We’ll keep track of who is assigned as moderator of what in an excel sheet  (or something more modern)
-	We’ll make the moderators watch the tags they are assigned to with the admin account
8.2	TLs
8.2.1	TL0 – New user
8.2.2	TL1 – Member/Apprentice
8.2.3	TL2 – Senior member
8.2.4	TL3 – Guru 
8.3	Spam rules
9	Reports
10	Mail templates
10.1.1	Reply by email is disabled
11	SEO
11.1	Google analytics
11.2	Search console
11.3	Forum redirects
11.4	TECHcommunity redirects
12	How-tos
https://meta.discourse.org/t/how-to-manually-add-user-in-discourse/69878
https://meta.discourse.org/t/invite-individual-users-to-a-group/15544
https://meta.discourse.org/t/discourse-new-user-guide/96331
https://meta.discourse.org/t/discourse-activity-summary-emails-guide/36627
https://meta.discourse.org/t/discourse-moderation-guide/63116
https://meta.discourse.org/t/a-comprehensive-guide-to-discourse-tags/121041
https://github.com/discourse/discourse/blob/master/docs/ADMIN-QUICK-START-GUIDE.md
https://blog.discourse.org/2018/06/understanding-discourse-trust-levels/ 
https://meta.discourse.org/t/how-to-send-configure-and-accept-discourse-invitation-emails/124096

https://meta.discourse.org/t/developers-guide-to-markdown-extensions/66023
https://meta.discourse.org/t/beginners-guide-to-using-discourse-themes/91966
https://meta.discourse.org/t/developer-s-guide-to-discourse-themes/93648
13	Plugins
13.1	Official
13.1.1	https://meta.discourse.org/t/discourse-solved-accepted-answer-plugin/30155
13.1.2	https://meta.discourse.org/t/discourse-voting/40121
13.1.3	https://meta.discourse.org/t/data-explorer-plugin/32566
13.1.4	https://meta.discourse.org/t/discourse-tooltips-preview-topic-contents-on-hover/69304 - will probably use it
13.1.5	https://meta.discourse.org/t/discourse-push-notifications-for-desktop/86941 - will probably use it
13.1.6	https://meta.discourse.org/t/discourse-github/99895/25 - will probably use it 
13.1.7	https://meta.discourse.org/t/discourse-akismet-anti-spam/109337 - will probably use it
13.1.8	https://meta.discourse.org/t/linkedin-oauth2-plugin/46818 - will probably use it
13.1.9	https://meta.discourse.org/t/discourse-yearly-review-plugin/105713 - might use it
13.1.10	https://meta.discourse.org/t/chatroom-integration-plugin-discourse-chat-integration/66522 - might use it for Slack
13.1.11	https://meta.discourse.org/t/saved-searches-plugin/67901 - might use it
13.1.12	https://meta.discourse.org/t/discourse-signatures/42263 - might use it
13.1.13	https://meta.discourse.org/t/google-perspective-api-plugin/98733 - might use it
13.1.14	https://meta.discourse.org/t/user-notes-plugin/41026 - might use it
13.1.15	https://meta.discourse.org/t/discourse-teambuild-run-your-own-team-building-activity/134907 - might try it
13.1.16	https://meta.discourse.org/t/discourse-canned-replies/48296 - might try it
13.1.17	https://meta.discourse.org/t/discourse-github/99895/25 - might use it, but probably will skip :)

Dev how-tos:
Ember+Ruby

https://www.youtube.com/watch?v=8Sz2AuhWKe0&list=PLXXnezSEtvNPcZHqzXhrL1-7JkrbIR6qF
https://www.embercasts.com/course/full-stack-ember-with-rails/watch/whats-in-this-course 
https://code.tutsplus.com/courses/create-a-full-stack-rails-and-ember-app

Discourse
https://www.sitepoint.com/community/t/a-simple-discourse-plugin/116302
https://kleinfreund.de/how-to-create-a-discourse-plugin/

https://meta.discourse.org/t/how-to-start-building-stuff-for-discourse-if-youre-newbie-like-myself/45954
https://meta.discourse.org/t/plugin-tutorial-1-how-to-manipulate-the-text-in-the-composer/10925
https://meta.discourse.org/t/add-a-custom-per-user-setting-in-a-plugin/94048
https://meta.discourse.org/t/a-new-versioned-api-for-client-side-plugins/40051
https://meta.discourse.org/t/link-custom-user-field-to-external-website/41218
https://meta.discourse.org/t/structure-of-themes-and-theme-components/60848
https://meta.discourse.org/t/how-to-add-settings-to-your-discourse-theme/82557/3
https://meta.discourse.org/t/creating-routes-in-discourse-and-showing-data/48827
https://meta.discourse.org/t/adding-ember-components-to-discourse/48891
https://meta.discourse.org/t/write-ember-acceptance-and-component-tests-for-discourse/49167
https://meta.discourse.org/t/discourse-webhooks-and-zapier/56753
https://meta.discourse.org/t/custom-html-on-groups-page/140787/21 
https://meta.discourse.org/t/replace-a-string-in-all-posts/48729
Tips:
Find all topics you are tracking - https://meta.discourse.org/search?q=in%3Atracking or https://meta.discourse.org/latest?state=tracking
Find all topics you are watching - https://meta.discourse.org/search?q=in%3Awatching or https://meta.discourse.org/latest?state=watching

