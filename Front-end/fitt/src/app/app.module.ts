import { DinnerService } from './_services/dinner/dinner.service';
import { LunchService } from './_services/lunch/lunch.service';
import { BreakfastService } from './_services/breakfast/breakfast.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AuthService } from './_services/auth/auth.service';
import { AuthGuardService } from './_services/auth/auth-guard.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

//Component imports
import { LoginComponent } from '@components/login/login.component';
import { SigninComponent } from '@components/signin/signin.component';
import { HomeComponent } from '@components/home/home.component';
import { HeaderComponent } from '@components/header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
import { MealsComponent } from '@components/meals/meals.component';
import { ProfileComponent } from '@components/profile/profile.component';
import { WorkoutComponent } from '@components/workout/workout.component';
import { WorkoutTypesComponent } from '@components/workout-types/workout-types.component';
import { AboutComponent } from '@components/supportPages/about/about.component';
import { ContactComponent } from '@components/supportPages/contact/contact.component';
import { SupportComponent } from '@components/supportPages/support/support.component';
import { ErrorComponent } from '@components/error/error.component';
import { WorkoutPlansComponent } from '@components/workout-plans/workout-plans.component';
import { MobilityComponent } from '@components/excercises/mobility/mobility.component';
import { EnduranceComponent } from '@components/excercises/endurance/endurance.component';
import { StrengthComponent } from '@components/excercises/strength/strength.component';
import { YogaComponent } from '@components/excercises/yoga/yoga.component';
import { AllComponent } from '@components/excercises/all/all.component';
import { BodyweightComponent } from '@components/excercises/bodyweight/bodyweight.component';
import { GymstrongComponent } from '@components/excercises/gymstrong/gymstrong.component';
import { BreakfastComponent } from './_components/breakfast/breakfast.component';
import { LunchComponent } from './_components/lunch/lunch.component';
import { DinnerComponent } from './_components/dinner/dinner.component';
import { ConfirmationComponent } from './_components/confirmation/confirmation.component';
import { SearchfilterPipe } from './searchfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MealsComponent,
    ProfileComponent,
    WorkoutComponent,
    WorkoutTypesComponent,
    AboutComponent,
    ContactComponent,
    SupportComponent,
    ErrorComponent,
    WorkoutPlansComponent,
    MobilityComponent,
    EnduranceComponent,
    StrengthComponent,
    YogaComponent,
    AllComponent,
    BodyweightComponent,
    GymstrongComponent,
    BreakfastComponent,
    LunchComponent,
    DinnerComponent,
    ConfirmationComponent,
    SearchfilterPipe,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
  ],
  providers: [
    BreakfastService,
    LunchService,
    DinnerService,
    AuthService,
    AuthGuardService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
