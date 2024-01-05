import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IgxNavbarComponent, IgxNavbarActionDirective, IgxButtonDirective, IgxRippleDirective, IgxNavbarTitleDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        IgxNavbarComponent,
        IgxNavbarActionDirective,
        RouterLink,
        IgxButtonDirective,
        IgxRippleDirective,
        IgxNavbarTitleDirective,
        IgxIconComponent,
    ],
})
export class HeaderComponent {}
