import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WallComponent } from './User/wall/wall.component';
import { PostComponent } from './post/post.component';
import { CommentboxComponent } from './commentbox/commentbox.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PostheaderComponent } from './postheader/postheader.component';
import { WallPostComponent } from './User/wall-post/wall-post.component';
import { QAPostComponent } from './qapost/qapost.component';
import { QuestionPaperLinkComponent } from './question-paper-link/question-paper-link.component';
import { WallProfileComponent } from './User/wall-profile/wall-profile.component';
import { WallProfileCountComponent } from './User/wall-profile-count/wall-profile-count.component';
import { WallSuggestionComponent } from './User/wall-suggestion/wall-suggestion.component';
import { IWallPerformanceComponent } from './Institution/Card/iwall-performance/iwall-performance.component';

import { IwallprofileComponent } from './Institution/iwallprofile/iwallprofile.component';
import { IwallprofilecountComponent } from './Institution/Card/iwallprofilecount/iwallprofilecount.component';
import { ProfileComponent } from './User/profile/profile.component';
import { PostDetailsComponent } from './Common/post-details/post-details.component';
import { InterestedTopivComponent } from './Common/interested-topiv/interested-topiv.component';
import { CoursesDetailComponent } from './User/profile/courses-detail/courses-detail.component';
import { ProjectsComponent } from './User/profile/projects/projects.component';
import { InstitutionsComponent } from './User/profile/institutions/institutions.component';
import { AwardsComponent } from './User/profile/awards/awards.component';
import { InstitutionCardAComponent } from './Common/institution-card-a/institution-card-a.component';
import { FollowComponent } from './User/follow/follow.component';
import { MessengerComponent } from './Common/messenger/messenger.component';
import { UserDetailAComponent } from './Common/user-detail-a/user-detail-a.component';
import { SearchFilterPipe } from './Pipes/search-filter.pipe';
import { InstitutionCardBComponent } from './Common/institution-card-b/institution-card-b.component';
import { NotificationComponent } from './User/notification/notification.component';
import { NotificatioCardAComponent } from './Common/notificatio-card-a/notificatio-card-a.component';
import { LogsCardAComponent } from './Common/logs-card-a/logs-card-a.component';
import { ProfileCardComponent } from './User/profile/profile-card/profile-card.component';
import { PostBriefComponent } from './post-brief/post-brief.component';
import { QuestionNumbersCardComponent } from './Common/question-numbers-card/question-numbers-card.component';
import { QuestionPaperComponent } from './Page/question-paper/question-paper.component';
import { CountdownModule  } from 'ngx-countdown';
import { LoginPageComponent } from './login-page/login-page.component';
import { InsWallComponent } from './Institution/Page/ins-wall/ins-wall.component';
import { BannerComponent } from './Institution/Card/banner/banner.component';
import { InstPostListComponent } from './Institution/Card/inst-post-list/inst-post-list.component';
import { IPostComponent } from './Institution/Card/ipost/ipost.component';
import { InstBadgesCardComponent } from './Institution/Card/inst-badges-card/inst-badges-card.component';
import { PerformancePageComponent } from './Institution/Page/performance-page/performance-page.component';
import { CreatePostComponent } from './Common/create-post/create-post.component';
import { FollowPageComponent } from './Institution/Page/follow-page/follow-page.component';
import { ForgotPasswordComponent } from './Common/Page/forgot-password/forgot-password.component';
import { SignUpComponent } from './Common/sign-up/sign-up.component';
import { EditProfileComponent } from './User/EditProfile/edit-profile.component';
import { EditStatusModalComponent } from './Modal/edit-status-modal/edit-status-modal.component';
import { ProjectComponent } from './Editable/Component/project/project.component';
import { UserMainPageComponent } from './Page/user-main-page/user-main-page.component';
import { UserRecommendationCardComponent } from './Common/user-recommendation-card/user-recommendation-card.component';
import { RequestCardComponent } from './Common/request-card/request-card.component';
import { FriendRequestCardComponent } from './Common/friend-request-card/friend-request-card.component';
import { ActivityComponent } from './User/activity/activity.component';
import { PageOwnerComponent } from './User/Profile/page-owner/page-owner.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './Institution/Page/details/details.component';
import { InstitutionMainPageComponent } from './Institution/Page/institution-main-page/institution-main-page.component';
import { FollowerTableComponent } from './Common/follower-table/follower-table.component';
import { OnlineClassAComponent } from './Common/online-class-a/online-class-a.component';
import { OnlineClassBComponent } from './Common/online-class-b/online-class-b.component';
import { OnlineClassDetailsAComponent } from './Page/online-class-details-a/online-class-details-a.component';
import { OnlineClassCComponent } from './Common/online-class-c/online-class-c.component';
import { SearchPageComponent } from './User/search-page/search-page.component';
import { FeedbackAComponent } from './Common/feedback-a/feedback-a.component';
import { SearchItemFilterPipe} from './pipe/SearchItemFilterPipe.pipe';
import { OnlineClassDetailsBComponent } from './Common/online-class-details-b/online-class-details-b.component';
import { InsWallProfileSideComponent } from './Institution/ins-wall-profile-side/ins-wall-profile-side.component';
import { TopicBadgesAComponent } from './Common/topic-badges-a/topic-badges-a.component';
import { ScheduleRemainderAComponent } from './Common/schedule-remainder-a/schedule-remainder-a.component';
import { CreateQuestionPaperAComponent } from './Common/create-question-paper-a/create-question-paper-a.component';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { InsNotificationComponent } from './Institution/Page/ins-notification/ins-notification.component';
import { InsActivityPageComponent } from './Institution/Page/activity-page/activity-page.component';
import { ParticipantRequestAComponent } from './Common/participant-request-a/participant-request-a.component';
import { DropdownAComponent } from './Common/Altered/dropdown-a/dropdown-a.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WallComponent,
    PostComponent,
    CommentboxComponent,
    FeedbackComponent,
    PostheaderComponent,
    WallPostComponent,
    QAPostComponent,
    QuestionPaperLinkComponent,
    WallProfileComponent,
    WallProfileCountComponent,
    WallSuggestionComponent,
    IWallPerformanceComponent,
    IwallprofileComponent,
    IwallprofilecountComponent,
    ProfileComponent,
    PostDetailsComponent,
    ProfileCardComponent,
    InterestedTopivComponent,
    CoursesDetailComponent,
    ProjectsComponent,
    InstitutionsComponent,
    AwardsComponent,
    InstitutionCardAComponent,
    FollowComponent,
    MessengerComponent,
    UserDetailAComponent,
    SearchFilterPipe,
    InstitutionCardBComponent,
    NotificationComponent,
    NotificatioCardAComponent,
    LogsCardAComponent,
    PostBriefComponent,
    QuestionNumbersCardComponent,
    QuestionPaperComponent,
    LoginPageComponent,
    InsWallComponent,
    BannerComponent,
    InstPostListComponent,
    IPostComponent,
    InstBadgesCardComponent,
    PerformancePageComponent,
    CreatePostComponent,
    FollowPageComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    EditProfileComponent,
    EditStatusModalComponent,
    ProjectComponent,
    UserMainPageComponent,
    UserRecommendationCardComponent,
    RequestCardComponent,
    FriendRequestCardComponent,
    ActivityComponent,
    PageOwnerComponent,
    DetailsComponent,
    InstitutionMainPageComponent,
    FollowerTableComponent,
    OnlineClassAComponent,
    OnlineClassBComponent,
    OnlineClassDetailsAComponent,
    OnlineClassCComponent,
    SearchPageComponent,
    FeedbackAComponent,
    SearchItemFilterPipe,
    OnlineClassDetailsBComponent,
    InsWallProfileSideComponent,
    TopicBadgesAComponent,
    ScheduleRemainderAComponent,
    CreateQuestionPaperAComponent,
    InsNotificationComponent,
    InsActivityPageComponent,
    ParticipantRequestAComponent,
    DropdownAComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    CountdownModule,
    DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule,
  ],
  exports: [HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditStatusModalComponent] ,
})
export class AppModule { }
