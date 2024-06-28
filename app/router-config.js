import { AccountController } from "./controllers/AccountController.js";
import { ImagesController } from "./controllers/ImagesController.js";
import { QuotesController } from "./controllers/QuotesController.js";
import { TimeController } from "./controllers/TimeController.js";
import { ToDoController } from "./controllers/ToDoController.js";
import { WeatherController } from "./controllers/WeatherController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [ToDoController, ImagesController, QuotesController, TimeController, WeatherController],
    view: 'app/views/HomeView.html' 
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




