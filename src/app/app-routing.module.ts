import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MostrarLibrosComponent } from "./pages/mostrar-libros/mostrar-libros.component";
import { PerfilComponent } from "./pages/perfil/perfil.component";
import { FavoritosComponent } from "./pages/favoritos/favoritos.component";
import { MisLibrosComponent } from "./pages/mis-libros/mis-libros.component";
import { SolicitudesComponent } from "./pages/solicitudes/solicitudes.component";
import { ModalIntercambioComponent } from "./pages/modal-intercambio/modal-intercambio.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegistroComponent } from "./pages/registro/registro.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "perfil", component: PerfilComponent },
  { path: "mostrarLibro", component: MostrarLibrosComponent },
  { path: "favoritos", component: FavoritosComponent },
  { path: "misLibros", component: MisLibrosComponent },
  { path: "solicitudes", component: SolicitudesComponent },
  { path: "intercambio", component: ModalIntercambioComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegistroComponent },
  { path: "home", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
