import { ConfirmationComponent } from './_components/confirmation/confirmation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@components/login/login.component';
import { SigninComponent } from '@components/signin/signin.component';
import { HomeComponent } from '@components/home/home.component';
import { ProfileComponent } from '@components/profile/profile.component';
import { MealsComponent } from '@components/meals/meals.component';
import { LunchComponent } from '@components/lunch/lunch.component';
import { BreakfastComponent } from '@components/breakfast/breakfast.component';
import { DinnerComponent } from '@components/dinner/dinner.component';
import { WorkoutComponent } from '@components/workout/workout.component';
import { AboutComponent } from '@components/supportPages/about/about.component';
import { FAQComponent } from '@components/supportPages/faq/faq.component';
import { ContactComponent } from '@components/supportPages/contact/contact.component';
import { WorkoutTypesComponent } from '@components/workout-types/workout-types.component';
import { WorkoutPlansComponent } from '@components/workout-plans/workout-plans.component';
import { EnduranceComponent } from '@components/excercises/endurance/endurance.component';
import { StrengthComponent } from '@components/excercises/strength/strength.component';
import { MobilityComponent } from '@components/excercises/mobility/mobility.component';
import { YogaComponent } from '@components/excercises/yoga/yoga.component';
import { AllComponent } from '@components/excercises/all/all.component';
import { BodyweightComponent } from '@components/excercises/bodyweight/bodyweight.component';
import { GymstrongComponent } from '@components/excercises/gymstrong/gymstrong.component';
import { ErrorComponent } from '@components/error/error.component';
import { AuthGuardService } from './_services/auth/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signin/confirm', component: ConfirmationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faqs', component: FAQComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'meals',
    component: MealsComponent,
  },
  {
    path: 'meals/lunch',
    component: LunchComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'meals/breakfast',
    component: BreakfastComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'meals/dinner',
    component: DinnerComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'workout',
    component: WorkoutComponent,
  },
  {
    path: 'workout/types',
    component: WorkoutTypesComponent,
  },
  {
    path: 'workout/plans',
    component: WorkoutPlansComponent,
  },
  {
    path: 'workout/endurance',
    component: EnduranceComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'workout/strength',
    component: StrengthComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'workout/mobility',
    component: MobilityComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'workout/yoga',
    component: YogaComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'workout/all',
    component: AllComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'workout/bodyweight',
    component: BodyweightComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'workout/gymstrong',
    component: GymstrongComponent,
    canActivate: [AuthGuardService],
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
