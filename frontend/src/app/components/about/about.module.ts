import { FaQuestionComponent } from './fa-question/fa-question.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { AboutUsContactComponent } from './about-us-contact/about-us-contact.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsUseComponent } from './terms-use/terms-use.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PaymentPolicyComponent } from './payment-policy/payment-policy.component';
import { AboutUsComponent } from './about-us/about-us.component';

const accRouters: Routes = [
    { path: '', component: AboutComponent,
    children: [
        { path: 'contacts', component: AboutUsContactComponent },
        { path: 'faq', component: FaQuestionComponent },
        { path: 'privacy-policy', component: PrivacyPolicyComponent },
        { path: 'terms-use', component: TermsUseComponent },
        { path: 'terms-conditions', component: TermsConditionsComponent },
        { path: 'payment-policy', component: PaymentPolicyComponent },
        { path: 'about-us', component:AboutUsComponent },
        { path: '', redirectTo:'about-us', pathMatch:'full' }
    ]
    }
]

@NgModule({
    declarations: [
        AboutComponent,
        AboutUsContactComponent,
        FaQuestionComponent,
        PrivacyPolicyComponent,
        TermsUseComponent,
        TermsConditionsComponent,
        PaymentPolicyComponent,
        AboutUsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(accRouters)
    ]
})

export class AboutModule {}
