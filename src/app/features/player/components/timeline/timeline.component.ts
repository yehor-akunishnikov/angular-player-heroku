import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent {
  @Input() currentTime: string = '00:00:00';
  @Input() duration: string = '00:00:00';
}
