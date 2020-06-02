import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
    },
    {
        path: '',
        loadChildren: () => import('./home/tabs/tabs.module')
            .then(m => m.TabsPageModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./register/register.module')
            .then(m => m.RegisterPageModule)
    },
    {
        path: 'reset-password',
        loadChildren: () => import('./reset-password/reset-password.module')
            .then(m => m.ResetPasswordPageModule)
    },
    {
        path: 'vital',
        loadChildren: () => import('./home/vital/vital.module').then(m => m.VitalPageModule)
    },
    {
        path: 'resource',
        loadChildren: () => import('./home/resource/resource.module').then(m => m.ResourcePageModule)
    },
    {
        path: 'kp',
        loadChildren: () => import('./home/kp/kp.module').then(m => m.KpPageModule)
    },
    {
        path: 'ema',
        loadChildren: () => import('./home/ema/ema.module').then(m => m.EmaPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('./home/profile/profile.module').then(m => m.ProfilePageModule)
    },
    {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
    },
    {
        path: 'profile-edit',
        loadChildren: () => import('./profile-edit/profile-edit.module').then(m => m.ProfileEditPageModule)
    },
    {
        path: 'steps',
        loadChildren: () => import('./home/vital/steps/steps.module').then(m => m.StepsPageModule)
    },
    {
        path: 'sleep',
        loadChildren: () => import('./home/vital/sleep/sleep.module').then(m => m.SleepPageModule)
    },
    {
        path: 'calories',
        loadChildren: () => import('./home/vital/calories/calories.module').then(m => m.CaloriesPageModule)
    },
    {
        path: 'heart-rate',
        loadChildren: () => import('./home/vital/heart-rate/heart-rate.module').then(m => m.HeartRatePageModule)
    },
    {
        path: 'stress',
        loadChildren: () => import('./home/vital/stress/stress.module').then(m => m.StressPageModule)
    },
    {
        path: 'pulse-ox',
        loadChildren: () => import('./home/vital/pulse-ox/pulse-ox.module').then(m => m.PulseOxPageModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./home/chat/home/home.module').then(m => m.HomePageModule)
    }


];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
