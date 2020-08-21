import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { GridService } from '../grid.service';

@Component({
  selector: 'app-nested-mat-expansion-panel',
  templateUrl: './nested-mat-expansion-panel.component.html',
  styleUrls: ['./nested-mat-expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NestedMatExpansionPanelComponent implements ICellRendererAngularComp, AfterViewInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  public params: ICellRendererParams;

  constructor(private el: ElementRef<HTMLElement>, private gs: GridService) {}

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  ngAfterViewInit(): void {
    // inside setTimeout because the accordion is not properly sized and it will be too big
    setTimeout(() => this.updateHeight());
  }

  updateHeight(): void {
    // inside setTimeout because the accordion is not properly sized and it will be too big
    setTimeout(() => {
      this.params.node.setRowHeight(this.el.nativeElement.offsetHeight);
      this.gs.updateHeight$.next();
    });
  }

  refresh(params: any): boolean {
    return false;
  }
}
