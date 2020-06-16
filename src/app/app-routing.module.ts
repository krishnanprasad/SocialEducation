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
import { ForgotPasswordComponent } from './Common/Page/forgot-password/forgot-password.component';
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

const routes: Routes = [
  {
    path: 'Login',
    component : LoginPageComponent,
  },
  {
    path: 'Search',
    component: SearchPageComponent
  },
  {
    path: 'User',
    component: UserMainPageComponent,
    children: [
      {
        path: 'Wall',
        component: WallComponent,
      },
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
        path: 'QuestionPaper/:QuestionPaperId',
        component: QuestionPaperComponent
      },
      {
        path: 'CourseDetails/:CourseID',
        component: OnlineClassDetailsAComponent
      },
      {
        path: 'Profile/EditProfile',
        component: EditProfileComponent
      },
      {
        path: 'Profile',
        component: ProfileComponent
      },
     
    ]
  },
  {
    path: 'Message',
    component: MessengerComponent
  },
  {
    path: 'ForgotPassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'SignUp',
    component: SignUpComponent
  },
  {
    path: 'Institution',
    component:InstitutionMainPageComponent,
    children: [
      {
        path: 'Wall',
        component: InsWallComponent
      },
      {
        path: '',
        component: InsWallComponent
      },
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
        path: 'Detail',
        component: DetailsComponent
      },
      {
        path: 'CourseDetails/:CourseID',
        component: OnlineClassDetailsBComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
