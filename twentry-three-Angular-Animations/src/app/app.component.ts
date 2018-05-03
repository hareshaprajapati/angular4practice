import {animate, Component, group, keyframes, state, style, transition, trigger} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
          'background-color': 'red',
          transform: 'translateX(0)'
        }
      )),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted=> normal', animate(800))
    ]),
    trigger('wildState', [
      state('normal', style({
          'background-color': 'red',
          transform: 'translateX(0) scale(1)'
        }
      )),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0px) scale(0.5) '
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted=> normal', animate(800)),
      /*transition('shrunken <=> *', animate(500,style({
        borderRadius : '50px'
      })))*/
      transition('shrunken <=> *', [
        style({
          backgroundColor: 'orange'
        }),
        animate(2000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])

    ]),
    trigger('list1', [
      state('in', style({
          opacity: '1',
          transform: 'translateX(0)'
        }
      )),
      transition('void => *', [
        style({
            opacity: '0',
            transform: 'translateX(-100px)',
            'border-color' : 'red'
          }
        ),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({
            opacity: '0',
            transform: 'translateX(100px)'
          }
        )),

      ]),
    ]),
    trigger('list2', [
      state('in', style({
          opacity: '1',
          transform: 'translateX(0)'
        }
      )),
      transition('void => *', animate(1000, keyframes([
          style({
              opacity: '0',
              offset: 0,
              transform: 'translateX(-100px)'
            }
          ),
          style({
              opacity: '0.5',
              offset: 0.3,
              transform: 'translateX(-50px)'
            }
          ),
          style({
              opacity: '0.7',
              offset: 0.8,
              transform: 'translateX(-20px)'
            }
          ),
          style({
              opacity: '1',
              offset: 1,
              transform: 'translateX(0px)'
            }
          )

        ]
        ))
      ),
      transition('* => void', [
        group(
          [
            animate(500, style({
              opacity: '1',
                color: 'red'
              }
            )),
            animate(1000, style({
                opacity: '0.5',
                transform: 'translateX(50px)'
              }
            )),
            animate(2000, style({
                opacity: '0',
                transform: 'translateX(100px)',
                'border-color' : 'yellow'
              }
            )),
          ]
        )

      ]),
    ])
  ]
})
export class AppComponent {

  list = ['a'];

  state = 'normal';
  wildState = 'normal';

  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken'
  }

  onAdd(value: string) {
    this.list.push(value);
  }
  onDelete(item: number) {
    this.list.splice(item, 1);
  }


  divStateStarted(event) {
    console.log(event);
  }

  divStateEnded(event) {
    console.log(event);
  }
}
