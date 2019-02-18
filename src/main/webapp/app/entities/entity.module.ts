import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'recommendation',
                loadChildren: './recommendation/recommendation.module#KarappatanRecommendationModule'
            },
            {
                path: 'annex',
                loadChildren: './annex/annex.module#KarappatanAnnexModule'
            },
            {
                path: 'answer',
                loadChildren: './answer/answer.module#KarappatanAnswerModule'
            },
            {
                path: 'question',
                loadChildren: './question/question.module#KarappatanQuestionModule'
            },
            {
                path: 'module',
                loadChildren: './module/module.module#KarappatanModuleModule'
            },
            {
                path: 'answer',
                loadChildren: './answer/answer.module#KarappatanAnswerModule'
            },
            {
                path: 'answer',
                loadChildren: './answer/answer.module#KarappatanAnswerModule'
            },
            {
                path: 'module',
                loadChildren: './module/module.module#KarappatanModuleModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KarappatanEntityModule {}
