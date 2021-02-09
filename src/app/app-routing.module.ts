import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WallComponent } from './User/wall/wall.component';
import { ProfileComponent } from './User/profile/profile.component';
import { PostDetailsComponent } from './Common/post-details/post-details.component';
import { MessengerComponent } from './Common/messenger/messenger.component';
import { QuestionPaperComponent } from './Page/question-paper/question-paper.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { InsWallComponent } from './Institution/Page/ins-wall/ins-wall.component';
import { CreatePostComponent } from './Common/create-post/create-post.component';
import { ForgotPasscodeComponent } from './Common/Page/forgot-passcode/forgot-passcode.component';
import { SignUpComponent } from './Common/sign-up/sign-up.component';
import { EditProfileComponent } from './User/EditProfile/edit-profile.component';
import { FollowComponent } from './User/follow/follow.component';
import { FollowPageComponent } from './Institution/Page/follow-page/follow-page.component';
import { NotificationComponent } from './User/notification/notification.component';
import { UserMainPageComponent } from './Page/user-main-page/user-main-page.component';
import { ActivityComponent } from './User/activity/activity.component';
import { DetailsComponent } from './Institution/Page/details/details.component';
import { InstitutionMainPageComponent } from './Institution/Page/institution-main-page/institution-main-page.component';
import { OnlineClassDetailsAComponent } from './Page/online-class-details-a/online-class-details-a.component';
import { SearchPageComponent } from './User/search-page/search-page.component';
import { OnlineClassDetailsBComponent } from './Common/online-class-details-b/online-class-details-b.component';
import { InsNotificationComponent } from './Institution/Page/ins-notification/ins-notification.component';
import { InsActivityPageComponent } from './Institution/Page/activity-page/activity-page.component';
import { PaymentPageAComponent } from './Common/payment-page-a/payment-page-a.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OrganiserdetailsComponent } from './User/organiserdetails/organiserdetails.component';
import { WebinarpageNotloginComponent } from './webinarpage-notlogin/webinarpage-notlogin.component';
import { UserRegistrationComponent } from './Common/Page/user-registration/user-registration.component';
import { ChangePasscodeComponent } from './Common/Page/change-passcode/change-passcode.component';
import { EditPostComponent } from './Common/edit-post/edit-post.component';
import { UploadImageComponent } from './Common/upload-image/upload-image.component';
import { HomepagetwoComponent } from './test/homepagetwo/homepagetwo.component';
import { InsAboutComponent } from './Page/ins-about/ins-about.component';
const routes: Routes = [
  {
    path: 'Message',
    component: MessengerComponent
  },
  {
    path: 'ForgotPasscode',
    component: ForgotPasscodeComponent
  },
  {
    path: 'SignUp',
    component: UserRegistrationComponent
  },
  {
    path: 'ChangePasscode',
    component: ChangePasscodeComponent
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'testhome',
    component: HomepagetwoComponent
  },
  {
    path: 'Login',
    component: LoginPageComponent,
  },
  {
    path: 'Search',
    component: SearchPageComponent
  },
  {
    path: 'Webinar/:id',
    component: WebinarpageNotloginComponent
  },
  {
    path: 'oragniser/:id',
    component: OrganiserdetailsComponent
  },
  {
    path: 'wall',
    component: WallComponent,
  },
  {
    path: 'activity',
    component: ActivityComponent,
  },
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'follow',
    component: FollowComponent
  },
  {
    path: ':pageid',
    component: InstitutionMainPageComponent,   
    children: [
      {
        path: '',
        component: InsWallComponent
      },
      {
        path: 'about',
        component: InsAboutComponent
      },      
      {
        path: 'activity',
        component: InsActivityPageComponent
      },
      {
        path: 'notification',
        component: InsNotificationComponent
      },
      {
        path: 'payment',
        component: PaymentPageAComponent
      },
      {
        path: 'create',
        component: CreatePostComponent
      }
    ]
  },
  
  {
    path: 'User',
    component: UserMainPageComponent,
    children: [

      {
        path: 'Follow',
        component: FollowComponent
      },
      {
        path: 'Activity',
        component: ActivityComponent,
      },
      {
        path: 'Notification',
        component: NotificationComponent
      },
      {
        path: 'PostDetails',
        component: PostDetailsComponent
      },

      {
        path: 'WebinarDetails/:id',
        component: OnlineClassDetailsBComponent
      },
      {
        path: 'Profile/EditProfile',
        component: EditProfileComponent
      },
      {
        path: 'Profile',
        component: ProfileComponent
      },
      {
        path: 'Payment/:id',
        component: PaymentPageAComponent
      },
      {
        path: 'oragniser/:id',
        component: OrganiserdetailsComponent
      }
    ]
  },

  {
    path: 'Institution',
    component: InstitutionMainPageComponent,
    children: [
      {
        path: 'imageuploadtest',
        component: UploadImageComponent
      },
      {
        path: 'Notification',
        component: InsNotificationComponent
      }
      ,
      {
        path: 'Activity',
        component: InsActivityPageComponent
      }
      ,
      {
        path: 'PostDetail',
        component: PostDetailsComponent
      }
      ,
      {
        path: 'CreatePost',
        component: CreatePostComponent
      }
      ,
      {
        path: 'editPost/:id',
        component: EditPostComponent
      }
      ,
      {
        path: 'Detail',
        component: DetailsComponent
      },
      {
        path: 'WebinarDetails/:id',
        component: OnlineClassDetailsAComponent
      },
      {
        path: 'Follow',
        component: FollowPageComponent
      },
      {
        path: 'Payment',
        component: PaymentPageAComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
