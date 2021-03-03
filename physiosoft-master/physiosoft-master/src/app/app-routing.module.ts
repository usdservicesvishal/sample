import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'advance',
    loadChildren: () => import('./advance/advance.module').then( m => m.AdvancePageModule)
  },
  {
    path: 'dermatome-myotome',
    loadChildren: () => import('./dermatome-myotome/dermatome-myotome.module').then( m => m.DermatomeMyotomePageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'investigation',
    loadChildren: () => import('./investigation/investigation.module').then( m => m.InvestigationPageModule)
  },
  {
    path: 'joint-examination',
    loadChildren: () => import('./joint-examination/joint-examination.module').then( m => m.JointExaminationPageModule)
  },
  {
    path: 'muscles-examination',
    loadChildren: () => import('./muscles-examination/muscles-examination.module').then( m => m.MusclesExaminationPageModule)
  },
  {
    path: 'nds',
    loadChildren: () => import('./nds/nds.module').then( m => m.NdsPageModule)
  },
  {
    path: 'poster-gait',
    loadChildren: () => import('./poster-gait/poster-gait.module').then( m => m.PosterGaitPageModule)
  },
  {
    path: 'reflex',
    loadChildren: () => import('./reflex/reflex.module').then( m => m.ReflexPageModule)
  },
  {
    path: 'special-test',
    loadChildren: () => import('./special-test/special-test.module').then( m => m.SpecialTestPageModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
