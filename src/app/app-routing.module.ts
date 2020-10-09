import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "../app/components/login/login.component";
import { RegisterComponent } from "../app/components/register/register.component";
import { BootcampsComponent } from './components/bootcamps/bootcamps.component';
import { IndexComponent } from './components/index/index.component';
import { AddBootcampComponent } from './components/add-bootcamp/add-bootcamp.component';
import { BootcampDetailComponent } from './components/bootcamp-detail/bootcamp-detail.component';
import { MangeBootcampComponent } from "./components/mange-bootcamp/mange-bootcamp.component";
import { ManageCoursesComponent } from "./components/manage-courses/manage-courses.component";
import { ManageReviewsComponent } from "./components/manage-reviews/manage-reviews.component";
import { ManageAccountComponent } from "./components/manage-account/manage-account.component";
import { AddReviewsComponent } from "./components/add-reviews/add-reviews.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";
import { AddCourseComponent } from "./components/add-course/add-course.component";
import { UpdatePasswordComponent } from "./components/update-password/update-password.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";

const routes: Routes = [
  { component: LoginComponent, path: "login" },
  { component: RegisterComponent, path: "register" },
  { component: IndexComponent, path: "" },
  { component: BootcampsComponent, path: "bootcamps" },
  { component: AddBootcampComponent, path: "addBootcamp" },
  { component: BootcampDetailComponent, path: "bootcampDetail/:id" },
  { component: MangeBootcampComponent, path: "manageBootcamp/:id" },
  { component: ManageCoursesComponent, path: "manageCourses/:id" },
  { component: ManageReviewsComponent, path: "manageReviews" },
  { component: ManageAccountComponent, path: "manageAccount" },
  { component: AddReviewsComponent, path: "addReviews/:id" },
  { component: ReviewsComponent, path: "reviews" },
  { component: AddCourseComponent, path: "addCourse" },
  { component: UpdatePasswordComponent, path: "updatePassword" },
  { component: ResetPasswordComponent, path: "resetPassword" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
