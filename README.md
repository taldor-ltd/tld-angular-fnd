# Taldor Angular Fnd

Shared Angular functionality to all Taldor developers.

# Install

```
npm install @taldor-ltd/tld-angular-fnd
```
<br/>
<br/>

# Extensions

## Usage
Add `TldExtensionsModule` to your module's 'imports'

## Array extension

|method|parameters|return value|description|
|-|-|-|-|
|containsElements()|-|boolean|Check if there are elements in the array|
|any|predicate|bollean|Check if there are elements in the array according to predicate conditions|
|firstOrDefault|predicate|object or null|Returns the first array's element according to predicate conditions. Returns `null` if none found|
|first|predicate|object|Returns the first array's element according to predicate conditions. Throws `error` if none found|
|sum|predicate|number|Returns the sum of the property selected in the predicate|
|where|predicate|object[]|Rturns all the elements according to predicate conditions|
|min|predicate|number|Returns the minimum value of the property selected in the predicate|
|max|predicate|number|Returns the maximum value of the property selected in the predicate|
|orderBy|predicate|object[]|Returns array order ascending by the property selected in the predicate|
|orderByDesc|predicate|object[]|Returns array order descending by the property selected in the predicate|
|average|predicate|number|Returns the average value of the property selected in the predicate|
|select|predicate|object[]|Returns array of all elements property selected in the predicate|
|groupBy|predicate|object[]|Returns array of [key, values[]] according to the property selected in the predicate|
|count|predicate|number|Returns the number of elements according to predicate conditions|
|take|number|object[]|Returns the top X elements of the array|
|split|predicate|[object[], object[]]|Returns array of elements according to predicate conditions and elements NOT according to predicate conditions|

## Function extension

|method|parameters|description|
|-|-|-|
|applyDelayed|(this, args[])|Invokes the function with `0` timeout delay|
|applyDelayedTimeout|(this,timeOutInMilliseconds args[])|Invokes the function with `timeOutInMilliseconds` timeout delay|

<br/>
<br/>
<br/>

# Directives

## Usage
Add `TldNgFormsModule` to your module's `imports`

This module includes:

### Israeli Id Validator

Forms Validator for checking input of TZ

#### Usage

* Add `tldIsraeliId` attribute to your `<input>`
	- Check always
	```` html
	<input tldIsraeliId>
	````
	- Conditional check
	```` html
	<input [tldIsraeliId]="someCondition === true">
	````

* Check `errors` of input's ngModel object for `israeliId` error

```` html
<input placeholder="מספר זהות" name="tz" #tz="ngModel" [(ngModel)]="myTz" tldIsraeliId>
<span *ngIf="(tz.errors && tz.errors.israeliId) && (tz.dirty || tz.touched)">ת.ז. לא תקינה</span>
````

### Email address Validator

Forms Validator for checking input of Email address

#### Usage

* Add `tldEmail` attribute to your `<input>`
	```` html
	<input tldEmail>
	````

* Check `errors` of input's ngModel object for `email` error

```` html
<input placeholder="Email Address" name="email" #email="ngModel" [(ngModel)]="myEmail" tldEmail>
<span *ngIf="(email.errors && email.errors.email) && (email.dirty || email.touched)">Invalid Email address</span>
````

## CSS class snippets:

## Usage
Configure at the styles section, as follow.
```
"styles": [
  //...
  "node_modules/@taldor-ltd/tld-angular-fnd/src/resources/tld-snippets.css",
  //...
],
```

Here are some examples for what each css snippet file contains.
For almost each example there are many more options with the same naming conventions.

### align
		
* ar (`text-align: right !important`;)
* va-middle (`vertical-align: middle !important;`)
* va-middle-children (`vertical-align: middle !important;`)
* j-c-c (`justify-content: center !important;`)

### border

* bl-1 border-left: 1px solid black !important;
* b (`order-black border: 1px solid black !important;`)
* n (`o-border-t border-top: unset !important;`)
### display

* dn (`display: none !important;`)
* db (`display: block !important;`)
* dif (`display: inline-flex !important;`)
* v-h (`visibility: hidden;`)

### flex system (can replace bootstrap grid-system, might need some work)

* flex-container (same as bootstrap row)
* flex-X (X = the size in percent of the column)

### fonts & text

* italic  (`font-style: italic !important;`)
* font-X (X = font size in pixels (limited to: 30, 36, 48) + lg (size = large))
* truncate-text (`{ white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }`)
* text-decoration-none (`text-decoration: none !important;`)

### colors

* opacity01 (`opacity: 0.1;`)
* bg-white (`background-color: #ffffff !important;`)
* png-white (`sets png color to white;`)

### position

* position-relative (`position: relative;`)
* pos-abs-center (`position: absolute;`)
* pos-unset (`position: unset !important;`)

### direction

* fl (`float: left !important;`)
* dir-rtl (`direction: rtl !important;`)
* clear-both (`clear: both !important;`)

### bootstrap columns as fraction

* col-1_X  (column 1/X available from 2 to 12)

### other

* overflow-auto (`overflow: auto;`)
* c-hand (`cursor: pointer !important;`)
		
### height

* h-X  (X height in pixels. range 0-980)
* min-h-X (X min-height in pixels. range 1-980)
* max-h-X (X max-height in pixels. range 1-1200)
* vh-X (X height in vh. range 1-100)
* min-vh-x (X min-height in vh. range 1-100)
* max-vh-x (X max-height in vh. range 1-100)
* lh-unset (`line-height: 0px !important;`)
* lh-X (X line-height in pixels. range 0-980)
* h-fit-content (`height: fit-content !important;`)
* h-auto

### width

* w-X (X width in pixels. range 0-1200)
* width-Xp (X width in percents. range 1-100)
* min-w-X (X min-width in pixels. range 1-1500)
* max-w-X (X max-width in pixels. range 1-1500)
		
### margin

* no-margin
* marginX (X margin in pixels. range 1-200)
* marginX-l (X margin-left in pixels. range 1-200)
* marginXminus (X minus margin. range -1 - -100)
* marginXminus-l (X minus margin-left. range -1 - -100)

### padding

* no-pad
* no-pad-right (no padding right)
* padX (X padding in pixels. range 1-250)
* padX-l (X padding-left in pixels. range 1-250)
* padX-tb (X padding-top & padding-bottom in pixels. range 1-250)
* padXminus (X minus padding in pixels. range -1 - -100)
* padXminus-l (X minus padding-left in pixels. range -1 - -100)
* pad-p-X (X percent padding. range 1-100)
* pad-p-X-l (X percent padding-left. range 1-100)
* right-minus-X (X minus right in pixels. range -1 - -200)
* right-X (X right in pixels. range 0-200)
* left-minus-X (X minus left in pixels. range -1 - -200)
* left-X (X left in pixels. range 0-200)
* t-X (X top in pixels. range 0-1200)
* b-X (X bottom in pixels. range 0-1200)