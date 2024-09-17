import { Routes } from '@angular/router';

// Second routing, import components/modules
import { BindingMethodsComponent } from './binding/binding-methods/binding-methods.component';
import { IfForComponentComponent } from './template-syntax/if-for-component/if-for-component.component';

// Finally routing, define route details
export const routes: Routes = [
    {
        path: 'template',
        title: 'Template syntax if for',
        component: IfForComponentComponent,
    },
    {
        path: 'binding',
        title: 'Binding',
        component: BindingMethodsComponent
    }
];
