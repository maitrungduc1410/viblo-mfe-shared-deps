import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { ReactWrapperComponent } from './wrappers/react-wrapper/react-wrapper.component';
import { VueWrapperComponent } from './wrappers/vue-wrapper/vue-wrapper.component';
import { AngularWrapperComponent } from './wrappers/angular-wrapper/angular-wrapper.component';
import { KtdGridModule } from '@katoid/angular-grid-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ReactWrapperComponent,
    VueWrapperComponent,
    AngularWrapperComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    KtdGridModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
