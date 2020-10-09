import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { BootcampsComponent } from './components/bootcamps/bootcamps.component';
import { IndexComponent } from './components/index/index.component';
import { BootcampDetailComponent } from './components/bootcamp-detail/bootcamp-detail.component';
import { AddBootcampComponent } from './components/add-bootcamp/add-bootcamp.component';
import { MangeBootcampComponent } from './components/mange-bootcamp/mange-bootcamp.component';
import { ManageCoursesComponent } from './components/manage-courses/manage-courses.component';
import { ManageReviewsComponent } from './components/manage-reviews/manage-reviews.component';
import { ManageAccountComponent } from './components/manage-account/manage-account.component';
import { AddReviewsComponent } from './components/add-reviews/add-reviews.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    BootcampsComponent,
    IndexComponent,
    BootcampDetailComponent,
    AddBootcampComponent,
    MangeBootcampComponent,
    ManageCoursesComponent,
    ManageReviewsComponent,
    ManageAccountComponent,
    AddReviewsComponent,
    ReviewsComponent,
    AddCourseComponent,
    UpdatePasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
