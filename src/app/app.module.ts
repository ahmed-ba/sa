import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment' ;
import { RouterModule , Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component' ;
import { StudentService } from './shared/services/student.service';
const routes : Routes = [
{ path: 'add-student' , component : AddStudentComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule , RouterModule . forRoot ( routes ),
    AngularFireModule . initializeApp ( environment . firebase ),
  
    AngularFirestoreModule,
      FormsModule
  ],
  providers: [StudentService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
