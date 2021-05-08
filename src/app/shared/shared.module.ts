import { CardHeaderComponent } from './components/card/card-header/card-header.component';
import { CardBodyComponent } from './components/card/card-body/card-body.component';
import { CardFooterComponent } from './components/card/card-footer/card-footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';

const components = [
  HeaderComponent,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  CardFooterComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ...components,
  ],
})
export class SharedModule {}
