import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { ArgProLogoComponent } from './components/arg-pro-logo/arg-pro-logo.component';
import { BannerComponent } from './components/banner/banner.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FooterComponent } from './components/footer/footer.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
//import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { LoginComponent } from './components/login/login.component';
import { LogrosComponent } from './components/logros/logros.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { interceptorProvider } from './services/interceptor-service';
import { NuevaExperienciaComponent } from './components/experiencia/nueva-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NuevaHabilidadComponent } from './components/habilidades/nueva-habilidad.component';
import { EditHabilidadComponent } from './components/habilidades/edit-habilidad.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    AptitudesComponent,
    ArgProLogoComponent,
    BannerComponent,
    EducacionComponent,
    ExperienciaComponent,
    FooterComponent,
    HabilidadesComponent,
    LoginComponent,
    //IniciarSesionComponent,
    LogrosComponent,
    MainComponent,
    RegisterComponent,
    NuevaExperienciaComponent,
    EditExperienciaComponent,
    NuevaEducacionComponent,
    EditEducacionComponent,
    NuevaHabilidadComponent,
    EditHabilidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
    
   
    ReactiveFormsModule,
        //provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
    
    NgCircleProgressModule.forRoot({})

  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
