import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'body[app-root]',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //#region Properties

  //#endregion

  //#region Accessors

  //#endregion

  //#region Constructor

  public constructor(
    protected titleService: Title,
    protected translateService: TranslateService
  ) {
  }

  //#endregion

  //#region Methods

  public ngOnInit(): void {
    this.translateService.use('en-US');
    this.titleService.setTitle('CMS UI');
  }

  //#endregion
}
