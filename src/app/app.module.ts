import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

/**
 * Ngrx Store : RxJS powered state management for Angular applications,
 * inspired by Redux 
 */ 
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { EffectsModule } from '@ngrx/effects';

/**
 * OverAll Reducer for all reducers in an app.
 */
import { reducer } from './reducers';

/**
 * Effects Modules
 */
import { QuoteEffects } from './effects/quote.effects';

/**
 * ALL Ngrx Actions that can be fired in app loaded as one.
 */
import actions from './actions';

/**
 * Quote Service to Hit Quote Api and otehr Quote Releated Actions
 */
import { QuoteService } from './services/quote.service';

import { AppComponent } from './containers';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentStore({
      monitor: useLogMonitor({
        visible: true,
        position: 'right'
      })
    }),
    StoreLogMonitorModule,
    EffectsModule.run(QuoteEffects)
  ],
  providers: [
    actions,
    QuoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
