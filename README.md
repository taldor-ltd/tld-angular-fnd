# TldAngularFnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## CSS class snippets:

Here are some examples for what each css snippet file contains.
For almost each examle there are many more options with the same naming conventions.

'snippets.css'
	- 'align':
		- 'ar' text-align: right !important;
		- 'va-middle' vertical-align: middle !important;
		- 'va-middle-children' va-middle-children>* { vertical-align: middle !important; }
		- 'j-c-c' justify-content: center !important;
	- 'border':
		- 'bl-1' border-left: 1px solid black !important;
		- 'border-black' border: 1px solid black !important;
		- 'no-border-t' border-top: unset !important;
	- display:
		- 'dn' display: none !important;
		- 'db' display: block !important;
		- 'dif' display: inline-flex !important;
		- 'v-h' visibility: hidden;
	- 'flex system' (can replace bootstrap gridsystem, might need some work):
		- 'flex-container' same as bootstrap row
		- 'flex-X' X = the size in percent of the column
	- 'fonts & text':
		- 'italic' font-style: italic !important;
		- 'font-X' X = font size in pixels (limited to: 30, 36, 48) + lg (size = large)
		- 'truncate-text' { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
		- 'text-decoration-none' text-decoration: none !important;
	- 'colors':
		- 'opacity01' opacity: 0.1;
		- 'bg-white' background-color: #ffffff !important;
		- 'png-white' sets png color to white;
	- 'position':
		- 'position-relative' position: relative;
		- 'pos-abs-center'
		- 'pos-unset' position: unset !important;
	- 'direction':
		- 'fl' float: left !important;
		- 'dir-rtl' direction: rtl !important;
		- 'clear-both' clear: both !important;
	- 'bootstrap columns as fraction':
		- 'col-1_X' column 1/X available from 2 to 12
	- 'other':
		- 'overflow-auto'
		- 'c-hand' cursor: pointer !important;
		
		
'snippets-width-height.css'
	- 'height':
		- 'h-X' X height in pixels. range 0-980
		- 'min-h-X' X min-height in pixels. range 1-980
		- 'max-h-X' X max-height in pixels. range 1-1200
		- 'vh-X' X height in vh. range 1-100
		- 'min-vh-x' X min-height in vh. range 1-100
		- 'max-vh-x' X max-height in vh. range 1-100
		- 'lh-unset' line-height: 0px !important;
		- 'lh-X' X line-height in pixels. range 0-980
		- 'h-fit-content' height: fit-content !important;
		- 'h-auto'
	- 'width':
		- 'w-X' X width in pixels. range 0-1200
		- 'width-Xp' X width in percents. range 1-100
		- 'min-w-X' X min-width in pixels. range 1-1500
		- 'max-w-X' X max-width in pixels. range 1-1500
		
'snippets-padding-margin.css'
	- 'margin':
		- 'no-margin'
		- 'marginX' X margin in pixels. range 1-200
		- 'marginX-l' X margin-left in pixels. range 1-200
		- 'marginXminus' X minus margin. range -1 - -100
		- 'marginXminus-l' X minus margin-left. range -1 - -100
	- 'padding':
		- 'no-pad'
		- 'no-pad-right' no padding right
		- 'padX' X padding in pixels. range 1-250
		- 'padX-l' X padding-left in pixels. range 1-250
		- 'padX-tb' X padding-top & padding-bottom in pixels. range 1-250
		- 'padXminus' X minus padding in pixels. range -1 - -100
		- 'padXminus-l' X minus padding-left in pixels. range -1 - -100
		- 'pad-p-X' X percent padding. range 1-100
		- 'pad-p-X-l' X percent padding-left. range 1-100
		- 'right-minus-X' X minus right in pixels. range -1 - -200
		- 'right-X' X right in pixels. range 0-200
		- 'left-minus-X' X minus left in pixels. range -1 - -200
		- 'left-X' X left in pixels. range 0-200
		- 't-X' X top in pixels. range 0-1200
		- 'b-X' X bottom in pixels. range 0-1200