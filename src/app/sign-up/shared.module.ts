import { NgModule } from '@angular/core';
import { LocationPickerComponent } from './location-picker/location-picker.component';
import { MapModalComponent } from './map-modal/map-modal.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// import { AgmCoreModule } from '@agm/core';
// import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [LocationPickerComponent, MapModalComponent],
    imports: [
        CommonModule,
        IonicModule,
        // AgmCoreModule.forRoot({
        //     apiKey: 'AIzaSyBjXaEBb57wWm4NE4cS0dtWykR9G-SgqRE',
        // }),
    ],
    exports: [LocationPickerComponent, MapModalComponent],
    entryComponents: [MapModalComponent]
})

export class SharedModule { }
